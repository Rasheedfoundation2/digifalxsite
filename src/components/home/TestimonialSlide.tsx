import TestimonialCarousel from '@/components/home/TestimonialCarousel1';

const slides = [
  {
    title: 'Best Digital MArketing Service',
    text: 'One of the standout aspects of working with Digifalx Digital Marketing is their transparent and communicative approach. They provide regular updates and detailed reports, so I always know exactly how my campaigns are performing. Their team is always available to answer questions and provide insights, making the entire process seamless and stress-free.',
    mainImage: { src: '/assets/images/img2.jpg', alt: 'Main Image' },
    name: 'Rohan Sharma',
    role: 'UI/UX Designer',
    rating: 5,
  },
  {
    title: 'Great Experiance',
    text: 'I highly recommend Digifalx Digital Marketing to any business looking to improve their online presence and achieve tangible results. Their dedication, expertise, and outstanding customer service set them apart from the competition. Thank you, XYZ Digital Marketing, for helping my business grow and succeed!.',
    mainImage: { src: '/assets/images/img1.jpg', alt: 'Main Image' },
    name: 'Salman',
    role: 'Web Designer',
    rating: 4.5,
  },
  {
    title: 'Fast Services',
    text: 'The results have been nothing short of phenomenal. Within just a few months, my website traffic increased by over 50%, and I saw a significant boost in lead generation. Their expertise in SEO, content marketing, and social media management has been instrumental in achieving these results. The content they produce is top-notch, engaging, and perfectly tailored to my target audience.',
    mainImage: { src: '/assets/images/img3.jpg', alt: 'Main Image' },
    name: 'Mahesh patil',
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
        <div className="flex justify-center items-center text-white">
            <TestimonialCarousel slides={slides} />
        </div>
      </div>
      
    </div>
      

  );
};

export default TestimonialSlide;