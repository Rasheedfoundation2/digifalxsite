"use client";
import React from "react";
import Image from "next/image";

const logos = [
  { src: "/assets/images/img1.jpg" },
  { src: "/assets/images/img2.jpg" },
  { src: "/assets/images/img3.jpg" },
  { src: "/assets/images/img4.jpg" },
  { src: "/assets/images/img5.jpg" },
  { src: "/assets/images/img3.jpg" },
];

function LogoSection() {
  return (
    <div className="mt-10 text-white text-center bg-black">
      <p className="mb-4 text-white text-3xl">DIGIFALX HELPS MORE COMPANIES GROW FASTER</p>
      <div className="overflow-hidden">
        <div className="flex animate-scroll space-x-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex-none w-48 h-48 flex justify-center items-center">
              <Image src={logo.src} alt={`Logo ${index}`} width={200} height={200} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={index + logos.length} className="flex-none w-48 h-48 flex justify-center items-center">
              <Image src={logo.src} alt={`Logo ${index + logos.length}`} width={200} height={200} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
