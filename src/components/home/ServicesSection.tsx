"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Service = {
  name: string;
  link: string;
};

const services: Service[] = [
  {
    name: "Digital Branding & Communication Services",
    link: "/servicespage/digitalbranding",
  },
  { name: "UI / UX Services", link: "/servicespage/ui-ux" },
  { name: "Web Development", link: "/servicespage/web-development" },
  { name: "E-Commerce", link: "/servicespage/e-commerce" },
  { name: "Digital Marketing", link: "/servicespage/digital-marketing" },
];

type ServiceItemProps = {
  service: Service;
  onMouseEnter: (serviceName: string) => void;
  onMouseLeave: () => void;
};

const ServiceItem: React.FC<ServiceItemProps> = ({
  service,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    onMouseEnter={() => onMouseEnter(service.name)}
    onMouseLeave={onMouseLeave}
    className="text-3xl font-bold cursor-pointer hover:underline my-4 transition-colors duration-300"
  >
    <Link href={service.link}>{service.name}</Link>
  </div>
);

const Services: React.FC = () => {
  const [background, setBackground] = useState<string | null>(null); // No default image

  const handleMouseEnter = (serviceName: string) => {
    const backgroundImageMap: { [key: string]: string } = {
      "Digital Branding & Communication Services":
        "/assets/Images/branding.webp",
      "UI / UX Services": "/assets/images/ui-ux.webp",
      "Web Development": "/assets/Images/web-development.webp",
      "E-Commerce": "/assets/Images/ecommerce.webp",
      "Digital Marketing": "/assets/Images/digital-marketing.webp",
    };

    const newBackground = backgroundImageMap[serviceName] || null;
    setBackground(newBackground);
  };

  const handleMouseLeave = () => {
    setBackground(null); // Remove background on mouse leave
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {background && (
        <div className="absolute inset-0">
          <Image
            src={background}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500 ease-in-out"
            priority={true}
          />
        </div>
      )}
      <div className="relative z-10 lg:flex lg:justify-left h-full shadow-[inset_150px_0px_30px_29px_#412D86F4] shadow-black opacity-70 text-white whitespace-wrap">
        <div className="flex items-center justify-center lg:w-44 lg:flex-shrink-0">
          <h2 className="hollow-text text-6xl text-inherit lg:text-8xl lg:left-40 font-extrabold lg:-rotate-90 whitespace-nowrap leading-none">
            Services
          </h2>
        </div>
        <div className="mt-[12%] space-y-10">
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
