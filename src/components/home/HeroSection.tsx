import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";



function HeroSection() {
  return (
    <div className='h-auto md:h-[42rem] text-white w-full rounded-md flex 
    flex-col md:flex-row items-center justify-between relative overflow-hidden 
    mx-auto md:py-0 bg-black'>
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="grey"
      />
      <div className='p-4 relative z-2 w-full md:w-1/2 text-left md:ml-20'>
      <div
          className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <h1 className='p-2 mt-20 md:mt-0 text-4xl md:text-7xl lg:text-7xl
        font-bold bg-clip-text text-transparent bg-gradient-to-b
        from-neutral-50 to-neutral-400'>
          SIMPLIFY YOUR DIGITAL SOULUTION WITH DIGIFALX
        </h1>
        <p className='mt-4 font-normal text-base md:text-lg
        text-neutral-300 max-w-lg'>
          -YOUR PARTNER IN DIGITAL EXCELLANCE AND UPSCALING THE BUSINESS TO NEXT LEVEL.
        </p>
        
      </div>
      <div className='relative z-2 w-full md:w-1/2 flex justify-center items-center'>
        <Image 
          src='/assets/images/digital-marketing.svg'// Path to the image in the public folder
          alt="Web Design and Development"
          width={500} // Adjust the width and height as needed
          height={500}
          // className="w-full max-w-md md:max-w-full md:h-auto"
        />
      </div>
      <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
    </div>
   </div> 
  )
}

export default HeroSection;
