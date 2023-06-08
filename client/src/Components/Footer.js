import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="logo.png" alt="Logo" className="w-20 mb-4" />
            <p className="text-gray-300">Subscribe to Easy Tutorials YouTube channel to watch more videos on website development and press the bell icon to get immediate notifications of the latest videos.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Office</h3>
            <p>IPTL Road</p>
            <p>Whitefield, Bangalore</p>
            <p>Karnataka, PIN 560066, India</p>
            <p className="email-id">nandu235@gmail.com</p>
            <h4>+91-0123456789</h4>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul>
              <li><a href="" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="" className="text-gray-300 hover:text-white">Contacts</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <form className="flex">
              <input type="email" placeholder="Enter your email id" required className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
            </form>
            <div className="mt-4">
              <i className="fab fa-facebook text-gray-300 hover:text-white mr-4"></i>
              <i className="fab fa-twitter text-gray-300 hover:text-white mr-4"></i>
              <i className="fab fa-whatsapp text-gray-300 hover:text-white mr-4"></i>
              <i className="fab fa-pinterest text-gray-300 hover:text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-600" />
      <p className="text-center text-gray-300">Easy Tutorials © 2021-All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
