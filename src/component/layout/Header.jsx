import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-blue-200 transition-colors">Ajker Dam Shop</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-200 transition-colors font-medium">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-200 transition-colors font-medium">About</Link></li>
          <li><Link to="/products" className="hover:text-blue-200 transition-colors font-medium">Products</Link></li>
          <li><Link to="/services" className="hover:text-blue-200 transition-colors font-medium">Services</Link></li>
          <li><Link to="/shop-details" className="hover:text-blue-200 transition-colors font-medium">Shop Details</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header