import React from 'react'
import { Link } from 'react-router'
import Logo from '../Logo'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white shadow-xl">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center transform hover:scale-105 transition-transform duration-200">
          <Logo />
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="hover:text-emerald-200 transition-colors duration-200 font-medium relative group">হোম
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-200 group-hover:w-full transition-all duration-200"></span>
          </Link></li>
          <li><Link to="/about" className="hover:text-emerald-200 transition-colors duration-200 font-medium relative group">আমাদের সম্পর্কে
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-200 group-hover:w-full transition-all duration-200"></span>
          </Link></li>
          <li><Link to="/products" className="hover:text-emerald-200 transition-colors duration-200 font-medium relative group">সব প্রোডাক্ট
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-200 group-hover:w-full transition-all duration-200"></span>
          </Link></li>
          <li><Link to="/services" className="hover:text-emerald-200 transition-colors duration-200 font-medium relative group">সার্ভিস
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-200 group-hover:w-full transition-all duration-200"></span>
          </Link></li>
          <li><Link to="/shop-details" className="hover:text-emerald-200 transition-colors duration-200 font-medium relative group">দোকানের বিস্তারিত
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-200 group-hover:w-full transition-all duration-200"></span>
          </Link></li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 px-6 py-2.5 rounded-full transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
            লগইন
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header