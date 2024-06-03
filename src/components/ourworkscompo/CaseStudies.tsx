import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowAltCircleLeft ,  FaArrowAltCircleRight } from "react-icons/fa";

const caseStudies = [
  "DIGIFALX HELPS MORE COMPANIES GROW FASTER",
  "DIGIFALX HELPS MORE COMPANIES GROW BETTER",
  "DIGIFALX HELPS MORE COMPANIES GET TOGETHER",
  "DIGIFALX HELPS MORE COMPANIES MAKE A BIGGER CHANGE",
];

const backgroundColors = [
  "#6A0DAD", // Hex color for bg-purple-800
  "#7B68EE", // Hex color for bg-purple-600
  "#8A2BE2", // Hex color for bg-purple-700
  "#9370DB", // Hex color for bg-purple-500
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
        <div className="mt-16 text-3xl font-extrabold text-white">
          {caseStudies[currentIndex]}
        </div>
        <button
          className="case-studies-btn left-0 top-1/2 transform -translate-y-1/2 ml-16"
          onClick={prevCaseStudy}
        >
          <FaArrowAltCircleLeft  className="w-24 h-24"/>
        </button>
        <button
          className="case-studies-btn right-0 top-1/2 transform -translate-y-1/2 mr-4"
          onClick={nextCaseStudy}
        >
          <FaArrowAltCircleRight className="h-24 w-24"/>
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
