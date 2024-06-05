"use client"
import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft ,  FaArrowAltCircleRight } from "react-icons/fa";

const caseStudies = [
  "DIGIFALX HELPS MORE COMPANIES GROW FASTER",
  "DIGIFALX HELPS MORE COMPANIES GROW BETTER",
  "DIGIFALX HELPS MORE COMPANIES GET TOGETHER",
  "DIGIFALX HELPS MORE COMPANIES MAKE A BIGGER CHANGE",
];

const backgroundColors = [
  "#27BC9E", // Hex color for bg-purple-800
  "#27BC9E", // Hex color for bg-purple-600
  "#27BC9E", // Hex color for bg-purple-700
  "#27BC9E", // Hex color for bg-purple-500
];

const CaseStudies = () => {
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
    const interval = setInterval(nextCaseStudy, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h1 className="hollow-text text-7xl font-bold mt-4">Case Studies</h1>
      <section
        style={{ backgroundColor: backgroundColors[currentIndex] }}
        className="py-12 relative transition-colors duration-1000"
      >
        <div className="text-3xl mt-10 font-extrabold text-white">
          {caseStudies[currentIndex]}
        </div>
        <button
          className="case-studies-btn left-0 top-1/2 lg:transform lg:-translate-y-1/2 lg:ml-16"
          onClick={prevCaseStudy}
        >
          <FaArrowAltCircleLeft  className="lg:h-24 lg:w-24 sm:w-10 sm:h-10"/>
        </button>
        <button
          className="case-studies-btn right-0 top-1/2 lg:transform lg:-translate-y-1/2 lg:mr-16"
          onClick={nextCaseStudy}
        >
          <FaArrowAltCircleRight className="lg:h-24 lg:w-24 sm:w-10 sm:h-10"/>
        </button>
        <style jsx>{`
          .case-studies-btn {
            position: absolute;
            border: none;
            cursor: pointer;
            padding: 10px;
            border-radius: 10px;
          }
          .case-studies-btn:hover {
            background-color: #d08bb6;
          }
        `}</style>
      </section>
    </div>
  );
};

export default CaseStudies;
