"use client";
import React from 'react';
import CareerCard from './CareerCard1';
import { careerData } from '@/components/careers/CareerData';
import Banner from '../ourworkscompo/Banner';

const CareerSection: React.FC = () => {
  return (
   <>
    <div className="min-h-screen bg-black flex flex-col items-center py-12">
      <div className="text-center px-4">
        <h1 className="hollow-text text-8xl font-bold">Join Us  </h1>
        <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
          Our vision at DigiFalx is to establish a strong digital presence in Navi Mumbai and Dubai, offering expert Web Design and Digital Marketing services to enhance businesses’ brand identities. Transitioning smoothly, moreover, we prioritize client satisfaction.
        </p>
      </div>

      <div className="mt-12 text-center px-4">
        <h2 className="text-4xl font-bold">We’re Hiring</h2>
      </div>
   

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-9">
        {careerData.map((career, index) => (
          <CareerCard
            key={index}
            image={career.image}
            title={career.title}
            description={career.description}
            responsibilities={career.responsibilities}
          />
        ))}
      </div>
    </div>
    <div>
      <Banner/>
    </div>
    </>  
  );
};

export default CareerSection;
