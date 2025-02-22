import { useState } from "react";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <motion.div
      className="flex items-center bg-white rounded-2xl shadow-lg p-3 w-full max-w-lg"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        placeholder="Search recipes by name or ingredient..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="flex-grow px-4 py-2 rounded-l-2xl outline-none text-gray-700 placeholder-gray-400"
      />
      <button
        onClick={handleSearch}
        className="p-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-md hover:scale-110 transition-transform"
      >
        <FiSearch size={20} />
      </button>
    </motion.div>
  );
};
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
