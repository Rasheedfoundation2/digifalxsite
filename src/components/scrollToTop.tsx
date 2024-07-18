// components/ScrollToTopButton.tsx
"use client"; // Add this line at the top

import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-28 right-10 z-20">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-4 rounded bg-graysubheading text-white shadow-lg hover:bg-BlueNew focus:outline-none scroll-to-top-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
      <style jsx>{`
        .scroll-to-top-button .icon {
          height: 24px;
          width: 24px;
        }
        @media (max-width: 768px) {
          .scroll-to-top-button {
            padding: 2px;
          }
          .scroll-to-top-button .icon {
            height: 18px;
            width: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollToTopButton;
