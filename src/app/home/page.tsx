import HeroSection from "../../components/home/HeroSection";
import Services from "@/components/home/ServicesSection";
import LogoSection from "@/components/home/companyLogo";
import TestimonialSlide from "@/components/home/TestimonialSlide";
import Counter1 from "@/components/aboutpage/CounterNumberSet";
import OurProjects from "@/components/home/OurProjects";

export default function HomePage() {
    return (
      <main className="bg-black">
        <HeroSection/>

        {/* Services Card*/}
        <Services/>

         {/*Counting Circle*/}
        <Counter1/>

        {/* Our Works */}
        <OurProjects/> 

        {/* Testimonial */}
        <div className="lg:flex  my-10 border-t-2 border-neutral-500 mt-4">
          <div className="lg:flex items-center justify-center lg:w-44 lg:flex-shrink-0">
            <h2 className="hollow-text text-6xl text-inherit lg:text-8xl lg:left-40 font-extrabold lg:-rotate-90 whitespace-nowrap leading-none">
              Testimonials
           </h2> 
         </div>
        <div className="relative flex lg:mx-36 justify-center items-center">
          <TestimonialSlide/>
        </div>
        </div>

        {/* Company logo corousal */}
        <LogoSection/>
      
    </main>
    );
  }
  