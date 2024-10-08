import React, { useState, useEffect } from 'react';

const FilterSection = ({ products, filters, setFilters, isMobileVisible, onClose }) => {
  const [priceRange, setPriceRange] = useState([0, filters.maxPrice]);

  // Calculate the maximum price from the fetched products
  const maxPrice = Math.max(...products.map(product => product.price));

  // Unique categories from the products with item count
  const categories = [...new Set(products.map(product => product.category))].map(category => ({
    name: category,
    count: products.filter(product => product.category === category).length,
  }));

  // Hardcoded brands
  const brands = ['Adidas', 'Nike', 'Easy', 'Arong'];

  // Hardcoded sizes
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];

    setFilters({ ...filters, categories: updatedCategories });
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    const updatedBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];

    setFilters({ ...filters, brands: updatedBrands });
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    const updatedSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];

    setFilters({ ...filters, sizes: updatedSizes });
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
    setFilters({ ...filters, priceRange: [0, value] });
  };

  return (
    <>
    {/* Overlay for mobile */}
      {isMobileVisible && <div className="fixed inset-0 bg-black opacity-50 z-20" onClick={onClose}></div>}

    <div className={`w-[70%] h-screen pb-96 lg:w-1/4 p-4 bg-white shadow-lg z-30 transform ${isMobileVisible ? 'translate-x-0' : '-translate-x-[200%]'} transition-transform duration-300 fixed lg:static lg:translate-x-0 h-full`}>
      {/* Categories */}
      <div className="w-full relative">
        <h3 className="font-bold mb-2 uppercase text-lg text-grayDark">Categories</h3>
        {categories.map((category) => (
          <label key={category.name} className="block mb-1 text-black flex items-center">
            <input
              type="checkbox"
              value={category.name}
              checked={filters.categories.includes(category.name)}
              onChange={handleCategoryChange}
              className="mr-2 accent-primary"
            />
            {category.name
              .replace("men's clothing", "Men")
              .replace("women's clothing", "Women")
              .replace(/\b([a-z])/g, char => char.toUpperCase()) // Properly capitalize first letters
            } <p className="absolute right-3"> ({category.count})</p>
          </label> 
        ))}
      </div>

      {/* Brands */}
      <div className="mt-4">
        <h3 className="font-bold mb-2 uppercase text-lg text-grayDark">Brands</h3>
        {brands.map((brand) => (
          <label key={brand} className="block mb-1 text-black">
            <input
              type="checkbox"
              value={brand}
              onChange={handleBrandChange}
              className="mr-2 accent-primary"
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Sizes */}
      <div className="mt-4">
        <h3 className="font-bold mb-2 uppercase text-lg text-grayDark">Sizes</h3>
        {sizes.map((size) => (
          <label key={size} className="block mb-1 text-black">
            <input
              type="checkbox"
              value={size}
              onChange={handleSizeChange}
              className="mr-2 accent-primary"
            />
            {size.toUpperCase()}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mt-4">
        <h3 className="font-bold mb-2 uppercase text-lg text-grayDark">Price</h3>
        <input
          type="range"
          min="0"
          max={maxPrice}  // Dynamically set the max price
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full accent-primary"
        />
        <p className="mt-1">${priceRange[0]} - ${priceRange[1]}</p>
      </div>
    </div>
    </>
  );
};

export default FilterSection;
