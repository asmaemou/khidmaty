import React from 'react';
import logon from '../assets/logo.png'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
        <img src={logon} alt="Logo" className="h-40 w-auto absolute top-0 left-0 ml-4 mt-40" />

      <div className="max-w-6xl mx-auto px-4 py-8 flex-grow">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-1/2 p-4 border-4 border-orange-500 rounded-lg">
            <form className="w-full">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                <input type="text" id="name" name="name" className="w-full md:w-auto border-2 border-gray-300 rounded-md p-2" placeholder="Your Name" /> {/* Adjusted width */}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input type="email" id="email" name="email" className="w-full md:w-auto border-2 border-gray-300 rounded-md p-2" placeholder="Your Email" /> {/* Adjusted width */}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
                <textarea id="message" name="message" className="w-full border-2 border-gray-300 rounded-md p-2" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
