import React from 'react'

const ShopDetails = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">দোকানের বিস্তারিত</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">বাজারপ্রাইস বিডি সম্পর্কে</h2>
          <p className="text-gray-600 mb-4">
            বাজারপ্রাইস বিডিতে স্বাগতম! আমরা বাংলাদেশের দৈনিক বাজারজাত দ্রব্যের সঠিক ও নবীনতম বাজার দর প্রদান করি। ১০ বছরেরও বেশি অভিজ্ঞতা নিয়ে আমরা গ্রাহকদের নির্ভরযোগ্য মূল্য তথ্য দিয়ে সচেতন কেনাকাটায় সাহায্য করতে প্রতিশ্রুতিবদ্ধ।
          </p>
          <p className="text-gray-600 mb-4">
            আমাদের মিশন হল সবার জন্য প্রিমিয়াম প্রযুক্তি পৌঁছানো সহজ করা। আমরা প্রামাণিক পণ্য, বিশেষজ্ঞ পরামর্শ এবং চমৎকার গ্রাহক সহায়তা প্রদান করি।
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">যোগাযোগের তথ্য</h2>
          <div className="space-y-3">
            <p className="text-gray-600"><strong>📍 ঠিকানা:</strong><br/>১২৩ টেকনোলজি স্ট্রিট, ইনোভেশন ডিস্ট্রিক্ট<br/>ঢাকা, বাংলাদেশ ১২১৪</p>
            <p className="text-gray-600"><strong>📞 ফোন:</strong><br/>(৮৮০) ১২৩-৪৫৬-৭৮৯০</p>
            <p className="text-gray-600"><strong>📧 ইমেল:</strong><br/>info@bazaarpricebd.com</p>
            <p className="text-gray-600"><strong>🌐 ওয়েবসাইট:</strong><br/>www.bazaarpricebd.com</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">ওপেনিং আওয়ার</h2>
          <div className="space-y-2">
            <p className="text-gray-600"><strong>সোমবার - শুক্রবার:</strong> সকাল ৯টা - রাত ৮টা</p>
            <p className="text-gray-600"><strong>শনিবার:</strong> সকাল ১০টা - বিকাল ৬টা</p>
            <p className="text-gray-600"><strong>রবিবার:</strong> সকাল ১১টা - বিকাল ৫টা</p>
            <p className="text-gray-600 mt-4 text-sm text-orange-600"><strong>⏰ নোট:</strong> সরকারি ছুটিতে বন্ধ</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">কেন আমাদের নির্বাচন করবেন?</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ ওয়ারেন্টিযুক্ত প্রামাণিক পণ্য</li>
            <li>✓ প্রতিযোগিতামূলক মূল্য</li>
            <li>✓ ৳৬০০০ এর বেশি অর্ডারে ফ্রি ডেলিভারি</li>
            <li>✓ ২৪/৭ গ্রাহক সহায়তা</li>
            <li>✓ সহজ রিটার্ন ও এক্সচেঞ্জ</li>
            <li>✓ বিশেষজ্ঞ পরামর্শ ও সুপারিশ</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ShopDetails