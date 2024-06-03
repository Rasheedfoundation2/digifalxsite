// components/TestimonialCarousel.tsx
"use client";

import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ImageType = {
  src: string;
  alt: string;
  position: {
    x: number;
    y: number;
  };
};

type SlideType = {
  title: string;
  text: string;
  mainImage: {
    src: string;
    alt: string;
  };
  name: string;
  role: string;
  rating: number;
};

type TestimonialCarouselProps = {
  slides: SlideType[];
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-emerald-400 p-2 rounded-full"
      >
        &lt;
      </button>
      <div className="text-center p-10">
        <h2 className="text-3xl font-bold mb-4">{slides[activeSlide].title}</h2>
        <p className="text-lg mb-6">{slides[activeSlide].text}</p>
        <div className="mt-6">
          <img
            src={slides[activeSlide].mainImage.src}
            alt={slides[activeSlide].mainImage.alt}
            className="w-24 h-24 rounded-full mx-auto mb-2"
          />
          <h3 className="text-xl font-semibold">{slides[activeSlide].name}</h3>
          <p className="text-sm text-gray-600">{slides[activeSlide].role}</p>
          <div className="flex justify-center mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < slides[activeSlide].rating ? "text-yellow-500" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.168c.969 0 1.372 1.24.588 1.81l-3.366 2.451a1 1 0 00-.364 1.118l1.286 3.964c.3.921-.755 1.688-1.54 1.118L10 13.527l-3.366 2.451c-.785.57-1.84-.197-1.54-1.118l1.286-3.964a1 1 0 00-.364-1.118L3.65 9.391c-.784-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-emerald-400 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default TestimonialCarousel;