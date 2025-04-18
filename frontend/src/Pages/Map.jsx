import { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Search, ChevronDown, MapPin, Loader2 } from 'lucide-react';
import L from 'leaflet';
import toast, { Toaster } from 'react-hot-toast';

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom marker icon
const customIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41]
});

// Interfaces and types
const categories = [
  // None
  { id: 'none', name: 'None', tag: '' },
  // Food & Drink
  { id: 'restaurant', name: 'Restaurants', tag: 'catering.restaurant' },
  { id: 'fast_food', name: 'Fast Food', tag: 'catering.fast_food' },
  { id: 'cafe', name: 'Cafes', tag: 'catering.cafe' },
  { id: 'bar', name: 'Bars', tag: 'catering.bar' },
  { id: 'pub', name: 'Pubs', tag: 'catering.pub' },
  { id: 'food_court', name: 'Food Courts', tag: 'catering.food_court' },
  { id: 'ice_cream', name: 'Ice Cream Shops', tag: 'catering.ice_cream' },
  { id: 'bakery', name: 'Bakeries', tag: 'catering.bakery' },

  // Emergency Services
  { id: 'hospital', name: 'Hospitals', tag: 'healthcare.hospital' },
  { id: 'clinic', name: 'Clinics', tag: 'healthcare.clinic' },
  { id: 'pharmacy', name: 'Pharmacies', tag: 'healthcare.pharmacy' },
  { id: 'police', name: 'Police Stations', tag: 'emergency.police' },
  { id: 'fire_station', name: 'Fire Stations', tag: 'emergency.fire_station' },

  // Services
  { id: 'bank', name: 'Banks', tag: 'financial.bank' },
  { id: 'atm', name: 'ATMs', tag: 'financial.atm' },
  { id: 'post_office', name: 'Post Offices', tag: 'service.post_office' },
  { id: 'fuel', name: 'Fuel Stations', tag: 'service.fuel' },
  { id: 'car_repair', name: 'Car Repair', tag: 'service.car_repair' },
  { id: 'car_rental', name: 'Car Rental', tag: 'service.car_rental' },
  { id: 'toilets', name: 'Public Toilets', tag: 'service.toilets' },
  { id: 'recycling', name: 'Recycling Centers', tag: 'service.recycling' }
];


// Component to update map view when coordinates change
const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const Map = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default: London
  const [zoom, setZoom] = useState(13);
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Get user's location on component mount
  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      toast('Geolocation is not supported by your browser');
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({
          lat: latitude,
          lon: longitude,
        });
        setMapCenter([latitude, longitude]);
        setIsLoading(false);

        if (!navigator.geolocation) {
          alert('Geolocation not supported by your browser');
        }
        
        if (error.code === error.PERMISSION_DENIED) {
          console.warn("User denied the request for Geolocation.");
        }
        

        if (!userLocation || !userLocation.lat || !userLocation.lon) {
          toast('User location not available yet. Please wait or reload the page.');
          return;
        }        
        
        // Reverse geocode to get user's location name
        fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            if (data.features && data.features.length > 0) {
              setUserLocation(prev => prev ? {
                ...prev,
                display_name: data.features[0].properties.formatted
              } : null);
            }
          })
          .catch(error => console.error('Error fetching location name:', error));
          console.log('User location:', userLocation);

      },
      (error) => {
        setIsLoading(false);
        toast('Error getting your location. Please try again.');
        console.error('Error getting user location:', error);
      }
    );
  };

  const searchNearbyPlaces = async () => {
    if (!userLocation || !userLocation.lat || !userLocation.lon) {
      toast('Please allow location access to search nearby places');
      return;
    }
  
    setIsLoading(true);
    setSearchPerformed(true);
  
    try {
      const categoryTag = selectedCategory ? 
        categories.find(c => c.id === selectedCategory)?.tag : 'commercial';
  
      const query = searchQuery.trim();
  
      const { lat, lon } = userLocation;
      const radius = 50000;
  
      const baseUrl = 'https://api.geoapify.com/v2/places';
      const params = new URLSearchParams({
        categories: categoryTag,
        filter: `circle:${lon},${lat},${radius}`,
        bias: `proximity:${lon},${lat}`,
        limit: '20',
        apiKey: import.meta.env.VITE_GEOAPIFY_API_KEY,
      });
  
      if (query) {
        params.append('name', query);
      }
  
      const searchUrl = `${baseUrl}?${params.toString()}`;
      console.log('Requesting:', searchUrl); // Debug URL
  
      const response = await fetch(searchUrl);
      const data = await response.json();
      
      if (data.features && data.features.length > 0) {
        const foundPlaces = data.features.map((feature) => {
          const props = feature.properties;
          return {
            lat: feature.geometry.coordinates[1],
            lon: feature.geometry.coordinates[0],
            name: props.name || 'Unnamed location',
            display_name: props.formatted || props.address_line1 || 'Unknown location',
            category: props.category || categoryTag || ''
          };
        });
        
        setPlaces(foundPlaces);
        
        // Center map on first result if we have results
        if (foundPlaces.length > 0) {
          setMapCenter([foundPlaces[0].lat, foundPlaces[0].lon]);
        }
        
        toast(`Found ${foundPlaces.length} places near you`);
      } else {
        setPlaces([]);
        toast('No places found for your search criteria');
      }
    } catch (error) {
      console.error('Error searching for places:', error);
      toast('Failed to search for places. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    searchNearbyPlaces();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-br from-[#f9fae6] via-[#e3f1d4] to-[#f2f9c0]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f9fae6]/10 via-[#e3f1d4]/20 to-[#f2f9c0]/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(227,241,212,0.08),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(242,249,192,0.08),transparent_40%)]"></div>
      </div>




      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 p-6">
        {/* Left Section */}
        <div className="lg:w-1/3 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Find what you need,<br />right where you are
            </h1>
            <p className="text-gray-600">
              Discover nearby stores, restaurants, and services with just a few clicks.
            </p>
            
            {userLocation && userLocation.display_name && (
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-1 text-green-500" />
                <span>Current location: {userLocation.display_name}</span>
              </div>
            )}
          </div>

          {/* Search Controls */}
          <div className="space-y-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all outline-none"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white flex items-center justify-between hover:border-green-300 transition-all"
              >
                <span className="text-gray-700">
                  {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'Select Category'}
                </span>
                <ChevronDown size={20} className="text-gray-400" />
              </button>

              {isDropdownOpen && (
                <div className="absolute w-full mt-2 bg-white border border-gray-100 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-green-50 text-gray-700 transition-colors"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search size={20} />
                  Search Nearby
                </>
              )}
            </button>
          </div>

          {/* Search Results Summary */}
          {searchPerformed && !isLoading && (
            <div className="mt-6">
              <h3 className="font-medium text-gray-800">
                {places.length > 0 
                  ? `Found ${places.length} places near you` 
                  : 'No places found matching your criteria'}
              </h3>
              {places.length > 0 && (
                <ul className="mt-3 space-y-2 max-h-[300px] overflow-y-auto pr-2">
                  {places.map((place, index) => (
                    <li 
                      key={index}
                      className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-green-300 transition-colors cursor-pointer"
                      onClick={() => setMapCenter([place.lat, place.lon])}
                    >
                      <h4 className="font-medium text-gray-800">{place.name}</h4>
                      <p className="text-sm text-gray-600">{place.display_name}</p>
                      {place.category && (
                        <span className="inline-block mt-1 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                          {place.category}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Right Section - Map */}
        <div className="lg:w-2/3 h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl relative">
          {/* Map Container */}
          <div style={{ height: '100%', width: '100%' }} className="z-0">
            <MapContainer 
              center={mapCenter} 
              zoom={zoom} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <ChangeView center={mapCenter} />
              
              {/* User location marker */}
              {userLocation && (
                <Marker 
                  position={[userLocation.lat, userLocation.lon]}
                >
                  <Popup>
                    <div>
                      <strong>Your Location</strong>
                      <p>{userLocation.display_name || 'Current position'}</p>
                    </div>
                  </Popup>
                </Marker>
              )}
              
              {/* Place markers */}
              {places.map((place, index) => (
                <Marker 
                  key={index}
                  position={[place.lat, place.lon]}
                >
                  <Popup>
                    <div>
                      <strong>{place.name}</strong>
                      <p>{place.display_name}</p>
                      {place.category && <p className="text-xs text-gray-600">{place.category}</p>}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          
          {/* Loading overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <Loader2 className="h-12 w-12 text-green-500 animate-spin" />
                <p className="mt-2 text-green-800 font-medium">Loading map data...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;
