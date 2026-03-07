import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Ajker Dam Shop</h1>
          <p className="text-xl mb-8">Your trusted destination for premium electronics and accessories</p>
          <div className="flex gap-4 justify-center">
            <Link to="/products" className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Shop Now
            </Link>
            <Link to="/shop-details" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-amber-600">9+</h3>
              <p className="text-gray-600 mt-2">Quality Products</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-amber-600">6+</h3>
              <p className="text-gray-600 mt-2">Professional Services</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-amber-600">10+</h3>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-amber-600">100%</h3>
              <p className="text-gray-600 mt-2">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link to="/products" className="group">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-lg p-8 shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <div className="text-5xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold mb-3">Our Products</h2>
              <p className="mb-4">Explore our collection of premium electronics and accessories at today's special prices.</p>
              <div className="flex items-center gap-2">
                <span className="group-hover:underline">Browse Products</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          <Link to="/services" className="group">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 text-white rounded-lg p-8 shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <div className="text-5xl mb-4">🔧</div>
              <h2 className="text-2xl font-bold mb-3">Our Services</h2>
              <p className="mb-4">Enjoy professional installation, support, repair, and warranty services tailored for you.</p>
              <div className="flex items-center gap-2">
                <span className="group-hover:underline">View Services</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          <Link to="/shop-details" className="group">
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 text-white rounded-lg p-8 shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <div className="text-5xl mb-4">📍</div>
              <h2 className="text-2xl font-bold mb-3">Shop Details</h2>
              <p className="mb-4">Find us at our location, learn about our hours, and get in touch with our team today.</p>
              <div className="flex items-center gap-2">
                <span className="group-hover:underline">Get Details</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Ajker Dam Shop?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="text-lg font-semibold mb-2">Authentic Products</h3>
              <p className="text-gray-600">100% genuine products with warranty and quality guarantee.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing on all products and services available today.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-lg font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free delivery on orders over $50 within city limits.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-lg mb-8">Check out today's special prices on all our products and services</p>
          <Link to="/products" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home