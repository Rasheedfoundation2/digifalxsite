"use client";
import React from "react";
import Image from "next/image";

const logos = [
  { src: "/assets/images/company_logo/client_2.png" },
  { src: "/assets/images/company_logo/client_3.png" },
  { src: "/assets/images/company_logo/client_4.png" },
  { src: "/assets/images/company_logo/client_5.png" },
  { src: "/assets/images/company_logo/client_6.png" },
];

function LogoSection() {
  return (
    <div className="mt-16 text-white text-center bg-black mb-10" >
      <p className="mb-2 text-graysubheading text-2xl">DIGIFALX HELPS MORE COMPANIES GROW FASTER</p>
      <div className="overflow-hidden">
        <div className="flex animate-scroll space-x-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex-none w-48 h-48 flex justify-center items-center grayscale-0">
              <Image src={logo.src} alt={`Logo ${index}`} width={100} height={100} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={index + logos.length} className="flex-none w-48 h-48 flex justify-center items-center">
              <Image src={logo.src} alt={`Logo ${index + logos.length}`} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
