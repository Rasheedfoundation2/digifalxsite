import React from "react";
import OurWorks from "@/components/ourworkscompo/OurWorks";
import Banner from "@/components/ourworkscompo/Banner";
import LogoSection from "@/components/home/companyLogo";

const OurWorksPage = () => {
  return (
    <div className="bg-black">
      {/* Vertical Text Section */}

      <div className="flex items-center justify-center pt-10 pb-10">
        <h2 className="hollow-text text-6xl lg:text-8xl font-extrabold leading-none">
          Our Works
        </h2>
      </div>

      {/* Our Works Card */}
      <div>
        <OurWorks />
      </div>

      {/*Company Logos Section */}
      <div>
        <LogoSection />
      </div>
      {/* Banner Section */}
      <Banner />
    </div>
  );
};

export default OurWorksPage;
