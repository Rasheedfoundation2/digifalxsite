import React from 'react';
import Image from "next/image";
import logo from '@/assets/images/white.svg';
import instalogo from "@/assets/images/instagram.svg";
import linkedinlogo from "@/assets/images/linkedin.svg";
import whatsapplogo from "@/assets/images/whatsapp-logo.svg"
import { MdLocationOn, MdOutlinePhone, MdHomeRepairService } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { SiTalenthouse } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { RiContactsBook3Fill } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-gray-700 text-white py-12 rounded-t-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center">
      <Image src={logo} alt="logo" className="w-20 h-20 "/>
      </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center sm:justify-items-start space-y-8 ">
          <div className="pt-8 space-y-2  flex-col items-center">
            <h2 className="font-bold">Digifalx</h2>
             <h3 className="text-1xl">We want to establish a strong digital presence,
             while offering quality Design ,Marketing Services,
             Modern web design and Digital Marketing Services 
             to enchance business brand identities. </h3>
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
              <li className="flex items-center">
                <RiContactsBook3Fill className="mr-2" /><a href="#" className="text-white">Contact</a>
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
                <a href="#" ><Image src={instalogo} alt="instagram logo"  className="text-black bg-white rounded-full p-2 w-10 h-10 inline-flex"/>  Instagram
                </a></div>
                <div>
                <a href="#" >
                   <Image src={linkedinlogo} alt="Linkedin logo" className="text-black bg-white rounded-full p-2 inline-flex  w-10 h-10" /> Linked-In
                </a>
                </div>
                <div>
                <a href="#" >
                   <Image src={whatsapplogo} alt="Whatsapp logo" className="text-black bg-white rounded-full p-2 inline-flex  w-10 h-10" /> Whatsapp
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
