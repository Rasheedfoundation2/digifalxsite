"use client";
// components/TeamCarousel.tsx

// components/Carousel.tsx

import React from 'react';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import 'react-multi-carousel/lib/styles.css';
import { teamMembers } from '@/components/aboutpage/TeamMembers';
import { FaFacebook, FaLinkedin  } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

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
  
    <Carousel responsive={responsive}>
      {teamMembers.map((member) => (
        <div key={member.id} className="p-8">
          <div className="bg-graycard rounded-lg shadow-md overflow-hidden m-12 transform hover:scale-105 hover:shadow-xl duration-300  ">
            <img src={member.image} alt={member.name} className="w-full h-80  object-fit rounded-lg mb-4 justify-center" />
            <div className="p-4">
              <h3 className="text-xl text-center text-graysubheading font-bold mb-1">{member.name}</h3>
              <p className="text-graysubheading mb-4 text-center">{member.title}</p>
              <div className="mt-2 flex space-x-2 justify-center">
                {member.facebook && <a href={member.facebook} className="text-blue-600"><FaFacebook/></a>}
                {member.twitter && <a href={member.twitter} className="text-blue-400"><BsTwitterX/></a>}
                {member.linkedin && <a href={member.linkedin} className="text-blue-700"><FaLinkedin/></a>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TeamCarousel;
