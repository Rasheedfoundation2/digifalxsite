"use client";
// components/TeamCarousel.tsx

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { teamMembers } from '@/components/aboutpage/TeamMembers';
import { FaLinkedin } from 'react-icons/fa';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TeamCarousel: React.FC = () => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      containerClass="carousel-container"
      itemClass="carousel-item p-0 m-0"
      partialVisible={false}
      customTransition="transform 300ms ease-in-out"
    >
      {teamMembers.map((member) => (
        <React.Fragment key={member.id}>
          <div className="flex justify-center">
            <div className="bg-graycard rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl duration-300 w-full max-w-xs flex flex-col items-center m-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-t-lg mb-0"
              />
              <div className="p-4 text-center flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl text-whiteheading font-bold mb-1">{member.name}</h3>
                  <p className="text-graysubheading mb-4">{member.title}</p>
                </div>
                <div className="mt-2 flex space-x-2 justify-center">
                  {member.linkedin && (
                    <a href={member.linkedin} className="text-blue-700 hover:text-blue-500">
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </Carousel>
  );
};

export default TeamCarousel;
