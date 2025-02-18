import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaLocationDot } from "react-icons/fa6";
import { renderToString } from "react-dom/server"; // Convert React icon to HTML

const MapComponent = ({ searchQuery }) => {
  const [position, setPosition] = useState(null); // Default: No location until fetched
  const [locations, setLocations] = useState([]);

  // ✅ Get User Location (Fixed)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLocation = [pos.coords.latitude, pos.coords.longitude];
        setPosition(userLocation);
      },
      () => alert("Could not fetch location"),
      { enableHighAccuracy: true } // Ensures more precise location
    );
  }, []);

  // ✅ Fetch Locations Based on Search Query
  useEffect(() => {
    if (!searchQuery || !position) return;

    const query = searchQuery.replace(" ", "+");
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}&lat=${position[0]}&lon=${position[1]}`
    )
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, [searchQuery, position]);

  // ✅ Create a custom user location icon using React Icons
  const userIcon = new L.DivIcon({
    className: "custom-icon",
    html: renderToString(<FaLocationDot size={32} color="red" />),
    iconSize: [32, 32], // Adjust the size
  });

  return (
    <MapContainer
      center={position || [28.6139, 77.209]} // Use Delhi if no location yet
      zoom={14}
      className="h-full w-full rounded-lg shadow-md"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* ✅ Show User Location Marker only when it's available */}
      {position && (
        <Marker position={position} icon={userIcon}>
          <Popup>You are here</Popup>
        </Marker>
      )}

      {/* ✅ Search Result Markers */}
      {locations.map((place, index) => (
        <Marker
          key={index}
          position={[parseFloat(place.lat), parseFloat(place.lon)]}
          icon={L.icon({
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/RedDot.svg",
            iconSize: [20, 20],
          })}
        >
          <Popup>{place.display_name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;