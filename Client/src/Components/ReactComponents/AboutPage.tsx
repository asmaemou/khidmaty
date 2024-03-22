import React from 'react';
import funder1Image from '../assets/Fatima.jpeg';
import funder2Image from '../assets/asmae picture.jpeg';

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Funders</h2>
        <div className="flex">
          <div className="w-1/2 p-4 border-4 border-orange-500 rounded-lg mr-4">
            <img src={funder1Image} alt="Funder 1" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-gray-700">Description of funder 1...</p>
          </div>
          <div className="w-1/2 p-4 border-4 border-orange-500 rounded-lg ml-4">
            <img src={funder2Image} alt="Funder 2" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-gray-700">Description of funder 2...</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 mb-8">
          Description about Khidmaty and its mission, goals, and values...
        </p>
        <h2 className="text-3xl font-semibold mb-4">Project Description</h2>
        <p className="text-gray-700">
          Description of the Khidmaty project, its objectives, and how it aims to make a positive impact...
        </p>
      </div>
    </div>
  );
}
