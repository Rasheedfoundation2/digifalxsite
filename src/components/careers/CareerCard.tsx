"use Client";
import React from 'react';

interface CareerCardProps {
  image: string;
  title: string;
  description: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-neutral-100 p-9  rounded-lg shadow-lg style={{ height: '500px' }}">
      <div className="flex justify-center">
        <img src={image} alt={title} className="h-12 w-12" />
      </div>
      <h2 className="text-xl font-semibold text-center text-gray-600 mt-4">{title}</h2>
      <p className="text-gray-600 text-center mt-2">
        {description}
      </p>
      <div className="flex justify-center mt-4">
        <button className="px-6 py-2 bg-black text-white rounded-full outline outline-offset-2 outline-GreenNew-100 hover:bg-BlueNew-100 hover:text-white hover:outline hover:outline-black transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CareerCard;
