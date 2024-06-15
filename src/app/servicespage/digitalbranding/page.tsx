"use client"
import React from 'react';
import ServiceCard from '@/components/servicespage/ServiceCard';

const services = [
  {
    title: 'Company Profile Development',
    image: '/assets/images/Digital_Branding/companyprofile.webp',
    features: [
      'Customized company profile design',
      'Effective communication strategy',
      'Brand messaging development',
      'Visual identity creation',
      'Content creation and management'
    ]
  },
  {
    title: 'Logo design & Branding',
    image: '/assets/images/Digital_Branding/LogoDesign.webp',
    features: [
      'Unique logo design',
      'Brand identity development',
      'Style guide creation',
      'Brand positioning strategy',
      'Brand consistency management'
    ]
  },
  {
    title: 'Business Card Design',
    image:'/assets/images/Digital_Branding/BusinessCard.webp',
    features: [
      'Creative business card design',
      'Brand integration',
      'Contact information optimization',
      'Print-ready files',
      'Customizable templates'
    ]
  },
  {
    title: 'Corporate Identity Design',
    image: '/assets/images/Digital_Branding/CorporateIdentity.webp',
    features: [
      'Corporate visual identity development',
      'Brand image enhancement',
      'Consistent brand representation',
      'Corporate stationery design',
      'Brand guideline creation'
    ]
  },
  {
    title: 'Packaging Design',
    image: '/assets/images/Digital_Branding/PackagingDesign.webp',
    features: [
      'Product packaging conceptualization',
      'Packaging material selection',
      'Label design',
      'Packaging graphics creation',
      'Product presentation enhancement'
    ]
  }
];

const Services1: React.FC = () => {
  return (
    <div  className='min-h-full'> 
    <h1 className='text-white text-center text-7xl py-5 hollow-text'> Digital Branding</h1>
    <div className="flex flex-wrap justify-center">
      {services.map((service) => (
        <ServiceCard key={service.title} title={service.title} image={service.image} features={service.features} />
      ))}
    </div>
    </div>
    
  );
};

export default Services1;
