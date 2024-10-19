/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";

import image1 from '../assets/Sea1.png';
import image2 from '../assets/Sea2.png';
import image3 from '../assets/Sea3.png';

const images = [image1, image2, image3];

const GetStartedPage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-blue-50 p-6">
      {/* Image Section */}
      <div className="w-full mt-10">
        <img
           src={images[currentImage]}
          alt="Sea view"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur.</h2>
        <p className="text-gray-600 mt-2">
          Ultrices cursus varius quam turpis pharetra nec in turpis elit. Sapien fames ultricies eget sed vitae fames.
        </p>
      </div>

      {/* Indicators and Skip */}
      <div className="flex items-center justify-between w-full mt-4 bg-dark">
        {/* Dots */}
        <div className="flex space-x-2 ">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full ${currentImage === index ? 'bg-blue-500' : 'bg-blue-200'}`}
            ></div>
          ))}
        </div>

        {/* Skip */}
        <button className="text-gray-500 hover:text-gray-900 underline">Skip</button>
      </div>

      {/* Get Started Button */}
      <div className="mt-8 w-full">
        <button className="bg-red-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-600 w-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStartedPage;
