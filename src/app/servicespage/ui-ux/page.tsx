"use client"
import React from 'react';
import ServiceCard from '@/components/servicespage/ServiceCard';

const services = [
  {
    title: 'PSD To Responsive HTML',
    image:  '/assets/images/initial_card_image.png',
    features: [
      'Pixel-perfect conversion',
      'Cross-browser compatibility',
      'Responsive design',
      'SEO-friendly code',
      'Fast loading times',
    ]
  },
  {
    title: 'UX Design',
    image:  '/assets/images/initial_card_image.png',
    features: [
      'User research',
      'Wireframing and prototyping',
      'User testing',
      'Interaction design',
      'Visual design',
    ]
  },
  {
    title: 'Landing Page Design',
    image:  '/assets/images/initial_card_image.png',
    features: [
      'Attention-grabbing headlines',
      'Clear call-to-action',
      'Engaging visuals',
      'A/B testing',
      'Conversion optimization',
    ]
  },
  {
    title: 'Responsive Web Design',
    image:  '/assets/images/initial_card_image.png',
    features: [
      'Flexible layouts',
      'Media queries',
      'Fluid images',
      'Mobile-first approach',
      'Cross-device compatibility',
    ]
  },
  {
    title: 'Graphic Design',
    image:  '/assets/images/initial_card_image.png',
    features: [
      'Logo design',
      'Branding materials',
      'Print design',
      'Illustrations',
      'Typography',
    ]
  },
  {
    title: 'UX Audit',
    image:  '/assets/images/initial_card_image.png',
    features: [
      'Usability evaluation',
      'Heuristic evaluation',
      'Identifying pain points',
      'Recommendations for improvement',
      'Competitor analysis',
    ]
  }
];


const Services1: React.FC = () => {
  return (
    <div  className='min-h-full'> 
    <h1 className='text-white text-center text-7xl py-5 hollow-text'> UI-UX</h1>
    <div className="flex flex-wrap justify-center">
      {services.map((service) => (
        <ServiceCard key={service.title} title={service.title} image={service.image} features={service.features} />
      ))}
    </div>
    </div>
  );
};

export default Services1;
