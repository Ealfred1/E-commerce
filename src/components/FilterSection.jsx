import React, { useState, useEffect } from 'react';

const FilterSection = ({ products, filters, setFilters }) => {
  const [priceRange, setPriceRange] = useState([0, filters.maxPrice]);

  const categories = [...new Set(products.map(product => product.category))];

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];

    setFilters({ ...filters, categories: updatedCategories });
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
    setFilters({ ...filters, priceRange: [0, value] });
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100">
      {/* Categories */}
      <div>
        <h3 className="font-bold mb-2">Categories</h3>
        {categories.map((category) => (
          <label key={category} className="block mb-1">
            <input
              type="checkbox"
              value={category}
              checked={filters.categories.includes(category)}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            {category.replace("men's clothing", "Men").replace("women's clothing", "Women")}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mt-4">
        <h3 className="font-bold mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max={filters.maxPrice}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full"
        />
        <p className="mt-1">${priceRange[0]} - ${priceRange[1]}</p>
      </div>
    </div>
  );
};

export default FilterSection;
