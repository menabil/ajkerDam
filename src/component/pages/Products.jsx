import React, { useState } from 'react';
import { Link } from 'react-router';
import { products, categories } from '../../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get price change
  const getPriceChange = (priceHistory) => {
    if (priceHistory.length >= 2) {
      const latest = priceHistory[priceHistory.length - 1].price;
      const previous = priceHistory[priceHistory.length - 2].price;
      return latest - previous;
    }
    return null;
  };

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">সব প্রোডাক্ট</h1>
          <p className="text-xl text-emerald-100">আজকের সেরা দামে সব প্রোডাক্ট দেখুন</p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-6 flex gap-3">
            <input
              type="text"
              placeholder="পণ্য খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-emerald-500 rounded-lg focus:outline-none focus:border-emerald-700"
            />
            <select className="px-4 py-3 border-2 border-emerald-500 rounded-lg focus:outline-none focus:border-emerald-700 bg-white">
              <option>সকল ক্যাটেগরি</option>
            </select>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              সব
            </button>
            {Object.entries(categories).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === key
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600 text-lg">
              {filteredProducts.length} টি প্রোডাক্ট পাওয়া গেছে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => {
              const priceChange = getPriceChange(product.priceHistory)
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden h-40">
                    <img
                      src={product.image}
                      alt={product.nameBn}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {categories[product.category]}
                    </div>
                    {priceChange && (
                      <div className={`absolute bottom-2 right-2 px-2 py-1 rounded text-xs font-bold text-white ${
                        priceChange > 0 ? 'bg-red-500' : 'bg-green-500'
                      }`}>
                        {priceChange > 0 ? '↑' : '↓'} {Math.abs(priceChange)} টাকা
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 text-gray-800">{product.nameBn}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.nameEn}</p>

                    {/* Price */}
                    <div className="mb-3">
                      <div className="text-3xl font-bold text-emerald-600">৳{product.currentPrice}</div>
                      <div className="text-sm text-gray-600">/{product.unit}</div>
                    </div>

                    {/* Action Button */}
                    <Link
                      to={`/product/${product.id}`}
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-4 py-2 rounded-lg transition-all font-medium text-sm text-center"
                    >
                      বিস্তারিত দেখুন
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;