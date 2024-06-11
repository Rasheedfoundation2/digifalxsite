"use client";
import React, { useRef, useEffect } from "react";
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
      title: "UI/ UX Development",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/assets/images/img2.jpg",
    },
    {
      title: "Web Development",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/assets/images/img3.jpg",
    },
    {
      title: "Social Branding",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/assets/images/img4.jpg",
    },
    {
      title: "Web Design",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/assets/images/img5.jpg",
    },
    {
      title: "E-commerce",
      description: "Creating a face for the brand with seamless integration ultimately helps build a strong connection with your audience. Moreover, it enhances brand recognition and fosters loyalty.",
      image: "/assets/images/img1.jpg",
    },
    // Add other services here...
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
    <div className="bg-black text-center mt-10 mb-10">
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
              <div key={index} className="flex-none w-80 h-[28rem]">
                <div className=" w-full h-full p-4 bg-graycard dark:bg-neutral-00 mx-auto transition-all duration-300 hover:bg-neutral-800 flex flex-col justify-between">
                  <div className="flex-grow flex justify-evenly">
                    <Image
                      src={service.image}
                      alt={service.title}
                      height="400"
                      width="400"
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-lg sm:text-xl text-whiteheading">
                      {service.title}
                    </p>
                    <p className="text-sm text-graysubheading mt-2">
                      {service.description}
                    </p>
                    <div className="flex justify-center items-center">
                      <button className="rounded-full justify-center px-4 py-2 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                        <span>Click here</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 text-center">
        <Link
          href="/ourworks"
          className="px-4 py-2 rounded-md border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}

export default OurProjects;
