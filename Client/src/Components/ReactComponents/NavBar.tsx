import React from 'react';
import logon from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="bg-orange-500 py-11">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
         
          <div className="text-white font-bold text-xl">Khidmaty</div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/about" className="text-white hover:text-gray-200 text-xl">About</a>
          </li>
          <li>
            <a href="/home" className="text-white hover:text-gray-200 text-xl">Home</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-200 text-xl">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
