"use client";
import logo from "@/app/white.svg";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "HOME",
    link: "/"
  },
  {
    label: "ABOUT US",
    link: "/aboutus"
  },
  {
    label: "OUR WORK",
    link: "/ourworks",
  },
  {
    label: "SERVICES",
    link: "/servicespage",
    children: [
      {
        label: "Digital Branding & Communication",
        link: "/servicespage/digitalbranding",
      },
      {
        label: "UI & UX Design",
        link: "/servicespage/ui-ux",
      },
      {
        label: "Web Development",
        link: "/servicespage/web-development",
      },
      {
        label: "E-Commerce",
        link: "/servicespage/e-commerce",
      },
      {
        label: "Digital Marketing",
        link: "/servicespage/digital-marketing",
      },
    ]
  },
  {
    label: "CREATIVE",
    // link: "",
    children: [
      {
        label: "Gigs",
        link: "https://gigworks.digifalx.com"
      },
      {
        label: "Creators",
        link: "https://creators.digifalx.com"
      }
    ]
  },
  {
    label: "CAREER",
    link: "/joinus",
    children: [
      {
        label: "DigiLearn",
        link: "https://digilearn.digifalx.com"
      },
      {
        label: "DigiChamps",
        link: "/digichamps"
      }
    ]
  },
  {
    label: "BLOG",
    link: "https://digifalx.com/blog/",
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openSideMenu = () => {
    setSideMenu(true);
  };

  const closeSideMenu = () => {
    setSideMenu(false);
  };

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredIndex(index);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setDropdownVisible(false);
    }, 300); // Adjust the delay as needed
  };

  return (
    <div className="mx-auto flex w-full justify-between px-4 py-1 text-sm bg-black boxShadow border-b-2 border-neutral-600">
      {/* left side */}
      <section className="ml-10">
        {/* logo */}
        <Link href="/"><Image src={logo} alt="logo" className="w-16 h-16" /></Link>
      </section>
      <section ref={animationParent} className="flex items-center gap-10 font-semibold">
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <div
              key={i}
              className="relative group px-2 py-3 transition-all"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={d.link ?? "#"} className="flex cursor-pointer items-center gap-2 text-sm text-white group-hover:text-BlueNew">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0 text-lg" />
                )}
              </Link>
              {d.children && (
                <div
                  className={`absolute right-0 top-12 w-auto flex-col gap-1  bg-neutral-100 py-3 shadow-md transition-all z-30 ${
                    dropdownVisible && hoveredIndex === i ? 'flex' : 'hidden'
                  }`}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:text-BlueNew"
                    >
                      <span className="whitespace-nowrap pl-3">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* right side data */}
      <section className="hidden md:flex items-center gap-8">
        <Link href={"/contactus"}>
        <button
          className="overflow-hidden border w-32 p-2 h-12 bg-black text-white  text-xl font-bold cursor-pointer relative z-10 group"
          > 
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

      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden mt-3 text-white"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-1 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden z-30">
      <div className="h-full w-[90%] bg-black px-4 py-4 border border-graysubheading">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl text-white"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
              closeSideMenu={closeSideMenu}
              hasChildren={Boolean(d.children)}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="flex flex-col gap-8 mt-4 items-center">
          <Link href={"/contactus"}>
        <button
          className="overflow-hidden border w-32 p-2 h-12 bg-black text-white  text-xl font-bold cursor-pointer relative z-10 group"
          > 
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
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem & { closeSideMenu: () => void; hasChildren: boolean }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  const handleItemClick = (e: React.MouseEvent, isIconClick: boolean = false) => {
    if (d.children && !isIconClick) {
      return; // Prevent navigation if children exist and not icon click
    } else {
      d.closeSideMenu();
    }
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setItem(!isItemOpen);
  };

  const handleChildClick = () => {
    d.closeSideMenu();
  };

  return (
    <div ref={animationParent}>
      <div className="relative flex justify-between items-center px-2 py-3 transition-all">
        <a
          onClick={(e) => handleItemClick(e)}
          href={d.link ?? "#"}
          className="text-neutral-400 group-hover:text-black"
        >
          {d.label}
        </a>
        {d.children && (
          <IoIosArrowDown
            onClick={toggleDropdown}
            className={`text-lg transition-all ${isItemOpen && "rotate-180"} cursor-pointer`}
          />
        )}
      </div>
      {isItemOpen && d.children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:text-BlueNew-100"
              onClick={handleChildClick}
            >
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" width={24} height={24} />}
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
