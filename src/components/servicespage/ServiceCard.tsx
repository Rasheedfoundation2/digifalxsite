"use client"
import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";

interface ServiceCardProps {
  title: string;
  image: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, features }) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div  className="max-w-sm h-11/12 w-9/12 rounded overflow-hidden bg-graycard shadow-lg m-4 relative"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="px-6 py-4">
      <div className="font-bold text-graysubheading text-2xl  text-center mb-2">{title}</div>
     
        <img className="h-3/4 w-full pb-4" src={image} alt={title} />
    </div>
    {isHovered && (
        
      <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center p-4">
        <button
            className="absolute top-4 right-4 text-black rounded-full p-3"
            onClick={() => setIsHovered(false)}
          >
            <MdCancel/>
          </button>
        <h3 className="font-bold text-xl mb-4 text-black">Service we provide </h3>
        <div className="overflow-y-auto h-40 w-full text-black px-4">
            <ul className="list-disc">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
      </div>
    )}
  </div>
);
};

export default ServiceCard;
