"use client"
import React from 'react';
import ServiceCard from '@/components/servicespage/ServiceCard';

const services = [
  {
    title: 'WooCommerce',
    image:  '/assets/images/initial_card_image.png',
    features: [
      'Easy setup and installation',
      'Flexible customization options',
      'Robust product management',
      'Built-in payment gateways',
      'Scalable for small to large businesses'
    ]
  },
  {
    title: 'Shopify',
    image:  '/assets/images/initial_card_image.png',
    features: [
      'User-friendly interface',
      'Secure hosting and payments',
      'Responsive design templates',
      'Powerful SEO features',
      '24/7 customer support'
    ]
  },
  {
    title: 'Magento',
    image:  '/assets/images/initial_card_image.png',
    features: [
      'Highly customizable platform',
      'Scalable for growing businesses',
      'Advanced SEO capabilities',
      'Robust security features',
      'Extensive third-party integrations'
    ]
  }
];

const Services1: React.FC = () => {
  return (
    <div  className='min-h-full'> 
    <h1 className='text-white text-center text-7xl py-5 hollow-text'> E-Commerce</h1>
    <div className="flex flex-wrap justify-center">
      {services.map((service) => (
        <ServiceCard key={service.title} title={service.title} image={service.image} features={service.features} />
      ))}
    </div>
    </div>
  );
};

export default Services1;
