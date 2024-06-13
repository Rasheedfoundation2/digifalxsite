"use client";
import React, { useState } from 'react';
import FAQ from '@/components/careers/DigiChampsFAQ1';
import BenefitsBanner from '@/components/careers/BenefitsBanner';
import Form from '@/components/careers/Form2';

const Digichamps: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white">
       <h1 className="text-6xl text-inherit m-2  py-8 lg:text-8xl flex justify-start item-center font-bold hollow-text ">DIGICHAMPS</h1>
      {/* hero and About Section */}
      <div className=' '>
      <div className="relative w-[90%] h-[1/4] m-auto  bg-black bg-opacity-50">
        <img
          src="/assets/images/digichamps.png"
          alt="Digicamps banner"
          className="object-cover w-full m-auto"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center">
         
        </div> */}
      </div>
      </div>
      <div className="flex justify-center items-center h-full w-full  mt-5 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl h-fit mx-auto bg-black p-6 rounded-lg">
          {/* Left Column with Random Image */}
          <div className="flex justify-center items-center">
            <img 
              src="/assets/images/initial_card_image.png" 
              alt="Random Image" 
              width={400}
              height={500}
              className="rounded-lg"
            />
          </div>

          {/* Right Column with Text and Button */}
          <div className="flex flex-col justify-center items-start p-6">
            <h2 className=" text-graysubheading text-6xl font-bold mb-4 hollow-text flex justify-center">About Digichamps</h2>
            <p className="text-graysubheading mb-6">
              Our Programme emphasizes providing you with practical skills and real-world experience in the dynamic fields of online presence, creative promotion, and visual storytelling.
            </p>
          </div>
        </div>
      </div>

      {/* Who can participate Section with Image circle */}
      <section className="p-8">
        <h2 className="text-6xl font-bold mb-8 flex justify-center hollow-text">Who Can Participate</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {['Professionals', 'Startups', 'Innovators', 'Freelancers'].map((role) => (
            <div key={role} className="flex flex-col items-center justify-center">
              <div className="w-52 h-52 bg-neutral-100 rounded-full flex items-center justify-center">
                <img src={`/assets/images/${role.toLowerCase()}-icon.png`} alt={role} className="text-black w-12 h-12"/>
              </div>
              <p className="mt-4 font-bold text-graysubheading text-2xl">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application form section */}
      <section className="p-1  justify-center">
        <h2 className="text-6xl ml-8 font-bold hollow-text flex justify-center">How To Participate?</h2>
        <div className="p-8 mt-4 flex max-w-8xl justify-evenly">
          <Form />
        </div>
      </section>

      {/* Benefits Banner section */}
      <section className="p-8 justify-center items-center">
        <h2 className="text-6xl mb-8 text-center font-bold hollow-text">Benefits</h2>
        <div>
          <BenefitsBanner/>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="p-8 justify-center items-center">
        <h2 className="text-6xl mb-8 text-center font-bold hollow-text">Frequently Asked Questions</h2>
        <p className="mt-4 text-lg text-gray-100 text-center">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
        <FAQ />
      </section>
    </div>
  );
};

export default Digichamps;
