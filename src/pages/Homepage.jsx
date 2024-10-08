import React, { useState, useEffect } from 'react';
import { FilterSection, ProductSection } from '../components/';
import axios from 'axios';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 0],
    maxPrice: 0,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to control filter visibility

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const allProducts = response.data;
        setProducts(allProducts);

        // Set max price dynamically based on the product with the highest price
        const maxPrice = Math.max(...allProducts.map(product => product.price));
        setFilters(prev => ({ ...prev, maxPrice, priceRange: [0, maxPrice] }));
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="relative flex max-w-7xl mx-auto">
      {/* Filter section for desktop, and hidden by default on mobile */}
      <FilterSection 
        products={products} 
        filters={filters} 
        setFilters={setFilters} 
        isMobileVisible={isFilterOpen} // Pass mobile visibility state
        onClose={() => setIsFilterOpen(false)} // Close filter on outside click
      />
      <ProductSection 
        filters={filters} 
        onToggleFilter={() => setIsFilterOpen(true)} // Pass toggle function to ProductSection
      />
    </div>
  );
};

export default Homepage;
