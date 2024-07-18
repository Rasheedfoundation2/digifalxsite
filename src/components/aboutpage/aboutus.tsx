import Counter1 from "@/components/aboutpage/CounterNumberSet";
import TestimonialSlide from "@/components/home/TestimonialSlide";
import TwoColumnGrid from "@/components/aboutpage/TwoColumnGrid";
import TeamCarousel from "@/components/aboutpage/TeamCarousel";
import { teamMembers } from "@/components/aboutpage/TeamMembers";

const testimonialItems = teamMembers.map((member) => ({
  comment: `${member.name} - ${member.title}`,
  name: member.name,
  title: member.title,
  image: `${member.image}`,
  linkedin: `${member.linkedin}`,
}));

export default function About() {
  return (
    <div className="mt-10">
      <div className="lg:flex">
        <div className="lg:flex items-center justify-center lg:w-44 lg:flex-shrink-0 text-center">
          <h2 className="sm:pt-12 hollow-text text-6xl lg:text-8xl font-extrabold lg:-rotate-90 whitespace-nowrap leading-none">
            About Us
          </h2>
        </div>
        <div className="relative lg:mx-20 w-full">
          <TwoColumnGrid />
        </div>
      </div>

      {/* Counter Circle Section */}
      <section>
        <Counter1 />
      </section>

      {/* Our Team Section */}
      <section className="mt-12">
        <div className="text-center">
          <h1 className="hollow-text text-7xl font-bold mt-12">Our Team</h1>
          <h2 className="text-4xl font-bold mb-1">Our Team consists of a group of talents</h2>
          <div className="justify-items-center">
            <TeamCarousel />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="lg:flex my-10">
        <div className="lg:flex items-center justify-center lg:w-44 lg:flex-shrink-0 text-center">
          <h2 className="sm:pt-12 hollow-text text-6xl lg:text-8xl font-extrabold lg:-rotate-90 whitespace-nowrap leading-none">
            Testimonials
          </h2>
        </div>
        <div className="relative flex lg:mx-36 justify-center items-center pt-6 w-full">
          <TestimonialSlide />
        </div>
      </div>
    </div>
  );
}
