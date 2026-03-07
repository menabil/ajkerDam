import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">About BazaarPrice BD</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2014, BazaarPrice BD started with a simple vision: to provide accurate market prices and make bazaar shopping easier for everyone. What began as a price tracking service has grown into Bangladesh's most trusted bazaar price information platform.
          </p>
          <p className="text-gray-600">
            Today, we serve thousands of customers with genuine products, expert service, and competitive pricing. Our commitment to excellence has made us a preferred choice for tech enthusiasts and casual buyers alike.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To provide authentic, high-quality technology products and services at competitive prices while ensuring exceptional customer satisfaction.
          </p>
          <p className="text-gray-600 mb-4">
            We believe in building long-term relationships with our customers through trust, reliability, and outstanding service.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why We Stand Out</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold mb-2">✓ Quality Assurance</h3>
            <p className="text-gray-600 text-sm">All products are verified for authenticity and quality before delivery.</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold mb-2">✓ Expert Team</h3>
            <p className="text-gray-600 text-sm">Our knowledgeable staff provides personalized recommendations.</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold mb-2">✓ Best Prices</h3>
            <p className="text-gray-600 text-sm">Competitive pricing without compromising on quality or service.</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold mb-2">✓ Customer Support</h3>
            <p className="text-gray-600 text-sm">24/7 support to ensure your complete satisfaction.</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-4">
          Have any questions or need assistance? We're here to help! Contact us through any of our channels and our team will get back to you promptly.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default About