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
      image: "/jordans.webp",
      link: "/servicespage/digitalbranding",
    },
    {
      title: "UI/UX",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/jordans.webp",
      link: "/servicespage/ui-ux",
    },
    {
      title: "Web Development",
      description: "Tailored strategies enhance the online visibility of the website, driving organic traffic and improving search rankings through on-page optimization, content creation, and analytics.",
      image: "/jordans.webp",
      link: "/servicespage/web-development",
    },
    {
      title: "E-Commerce",
      description: "Harness the power of influencers to amplify your brand’s message. We identify, engage, and manage influencer partnerships for maximum impact and brand alignment.",
      image: "/jordans.webp",
      link: "/servicespage/e-commerce",
    },
    {
      title: "Digital Marketing",
      description: "Synonymous with affiliate marketing, PPC is renowned for delivering highly instantaneous results. Hence, it’s hailed as the epitome.",
      image: "/jordans.webp",
      link: "/servicespage/digital-marketing",
    },
  ];

  return (
    <div className="py-10 bg-black relative overflow-hidden">
      {/* Main content */}
      <div className="w-full overflow-hidden">
        <div className="flex justify-center w-full max-w-screen-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <BackgroundGradient key={index} className="flex flex-col justify-between h-full rounded-[22px] p-4 sm:p-6 md:p-8 lg:p-10 bg-white dark:bg-zinc-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    height={200}
                    width={300}
                    className="object-contain w-full"
                  />
                  <div>
                    <p className="text-sm sm:text-base md:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {service.title}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                      {service.description}
                    </p>
                  </div>
                  <Link href={service.link}>
                  <button className="px-6 py-2 mt-4 bg-black text-white rounded-full outline outline-offset-2 outline-GreenNew-100 hover:bg-BlueNew-100 hover:text-white hover:outline hover:outline-black transition-colors">
                    <span>Click here</span>
                  </button>
                  </Link>
                </BackgroundGradient>
              ))}
            </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/Servicespage" className="inline-block px-4 py-2 rounded-full border-2 border-neutral-600 text-white bg-black hover:bg-BlueNew-100 transition duration-200">
            View All Services
          </Link>
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
