import { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">
                  Help
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">
                  Terms
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Newsletter</h5>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-gray-300 rounded rounded-r-none px-3 relative focus:border-blue focus:shadow"
                />
                <button
                  type="submit"
                  className="flex items-center bg-blue-500 text-white rounded rounded-l-none px-3 py-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;