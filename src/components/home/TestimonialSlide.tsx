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
    <div className="flex justify-center items-center h-full  bg-black">
      <div className="grid lg:grid-cols-[1fr_2fr] md:grid-cols-2 gap-2 max-w-6xl border-2 border-neutral-500 h-fit mx-auto bg-black p-6 rounded-lg shadow-lg mt-10">
        {/* Left Column with Random Image */}
        <div className="lg:flex lg:justify-items-center  mt-[40%]">
          <h3 className=" text-white  text-6xl font-bold mb-4">What Our Client Says About Us</h3>
        </div>
        
        {/* Right Column with Text and Button */}
        <div className="flex justify-center items-center">
            <TestimonialCarousel slides={slides} />
        </div>
      </div>
      
    </div>
      

  );
};

export default TestimonialSlide;