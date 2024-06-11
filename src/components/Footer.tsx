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
            <button className="mt-4 px-6 py-2 bg-black text-neutral-100 rounded-full outline outline-offset-2 outline-white hover:bg-graycard hover:text-white hover:outline hover:outline-white transition-colors">
              Lets Talks
            </button>
          </Link>

          <div className="inline-flex space-x-4 pt-5">
            <div>
              <a href="#">
                <FaFacebook className="text-blue-600 rounded-full p-1 w-8 h-8 inline-flex" /> 
              </a>
            </div>
            <div>
              <a href="#">
                <FaLinkedin className="text-blue-700 rounded-full p-1 w-8 h-8 inline-flex" /> 
              </a>
            </div>
            <div>
              <a href="#">
                <FaInstagram className="text-pink-600 rounded-full p-1 w-8 h-8 inline-flex" /> 
              </a>
            </div>
            <div>
              <a href="#">
                <FaSquareXTwitter className="text-white rounded-full p-1 w-8 h-8 inline-flex" /> 
              </a>
            </div>
          </div>
        </div>
 
        <div className="flex flex-col md:flex-row space-x-2 justify-evenly w-[90%] mt-4">
          <div className="space-y-2 pl-2">
            <h3 className="font-bold text-2xl">Explore</h3>
            <ul className="space-y-1">
              <li className="flex items-center">
                <p className="flex "><Link href="/" className="text-white">Home</Link></p>
              </li>
              <li className="flex items-center">
                <p className="flex text"><Link href="/aboutus" className="text-white">About</Link></p>
              </li>
              <li className="flex items-center">
                <p className="flex text-base"><Link href="/servicespage" className="text-white">Services</Link></p>
              </li>
              <li className="flex items-center">
                <p className="flex text-base"><Link href="/ourworks" className="text-white">Our Work</Link></p>
              </li>
              <li className="flex items-center">
                <p className="flex text-base"><Link href="/talent" className="text-white">Talent</Link></p>
              </li>
              <li className="flex items-center">
                <p className="flex text-base"><Link href="/joinus" className="text-white">Careers</Link></p>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-2xl">Get In Touch</h3>
            <div className="space-y-2">
              <p className="flex items-center text-base"><MdLocationOn className="mr-2" />Dubai</p>
              <p className="flex items-center text-base"><MdLocationOn className="mr-2" />Navi Mumbai</p>
              <p className="flex items-center text-base"><IoMail className="mr-2" /><a href="mailto:info@digifalx.com" className="text-white">info@digifalx.com</a></p>
              <p className="flex items-center text-base"><MdOutlinePhone className="mr-2" /><a href="tel:+971547368162" className="text-white">+971 547368162</a></p>
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
