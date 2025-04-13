import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    cuisine: [],
    course: [],
    tags: [],
  });
  const [gradientProgress, setGradientProgress] = useState(0);

  const filterOptions = {
    cuisine: ['North Indian', 'South Indian', 'Mexican'],
    course: ['Main Course', 'Side Dish'],
    tags: ['Breakfast', 'Vegetarian', 'Lunch', 'Dinner'],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientProgress(prev => {
        const newValue = prev + 0.1;
        return newValue > 100 ? 0 : newValue;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const getGradientStyle = () => {
    return {
      background: `linear-gradient(135deg, 
        rgba(249, 250, 230, ${1 - gradientProgress/100}) 0%, 
        rgba(227, 241, 212, ${1 - gradientProgress/150}) 35%, 
        rgba(237, 248, 217, ${1 - gradientProgress/200}) 70%, 
        rgba(242, 249, 192, ${1 - gradientProgress/100}) 100%)`,
      transition: 'background 4s ease-in-out'
    };
  };

  const handleSearch = async () => {
    try {
      const BASE_URL = import.meta.env.VITE_APP_API_URL;
      console.log("BASE_URL", BASE_URL);
      const url = `${BASE_URL}/api/recipes/search?query=${query}`;
      const response = await fetch(url);
      
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(`Unexpected response: ${text}`);
      }

      const data = await response.json();
      if(response.ok) {
        setResults(data);
      } else {
        setResults(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };

  const clearFilters = (type) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: [],
    }));
  };

  return (
    <div className="min-h-screen" style={getGradientStyle()}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Recipe Explorer</h1>
          <p className="text-gray-700">Discover delicious recipes from around the world</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="md:w-1/4 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Filter size={20} />
                Filters
              </h3>
            </div>

            {Object.entries(filterOptions).map(([filterType, options]) => (
              <div key={filterType} className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-800 capitalize">{filterType}</h4>
                  {filters[filterType].length > 0 && (
                    <button
                      onClick={() => clearFilters(filterType)}
                      className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1"
                    >
                      <X size={14} />
                      Clear
                    </button>
                  )}
                </div>
                <div className="space-y-2">
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleFilterChange(filterType, option)}
                      className={`w-full px-4 py-2 rounded-lg transition-all text-left ${
                        filters[filterType].includes(option)
                          ? 'bg-emerald-600 text-white shadow-md hover:bg-emerald-700'
                          : 'bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/70'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Search and Results Section */}
          <div className="md:w-3/4">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for recipes..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:outline-none bg-white"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
                >
                  Search
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {!results && (
                <div className="col-span-full text-center py-8 text-gray-700">
                  No recipes found. Try adjusting your search!
                </div>
              )}
              {results && results.map((recipe, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="bg-emerald-600 h-1" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{recipe.RecipeName}</h3>
                    <p className="text-gray-600 text-sm">{recipe.Ingredients}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch;