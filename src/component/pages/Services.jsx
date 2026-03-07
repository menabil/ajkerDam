import React from 'react'

const Services = () => {
  const services = [
    { id: 1, name: 'Product Installation', description: 'Professional installation service for all products', price: 45.00 },
    { id: 2, name: 'Technical Support', description: '24/7 technical support and troubleshooting', price: 99.99 },
    { id: 3, name: 'Extended Warranty', description: '2-year extended warranty coverage', price: 29.99 },
    { id: 4, name: 'Free Delivery', description: 'Free same-day delivery within city limits', price: 0.00 },
    { id: 5, name: 'Product Repair', description: 'Authorized repair service for all devices', price: 60.00 },
    { id: 6, name: 'Setup Assistance', description: 'Expert setup and configuration service', price: 35.00 },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="pt-2 border-t">
              <p className="text-sm text-gray-500 mb-1">Today's Price</p>
              <p className="text-2xl font-bold text-amber-600">
                {service.price === 0 ? 'FREE' : `$${service.price}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services