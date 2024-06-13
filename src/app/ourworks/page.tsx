import React from 'react';
import OurWorks from '@/components/ourworkscompo/OurWorks';
import Banner from "@/components/ourworkscompo/Banner"
import LogoSection from "@/components/home/companyLogo";

const OurWorksPage = () => {
  return (
    <div className='bg-black'>
      {/* Vertical Text Section */}
      <div className="lg:flex mt-10 ">
        <div className="lg:flex items-center justify-center lg:w-44 lg:flex-shrink-0 text-center">
          <h2 className="hollow-text text-6xl text-inherit lg:text-8xl lg:left-40 font-extrabold lg:-rotate-90 whitespace-nowrap leading-none">
              Our Works
          </h2>
        </div>

        {/* Our Works Card */}
        <div>
            <OurWorks/> 
        </div>
      </div> 

      {/*Company Logos Section */}
      <div>
        <LogoSection/>
      </div>
      {/* Banner Section */}
      <Banner/>
    </div>
  );
};

export default OurWorksPage;
