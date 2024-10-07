import React, { createContext, useState, useContext } from 'react';

// Create context
const FilterContext = createContext();

// Custom hook to use FilterContext
export const useFilter = () => useContext(FilterContext);

// Provider component
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 1000], // Default price range
    searchQuery: '',
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
