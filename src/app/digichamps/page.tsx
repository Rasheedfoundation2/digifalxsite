"use client";
import React from 'react';
import FAQ from '@/components/careers/DigiChampsFAQ';
import Form from '@/components/careers/DigiChampsForm';
import BenefitsBanner from '@/components/careers/BenefitsBanner';

const Digichamps: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative w-screen h-screen">
        <img
          src="/assets/images/digichamps.png"
          alt="Digicamps banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-6xl font-bold hollow-text">DIGICHAMPS</h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-full  mt-5 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl h-fit mx-auto bg-black p-6 rounded-lg shadow-lg">
        {/* Left Column with Random Image */}
        <div className="flex justify-center items-center">
          <img 
            src="initial_card_image.png" 
            alt="Random Image" 
            className="rounded-lg"
          />
        </div>

        {/* Right Column with Text and Button */}
        <div className="flex flex-col justify-center items-start p-6">
          <h1 className=" text-white text-4xl font-bold mb-4">About Digichamps</h1>
          <p className="text-white mb-6">
            Our Programme emphasizes providing you with practical skills and real-world experiance in the dynamic fields of online presence,creative promotion and visual storytelling.</p>
          <button className="px-4 py-2 bg-gray text-white  border-2 border-white transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:border-black hover:shadow-[0_0_10px_rgba(255,255,255,0.6)">
            Discover More ↗
          </button>
        </div>
      </div>
    </div>

    <section className="p-8">
  <h2 className="text-3xl font-bold mb-8">Who can participate</h2>
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    {['Professionals', 'Startups', 'Innovators', 'Freelancers'].map((role) => (
      <div key={role} className="flex flex-col items-center justify-center">
        <div className="w-52 h-52 bg-gray-700 rounded-full flex items-center justify-center">
          <img src={`/path/to/${role.toLowerCase()}-icon.png`} alt={role} className="w-12 h-12"/>
        </div>
        <p className="mt-4 font-bold text-2xl">{role}</p>
      </div>
    ))}
  </div>
</section>

      <section className="p-8">
        <h2 className="text-3xl font-bold">How to participate</h2>
        <div className="bg-gray-700 p-8 mt-4">
          <p>small form to take the info of participants we can also contact them later</p>
          <Form />
        </div>
      </section>
      <BenefitsBanner/>
      <section className="p-8">
        <FAQ />
      </section>
      
    </div>
  );
};

export default Digichamps;
