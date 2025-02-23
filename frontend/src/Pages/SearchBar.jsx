import { useState } from 'react';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    cuisine: [],
    course: [],
    tags: [],
  });

  // Dummy filter options
  const filterOptions = {
    cuisine: ['North Indian', 'South Indian', 'Mexican'],
    course: ['Main Course', 'Side Dish'],
    tags: ['Breakfast', 'Vegetarian', 'Lunch', 'Dinner'],
  };

  const handleSearch = async () => {
    try {

      console.log('123')
      const BASE_URL = import.meta.env.VITE_APP_API_URL;
      const url = `${BASE_URL}/api/recipes/search?query=${query}`;
    //  alert(url);
      const response = await fetch(url);

      
      
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {``
        const text = await response.text();
        throw new Error(`Unexpected response: ${text}`);
      }

  
      const data = await response.json();

      console.log(data);
      if(response.ok)
     { setResults(data);} else{
      setResults(null)
     }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle search logic here
    //console.log(`Searching for ${searchTerm}...`);
  }

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };

  return (
    <div className="flex p-4">
      {/* Filters Sidebar */}
      <div className="w-1/4 pr-4">
        <h3 className="font-bold mb-4">Filters</h3>

        {/* Dynamically generate filters */}
        {Object.entries(filterOptions).map(([filterType, options]) => (
          <div key={filterType} className="mb-4">
            <h4 className="font-semibold mb-2 capitalize">{filterType}</h4>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleFilterChange(filterType, option)}
                className={`block w-full p-2 mb-2 text-left rounded ${
                  filters[filterType].includes(option)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Search and Results Section */}
      <div className="w-3/4">
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for recipes..."
            className="p-2 border rounded"
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded" onClick={handleSearch}>
            Search
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {!results && <div>no data</div>}
          {results && results.map((recipe, index) => (
            <div key={index} className="border p-4 rounded">
              <h3 className="font-bold">{recipe.RecipeName}</h3>
              <p>{recipe.Ingredients}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch;