import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductSection = ({ filters }) => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('grid');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('https://fakestoreapi.com/products')
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

    return categoryMatch && priceMatch;
  });

  // Helper function to display stars based on rating
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <i
          key={i}
          className={`pi ${i < filledStars ? 'pi-star-fill text-yellow-500' : 'pi-star text-gray-400'}`}
        ></i>
      );
    }

    return stars;
  };

  return (
    <div className="w-full lg:w-3/4 p-4">
      <div className="flex justify-between mb-4">
        {/* View Option Buttons */}
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
                <p className="text-red-500 font-semibold mt-2">${product.price}</p>
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
                  <p className="text-red-500">${product.price}</p>
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
