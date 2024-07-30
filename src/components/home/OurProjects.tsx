"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

function OurProjects() {
  const services = [
    {
      title: "RB Royal Services",
      description: "Website Development",
      image: "/assets/images/Rb Royal Service.webp",
    },
    {
      title: "Dr.Nagma's DerMed Clinic",
      description: "Social Media Management",
      image: "/assets/images/Dr.Nagma's Dermed Clinic.webp",
    },
    {
      title: "Dr.Chandani's Swasthya Clinic",
      description: "Social Media Management",
      image: "/assets/images/Dr.Chandani's Swasthya Clinic.webp",
    },
    {
      title: "Janvika Food Hub",
      description: "Social Media Management",
      image: "/assets/images/Janvika Food Hub.webp",
    },
    {
      title: "MCI",
      description: "Website Development & Social Media",
      image: "/assets/images/MCI.webp",
    },
    {
      title: "MFI",
      description: "Website Development & Social Media",
      image: "/assets/images/MFI.webp",
    },
    {
      title: "Dhiman Global",
      description: "Website Development",
      image: "/assets/images/Dhiman Global.webp",
    },
    {
      title: "Lyuka Med",
      description: "Website Development & Social Media",
      image: "/assets/images/lyukamed.webp",
    },
    {
      title: "Mag Food Stuff",
      description: "Website Development & Social Media",
      image: "/assets/images/Mag-Food.webp",
    },
    {
      title: "MC Homes",
      description: "Website Development & Social Media",
      image: "/assets/images/MC Homes.webp",
    },
    {
      title: "MCHS",
      description: "Website Development & Social Media",
      image: "/assets/images/mchs.webp",
    },
    {
      title: "MGMT",
      description: "Website Development & Social Media",
      image: "/assets/images/mgmt.webp",
    },
    {
      title: "Paak Al Safa",
      description: "Website Development & Social Media",
      image: "/assets/images/Paakalsafa.webp",
    },
    {
      title: "TMRC FB",
      description: "Website Development & Social Media",
      image: "/assets/images/TMRC FB.webp",
    },
    {
      title: "Rasheed Foundation",
      description: "Website Development & Social Media",
      image: "/assets/images/Rasheed-Foundation.webp",
    },
    {
      title: "Infinite Home Health Care",
      description: "Website Development & Social Media",
      image: "/assets/images/Infinite Home Health Care.webp",
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = scrollRef.current;
    let animationFrameId: number;
    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

    const startScroll = () => {
      let scrollAmount = 0;
      const scrollSpeed = 0.2; // Reduced speed of the scroll

      const scroll = () => {
        if (slider) {
          scrollAmount += scrollSpeed;
          slider.scrollLeft = scrollAmount;

          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
            scrollAmount = 0;
          }

          animationFrameId = requestAnimationFrame(scroll);
        }
      };

      scroll();
    };

    const handleMouseEnter = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };

    const handleMouseLeave = () => {
      startScroll();
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (slider) {
        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !slider) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    if (slider) {
      slider.addEventListener("mouseenter", handleMouseEnter);
      slider.addEventListener("mouseleave", handleMouseLeave);
      slider.addEventListener("mousedown", handleMouseDown);
      slider.addEventListener("mousemove", handleMouseMove);
      slider.addEventListener("mouseup", handleMouseUp);
      slider.addEventListener("mouseleave", handleMouseUp);
    }

    startScroll();

    return () => {
      if (slider) {
        slider.removeEventListener("mouseenter", handleMouseEnter);
        slider.removeEventListener("mouseleave", handleMouseLeave);
        slider.removeEventListener("mousedown", handleMouseDown);
        slider.removeEventListener("mousemove", handleMouseMove);
        slider.removeEventListener("mouseup", handleMouseUp);
        slider.removeEventListener("mouseleave", handleMouseUp);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-black text-center mt-10 mb-10 relative">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:flex items-center justify-center lg:w-44 lg:flex-shrink-0">
          <p className="hollow-text text-6xl text-inherit lg:text-8xl lg:left-40 font-extrabold lg:-rotate-90 whitespace-nowrap leading-none">
            Our Works
          </p>
        </div>
        <div
          id="carousel-container"
          className="w-full lg:w-[calc(100%-5rem)] overflow-hidden cursor-grab relative"
          ref={scrollRef}
        >
          <div id="carousel" className="flex space-x-1 p-1">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-none w-80 h-[26rem] relative group"
              >
                <div className="w-full h-full p-2 pb-8 bg-graycard grayscale hover:grayscale-0 dark:bg-neutral-00 mx-auto transition-all duration-300 hover:bg-neutral-800 flex flex-col justify-between relative">
                  <div className="flex-grow flex justify-evenly space">
                    <Image
                      src={service.image}
                      alt={service.title}
                      height="400"
                      width="400"
                      className="object-contain transition-all duration-300"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-lg sm:text-xl text-whiteheading">
                      {service.title}
                    </p>
                    <p className="text-sm text-graysubheading mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="z-20 sm:mt-16 lg:relative lg:right-20 lg:transform lg:-translate-y-1/2">
          <div className="border-8 border-white rounded-full p-10 lg:mr-2 sm:mr-4">
            <Link href="/ourworks">
              <MdOutlineArrowOutward className="lg:h-8 lg:w-8 sm:h-4 sm:w-4 text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="z-10 absolute top-0 lg:right-32 h-full w-32 lg:bg-gradient-to-l from-black pointer-events-none"></div>
    </div>
  );
}

export default OurProjects;
