
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/images/white.svg';
import { MdLocationOn, MdOutlinePhone, MdHomeRepairService } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { SiTalenthouse } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";

import { FaHome ,FaInstagram ,FaLinkedin,FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-black text-white py-12 rounded-t-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center sm:justify-items-start space-y-8 ">
          <div className="pt-8 space-y-2  flex-col justify-center items-center">
            <div className="flex justify-center items-center">
             <Image src={logo} alt="logo" className="w-20 h-20 "/>
             </div>
             <h2 className="text-2xl font-bold">Want to Start a Project?</h2>
               <Link href={"/contactus"}>
                <button className="mt-2 bg-lime-600 px-4 py-2 rounded">
                  Lets Talks
                </button>
                </Link> 
          </div>

        <div className='flex space-x-10 justify-items-center lg:pl-14'>
          <div className="space-y-2">
            <h3 className="font-bold">Explore</h3>
            <ul className="space-y-1">
              <li className="flex items-center">
                <FaHome className="mr-2" /><a href="#" className="text-white">Home</a>
              </li>
              <li className="flex items-center">
                <FcAbout className="mr-2" /><a href="#" className="text-white">About</a>
              </li>
              <li className="flex items-center">
                <SiTalenthouse className="mr-2" /><a href="#" className="text-white">Talent</a>
              </li>
              <li className="flex items-center">
                <MdHomeRepairService className="mr-2" /><a href="#" className="text-white">Services</a>
              </li>
              <li className="flex items-center">
                <GrProjects className="mr-2" /><a href="#" className="text-white">Our Work</a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold">Get In Touch</h3>
            <div className="space-y-1">
              <p className="flex items-center"><MdLocationOn className="mr-2" />Dubai</p>
              <p className="flex items-center"><MdLocationOn className="mr-2" />Navi Mumbai</p>
              <p className="flex items-center"><IoMail className="mr-2" /><a href="mailto:info@digifalx.com" className="text-white">info@digifalx.com</a></p>
              <p className="flex items-center"><MdOutlinePhone className="mr-2" /><a href="tel:+971547368162" className="text-white">+971 547368162</a></p>
            </div>
          </div>
        </div>

          <div className="space-y-2">
              <h3 className="font-bold">Socials</h3>
              <div className="flex-col space-y-2">
               <div>
                <a href="#" >
                  <FaFacebook className="text-black bg-white rounded-full p-1 w-8 h-8 inline-flex"/>  Facebook
                </a></div>
                <div>
                <a href="#" >
                   <FaLinkedin className="text-black bg-white rounded-full  p-1 w-8 h-8 inline-flex" /> Linked-In
                </a>
                </div>
                <div>
                <a href="#" >
                   <FaInstagram className="text-black bg-white rounded-full  p-1 w-8 h-8 inline-flex " /> Instagram
                </a></div>
                <div>
                <a href="#" >
                <FaSquareXTwitter className="text-black bg-white rounded-full p-1 w-8 h-8 inline-flex" /> Twitter
                </a></div>
              </div>
            </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 border-t-2 border-slate-500">
        <p>Copyright © 2024 Digifalx. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
