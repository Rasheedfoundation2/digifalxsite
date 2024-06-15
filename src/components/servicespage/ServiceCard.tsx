"use client"
import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

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
      <div className="font-bold text-white text-2xl  text-center mb-2">{title}</div>
     
        <img className="h-3/4 min-h-[350px] w-full pb-4" src={image} alt={title} />
    </div>
    {isHovered && (
        
      <div className="absolute inset-0 bg-graycard bg-opacity-90 flex flex-col justify-center items-center p-4">
        <button
            className="absolute top-4 right-4 text-white  p-3"
            onClick={() => setIsHovered(false)}
          >
            <AiOutlineClose className="cursor-pointer text-3xl"/>
          </button>
        <h3 className="font-bold text-xl mb-4 text-whiteheading text-center">Service we provide </h3>
        <div className="overflow-y-auto h-40 w-full text-graysubheading px-4 text-center">
            <ol className="list-none">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ol>
          </div>
      </div>
    )}
  </div>
);
};

export default ServiceCard;
