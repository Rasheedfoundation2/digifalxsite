
import Image from "next/image";
import Link from "next/link";
import { MdLocationOn, MdOutlinePhone, MdHomeRepairService } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { SiTalenthouse } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { FaHome ,FaInstagram ,FaLinkedin,FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-black text-white mt:6 rounded-t-2xl border-t-2 border-neutral-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center sm:justify-items-start space-y-8 ">
          <div className="pt-8 space-y-2  flex-col justify-center items-center">
            <div className="flex justify-center items-center">
             <Image src="/assets/images/white.svg" alt="logo" width={80} height={80}/>
             </div>
             <h2 className="text-4xl font-bold text-center">Want to Start a Project?</h2>
               <Link href={"/contactus"} className="flex justify-center items-center">
                <button className="px-6 py-2 bg-black text-neutral-100 rounded-full outline outline-offset-2 outline-GreenNew-100 hover:bg-BlueNew-100 hover:text-white hover:outline hover:outline-white transition-colors">
                  Lets Talks
                </button>
                </Link> 
          </div>

        <div className='flex space-x-16 justify-center lg:pl-12'>
          <div className="space-y-2">
            <h3 className="font-bold text-2xl">Explore</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
              <p className="flex text-lg"><FaHome className="mr-2" /><Link href="/home" className="text-white">Home</Link></p>
              </li>
              <li className="flex items-center">
              <p className="flex text-lg"><FcAbout className="mr-2" /><Link href="/aboutus" className="text-white">About</Link></p>
              </li>
              <li className="flex items-center">
              <p className="flex text-lg"><MdHomeRepairService className="mr-2" /><Link href="/servicespage" className="text-white">Services</Link></p>
              </li>
              <li className="flex items-center">
              <p className="flex text-lg"><GrProjects className="mr-2" /><Link href="/ourworks" className="text-white">Our Work</Link></p>
              </li>
              <li className="flex items-center">
              <p className="flex text-lg"><SiTalenthouse className="mr-2" /><Link href="/talent" className="text-white">Talent</Link></p>
              </li>
              <li className="flex items-center">
                <p className="flex text-lg"><MdOutlineWorkOutline className="mr-2" /><Link href="/joinus" className="text-white">Careers</Link></p>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-2xl">Get In Touch</h3>
            <div className="space-y-2">
              <p className="flex items-center text-lg"><MdLocationOn className="mr-2" />Dubai</p>
              <p className="flex items-center text-lg"><MdLocationOn className="mr-2" />Navi Mumbai</p>
              <p className="flex items-center text-lg"><IoMail className="mr-2" /><a href="mailto:info@digifalx.com" className="text-white">info@digifalx.com</a></p>
              <p className="flex items-center text-lg"><MdOutlinePhone className="mr-2" /><a href="tel:+971547368162" className="text-white">+971 547368162</a></p>
            </div>
          </div>
        </div>

          <div className="flex space-y-2">
              <div className="flex-col space-y-2">
               <h3 className="font-bold text-2xl">Socials</h3>
               <div>
                <a href="#">
                  <FaFacebook className="text-blue-600 rounded-full p-1 w-8 h-8 inline-flex"/>  Facebook
                </a></div>
                <div>
                <a href="#" >
                   <FaLinkedin className="text-blue-700 rounded-full  p-1 w-8 h-8 inline-flex" />   Linked-In
                </a> </div>
                <div>
                <a href="#" >
                   <FaInstagram className="text-pink-600 rounded-full  p-1 w-8 h-8 inline-flex " />   Instagram
                </a></div>
                <div>
                <a href="#" >
                <FaSquareXTwitter className="text-white rounded-full p-1 w-8 h-8 inline-flex" /> Twitter
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
