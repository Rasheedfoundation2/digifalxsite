"use client"
import React, { useState } from 'react';

const Subservice2 = () => {
  const [selectedService, setSelectedService] = useState('');

  const services = [
    'PSD To Responsive HTML',
    'UX Design',
    'Landing Page Design',
    'Responsive Web Design',
    'Graphic Design',
    'UX Audit',
  ];

  const details = {
    'PSD To Responsive HTML': 'Custom Theme Development',
    'UX Design': 'Plugin Integration',
    'Landing Page Design': 'Performance Optimization',
    'Responsive Web Design': 'Security Implementation',
    'Graphic Design': 'Regular Updates & Backups',
    'UX Audit': 'Seamless Communication Setup',
  };

  const handleMouseEnter = (service) => {
    setSelectedService(service);
  };

  const handleClick = (detail) => {
    alert(`Clicked on ${detail}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-start bg-black">
      <div className="w-full bg-black p-4 shadow-md left-0 z-10">
        <h1 className="text-4xl font-bold text-center">
          The Best <span className="text-GreenNew-100">Website & Web Application</span>
          <br />
          <span className="text-GreenNew-100">Development</span> Company In Dubai
        </h1>
      </div>
      <div className="flex-1 flex mt-2 w-full px-8"> {/* Add padding-x to ensure content is not hidden */}
        <div className="w-1/4 space-y-4 text-left text-2xl"> {/* Adjust width and increase font size */}
          {services.map((service) => (
            <div
              key={service}
              onMouseEnter={() => handleMouseEnter(service)}
              className="cursor-pointer pb-2 border-b border-gray-300"
            >
              {service}
            </div>
          ))}
        </div>
        <div className="w-3/4 space-y-4 text-left text-2xl pl-12 bg-white rounded-2xl"> {/* Adjust width and add padding-left for spacing */}
          {selectedService && (
            <div
              onClick={() => handleClick(details[selectedService])}
              className="cursor-pointer text-black hover:underline"
            >
              {details[selectedService]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subservice2;
