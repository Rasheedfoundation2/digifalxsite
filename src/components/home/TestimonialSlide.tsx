import TestimonialCarousel from '@/components/home/TestimonialCarousel';

const slides = [
  {
    title: 'Best Digital MArketing Service',
    text: 'Digifalx\'s website, social media, and third-party review platforms feature testimonials from numerous clients, providing a comprehensive understanding of their reputation, service quality, and overall client satisfaction.',
    mainImage: { src: '/assets/images/img2.jpg', alt: 'Main Image' },
    name: 'Ricardo Harold',
    role: 'UI/UX Designer',
    rating: 5,
  },
  {
    title: 'Great Experiance',
    text: 'Digifalx\'s website, social media, and third-party review platforms feature testimonials from numerous clients, providing a comprehensive understanding of their reputation, service quality, and overall client satisfaction.',
    mainImage: { src: '/assets/images/img1.jpg', alt: 'Main Image' },
    name: 'Donald Trump',
    role: 'Web Designer',
    rating: 4.5,
  },
  {
    title: 'Fast Services',
    text: 'Digifalx\'s website, social media, and third-party review platforms feature testimonials from numerous clients, providing a comprehensive understanding of their reputation, service quality, and overall client satisfaction.',
    mainImage: { src: '/assets/images/img3.jpg', alt: 'Main Image' },
    name: 'Rishi sunak',
    role: 'Marketing Manager',
    rating: 5,
  },
  // Add more slide objects as needed
];

const TestimonialSlide = () => {
  return (
    <div>
      <TestimonialCarousel slides={slides} />
    </div>
  );
};

export default TestimonialSlide;