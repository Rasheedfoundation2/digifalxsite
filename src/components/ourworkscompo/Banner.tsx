import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';
const Banner = () => {
  return (
    <Link href="/contactus" className="block w-full   mx-auto">
      <div className="relative rounded-lg overflow-hidden bg-white h-56  ">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/img1.jpg')",
          }}
        ></div>
        <div className=" shadow-[inset_1px_4px_30px_29px_#412D86F4]  shadow-black  opacity-70 rounded-lg absolute top-0 left-0 w-full h-full"></div>
        <div className="relative p-6">
          <h2 className="text-white text-2xl lg:text-5xl font-bold mb-4 m-4 ml-12">Lets Make something</h2>
          <p className="text-white text-xl lg:text-3xl mb-4 m-6 ml-12">Great Together !   </p>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4  ">
            <div className="bg-transparent border-4 border-white rounded-full p-8 lg:mr-8 sm:mr-4">
              <MdOutlineArrowOutward className="lg:h-8 lg:w-8 sm:h-4 sm:w-4 text-white" />
            
            </div>
          </div>
        
          
        </div>
       
      </div>
    </Link>
  );
};

export default Banner;
