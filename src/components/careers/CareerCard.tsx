"use Client";
import React from 'react';

interface CareerCardProps {
  image: string;
  title: string;
  description: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-gray-200 p-9  rounded-lg shadow-lg style={{ height: '500px' }}">
      <div className="flex justify-center">
        <img src={image} alt={title} className="h-12 w-12" />
      </div>
      <h2 className="text-xl font-semibold text-center text-gray-600 mt-4">{title}</h2>
      <p className="text-gray-600 text-center mt-2">
        {description}
      </p>
      <div className="flex justify-center mt-4">
        <button className="px-6 py-2 bg-white text-gray-800 rounded-full outline outline-offset-2 outline-black hover:bg-lime-500 hover:text-white hover:outline hover:outline-lime-600 transition-colors">
          View Openings
        </button>
      </div>
    </div>
  );
};

export default CareerCard;
