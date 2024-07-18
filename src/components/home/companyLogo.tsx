"use client";
import React from "react";
import Image from "next/image";

const logos = [
  { src: "/assets/images/company_logo/rb.svg" },
  { src: "/assets/images/company_logo/mag.svg" },
  { src: "/assets/images/company_logo/aams.svg" },
  { src: "/assets/images/company_logo/anagal.svg" },
  { src: "/assets/images/company_logo/aiz.svg" },
  { src: "/assets/images/company_logo/nagma.svg" },
  { src: "/assets/images/company_logo/Lyuka Global.svg" },
  { src: "/assets/images/company_logo/ihhc.svg" },
  { src: "/assets/images/company_logo/lukamed.svg" },
  { src: "/assets/images/company_logo/mchomes.svg" },
  { src: "/assets/images/company_logo/mchs.svg" },
  { src: "/assets/images/company_logo/mci.svg" },
  { src: "/assets/images/company_logo/mgmt.svg" },
  { src: "/assets/images/company_logo/Dhiman GLobal.svg" },
  { src: "/assets/images/company_logo/Dr.Chandani's Swasthya Clinic.svg" },
  { src: "/assets/images/company_logo/Pakalsafa.svg" },
];

function LogoSection() {
  return (
    <div className="mt-16 text-white text-center bg-black mb-10">
      <p className="mb-2 text-graysubheading text-2xl">
        POWERED BY DIGIFALX
      </p>
      <div className="overflow-hidden">
        <div className="flex animate-scroll space-x-8">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex-none w-48 h-48 flex justify-center items-center"
            >
              <Image
                src={logo.src}
                alt={`Logo ${index}`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default LogoSection;
