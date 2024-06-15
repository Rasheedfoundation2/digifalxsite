"use client";

import React, { useEffect, useRef } from 'react';

const CURSOR_COLORS = {
  h1: "green-400",
  button: "orange-500",
  default: "sky-500"
} as const;

type CursorColors = keyof typeof CURSOR_COLORS;

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const speed = 0.1;

    const animate = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      cursor.style.transform = `translate3d(${cursorX - 16}px, ${cursorY - 16}px, 0)`;

      const dotX = mouseX - cursorX - 4;
      const dotY = mouseY - cursorY - 4;
      dot.style.transform = `translate(${dotX}px, ${dotY}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      if (isCursorColorsKey(tagName)) {
        cursor.style.borderColor = CURSOR_COLORS[tagName];
      } else {
        cursor.style.borderColor = CURSOR_COLORS["default"];
      }
    };

    const isCursorColorsKey = (key: string): key is CursorColors => {
      return key in CURSOR_COLORS;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <style>
        {`
          body {
            cursor: none;
          }
          .cursor {
            position: fixed;
            top: 0;
            left: 0;
            width: 32px;
            height: 32px;
            border: 2px solid skyblue;
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            transition: border-color 0.2s ease;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .dot {
            width: 8px;
            height: 8px;
            background-color: white;
            border-radius: 50%;
          }
        `}
      </style>
      <div ref={cursorRef} className="cursor">
        <div ref={dotRef} className="dot" />
      </div>
    </>
  );
};

export default CustomCursor;
