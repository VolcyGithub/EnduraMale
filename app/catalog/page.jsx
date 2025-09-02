"use client"
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaList, FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { BsImage } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const CatalogPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState(new Set());

  const categories = [
    'All Products',
    'Testosterone Boosters',
    'Pre-Workout',
    'Protein Supplements',
    'Fat Burners',
    'Multivitamins',
    'Recovery & Sleep',
    'Muscle Builders'
  ];

  const products = [
    {
      id: 1,
      name: 'TestoMax Pro',
      category: 'Testosterone Boosters',
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.8,
      reviews: 324,
      badge: 'Best Seller',
      description: 'Natural testosterone booster with D-Aspartic acid and Zinc',
      inStock: true
    },
    {
      id: 2,
      name: 'Alpha Pump Pre-Workout',
      category: 'Pre-Workout',
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.6,
      reviews: 187,
      badge: 'New',
      description: 'High-stimulant pre-workout for intense training sessions',
      inStock: true
    },
    {
      id: 3,
      name: 'Whey Protein Isolate',
      category: 'Protein Supplements',
      price: 69.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 542,
      badge: null,
      description: '25g pure whey protein per serving, fast absorption',
      inStock: true
    },
    {
      id: 4,
      name: 'Fat Burn Extreme',
      category: 'Fat Burners',
      price: 44.99,
      originalPrice: 59.99,
      rating: 4.3,
      reviews: 156,
      badge: 'Sale',
      description: 'Thermogenic fat burner with green tea extract',
      inStock: false
    },
    {
      id: 5,
      name: 'Men\'s Daily Multi',
      category: 'Multivitamins',
      price: 29.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 289,
      badge: null,
      description: 'Complete multivitamin formula designed for active men',
      inStock: true
    },
    {
      id: 6,
      name: 'Sleep & Recovery',
      category: 'Recovery & Sleep',
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.5,
      reviews: 203,
      badge: null,
      description: 'Promotes deep sleep and muscle recovery',
      inStock: true
    },
    {
      id: 7,
      name: 'Creatine Monohydrate',
      category: 'Muscle Builders',
      price: 24.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 412,
      badge: 'Top Rated',
      description: 'Pure creatine monohydrate for strength and power',
      inStock: true
    },
    {
      id: 8,
      name: 'Nitric Oxide Booster',
      category: 'Pre-Workout',
      price: 49.99,
      originalPrice: 64.99,
      rating: 4.4,
      reviews: 178,
      badge: null,
      description: 'Enhances blood flow and muscle pumps',
      inStock: true
    }
  ];

  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best Seller': return 'bg-yellow-500';
      case 'New': return 'bg-green-500';
      case 'Sale': return 'bg-red-500';
      case 'Top Rated': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F2F2' }}>
     
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold" style={{ color: '#262526' }}>Filters</h3>
                <FaFilter className="text-gray-400" />
              </div>

              
              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-3"
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              
              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-4">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">${priceRange[0]}</span>
                    <span className="text-sm text-gray-600">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              
              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-4">Customer Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3" />
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'} size={12} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-700">& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              
              <button 
                className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div> */}

          {/* Products Grid */}
          <div className="lg:col-span-4">
            {/* Sort and Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">Showing {products.length} results</p>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ focusRingColor: '#51A696' }}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* Products */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
              : 'space-y-4'
            }>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                    viewMode === 'list' ? 'flex items-center p-4' : 'overflow-hidden'
                  }`}
                >
                  {/* Product Image */}
                  <div className={`relative ${
                    viewMode === 'list' ? 'w-24 h-24 flex-shrink-0 mr-4' : 'aspect-square'
                  } bg-gray-200 flex items-center justify-center`}>
                    <BsImage size={viewMode === 'list' ? 24 : 48} className="text-gray-400" />
                    
                    {/* Badge */}
                    {product.badge && (
                      <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium text-white rounded ${getBadgeColor(product.badge)}`}>
                        {product.badge}
                      </span>
                    )}
                    
                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                    >
                      {wishlist.has(product.id) ? (
                        <AiFillHeart className="text-red-500" size={16} />
                      ) : (
                        <AiOutlineHeart className="text-gray-400" size={16} />
                      )}
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className={viewMode === 'list' ? 'flex-1' : 'p-4'}>
                    <div className={viewMode === 'list' ? 'flex items-center justify-between' : ''}>
                      <div className={viewMode === 'list' ? 'flex-1' : ''}>
                        <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Rating */}
                        <div className="flex items-center mb-3">
                          <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} 
                                size={12} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({product.reviews})</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center mb-4">
                          <span className="text-xl font-bold" style={{ color: '#262526' }}>
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className={viewMode === 'list' ? 'ml-4' : ''}>
                        <button
                          disabled={!product.inStock}
                          className={`w-full flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors ${
                            product.inStock
                              ? 'text-white hover:opacity-90'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                          style={{ 
                            backgroundColor: product.inStock ? '#51A696' : undefined 
                          }}
                        >
                          <FaShoppingCart className="mr-2" size={14} />
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 rounded-lg ${
                      page === 1 
                        ? 'text-white' 
                        : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                    style={{ backgroundColor: page === 1 ? '#51A696' : undefined }}
                  >
                    {page}
                  </button>
                ))}
                
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;