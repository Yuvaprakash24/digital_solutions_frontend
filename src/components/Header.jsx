import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Digital Solutions
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/services" className="hover:text-blue-400">
              Services
            </Link>
            <Link to="/portfolio" className="hover:text-blue-400">
              Portfolio
            </Link>
            <Link to="/blog" className="hover:text-blue-400">
              Blog
            </Link>
            <Link to="/why-choose-us" className="hover:text-blue-400">
              Why Choose Us
            </Link>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
            <Link to="/careers" className="hover:text-blue-400">
              Careers
            </Link>
            <Link to="/admin" className="hover:text-blue-400">
              Admin
            </Link>
            
          </div>
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Services
          </Link>
          <Link to="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Portfolio
          </Link>
          <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Blog
          </Link>
          <Link to="/why-choose-us" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Why Choose Us
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Contact
          </Link>
          <Link to="/careers" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Careers
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;