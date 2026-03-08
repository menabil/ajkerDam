import React from 'react'

const Services = () => {
  const services = [
    { id: 1, name: 'পণ্য ইনস্টলেশন', description: 'সকল পণ্যের জন্য পেশাদার ইনস্টলেশন সেবা', price: 5400 },
    { id: 2, name: 'প্রযুক্তিগত সহায়তা', description: '২৪/৭ প্রযুক্তিগত সহায়তা ও সমস্যা সমাধান', price: 12000 },
    { id: 3, name: 'এক্সটেন্ডেড ওয়ারেন্টি', description: '২ বছরের বাড়তি ওয়ারেন্টি কভারেজ', price: 3600 },
    { id: 4, name: 'ফ্রি ডেলিভারি', description: 'শহরের ভিতরে একই দিনের ফ্রি ডেলিভারি', price: 0 },
    { id: 5, name: 'পণ্য মেরামত', description: 'সকল ডিভাইসের জন্য অনুমোদিত মেরামত সেবা', price: 7200 },
    { id: 6, name: 'সেটআপ সহায়তা', description: 'বিশেষজ্ঞ সেটআপ ও কনফিগারেশন সেবা', price: 4200 },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">আমাদের সার্ভিসসমূহ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="pt-2 border-t">
              <p className="text-sm text-gray-500 mb-1">আজকের মূল্য</p>
              <p className="text-2xl font-bold text-blue-600">
                {service.price === 0 ? 'বিনামূল্যে' : `৳${service.price}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services