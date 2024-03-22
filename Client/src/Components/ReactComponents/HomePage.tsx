import React, { useState, useEffect } from 'react';
import cooker from '../assets/cooker.png';
import security_gard from '../assets/security_gard.png';
import waiter from '../assets/waiter.png';
import woman_cooker from '../assets/woman_cooker.png';
import logon from '../assets/logo.png'
const HomePage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [cooker, security_gard, waiter, woman_cooker,logon];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
     <img src={logon} alt="Logo" className="h-40 w-auto absolute top-0 left-0 ml-4 mt-40" />



      <div className="max-w-6xl mx-auto px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg flex">
    
        <div className="w-1/2 flex items-center justify-center relative">
          <img src={images[currentImage]} alt="Sample" className="max-w-full h-auto" />
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-8 text-3xl text-yellow-600 focus:outline-none z-10"
            onClick={previousImage}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-8 text-3xl text-yellow-600 focus:outline-none z-10"
            onClick={nextImage}
          >
            &gt;
          </button>
        </div>
        <div className="w-1/2 px-8 flex flex-col justify-center ml-8">
          <p className="text-gray-600 text-xl text-justify leading-loose font-serif mb-8">
          <span className="text-orange-500">Khidmaty</span> is a groundbreaking project aimed at empowering illiterate individuals in Morocco by providing them access to job opportunities in essential services. unities in services such as cleaning, safeguarding, and other essential tasks.
          </p>
          <p className="text-gray-600 text-xl text-justify leading-loose font-serif animate-disappear-appear">
  Empowering Moroccan Communities Through Essential Service Job Opportunities
</p>
          <div className="mt-8 text-center">
            <a
              href="/signup1"
              className="inline-block px-6 py-3 mr-4 text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            >
              Sign Up
            </a>
            <a
              href="/signin"
              className="inline-block px-6 py-3 text-gray-900 bg-white border border-gray-300 rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
