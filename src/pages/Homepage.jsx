import React, { useState } from 'react';
import { FilterSection, ProductSection } from '../components'

const Homepage = () => {
  const [maxPrice, setMaxPrice] = useState(500);

  const handleFilterChange = (filters) => {
    // Apply filtering logic using the selected filters
  };

  return (
    <div className="flex max-w-7xl mx-auto">
      <FilterSection maxPrice={maxPrice} handleFilterChange={handleFilterChange} />
      <ProductSection />
    </div>
  );
};

export default Homepage;
