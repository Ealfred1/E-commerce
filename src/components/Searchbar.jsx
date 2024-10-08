import React, { useState } from 'react';
import { useFilter } from '../context/FilterContext';  // Import the context

const Searchbar = () => {
  const { filters, setFilters } = useFilter();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);  // For mobile search bar

  const handleSearch = () => {
    setFilters({
      ...filters,
      searchQuery: searchQuery,
    });
    setIsSearchOpen(false); // Close search bar on mobile after searching
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);  // Toggle search bar visibility
  };

  return (
    <>
      {/* Desktop & Tablet Nav */}
      <nav className="bg-primary py-1 sticky top-0 z-[30]">
        <div className="max-w-7xl flex items-center justify-between py-2 mx-auto px-4">
          <button className="bg-black text-secondary rounded-lg h-12 w-32 lg:w-[15%] py-1 text-xs px-1 lg:text-sm">
            <i className="pi pi-bars"></i> All categories
          </button>

          {/* Search bar for tablet and desktop */}
          <div className="hidden lg:flex w-[50%] border border-grayDark h-12 rounded-lg">
            <button className="w-[25%] bg-white border-r border-r-grayDark text-sm flex items-center justify-center gap-3">
              All Category <i className="pi pi-chevron-down"></i>
            </button>
            <input
              type="text"
              className="w-[55%] border-l border-l-grayDark px-4 text-sm outline-none"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-black text-secondary rounded-r-lg outline-none w-[20%] text-sm"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="text-white text-2xl flex gap-1 lg:gap-5">
            <button className="hover:scale-[1.2] transition-all duration-200 flex items-center flex-col relative">
              <p><i className="pi pi-heart text-xs lg:text-lg"></i></p>
              <p className="text-[10px] lg:text-[11px] -mt-3">Wish List</p>
              <span className="top-dot">6</span>
            </button>

            <button className="hover:scale-[1.2] transition-all duration-200 flex items-center flex-col relative">
              <p><i className="pi pi-cart-plus text-xs lg:text-lg"></i></p> 
              <p className="text-[10px] lg:text-[11px] -mt-3">Cart</p>
              <span className="top-dot translate-x-2">8</span>
            </button>

            {/* Search icon for mobile */}
            <button className="lg:hidden hover:scale-[1.2] transition-all duration-200 flex items-center flex-col relative" onClick={toggleSearchBar}>
              <p><i className="pi pi-search text-xs lg:text-lg"></i></p>
              <p className="text-[10px] lg:text-[11px] -mt-3">Search</p>
            </button>

            <button className="hover:scale-[1.2] transition-all duration-200 flex items-center flex-col">
              <p><i className="pi pi-user text-xs lg:text-lg"></i></p>
              <p className="text-[10px] lg:text-[11px] -mt-3">Account</p>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile search popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="w-[90%] bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-lg text-sm"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="ml-2 bg-primary text-white px-4 py-2 rounded-lg"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsSearchOpen(false)}
            >
              <i className="pi pi-times text-2xl"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
