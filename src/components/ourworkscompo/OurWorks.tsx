"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn"; // Ensure this is defined correctly
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"; // Ensure this is defined correctly



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
    <div className="bg-black text-white">
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto py-8 px-12">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 sm:justify-items-streatch">
          {projects.map((project) => (
            <DirectionAwareHover key={project.id} imageUrl={project.image}>
              <div className="bg-white text-black rounded-lg overflow-hidden w-full max-w-xs">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={300}
                  width={300}
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
    </div>
  );
}

export default OurWorks;
