"use client";
import React from 'react';
import CareerCard from './CareerCard';
import { careerData } from '@/components/careers/CareerData';

const CareerSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12">
      <div className="text-center px-4">
        <h1 className="hollow-text text-8xl font-bold">Join Us  </h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Join Our Team and Shape Career and Future <p/> Discover Exciting Opportunities to Grow Your Career with Us
        </p>
        <h2 className="mt-6 px-6 py-2 bg-lime-400 text-gray-800 rounded-xl hover:bg-lime-400 hover:text-white transition-colors">Current Openings</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-9">
        {careerData.map((career, index) => (
          <CareerCard 
            key={index}
            image={career.image}
            title={career.title}
            description={career.description}
          />
        ))}
      </div>

      <div className="mt-12 text-center px-4">
        <h2 className="text-2xl font-bold">We’re Hiring</h2>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Our vision at DigiFalx is to establish a strong digital presence in Navi Mumbai and Dubai, offering expert Web Design and Digital Marketing services to enhance businesses’ brand identities. Transitioning smoothly, moreover, we prioritize client satisfaction.
        </p>
      </div>
    </div>
  );
};

export default CareerSection;
