import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";



function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] text-white w-full rounded-md flex 
    flex-col md:flex-row items-center justify-between relative overflow-hidden 
    mx-auto md:py-0 bg-black'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="grey"
      />
      <div className='p-4 relative z-2 w-full md:w-1/2 text-left md:ml-20'>
        <h1 className='p-2 mt-20 md:mt-0 text-4xl md:text-7xl 
        font-bold bg-clip-text text-transparent bg-gradient-to-b
        from-neutral-50 to-neutral-400'>
        DIGITAL MARKETING
        </h1>
        <p className='mt-4 font-normal text-base md:text-lg
        text-neutral-300 max-w-lg'>
          Unleash the power of Web Design and Digital Marketing with us
        </p>
        <div className='mt-4'>
          <Link href={"/aboutus"}>
          <Button
        borderRadius="0.25rem"
        className="font-semibold bg-black dark:bg-neutral-900 text-white  dark:text-white border-black border-4 dark:border-neutral-900">
        Lets Connect
      </Button>
          </Link>
        </div>
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
    </div>
  )
}

export default HeroSection;
