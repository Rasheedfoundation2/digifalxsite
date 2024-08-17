import React from "react";
import OurServices from "@/components/servicespage/Services";
import Banner from "@/components/ourworkscompo/Banner";

const ServicesPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Centered "Services" text */}
      <div className="flex items-center justify-center pt-10 pb-10">
        <h2 className="hollow-text text-6xl lg:text-8xl font-extrabold leading-none">
          Services
        </h2>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-20">
        <OurServices />
      </div>

      <div className="mt-10 px-4 sm:px-6 lg:px-20">
        <Banner />
      </div>
    </div>
  );
};

export default ServicesPage;
