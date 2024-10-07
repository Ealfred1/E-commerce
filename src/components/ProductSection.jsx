import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('grid');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    fetchProducts();
  }, [sortOption]);

  const fetchProducts = () => {
    let endpoint = 'https://fakestoreapi.com/products';

    if (sortOption === 'price') {
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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="w-full lg:w-3/4 p-4">
      {/* Sort and View Options */}
      <div className="flex justify-between mb-4">
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border p-2"
        >
          <option value="default">Default sorting</option>
          <option value="price">Sort by price</option>
        </select>
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
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            {view === 'grid' ? (
              <div className="text-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="font-bold mt-2">{product.title}</h3>
                <p className="text-red-500">${product.price}</p>
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
