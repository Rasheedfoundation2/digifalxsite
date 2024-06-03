import HeroSection from "../../components/home/HeroSection";
// import Testimonials from "../../components/home/TestimonialCards";
import Services from "@/components/home/servicepage1";
import OurProjects from "@/components/home/WhyChooseUs1";
import LogoSection from "@/components/home/companyLogo";
import TestimonialSlide from "@/components/home/TestimonialSlide";
import Counter1 from "@/components/aboutpage/Counter1";


export default function HomePage() {
    return (
      <main>
        <HeroSection/>
        <Services/> 
        <Counter1/>
        <OurProjects/>
        <LogoSection/>
        <TestimonialSlide/>
        {/*<Testimonials/> */}
      
    </main>
    );
  }
  