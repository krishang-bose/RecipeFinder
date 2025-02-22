import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../icons/logo_no_bg.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="w-22 h-15" />
            <h1 className="text-2xl font-bold">ChefMate</h1>
          </div>
          <p className="text-gray-600">
            Managing restaurant menus and other information including location and opening hours.
            Managing the preparation of orders at a restaurant kitchen.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <ul className="text-gray-600 space-y-1">
            <li>Menu</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Dish</li>
            <li>Asian</li>
          </ul>
        </div>

        {/* Genres */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold mb-4">Genres</h2>
          <ul className="text-gray-600 space-y-1">
            <li>Salad</li>
            <li>Spicy</li>
            <li>Bowl</li>
            <li>Kitchen</li>
            <li>Home</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <FaFacebookF className="text-gray-600 hover:text-black cursor-pointer" />
            <FaTwitter className="text-gray-600 hover:text-black cursor-pointer" />
            <FaInstagram className="text-gray-600 hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
