"use client";
import React from "react";
import ServiceCard from "@/components/servicespage/ServiceCard";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const services = [
  {
    title: "SEO",
    image: "/assets/images/Digital Marketing/SEO.webp",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Link Building",
      "Content Strategy",
      "Analytics and Reporting",
    ],
  },
  {
    title: "PPC",
    image: "/assets/images/Digital Marketing/PPC.webp",
    features: [
      "Campaign Management",
      "Keyword Selection",
      "Ad Creation",
      "Bid Management",
      "Performance Tracking",
    ],
  },
  {
    title: "Influencer",
    image: "/assets/images/Digital Marketing/Influencer.webp",
    features: [
      "Influencer Outreach",
      "Content Collaboration",
      "Campaign Strategy",
      "Engagement Analysis",
      "Brand Alignment",
    ],
  },
  {
    title: "SMM",
    image: "/assets/images/Digital Marketing/SMM.webp",
    features: [
      "Social Media Strategy",
      "Content Creation",
      "Community Management",
      "Ad Campaigns",
      "Performance Analytics",
    ],
  },
  {
    title: "Email",
    image: "/assets/images/Digital Marketing/Email.webp",
    features: [
      "Email Campaign Strategy",
      "List Management",
      "Template Design",
      "A/B Testing",
      "Analytics and Reporting",
    ],
  },
];

const Services1: React.FC = () => {
  return (
    // <div className="min-h-full">
    //   <h1 className="text-whiteheading text-center text-7xl py-5 hollow-text">
    //     {" "}
    //     Digital Marketing
    //   </h1>
    //   <div className="flex flex-wrap justify-center">
    //     {services.map((service) => (
    //       <ServiceCard
    //         key={service.title}
    //         title={service.title}
    //         image={service.image}
    //         features={service.features}
    //       />
    //     ))}
    //   </div>
    // </div>
    
    // new
    <div className="py-10 bg-black relative overflow-hidden">
    {/* Main content */}
    <div className="w-full overflow-hidden">
      <div className="flex justify-center w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <BackgroundGradient
              key={index}
              className="flex flex-col justify-between h-full p-4 sm:p-6 md:p-8 lg:p-10 bg-graycard"
            >
              <Image
                src={service.image}
                alt={service.title}
                height={300}
                width={300}
                className="object-contain w-full"
              />
              <div>
                <p className="text-sm sm:text-base md:text-xl text-whiteheading mt-4 mb-2">
                  {service.title}
                </p>
                {/* <p className="text-xs sm:text-sm md:text-base text-graysubheading"> */}
                  {service.features}
                {/* </p> */}
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
      @media (max-width: 1024px) {
        .our-services-text {
          position: static;
          transform: none;
          text-align: center;
          margin-bottom: 20px;
          width: 100%;
          -rotate-90: none;
          origin-top-left: none;
        }
      }
    `}</style>
  </div>

    

  );
};

export default Services1;
