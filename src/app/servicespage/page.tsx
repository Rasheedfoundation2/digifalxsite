
import React from 'react';
import OurServices from '@/components/servicespage/Services';
import Banner from '@/components/ourworkscompo/Banner';

const ServicesPage = () => {
  return (
    <div>
      <div className="lg:flex">
      {/* Rotated "Our Services" text */}
      <div className="lg:flex items-center justify-center lg:w-44 lg:flex-shrink-0">
        <h2 className="hollow-text text-6xl text-inherit lg:text-8xl lg:left-40 font-extrabold lg:-rotate-90 whitespace-nowrap leading-none">
              Our services
        </h2>
      </div>
        <div className="relative lg:mx-20">
            <OurServices />
        </div>
      </div> 
      <div className="mt-10">
        <Banner/>
      </div>
    </div>
  );
};

export default ServicesPage;
