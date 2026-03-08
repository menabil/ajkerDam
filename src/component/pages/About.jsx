import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">বাজারপ্রাইস বিডির সম্পর্কে</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">আমাদের গল্প</h2>
          <p className="text-gray-600 mb-4">
            ২০১৪ সালে প্রতিষ্ঠিত বাজারপ্রাইস বিডি একটি সাধারণ ধারণা থেকে শুরু হয়: সঠিক বাজার দর প্রদর্শন এবং সবাইকে বাজার কেনাকাটা সহজ করে দেয়া। যে পরিষেবা শুরুতে কেবল দামের ট্র্যাকিং করতো, আজ তা বাংলাদেশের সবচেয়ে বিশ্বস্ত বাজার দর তথ্য প্ল্যাটformে পরিণত হয়েছে।
          </p>
          <p className="text-gray-600">
            আজ আমরা হাজার হাজার গ্রাহককে প্রামাণিক পণ্য, দক্ষ সেবা এবং প্রতিযোগিতামূলক মূল্য প্রদান করছি। উৎকৃষ্টতার প্রতি আমাদের প্রতিশ্রুতি প্রযুক্তি-প্রেমী এবং সাধারণ ক্রেতাদের জন্য আমাদের পছন্দের ঠিকানা করে তুলেছে।
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">আমাদের লক্ষ্য</h2>
          <p className="text-gray-600 mb-4">
            প্রতিযোগিতামূলক মূল্যে প্রামাণিক, উচ্চ-মানের প্রযুক্তি পণ্য ও সেবা প্রদান করা এবং গ্রাহকের সন্তুষ্টি অক্ষুণ্ণ রাখা।
          </p>
          <p className="text-gray-600 mb-4">
            আমরা বিশ্বাস করি — বিশ্বাস, নির্ভরযোগ্যতা ও চমৎকার সেবার মাধ্যমে গ্রাহকদের সাথে দীর্ঘমেয়াদী সম্পর্ক গড়ে তোলা যায়।
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">কেন আমরা আলাদা</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold mb-2">✓ মান নিশ্চয়তা</h3>
            <p className="text-gray-600 text-sm">প্রতিটি পণ্য ডেলিভারির আগে প্রামাণিকতা ও মান যাচাই করা হয়।</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold mb-2">✓ দক্ষ টিম</h3>
            <p className="text-gray-600 text-sm">আমাদের জ্ঞানী কর্মীরা ব্যক্তিগতভাবে পরামর্শ প্রদান করে থাকেন।</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold mb-2">✓ সেরা মূল্য</h3>
            <p className="text-gray-600 text-sm">মান বা সেবায় আপস না করে প্রতিযোগিতামূলক দাম।</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold mb-2">✓ গ্রাহক সমর্থন</h3>
            <p className="text-gray-600 text-sm">পূর্ণ সন্তুষ্টি নিশ্চিত করতে ২৪/৭ সহায়তা।</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">যোগাযোগ করুন</h2>
        <p className="text-gray-600 mb-4">
          কোনো প্রশ্ন বা সহায়তা প্রয়োজন? আমরা আছি সাহায্যের জন্য! যেকোনো চ্যানেলের মাধ্যমে আমাদের সাথে যোগাযোগ করুন, আমাদের টিম দ্রুত উত্তর দেবে।
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          যোগাযোগ করুন
        </button>
      </div>
    </div>
  )
}

export default About