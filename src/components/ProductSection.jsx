import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFilter } from '../context/FilterContext';

const ProductSection = ({ filters }) => {
  const { filters: contextFilters } = useFilter();
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('grid');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    fetchProducts();
  }, [sortOption]);


  const fetchProducts = () => {
    let endpoint = 'https://fakestoreapi.com/products';

    if (sortOption === 'descending') {
      endpoint = 'https://fakestoreapi.com/products?sort=desc'; // Sorting by price
    }

    axios.get(endpoint)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

    const filteredProducts = products.filter(product => {
    // Filter by category
    const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);

    // Filter by price range
    const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

     const searchQueryMatch = product.title.toLowerCase().includes(contextFilters.searchQuery.toLowerCase());


    return categoryMatch && priceMatch && searchQueryMatch;
  });


  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Helper function to display stars based on rating
  const renderStars = (rating) => {
    const totalStars = 5; // Assuming the max rating is 5
    const filledStars = Math.round(rating);
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <i
          key={i}
          className={`pi tracking-widest ${i < filledStars ? 'pi-star-fill text-yellow-500' : 'pi-star text-gray-400'}`}
        ></i>
      );
    }

    return stars;
  };

  return (
    <div className="w-full lg:w-3/4 p-4">
      {/* Sort and View Options */}
      <div className="flex justify-between mb-4">
        <div className="border p-2 bg-transparent">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border-none cursor-pointer outline-none bg-transparent"
          >
            <option value="default">Default sorting</option>
            <option value="descending">Descending Order</option>
          </select>
        </div>
        <div>
          <button
            onClick={() => setView('grid')}
            className={`p-2 mr-2 w-10 h-10 border ${view === 'grid' ? 'bg-primary text-white' : ''}`}
          >
            <i className="pi pi-th-large"></i>
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 w-10 h-10 border ${view === 'list' ? 'bg-primary text-white' : ''}`}
          >
            <i className="pi pi-list"></i>
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className={view === 'grid' 
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' 
        : 'flex flex-col gap-4'
      }>
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            {view === 'grid' ? (
              <div className="text-left">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="font-bold text-sm mt-2">{product.title}</h3>
                <p className="text-red-500 font-semibold mt-2">${product.price} <span className="line-through ml-4 text-grayDark">$55.45</span></p>
                {/* Display Rating */}
                <div className="flex gap-2 mt-2">
                  {renderStars(product.rating.rate)}
                  <span className="ml-2">({product.rating.count})</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-32 h-32 object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">{product.title}</h3>
                  <p className="text-red-500">${product.price} <span className="line-through ml-4 text-grayDark">$55.45</span></p>
                  {/* Display Rating */}
                  <div className="flex items-center">
                    {renderStars(product.rating.rate)}
                    <span className="ml-2">({product.rating.count})</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;