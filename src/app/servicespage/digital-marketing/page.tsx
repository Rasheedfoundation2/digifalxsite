"use client"
import React from 'react';
import ServiceCard from '@/components/servicespage/ServiceCard';

const services = [
  {
    title: 'SEO',
    image: '/assets/images/Digital Marketing/SEO.webp',
    features: [
      'Keyword Research',
      'On-Page Optimization',
      'Link Building',
      'Content Strategy',
      'Analytics and Reporting',
    ],
  },
  {
    title: 'PPC',
    image: '/assets/images/Digital Marketing/PPC.webp',
    features: [
      'Campaign Management',
      'Keyword Selection',
      'Ad Creation',
      'Bid Management',
      'Performance Tracking',
    ],
  },
  {
    title: 'Influencer',
    image: '/assets/images/Digital Marketing/Influencer.webp',
    features: [
      'Influencer Outreach',
      'Content Collaboration',
      'Campaign Strategy',
      'Engagement Analysis',
      'Brand Alignment',
    ],
  },
  {
    title: 'SMM',
    image: '/assets/images/Digital Marketing/SMM.webp',
    features: [
      'Social Media Strategy',
      'Content Creation',
      'Community Management',
      'Ad Campaigns',
      'Performance Analytics',
    ],
  },
  {
    title: 'Email',
    image: '/assets/images/Digital Marketing/Email.webp',
    features: [
      'Email Campaign Strategy',
      'List Management',
      'Template Design',
      'A/B Testing',
      'Analytics and Reporting',
    ],
  },
];

const Services1: React.FC = () => {
  return (
    <div className='min-h-full'> 
      <h1 className='text-whiteheading text-center text-7xl py-5 hollow-text'> Digital Marketing</h1>
    <div className="flex flex-wrap justify-center">
      
      {services.map((service) => (
        <ServiceCard key={service.title} title={service.title} image={service.image} features={service.features} />
      ))}
    </div>
    </div>
  );
};

export default Services1;
