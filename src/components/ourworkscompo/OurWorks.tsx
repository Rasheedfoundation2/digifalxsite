"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn"; // Ensure this is defined correctly
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"; // Ensure this is defined correctly
import LogoSection from "@/components/home/companyLogo";
import CaseStudies from "@/components/ourworkscompo/CaseStudies";

const projects = [
  {
    id: 1,
    title: "Email Marketing",
    category: "Marketing Agency",
    image: "/assets/images/img1.jpg",
  },
  {
    id: 2,
    title: "In the mountains",
    category: "$1299 / night",
    image: "/assets/images/img2.jpg",
  },
  {
    id: 3,
    title: "In the mountains",
    category: "$1299 / night",
    image: "/assets/images/img3.jpg",
  },
  {
    id: 4,
    title: "In the mountains",
    category: "$1299 / night",
    image: "/assets/images/img4.jpg",
  },
  {
    id: 5,
    title: "In the mountains",
    category: "$1299 / night",
    image: "/assets/images/img5.jpg",
  },
  {
    id: 6,
    title: "In the mountains",
    category: "$1299 / night",
    image: "/assets/images/img1.jpg",
  },
];

const logos = [
  { src: "/assets/images/creative.png" },
  { src: "/assets/images/brandname.png" },
  { src: "/assets/images/brandagency.png" },
  { src: "/assets/images/Zinaco.png" },
  { src: "/assets/images/maxis.png" },
  { src: "/assets/images/creative.png" },
];

const caseStudies = [
  "DIGIFALX HELPS MORE COMPANIES GROW FASTER",
  "DIGIFALX HELPS MORE COMPANIES GROW BETTER",
  "DIGIFALX HELPS MORE COMPANIES GET TOGETHER",
  "DIGIFALX HELPS MORE COMPANIES MAKE A BIGGER CHANGE",
];

const backgroundColors = [
  "#6A0DAD",
  "#7B68EE",
  "#8A2BE2",
  "#9370DB",
];

export function OurWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCaseStudy = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextCaseStudy, 5000); // Increased interval duration for slower animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white relative min-h-screen overflow-x-hidden">
      {/* Vertical Text Section */}
      <div className="sm:absolute sm:top-1/2 sm:left-0 transform sm:-rotate-90 sm:origin-top-left sm:-translate-y-1/2 w-full text-center sm:text-left sm:w-auto">
        <h1 className="hollow-text text-6xl sm:text-8xl">Our Works</h1>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto py-8 px-4 sm:ml-20">
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center sm:items-stretch">
          {projects.map((project) => (
            <DirectionAwareHover key={project.id} imageUrl={project.image}>
              <div className="bg-white text-black rounded-lg overflow-hidden w-full max-w-xs">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={400}
                  width={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-4">
                  <p className="text-lg font-bold">{project.title}</p>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </DirectionAwareHover>
          ))}
        </div>
      </div>

      {/* Logos Section */}
     <div>
      <LogoSection/>
     </div>

      {/* Case Studies Section */}
      <div>
        <CaseStudies/>
      </div>
    </div>
  );
}

export default OurWorks;
