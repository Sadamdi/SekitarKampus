import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari UMKM... (contoh: bakso, kopi, fotocopy)"
          className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-custom-primary dark:focus:border-custom-accent focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 shadow-md focus:shadow-lg"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      {searchQuery && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
          Mencari: "<span className="font-semibold">{searchQuery}</span>"
        </p>
      )}
    </div>
  );
};

export default SearchBar;

