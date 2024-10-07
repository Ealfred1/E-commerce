import React, { useState, useEffect } from 'react';
import { FilterSection, ProductSection } from '../components/'
import axios from 'axios';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 0],
    maxPrice: 0,
  });

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
    <div className="flex max-w-7xl mx-auto">
      <FilterSection products={products} filters={filters} setFilters={setFilters} />
      <ProductSection filters={filters} />
    </div>
  );
};

export default Homepage;
