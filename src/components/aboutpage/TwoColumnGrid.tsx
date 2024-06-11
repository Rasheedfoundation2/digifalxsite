import React from 'react';
import Link from 'next/link';


const TwoColumnGrid: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full  bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl  h-fit mx-auto bg-graycard p-6  shadow-lg mt-16">
        {/* Left Column with Random Image */}
        <div className="flex justify-center items-center">
          <img 
            src="assets/images/initial_card_image.png" 
            alt="Random Image" 
            className="rounded-lg"
          />
        </div>

        {/* Right Column with Text and Button */}
        <div className="flex flex-col justify-center items-start p-6">
          <h1 className=" text-graysubheading text-2xl font-bold mb-4">Providing Brilliant ideas For your bussiness</h1>
          <p className="text-graysubheading mb-6">
          Offering unique and effective solutions thst go beyond conventional methods.The phrase implies that the agencys creative solutions are not just theoritical or abstract concepts but delever 
          </p>
          <Link href='/servicespage'>
            <button className="px-4 py-2 bg-gray text-white border-2 border-BlueNew transition duration-300 ease-in-out transform hover:bg-black hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.6)">
              Discover More 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnGrid;