// import HeroSection from "@/components/home/HeroSection";
import LogoSection from "@/components/home/companyLogo";
import TestimonialSlide from "@/components/home/TestimonialSlide";
import Counter1 from "@/components/aboutpage/CounterNumberSet";
import OurProjects from "@/components/home/OurProjects";
import Services from "@/components/home/NewServicesSection";
import ServiceNameBanner from "@/components/home/ServicecarousalBanner";
import Popup from "@/components/home/Popup";
import { AuroraHero } from "@/components/home/HeroSection4";

export default function HomePage() {
    return (
      <main className="bg-black">
          {/* Pop up details collection tab*/}
        <Popup/>
        <section className="mb-12">
          {/* <HeroSection/>  */}
          <AuroraHero/>
        </section>
        

        {/* Services Card*/}
        <Services/>

         {/*Counting Circle*/}
        <Counter1/>

        {/* Our Works */}
        <OurProjects/> 

        {/* Company logo corousal */}
        <LogoSection/>

        {/* Testimonial */}
        <div className="lg:flex  my-10 mt-5 mb-5">
          <div className="lg:flex items-center justify-center text-center lg:w-44 lg:flex-shrink-0">
            <h2 className="hollow-text text-6xl text-inherit lg:text-8xl lg:left-40 font-extrabold lg:-rotate-90 whitespace-nowrap leading-none">
              Testimonials
           </h2> 
         </div>
        <div className="relative flex lg:mx-36 justify-center items-center">
          <TestimonialSlide/>
        </div>
        </div>

        {/* services Banner */}
          <ServiceNameBanner/>
        
        
    </main>
    );
  }
  