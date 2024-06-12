"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";


function OurServices() {
  const services = [
    {
      title: "Digital Branding and Communication",
      description: "Comprehensive consultancy services covering digital strategy, market analysis, and campaign optimization, ensuring alignment with business objectives and maximizing ROI.",
      image: "/assets/Images/img1.jpg",
      link: "/servicespage/digitalbranding",
    },
    {
      title: "UI/UX",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/assets/Images/img2.jpg",
      link: "/servicespage/ui-ux",
    },
    {
      title: "Web Development",
      description: "Tailored strategies enhance the online visibility of the website, driving organic traffic and improving search rankings through on-page optimization, content creation, and analytics.",
      image: "/assets/Images/img3.jpg",
      link: "/servicespage/web-development",
    },
    {
      title: "E-Commerce",
      description: "Harness the power of influencers to amplify your brand’s message. We identify, engage, and manage influencer partnerships for maximum impact and brand alignment.",
      image: "/assets/Images/img4.jpg",
      link: "/servicespage/e-commerce",
    },
    {
      title: "Digital Marketing",
      description: "Synonymous with affiliate marketing, PPC is renowned for delivering highly instantaneous results. Hence, it’s hailed as the epitome.",
      image: "/assets/Images/img1.jpg",
      link: "/servicespage/digital-marketing",
    },
  ];

  return (
    <div className="py-10 bg-black relative overflow-hidden">
      {/* Main content */}
      <div className="w-full overflow-hidden">
        <div className="flex justify-center w-full max-w-screen-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <BackgroundGradient key={index} className="flex flex-col justify-between h-full p-4 sm:p-6 md:p-8 lg:p-10 bg-graycard">
                  <Image
                    src={service.image}
                    alt={service.title}
                    height={100}
                    width={300}
                    className="object-contain w-full"
                  />
                  <div>
                    <p className="text-sm sm:text-base md:text-xl text-whiteheading mt-4 mb-2">
                      {service.title}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-graysubheading">
                      {service.description}
                    </p>
                  </div>
                  <Link href={service.link}>
                  <button className="px-6 py-2 mt-4 bg-black text-graysubheading  outline outline-offset-2 outline-white  hover:text-white hover:outline hover:outline-BlueNew transition-colors">
                    <span>View Details</span>
                  </button>
                  </Link>
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
}

export default OurServices;
