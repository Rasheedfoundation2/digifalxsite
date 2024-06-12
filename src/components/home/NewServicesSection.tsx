"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle, Bs5Circle, BsArrowUpRight, BsArrowRight, BsArrowUpRightCircleFill } from 'react-icons/bs';

// Define the type for a service
type Service = {
  name: string;
  link: string;
};

const services: Service[] = [
  { name: 'Digital Branding & Communication Services', link: '/servicespage/digitalbranding' },
  { name: 'UI / UX Services', link: '/servicespage/ui-ux' },
  { name: 'Web Development', link: '/servicespage/web-development' },
  { name: 'E-Commerce', link: '/servicespage/e-commerce' },
  { name: 'Digital Marketing', link: '/servicespage/digital-marketing' },
];

const icons = [Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle, Bs5Circle];

type ServiceItemProps = {
  service: Service;
  index: number;
  onMouseEnter: (serviceName: string) => void;
  onMouseLeave: () => void;
  isHovered: boolean;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ service, index, onMouseEnter, onMouseLeave, isHovered }) => {
  const Icon = icons[index];
  const HoverIcon = isHovered ? BsArrowRight : BsArrowUpRight;

  return (
    <div
      onMouseEnter={() => onMouseEnter(service.name)}
      onMouseLeave={onMouseLeave}
      className="relative group text-xl md:text-3xl font-bold cursor-pointer transition-all duration-300 flex flex-col my-4 text-graysubheading"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon className="mr-2 text-2xl md:text-3xl" />
          <Link href={service.link} className="relative z-10 pr-10">
            {service.name}
          </Link>
        </div>
        <HoverIcon className={`ml-4 inline-block text-2xl md:text-3xl`} />
      </div>
      <div className="mt-6 w-full h-[2px] bg-slate-700"></div>
    </div>
  );
};

const Services: React.FC = () => {
  const [background, setBackground] = useState('/assets/images/img1.jpg'); // Default image
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleMouseEnter = (serviceName: string) => {
    const backgroundImageMap: { [key: string]: string } = {
      'Digital Branding & Communication Services': '/assets/images/img1.jpg',
      'UI / UX Services': '/assets/images/img2.jpg',
      'Web Development': '/assets/images/img3.jpg',
      'E-Commerce': '/assets/images/img4.jpg',
      'Digital Marketing': '/assets/images/img5.jpg',
    };

    const newBackground = backgroundImageMap[serviceName];
    if (newBackground) {
      setBackground(newBackground);
      setHoveredService(serviceName);
    }
  };

  const handleMouseLeave = () => {
    setBackground('/assets/images/img1.jpg'); // Revert to default image
    setHoveredService(null);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${hoveredService ? 'translate-x-0' : 'translate-x-full'}`}>
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 ease-in-out"
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row h-full bg-gradient-to-r from-black from-10% via-black via-30% to-transparent text-white">
        <div className="flex items-center justify-center w-full md:w-32 lg:w-44 flex-shrink-0 mb-10 md:mb-0">
          <h2 className="hollow-text text-7xl md:text-6xl lg:text-8xl font-extrabold md:-rotate-90 whitespace-nowrap leading-none">
            Services
          </h2>
        </div>
        <div className="flex flex-col justify-center mt-[1%] p-4 md:p-10">
          <div className="mb-4">
            <h3 className="text-5xl font-bold text-whiteheading">Provide Best Services</h3>
          </div>
          <div className="flex items-center mb-2 text-sm md:text-2xl font-bold text-graysubheading mt-4">
            View All Services
            <Link href="/servicespage">
              <BsArrowUpRightCircleFill className="text-xl md:text-2xl ml-2 text-graysubheading mt-1" />
            </Link>
          </div>
          <div className="w-full h-[2px] bg-slate-700 mb-4"></div> {/* Horizontal rule with reduced bottom margin */}
          {services.map((service, index) => (
            <ServiceItem
              key={service.name}
              index={index}
              service={service}
              onMouseEnter={() => handleMouseEnter(service.name)}
              onMouseLeave={handleMouseLeave}
              isHovered={hoveredService === service.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
