"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  { name: 'Digital Branding & Communication  Services', link: '/servicespage/digitalbranding' },
  { name: 'UI / UX Services', link: '/servicespage/ui-ux' },
  { name: 'Web Development', link: '/servicespage/web-development' },
  { name: 'E-Commerce', link: '/servicespage/e-commerce' },
  { name: 'Digital Marketing', link: '/servicespage/digital-marketing' },
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
      'Digital Branding & Communication  Services': '/assets/images/img1.jpg',
      'UI / UX Services': '/assets/images/img2.jpg',
      'Web Development': '/assets/images/img3.jpg',
      'E-Commerce': '/assets/images/img4.jpg',
      'Digital Marketing': '/assets/images/img5.jpg',
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
      <div className="relative z-10 lg:flex lg:justify-left h-full bg-black bg-opacity-50 text-white whitespace-wrap">
      <div className="flex items-center justify-center lg:w-44 lg:flex-shrink-0">
        <h2 className="hollow-text text-6xl text-inherit lg:text-8xl lg:left-40 font-extrabold lg:-rotate-90 whitespace-nowrap leading-none">
             Services
        </h2>
      </div>
      <div className='mt-[12%] space-y-10'>
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
    </div>
  );
};

export default Services;
