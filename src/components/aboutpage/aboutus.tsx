
import Counter1 from "@/components/aboutpage/Counter1";
import TestimonialSlide from "../home/TestimonialSlide";
import TwoColumnGrid from "@/components/aboutpage/TwoColumnGrid";
import TeamCarousel from "@/components/aboutpage/TeamCarousel";
import Link from "next/link";

export default function About(){
    return (
    <div>
        <TwoColumnGrid/>
        <Counter1/>
        <h2 className="text-4xl font-bold mb-1 text-center">Our Team consists of a group of talents</h2>
      <div className="flex justify-center mb-12">
        <Link href="/join">
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black hover:shadow-[0_0_10px_rgba(0,0,0,0.6)] transition duration-300">
            Join our team
          </button>
        </Link>
      </div>
        <TeamCarousel/>
        <TestimonialSlide/>
     </div>
    )
}