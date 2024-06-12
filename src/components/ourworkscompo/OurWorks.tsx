"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn"; // Ensure this is defined correctly
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"; // Ensure this is defined correctly



const projects = [
  {
    id: 1,
    title: "Rasheed Foundation",
    category: "Marketing services",
    image: "/assets/images/img1.jpg",
  },
  {
    id: 2,
    title: "RB-Royal Services",
    category: "Social Marketing",
    image: "/assets/images/img2.jpg",
  },
  {
    id: 3,
    title: "XYZ Real Estate",
    category: "Web development",
    image: "/assets/images/img3.jpg",
  },
  {
    id: 4,
    title: "Zara",
    category: "E-commerce / UI-UX",
    image: "/assets/images/img4.jpg",
  },
  {
    id: 5,
    title: "abc clinic",
    category: "Digital marketing",
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

export function OurWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-black text-white w-[100%] ">
      {/* Projects Grid */}
      <div className="flex lg:pl-52 py-8 justify-center items-center ">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:justify-items-streatch justify-center items-center">
          {projects.map((project) => (
            <DirectionAwareHover key={project.id} imageUrl={project.image}>
              <div className="bg-graycard overflow-hidden w-full max-w-xs">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={300}
                  width={300}
                  className="object-cover w-full h-64"
                />
                <div className="p-4">
                  <p className="text-lg font-bold text-whiteheading">{project.title}</p>
                  <p className="text-sm text-graysubheading">{project.category}</p>
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
