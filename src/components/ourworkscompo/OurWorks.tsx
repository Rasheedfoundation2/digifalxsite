"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn"; // Ensure this is defined correctly
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"; // Ensure this is defined correctly



const projects = [
  {
    id: 1,
    title: "RB Royal Services",
    category: "Website Development",
    image: "/assets/images/Rb Royal Service.webp",
  },
  {
    id: 2,
    title: "Dr.Nagma's DerMed Clinic",
    category: "Social Media Management",
    image: "/assets/images/Dr.Nagma's Dermed Clinic.webp",
  },
  {
    id: 3,
    title: "Dr.Chandani's Swasthya Clinic",
    category: "Social Media Management",
    image: "/assets/images/Dr.Chandani's Swasthya Clinic.webp",
  },
  {
    id: 4,
    title: "Janvika Food Hub",
    category: "Social Media Management",
    image: "/assets/images/Janvika Food Hub.webp",
  },
  {
    id: 5,
    title: "MCI",
    category: "Website Development & Social Media",
    image: "/assets/images/MCI.webp",
  },
  {
    id: 6,
    title: "MFI",
    category: "Website Development & Social Media",
    image: "/assets/images/MFI.webp",
  },
  {
    id: 7,
    title: "Dhiman Global",
    category: "Website Development",
    image: "/assets/images/Dhiman Global.webp",
  },
  {
    id: 8,
    title: "Lyuka Med",
    category: "Website Development & Social Media",
    image: "/assets/images/lyukamed.webp",
  },
  {
    id: 9,
    title: "Mag Food Stuff",
    category: "Website Development & Social Media",
    image: "/assets/images/Mag-Food.webp",
  },
  {
    id: 10,
    title: "MC Homes",
    category: "Website Development & Social Media",
    image: "/assets/images/MC Homes.webp",
  },
  {
    id: 11,
    title: "MCHS",
    category: "Website Development & Social Media",
    image: "/assets/images/mchs.webp",
  },
  {
    id: 12,
    title: "MGMT",
    category: "Website Development & Social Media",
    image: "/assets/images/mgmt.webp",
  },
  {
    id: 13,
    title: "Paak Al Safa",
    category: "Website Development & Social Media",
    image: "/assets/images/Paakalsafa.webp",
  },
  {
    id: 14,
    title: "TMRC FB",
    category: "Website Development & Social Media",
    image: "/assets/images/TMRC FB.webp",
  },
  {
    id: 15,
    title: "Rasheed Foundation",
    category: "Website Development & Social Media",
    image: "/assets/images/Rasheed-Foundation.webp",
  },
  {
    id: 16,
    title: "Infinite Home Health Care",
    category: "Website Development & Social Media",
    image: "/assets/images/Infinite Home Health Care.webp",
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
    <div className="bg-black text-white w-full">
    {/* Projects Grid */}
    <div className="flex justify-center items-center">
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center">
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
