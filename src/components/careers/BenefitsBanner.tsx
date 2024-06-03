"use client";
import { useState } from 'react';
import Image from 'next/image';
import { benefits, Benefit } from '@/components/careers/BenefitsData';

const BenefitsBanner = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit>(benefits[0]);

  return (
    <div className="bg-black text-white p-5">
      <h1 className="text-6xl mb-8 text-center font-bold hollow-text">Benefits</h1>
      <div className="flex space-x-4 sm:space-x-8 items-center justify-center">
        
        {benefits.map((benefit) => (
          <button
            key={benefit.name}
            className={`px-4 py-2 rounded-md ${selectedBenefit.name === benefit.name ? 'bg-lime-500' : 'bg-gray-700'}`}
            onClick={() => setSelectedBenefit(benefit)}
          >
            {benefit.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div className="relative w-full h-80 bg-purple-500">
          <Image
            src={selectedBenefit.image}
            alt={selectedBenefit.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-purple-500 bg-opacity-75">
            <h1 className="text-4xl">{selectedBenefit.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsBanner;
