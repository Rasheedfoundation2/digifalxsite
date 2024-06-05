"use client";
import { useState } from 'react';
import Image from 'next/image';
import { benefits, Benefit } from '@/components/careers/BenefitsData';

const BenefitsBanner = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit>(benefits[0]);

  return (
    <div className="bg-black text-white flex flex-col">
      <div className="grid lg:grid-cols-4 space-x-2 items-center justify-center">
        {benefits.map((benefit) => (
          <button
            key={benefit.name}
            className={`px-6 py-4 rounded-md ${selectedBenefit.name === benefit.name ? 'bg-BlueNew-100' : 'bg-gray-700'}`}
            onClick={() => setSelectedBenefit(benefit)}>
            {benefit.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div className="relative w-full h-80 bg-GreenNew-100">
          <Image
            src={selectedBenefit.image}
            alt={selectedBenefit.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-GreenNew-100 bg-opacity-25">
            <h1 className="text-4xl">{selectedBenefit.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsBanner;
