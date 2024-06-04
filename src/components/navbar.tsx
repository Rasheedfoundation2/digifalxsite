"use client";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, } from "react";
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
    label: "SERVICES",
    link: "/servicespage"
  },
  {
    label: "ABOUT US",
    link: "/aboutus"
  },
  {
    label: "OUR WORK",
    link: "/ourworks"
  },
  {
    label: "TALENT",
    link: "#",
    children: [
      {
        label: "INFLUENCER",
        link: "#",
      },
      {
        label: "DESIGN-TEMP",
        link: "#",
      }
    ]
  },
  {
    label: "CAREER",
    link: "/joinus",
    children: [
      {
        label: "DIGI-CHAMPS",
        link: "/digichamps"
      }
    ]
  }
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);

  useEffect(() => {
    // This will ensure the state is updated correctly on the client-side
  }, [isSideMenuOpen]);

  function openSideMenu() {
    setSideMenue(true);
  }
  
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto  flex  w-full justify-between px-4 py-1 text-sm  bg-#0A0A0A boxShadow">
      {/* left side */}
      <section className="ml-10">
        {/* logo */}
        <Image src='assets/images/white.svg' alt="logo" width={'60'} height={'60'}/>
        </section>
      <section ref={animationParent} className="flex items-center gap-10 font-semibold">
     
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group px-2 py-3 transition-all " >
              <p className="flex cursor-pointer items-center gap-2 text-white group-hover:text-lime-400">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}
              </p>
              {/* dropdown */}
              {d.children && (
                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex z-30">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:text-lime-400"
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage} alt="item-icon" />
                      )}
                      {/* item */}
                      <span className="whitespace-nowrap pl-3">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
      <section className="hidden md:flex items-center gap-8 pr-10">
      <Link href={"/contactus"}>
      <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-lime-400 transition-all hover:border-lime-400 hover:text-white">
            Lets Talk
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
      <div className="h-full w-[100%] bg-black px-4 py-4 border border-slate-600">
        <section className="flex  justify-end">
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
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="flex flex-col gap-8 mt-4 items-center">
        <Link href={"/contactus"}>
        <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-lime-400 transition-all hover:border-lime-400 hover:text-text-400">
            Lets Talk
          </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  useEffect(() => {
    // This will ensure the state is updated correctly on the client-side
  }, [isItemOpen]);

  function toggleItem() {
    setItem(!isItemOpen);
  }

  return (
    <div ref={animationParent}>
      <Link
        onClick={toggleItem}
        href={d.link ?? "#"}
        className="relative px-2 py-3 transition-all"
      >
        <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
          <span>{d.label}</span>
          {d.children && (
            <IoIosArrowDown
              className={`text-xs transition-all ${
                isItemOpen && "rotate-180"
              }`}
            />
          )}
        </p>
      </Link>
      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:text-lime-400"
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
