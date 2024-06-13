
import Counter1 from "@/components/aboutpage/CounterNumberSet";
import TestimonialSlide from "@/components/home/TestimonialSlide";
import TwoColumnGrid from "@/components/aboutpage/TwoColumnGrid";
import TeamCarousel from "@/components/aboutpage/TeamCarousel";
import Link from "next/link";
import { teamMembers } from "@/components/aboutpage/TeamMembers";

const testimonialItems = teamMembers.map((member) => ({
  comment: `${member.name} - ${member.title}`,
  name: member.name,
  title: member.title,
  image:`${member.image}`,
  linkedin:`${member.linkedin}`,
  facebook:`${member.facebook}`,
  twitter:`${member.twitter}`,
  instagram:`${member.instagram}`
}));



export default function About(){
    return (
    <div className="mt-10">
      <div className="lg:flex">
      <div className="lg:flex items-center justify-center lg:w-44 lg:flex-shrink-0 text-center">
        <h2 className="sm:pt-12 hollow-text text-6xl text-inherit lg:text-8xl lg:left-40 font-extrabold lg:-rotate-90 whitespace-nowrap leading-none">
              About Us
        </h2>
      </div>
        <div className="relative lg:mx-20">
          <TwoColumnGrid/>
        </div>
      </div> 
      
      {/* counter circle section */}
      <section>
        <Counter1/>
      </section>
        
        {/* our Team section */}
      <section>
        <div className="text-center">
          <h1 className="hollow-text text-7xl font-bold mt-12">Our Team</h1>
          <h2 className="text-4xl font-bold mb-1 text-center">Our Team consists of a group of talents</h2>
          <div className="justify-items-center">
             <TeamCarousel/> 
              
           </div>
        </div>
      </section>


      {/* Testimonials section */}
      <div className="lg:flex  my-10 ">
       <div className="lg:flex items-center justify-center lg:w-44 lg:flex-shrink-0 text-center">
         <h2 className="hollow-text text-6xl text-inherit lg:text-8xl lg:left-40 font-extrabold lg:-rotate-90 whitespace-nowrap leading-none">
              Testimonials
         </h2> 
       </div>
       <div className="relative flex lg:mx-36 justify-center items-center">
          <TestimonialSlide/>
       </div>
       </div>
     </div>
    )
}