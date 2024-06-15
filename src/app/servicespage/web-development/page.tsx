 "use client"
import React from 'react';
import ServiceCard from '@/components/servicespage/ServiceCard';

const services = [
  {
    title: 'Wordpress Development',
    image: '/assets/images/Web Development/Wordpress.webp',
    features: [
      'Custom Theme Development',
      'Plugin Development',
      'WordPress Maintenance',
      'Performance Optimization',
      'Security Enhancements'
    ]
  },
  {
    title: 'PHP Development',
    image: '/assets/images/Web Development/PHP.webp',
    features: [
      'Custom Web Application Development',
      'Backend Development',
      'Database Management',
      'PHP Framework Integration',
      'Code Optimization'
    ]
  },
  {
    title: 'Website Maintenance Services',
    image: '/assets/images/Web Development/WebMaintenance.webp',
    features: [
      'Regular Backup Services',
      'Security Audits',
      'Content Updates',
      'Performance Monitoring',
      'Bug Fixing'
    ]
  },
  {
    title: 'Laravel Development',
    image: '/assets/images/Web Development/Laravel.webp',
    features: [
      'RESTful API Development',
      'Authentication and Authorization',
      'Database Migration',
      'Task Scheduling',
      'Error Handling'
    ]
  },
  {
    title: 'React',
    image: '/assets/images/Web Development/React.webp',
    features: [
      'Component-Based Architecture',
      'Virtual DOM',
      'State Management (Redux)',
      'Server-Side Rendering (Next.js)',
      'Performance Optimization'
    ]
  },
  {
    title: 'Angular',
    image: '/assets/images/Web Development/Angular.webp',
    features: [
      'Modular Development',
      'Two-Way Data Binding',
      'Dependency Injection',
      'HTTP Client',
      'Routing and Navigation'
    ]
  },
  {
    title: 'MERN & MEAN',
    image: '/assets/images/Web Development/MEAN&MERN.webp',
    features: [
      'MongoDB',
      'Express.js',
      'React.js / Angular',
      'Node.js',
      'Full-Stack Development'
    ]
  }
];



const Services1: React.FC = () => {
  return (
    <div  className='min-h-full'> 
    <h1 className=' text-white text-center md:text-7xl text-6xl py-5 hollow-text'> WEB DEVELOPMENT</h1>
    <div className="flex flex-wrap justify-center">
      {services.map((service) => (
        <ServiceCard key={service.title} title={service.title} image={service.image} features={service.features} />
      ))}
    </div>
    </div>
  );
};

export default Services1;


  