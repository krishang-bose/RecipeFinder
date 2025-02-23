import React, { useState } from "react";
import MapComponent from "./MapComponent";

const categories = ["Grocery Stores", "Dairy Shops", "Restaurants", "Cafes"];

const Map = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-lime-100 relative overflow-hidden">
      <div className="flex h-screen">
        <div className="w-1/3 p-6 flex flex-col items-center mt-30">
          <h2 className="text-center font-bold text-4xl mb-8">
            Find what you <span className="text-green-500">need</span> right where you are
          </h2>

          <div className="relative w-3/4">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-gradient-to-r from-green-400 to-blue-400 text-white py-2 px-5 rounded-lg w-full font-bold text-lg"
            >
              {selectedOption || "Select an option"}
            </button>
            {dropdownOpen && (
              <div className="absolute w-full bg-white rounded-lg shadow-md mt-2">
                {categories.map((option) => (
                  <p
                    key={option}
                    onClick={() => {
                      setSelectedOption(option);
                      setDropdownOpen(false);
                    }}
                    className="px-6 py-2 hover:bg-gray-200 cursor-pointer text-center text-lg"
                  >
                    {option}
                  </p>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (selectedOption) {
                setSearchQuery(selectedOption);
              } else {
                alert("Please select a category first!");
              }
            }}
            className="mt-4 bg-gradient-to-r from-green-400 to-blue-400 text-white py-2 px-5 rounded-lg font-bold w-3/4 text-lg"
          >
            Search
          </button>
        </div>

        <div className="w-2/3 p-6">
          <MapComponent searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default Map;
