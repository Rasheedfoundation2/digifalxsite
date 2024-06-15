import Image from "next/image";
import Link from "next/link";
import { MdLocationOn, MdOutlinePhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "@/app/white.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t-2 border-neutral-600">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="pt-4 space-y-2 flex flex-col justify-center items-center bg-graycard px-16 pb-6">
          <div className="flex justify-center items-center">
            <Link href="/"><Image src={logo} alt="logo" width={80} height={80} /></Link>
          </div>
          <h2 className="text-5xl font-bold text-center hollow-text">Want to Start a Project?</h2>
          <Link href="/contactus" className="flex justify-center items-center">
          <button
            className="overflow-hidden border w-32 p-2 h-12 bg-black text-white  text-xl font-bold cursor-pointer relative z-10 group">
            Lets Talk !
             <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
            ></span>
            <span
               className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
             ></span>
            <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-BlueNew rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
              ></span>
            <span
                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
              >Explore!</span >
          </button>
          </Link>

          <div className="inline-flex space-x-4 pt-5">
            <div>
              <a href="#">
                <FaFacebook className="text-graysubheading rounded-full p-1 w-8 h-8 inline-flex" /> 
              </a>
            </div>
            <div>
              <a href="#">
                <FaLinkedin className="text-graysubheading rounded-full p-1 w-8 h-8 inline-flex" /> 
              </a>
            </div>
            <div>
              <a href="#">
                <FaInstagram className="text-graysubheading rounded-full p-1 w-8 h-8 inline-flex" /> 
              </a>
            </div>
            <div>
              <a href="#">
                <FaSquareXTwitter className="text-graysubheading rounded-full p-1 w-8 h-8 inline-flex" /> 
              </a>
            </div>
          </div>
        </div>
 
        <div className="flex flex-col md:flex-row space-x-2 justify-evenly w-[90%] mt-4">
          <div className="space-y-2 pl-2">
            <h3 className="font-bold text-2xl">Explore</h3>
            <ul className="space-y-1">
              <li className="flex items-center">
                <p className="flex "><Link href="/" className="text-graysubheading">Home</Link></p>
              </li>
              <li className="flex items-center">
                <p className="flex text"><Link href="/aboutus" className="text-graysubheading">About</Link></p>
              </li>
              <li className="flex items-center">
                <p className="flex text-base"><Link href="/servicespage" className="text-graysubheading">Services</Link></p>
              </li>
              <li className="flex items-center">
                <p className="flex text-base"><Link href="/ourworks" className="text-graysubheading">Our Work</Link></p>
              </li>
              <li className="flex items-center">
                <p className="flex text-base"><Link href="/talent" className="text-graysubheading">Talent</Link></p>
              </li>
              <li className="flex items-center">
                <p className="flex text-base"><Link href="/joinus" className="text-graysubheading">Careers</Link></p>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-2xl">Get In Touch</h3>
            <div className="space-y-2">
              <p className="flex items-center text-base text-graysubheading"><MdLocationOn className="mr-2 text-white" />Dubai</p>
              <p className="flex items-center text-base text-graysubheading"><MdLocationOn className="mr-2 text-white" />Navi Mumbai</p>
              <p className="flex items-center text-base text-graysubheading"><IoMail className="mr-2 text-white" /><a href="mailto:info@digifalx.com" >info@digifalx.com</a></p>
              <p className="flex items-center text-base text-graysubheading"><MdOutlinePhone className="mr-2 text-white" /><a href="tel:+971547368162">+971 547368162</a></p>
            </div>
          </div>

          
        </div>
      </div>

      <div className="text-center text-gray-400 border-t-2 border-slate-500 py-2">
        <p>Copyright © 2024 Digifalx. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
