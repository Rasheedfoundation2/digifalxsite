"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    comment: string;
    name: string;
    title: string;
    image: string; 
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;// Add image property
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "200s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[50px]  relative rounded-2xl border border-b-0 flex-shrink-0 border-neutral-200 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--neutral-800), var(--neutral-900)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_1px)] w-[calc(100%_+_1px)]"
              ></div>
              <div className="relative flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full mb-4"
                />
                 <span className="relative z-20 mt-8 text-sm leading-[1.6] text-gray-100 font-normal">
                  {item.comment} 
                </span>
                <div className="relative z-20 mt-4 flex space-x-4">
                  {item.facebook && (
                    <a href={item.facebook} className="text-white hover:text-gray-900">
                      <FaFacebook />
                    </a>
                  )}
                  {item.twitter && (
                    <a href={item.twitter} className="text-white hover:text-gray-900">
                      <FaTwitter />
                    </a>
                  )}
                  {item.linkedin && (
                    <a href={item.linkedin} className="text-white hover:text-gray-900">
                      <FaLinkedin />
                    </a>
                  )}
                  {item.instagram && (
                    <a href={item.instagram} className="text-white hover:text-gray-900">
                      <FaInstagram />
                    </a>
                  )}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
