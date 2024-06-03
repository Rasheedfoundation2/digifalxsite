"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Import the useRouter hook
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"; // Ensure this is defined correctly
import LogoSection from "@/components/home/companyLogo";
import CaseStudies from "@/components/ourworkscompo/CaseStudies";

const projects = [
  {
    id: 1,
    title: "Email Marketing",
    category: "Marketing",
    image: "/assets/images/img1.jpg",
  },
  {
    id: 2,
    title: "UI/UX Design",
    category: "UI/UX Design",
    image: "/assets/images/img2.jpg",
  },
  {
    id: 3,
    title: "SEO",
    category: "Web Design",
    image: "/assets/images/img3.jpg",
  },
  {
    id: 4,
    title: "Influencer Management",
    category: "Influencer",
    image: "/assets/images/img4.jpg",
  },
  {
    id: 5,
    title: "Pay-per-click",
    category: "Pay",
    image: "/assets/images/img5.jpg",
  },
  {
    id: 6,
    title: "Digital marketing services",
    category: "Digital",
    image: "/assets/images/img1.jpg",
  },
];

const categoryMapping = {
  "UI/UX Design": ["UI/UX Design"],
  "Mobile Apps": ["Pay", "Digital"],
  "Web Design": ["UI/UX Design", "Marketing", "Web Design"], // Includes UI/UX Design, Marketing, and Web Design
  "Marketing": ["Marketing"],
};

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

export function OurWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter(); // Initialize the useRouter hook
  const { category } = router.query;
  const [selectedCategory, setSelectedCategory] = useState(category || "");

  useEffect(() => {
    setSelectedCategory(category || "");
  }, [category]);

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

  const filteredProjects = selectedCategory
    ? projects.filter((project) =>
        categoryMapping[selectedCategory].includes(project.category)
      )
    : projects;

  const handleCategoryClick = (category) => {
    router.push({
      pathname: router.pathname,
      query: { category },
    });
  };

  return (
    <div className="bg-black text-white relative min-h-screen overflow-x-hidden">
      {/* Vertical Text Section */}
      <div className="sm:absolute sm:top-1/2 sm:left-0 transform sm:-rotate-90 sm:origin-top-left sm:-translate-y-1/2 w-full text-center sm:text-left sm:w-auto">
        <h1 className="text-6xl sm:text-8xl font-bold text-lime-400">Our Works</h1>
      </div>

      {/* Navigation Section */}
      <div className="container mx-auto py-4 px-4 sm:ml-20">
        <nav className="flex justify-center space-x-4">
          <button
            className={`text-white border-b-2 border-transparent hover:border-blue-400 ${!selectedCategory ? 'border-blue-400' : ''}`}
            onClick={() => handleCategoryClick("")}
          >
            All
          </button>
          <button
            className={`text-white border-b-2 border-transparent hover:border-blue-400 ${selectedCategory === "UI/UX Design" ? 'border-blue-400' : ''}`}
            onClick={() => handleCategoryClick("UI/UX Design")}
          >
            UI/UX Design
          </button>
          <button
            className={`text-white border-b-2 border-transparent hover:border-blue-400 ${selectedCategory === "Mobile Apps" ? 'border-blue-400' : ''}`}
            onClick={() => handleCategoryClick("Mobile Apps")}
          >
            Mobile Apps
          </button>
          <button
            className={`text-white border-b-2 border-transparent hover:border-blue-400 ${selectedCategory === "Web Design" ? 'border-blue-400' : ''}`}
            onClick={() => handleCategoryClick("Web Design")}
          >
            Web Design
          </button>
          <button
            className={`text-white border-b-2 border-transparent hover:border-blue-400 ${selectedCategory === "Marketing" ? 'border-blue-400' : ''}`}
            onClick={() => handleCategoryClick("Marketing")}
          >
            Marketing
          </button>
        </nav>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto py-8 px-4 sm:ml-20">
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center sm:items-stretch">
          {filteredProjects.map((project) => (
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
        <LogoSection />
      </div>

      {/* Case Studies Section */}
      <div>
        <CaseStudies />
      </div>
    </div>
  );
}

export default OurWorks;
