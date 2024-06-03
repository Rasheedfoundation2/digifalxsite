"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";

function OurServices() {
  const services = [
    {
      title: "Digital Marketing Services",
      description: "Comprehensive consultancy services covering digital strategy, market analysis, and campaign optimization, ensuring alignment with business objectives and maximizing ROI.",
      image: "/jordans.webp",
    },
    {
      title: "Web Design & Development",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/jordans.webp",
    },
    {
      title: "Search Engine Optimization",
      description: "Tailored strategies enhance the online visibility of the website, driving organic traffic and improving search rankings through on-page optimization, content creation, and analytics.",
      image: "/jordans.webp",
    },
    {
      title: "Influencer Management",
      description: "Harness the power of influencers to amplify your brand’s message. We identify, engage, and manage influencer partnerships for maximum impact and brand alignment.",
      image: "/jordans.webp",
    },
    {
      title: "Pay-per-click Advertising",
      description: "Synonymous with affiliate marketing, PPC is renowned for delivering highly instantaneous results. Hence, it’s hailed as the epitome.",
      image: "/jordans.webp",
    },
    {
      title: "Content Marketing",
      description: "Utilize all-inclusive content strategy and marketing services to elevate mediocre material to outstanding levels. Consequently, enhances your brand.",
      image: "/jordans.webp",
    },
    {
      title: "Social Media Marketing",
      description: "By targeting the correct audience at the right time, we ensure visibility across all social media platforms. As a result, we maximize outreach.",
      image: "/jordans.webp",
    },
    {
      title: "E-mail Marketing",
      description: "Our suite of tailored solutions is designed to streamline your operations, enhance your productivity, and drive your goals towards success.",
      image: "/jordans.webp",
    },
  ];

  return (
    <div className="py-12 bg-black relative overflow-hidden">
      {/* Rotated "Our Services" text */}
      <div className="hollow-text our-services-text absolute left-14 top-[35%] transform -translate-y-1/2 -rotate-90 z-30  origin-top-left text-lime-400 text-7xl sm:text-7xl md:text-7xl font-bold tracking-wide whitespace-wrap">
        Our Services
      </div>

      {/* Main content */}
      <div className="w-full px-2 sm:px-0 overflow-hidden lg:ml-24">
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-screen-xl">
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
                  <button className="self-start rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Click here</span>
                  </button>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/Services" className="inline-block px-4 py-2 rounded-md border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
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
