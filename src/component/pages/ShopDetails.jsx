import React from 'react'

const ShopDetails = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shop Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">About BazaarPrice BD</h2>
          <p className="text-gray-600 mb-4">
            Welcome to Ajker Dam Shop! We specialize in providing high-quality electronics and accessories at competitive prices. With over 10 years of experience, we're committed to customer satisfaction and reliable service.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to make premium technology accessible to everyone. We offer genuine products, expert advice, and excellent customer support.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-3">
            <p className="text-gray-600"><strong>📍 Address:</strong><br/>123 Technology Street, Innovation District<br/>Dhaka, Bangladesh 1214</p>
            <p className="text-gray-600"><strong>📞 Phone:</strong><br/>(880) 123-456-7890</p>
            <p className="text-gray-600"><strong>📧 Email:</strong><br/>info@ajkerdam.com</p>
            <p className="text-gray-600"><strong>🌐 Website:</strong><br/>www.ajkerdam.com</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Opening Hours</h2>
          <div className="space-y-2">
            <p className="text-gray-600"><strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM</p>
            <p className="text-gray-600"><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
            <p className="text-gray-600"><strong>Sunday:</strong> 11:00 AM - 5:00 PM</p>
            <p className="text-gray-600 mt-4 text-sm text-orange-600"><strong>⏰ Note:</strong> Closed on public holidays</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Authentic products with warranty</li>
            <li>✓ Competitive pricing</li>
            <li>✓ Free delivery on orders over ৳6000</li>
            <li>✓ 24/7 customer support</li>
            <li>✓ Easy returns and exchanges</li>
            <li>✓ Expert advice and recommendations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ShopDetails