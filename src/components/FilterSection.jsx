import React, { useState } from 'react';

const FilterSection = ({ maxPrice, handleFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, maxPrice]);

  const handlePriceChange = (e) => {
    setPriceRange([e.target.value[0], e.target.value[1]]);
    handleFilterChange({ priceRange });
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100">
      {/* Categories */}
      <div>
        <h3 className="font-bold mb-2">Categories</h3>
        {['Women', 'Men', 'Shoes', 'Computer'].map((category) => (
          <label key={category} className="block mb-1">
            <input
              type="checkbox"
              name="category"
              value={category}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </div>

      {/* Brands */}
      <div className="mt-4">
        <h3 className="font-bold mb-2">Brands</h3>
        {['Adidas', 'Nike', 'Easy', 'Arong'].map((brand) => (
          <label key={brand} className="block mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              className="mr-2"
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mt-4">
        <h3 className="font-bold mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max={maxPrice}
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full"
        />
        <p className="mt-1">
          ${priceRange[0]} - ${priceRange[1]}
        </p>
      </div>

      {/* Size */}
      <div className="mt-4">
        <h3 className="font-bold mb-2">Size</h3>
        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
          <label key={size} className="mr-3">
            <input
              type="radio"
              name="size"
              value={size}
              className="mr-2"
            />
            {size}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
