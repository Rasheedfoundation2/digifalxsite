"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function OurProjects() {
  const services = [
    {
      title: "Digital Marketing Services",
      description: "Comprehensive consultancy services covering digital strategy, market analysis, and campaign optimization, ensuring alignment with business objectives and maximizing ROI.",
      image: "/assets/images/img1.jpg",
    },
    {
      title: "Web Design & Development",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/assets/images/img2.jpg",
    },
    {
      title: "Web Design & Development",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/assets/images/img3.jpg",
    },
    {
      title: "Web Design & Development",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/assets/images/img4.jpg",
    },
    {
      title: "Web Design & Development",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/assets/images/img5.jpg",
    },
    {
      title: "Web Design & Development",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/assets/images/img1.jpg",
    },
    // Add other services here...
  ];


  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    const slider = scrollRef.current;
    slider.isDown = false;
  };

  const handleMouseUp = () => {
    const slider = scrollRef.current;
    slider.isDown = false;
  };

  const handleMouseMove = (e) => {
    const slider = scrollRef.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 0.05; // Adjust this value for slower or faster scrolling
    slider.scrollLeft = slider.scrollLeft - walk;
  };

  return (
    <div className="py-12 bg-black text-center">
      <div className="mt-10 flex flex-col lg:flex-row items-center">
        <div className="hidden lg:block text-left lg:mr-1"> {/* Further reduced margin-right */}
          <p className="hollow-text text-7xl font-extrabold -rotate-90 whitespace-nowrap">
            Our Works
          </p>
        </div>
        <div
          className="w-full lg:w-3/4 overflow-hidden cursor-grab"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex space-x-1 p-1"> {/* Further reduced space-x and padding */}
            {services.map((service, index) => (
              <div key={index} className="flex-none w-80 h-[28rem]"> {/* Increased height */}
                <div className="rounded-[30px] w-full h-full p-4 sm:p-6 bg-neutral-300 dark:bg-neutral-300 mx-auto transition-all duration-300 hover:bg-gray-200 flex flex-col justify-between">
                  <div className="flex-grow flex justify-center items-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      height="300"
                      width="300"
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-left mt-4">
                    <p className="text-lg sm:text-xl text-black dark:text-neutral-200">
                      {service.title}
                    </p>
                    <p className="text-sm text-black dark:text-neutral-400 mt-2">
                      {service.description}
                    </p>
                    <button className="rounded-full px-4 py-2 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                      <span>Click here</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href="/ourworks" className="px-4 py-2 rounded-md border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All Projects
        </Link>
      </div>
    </div>
  );
}

export default OurProjects;