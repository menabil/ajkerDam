import React, { useState } from 'react'
import product1 from '../../assets/products/product1.svg'
import product2 from '../../assets/products/product2.svg'
import product3 from '../../assets/products/product3.svg'
import product4 from '../../assets/products/product4.svg'
import product5 from '../../assets/products/product5.svg'
import product6 from '../../assets/products/product6.svg'
import product7 from '../../assets/products/product7.svg'
import product8 from '../../assets/products/product8.svg'
import product9 from '../../assets/products/product9.svg'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Premium sound quality with noise cancellation',
      price: 79.99,
      image: product1,
      category: 'audio',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'USB-C Cable',
      description: 'Durable 2m charging and data transfer cable',
      price: 12.99,
      image: product2,
      category: 'cables',
      badge: 'Popular'
    },
    {
      id: 3,
      name: 'Phone Case',
      description: 'Shockproof protection with stylish design',
      price: 19.99,
      image: product3,
      category: 'protection',
      badge: 'New'
    },
    {
      id: 4,
      name: 'Screen Protector',
      description: 'Tempered glass with easy installation',
      price: 9.99,
      image: product4,
      category: 'protection',
      badge: 'Essential'
    },
    {
      id: 5,
      name: 'Power Bank 20000mAh',
      description: 'Fast charging with dual USB ports',
      price: 34.99,
      image: product5,
      category: 'power',
      badge: 'Hot Deal'
    },
    {
      id: 6,
      name: 'Bluetooth Speaker',
      description: 'Waterproof portable speaker with 12hr battery',
      price: 49.99,
      image: product6,
      category: 'audio',
      badge: 'Premium'
    },
    {
      id: 7,
      name: 'Wireless Mouse',
      description: 'Ergonomic design with precision tracking',
      price: 24.99,
      image: product7,
      category: 'accessories',
      badge: 'Comfort'
    },
    {
      id: 8,
      name: 'Phone Stand',
      description: 'Adjustable stand for all devices',
      price: 14.99,
      image: product8,
      category: 'accessories',
      badge: 'Convenient'
    },
    {
      id: 9,
      name: 'HDMI Cable',
      description: 'High-speed 4K HDMI 2.1 cable',
      price: 18.99,
      image: product9,
      category: 'cables',
      badge: '4K Ready'
    },
  ]

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'audio', name: 'Audio', icon: '🎧' },
    { id: 'protection', name: 'Protection', icon: '🛡️' },
    { id: 'power', name: 'Power', icon: '🔋' },
    { id: 'cables', name: 'Cables', icon: '🔌' },
    { id: 'accessories', name: 'Accessories', icon: '📱' },
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best Seller': return 'bg-red-500'
      case 'New': return 'bg-green-500'
      case 'Hot Deal': return 'bg-orange-500'
      case 'Premium': return 'bg-purple-500'
      case 'Popular': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl mb-8">Discover amazing electronics and accessories at today's best prices</p>
          <div className="flex justify-center items-center gap-4 text-lg">
            <span>⭐ 9 Quality Products</span>
            <span>•</span>
            <span>💰 Best Prices Today</span>
            <span>•</span>
            <span>✅ Genuine & Warranted</span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-50 shadow'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
            <span className="text-gray-500 ml-2">({filteredProducts.length} items)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-bold ${getBadgeColor(product.badge)}`}>
                  {product.badge}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Price Section */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Today's Price</p>
                      <p className="text-3xl font-bold text-amber-600">${product.price}</p>
                    </div>
                    <div className="text-right">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                        <span className="text-amber-600 text-xl">💰</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-amber-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg mb-8">Our experts are here to help you find the perfect product</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products