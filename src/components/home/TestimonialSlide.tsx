import TestimonialCarousel from "@/components/home/TestimonialCarousel1";
import CounterCircle from "../aboutpage/CounterCircle";

const slides = [
  {
    title: "Exceptional Digital Marketing Strategy",
    text: "Working with Digifalx has been a game-changer for our business. Their innovative digital marketing strategies have significantly boosted our online presence and brand visibility. As a Director, I appreciate their strategic approach and the measurable results they deliver.",
    mainImage: {
      src: "/assets/images/review_icon/avatar3.svg",
      alt: "Main Image",
    },
    name: "Vikram Singh",
    role: "Director",
    rating: 5,
  },
  {
    title: "Effective SEO and Social Media Management",
    text: "Digifalx has played a pivotal role in transforming our digital marketing efforts. Their expertise in SEO and social media management has helped us achieve remarkable growth in website traffic and engagement. As a CEO, I value their commitment to driving real business outcomes.",
    mainImage: {
      src: "/assets/images/review_icon/avatar3.svg",
      alt: "Main Image",
    },
    name: "Fatima Ahmed",
    role: "CEO",
    rating: 5,
  },
  {
    title: "Innovative Content Marketing Solutions",
    text: "We are impressed by Digifalx's creative content marketing strategies. They understand our industry intricacies and have tailored campaigns that resonate with our target audience. As an Operations Head, I rely on their expertise to enhance our brand storytelling.",
    mainImage: {
      src: "/assets/images/review_icon/avatar3.svg",
      alt: "Main Image",
    },
    name: "Rajesh Kumar",
    role: "Operations Head",
    rating: 4.5,
  },
  {
    title: "Tailored Digital Solutions for UAE Market",
    text: "Digifalx's deep understanding of the UAE market dynamics has been instrumental in our digital transformation journey. Their tailored digital solutions have helped us reach new heights in customer engagement and business growth.",
    mainImage: {
      src: "/assets/images/review_icon/avatar3.svg",
      alt: "Main Image",
    },
    name: "Aisha Al Mansoori",
    role: "Marketing Manager",
    rating: 4.8,
  },
  {
    title: "Driving Online Visibility in India",
    text: "Partnering with Digifalx has been a strategic decision for our company's online visibility in the competitive Indian market. Their comprehensive digital strategies have yielded impressive results, increasing our brand recognition and customer acquisition.",
    mainImage: {
      src: "/assets/images/review_icon/avatar3.svg",
      alt: "Main Image",
    },
    name: "Rahul Kapoor",
    role: "Marketing Director",
    rating: 4.7,
  },
  {
    title: "Personalized Customer Engagement",
    text: "Digifalx's focus on personalized customer engagement has been crucial for enhancing our brand loyalty. Their targeted campaigns and interactive strategies have significantly improved our customer satisfaction rates.",
    name: "Priya Sharma",
    role: "Customer Experience Manager",
    rating: 4.9,
  },
  {
    title: "E-commerce Growth Strategy",
    text: "Digifalx's expertise in e-commerce growth strategies has driven substantial revenue growth for our online store. Their data-driven approach and continuous optimization have made a significant impact on our bottom line.",
    mainImage: {
      src: "/assets/images/review_icon/avatar3.svg",
      alt: "Main Image",
    },
    name: "Amit Patel",
    role: "E-commerce Manager",
    rating: 4.6,
  },
];

const TestimonialSlide = () => {
  return (
    <div className="flex justify-center items-center md:h-[40rem] bg-BlackNew2 mb-10 mt-10">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2 h-full p-6 shadow-lg mt-10">
        {/* left Column with Text and Button - place this second in mobile view */}
        <div className="flex justify-center items-center text-white order-2 lg:order-1 ">
          <TestimonialCarousel slides={slides} />
        </div>

        {/* right Column with Random Image - place this first in mobile view */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <img
            src="assets/images/placeholder_images/service4.webp"
            alt="Random Image"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
