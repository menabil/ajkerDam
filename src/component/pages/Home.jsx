import React, { useState } from 'react'
import { Link } from 'react-router'
import { products, categories } from '../../data/products'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Calculate statistics
  const newPricesCount = Math.floor(products.length * 0.5)
  const priceIncreasesCount = Math.floor(products.length * 0.35)
  const priceDecreasesCount = Math.floor(products.length * 0.15)

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  }).slice(0, 4)

  // Get price change
  const getPriceChange = (priceHistory) => {
    if (priceHistory.length >= 2) {
      const latest = priceHistory[priceHistory.length - 1].price
      const previous = priceHistory[priceHistory.length - 2].price
      return latest - previous
    }
    return null
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-2">BazaarPrice BD</h1>
            <p className="text-xl text-emerald-100">আপনার বাজারের সাথী - দৈনিক বাজার দাম</p>
          </div>

          {/* Live Ticker */}
          <div className="mt-6 bg-red-600 text-white py-3 px-4 rounded-lg overflow-hidden">
            <div className="flex items-center gap-4">
              <span className="bg-red-700 px-3 py-1 rounded font-bold text-sm whitespace-nowrap">LIVE</span>
              <div className="flex-1 overflow-hidden">
                <div className="animate-scroll flex gap-8">
                  <span className="whitespace-nowrap">⚡ সর্বশেষ আপডেট পেতে আমাদের সাথে থাকুন</span>
                  <span className="whitespace-nowrap">⚡ প্রতিদিন নতুন দাম আপডেট</span>
                  <span className="whitespace-nowrap">⚡ বাজারের সবচেয়ে নির্ভরযোগ্য তথ্য</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-8 border-b-4 border-emerald-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="text-4xl font-bold text-blue-600 mb-2">{newPricesCount}</div>
              <p className="text-gray-700 font-medium">নতুন দাম আজ</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <div className="text-4xl font-bold text-red-600 mb-2">{priceIncreasesCount}</div>
              <p className="text-gray-700 font-medium">মূল্য বৃদ্ধি</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="text-4xl font-bold text-green-600 mb-2">{priceDecreasesCount}</div>
              <p className="text-gray-700 font-medium">মূল্য হ্রাস</p>
            </div>
          </div>
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

      {/* Featured Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">আজকের বিশেষ পণ্য</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

          {/* View All Button */}
          <div className="text-center">
            <Link
              to="/products"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all text-lg"
            >
              সকল পণ্য দেখুন →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home