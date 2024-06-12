import TestimonialCarousel from '@/components/home/TestimonialCarousel1';
import CounterCircle from '../aboutpage/CounterCircle';

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
    <div className="flex justify-center items-center md:h-[44rem] bg-black mb-10 mt-10">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2 h-full p-6 shadow-lg mt-10">
       

        {/* left Column with Text and Button - place this second in mobile view */}
        <div className="flex justify-center items-center text-white order-2 lg:order-1 ">
          <TestimonialCarousel slides={slides} />
        </div>

         {/* right Column with Random Image - place this first in mobile view */}
         <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="relative lg:top-4 lg:left-28 bg-black bg-opacity-80 text-white p-2 rounded-md">
            <div>
              <CounterCircle endCount={5} text="Satisfied Clients" duration={3000} character="+" />
            </div>
          </div>
          <img
            src="assets/images/initial_card_image.png"
            alt="Random Image"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
