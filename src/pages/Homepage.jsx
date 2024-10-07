import React, { useState } from 'react';
import { FilterSection } from './components

const Homepage = () => {
  const [maxPrice, setMaxPrice] = useState(500);

  const handleFilterChange = (filters) => {
    // Apply filtering logic using the selected filters
  };

  return (
    <div className="flex">
      <FilterSection maxPrice={maxPrice} handleFilterChange={handleFilterChange} />
      <ProductSection />
    </div>
  );
};

export default Homepage;
