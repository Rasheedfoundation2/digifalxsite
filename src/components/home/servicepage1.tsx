"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  { name: 'Digital Marketing Services', link: '/Digitalmarketing' },
  { name: 'Web Design & Development', link: '/web-development' },
  { name: 'Search Engine Optimization', link: '/seo-icon' },
  { name: 'Influencer Management', link: '/influencer' },
  { name: 'Pay-per-click Advertising', link: 'Pay-per-click' },
];

const ServiceItem = ({ service, onMouseEnter, onMouseLeave }) => (
  <div
    onMouseEnter={() => onMouseEnter(service.name)}
    onMouseLeave={onMouseLeave}
    className="text-3xl font-bold cursor-pointer hover:underline my-4 transition-colors duration-300"
  >
    <Link href={service.link}>
      {service.name}
    </Link>
  </div>
);

const Services = () => {
  const [background, setBackground] = useState('/assets/images/img1.jpg'); // Default image

  const handleMouseEnter = (serviceName) => {
    const backgroundImageMap = {
      'Digital Marketing Services': '/assets/images/img1.jpg',
      'Web Design & Development': '/assets/images/img2.jpg',
      'Search Engine Optimization': '/assets/images/img3.jpg',
      'Influencer Management': '/assets/images/img4.jpg',
      'Pay-per-click Advertising': '/assets/images/img5.jpg',
    };

    const newBackground = backgroundImageMap[serviceName] || '/assets/images/image.png';
    console.log(`Setting background for ${serviceName} to ${newBackground}`);
    setBackground(newBackground);
  };

  const handleMouseLeave = () => {
    console.log('Reverting to default background');
    setBackground('/assets/images/img1.jpg'); // Revert to default image
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 transition-all duration-500 ease-in-out">
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 ease-in-out"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center h-full p-10 bg-black bg-opacity-50 text-white whitespace-wrap">
        <h1 className="hollow-text mb-10 text-8xl font-semibold text-lime-400">
          Our Services
        </h1>
        {services.map((service) => (
          <ServiceItem
            key={service.name}
            service={service}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
