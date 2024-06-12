"use client";
import React from "react";
import { HiOutlineSparkles } from "react-icons/hi2";

const services = [
  " DIGITAL BRANDING",
  " UI/UX SERVICES",
  " WEB DEVELOPMENT",
  " E-COMMERCE",
  " DIGITAL MARKETING",
  
];

function ServiceNameBanner() {
  return (
    <div className="mt-10 text-black text-center  mb-10">
      
      <div className="overflow-hidden  bg-white">
        <div className="flex animate-scroll space-x-8">
          {services.map((service, index) => (
            <div key={index} className="flex-none w-64 h-20 flex justify-center items-center bg-white text-black">
                <HiOutlineSparkles  />
              <p className="text-2xl text-center ml-2">{service}</p>
            </div>
          ))}
          {services.map((service, index) => (
            <div key={index + services.length} className="flex-none w-64 h-20 flex justify-center items-center bg-white text-black">
                <HiOutlineSparkles /> 
              <p className="text-2xl text-center ml-2">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceNameBanner;
