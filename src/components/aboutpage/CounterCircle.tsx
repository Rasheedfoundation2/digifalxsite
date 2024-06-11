// components/CounterCircle.tsx
"use client"
import { useEffect, useState } from 'react';

interface CounterCircleProps {
  endCount: number;
  text: string;
  duration: number;
  character?: string;
}

const CounterCircle: React.FC<CounterCircleProps> = ({ endCount, text, duration, character = '' }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const increment = endCount / (duration / 100);
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < endCount) {
          return prevCount + increment;
        } else {
          clearInterval(interval);
          return endCount;
        }
      });
    }, 200); // Adjust speed of counting here

    return () => clearInterval(interval);
  }, [endCount, duration]);

  return (
    <div className="flex flex-col items-center justify-center w-44 h-44  shadow-lg mb-5 mt-5 m-1">
      <div className="text-6xl hollow-text font-bold text-graysubheading outline-4 text-shadow-lg animate-grow">
        {Math.min(Math.floor(count), endCount)}{character}
      </div>
      <div className="text-lg text-whiteheading">{text}</div>
    </div>
  );
};

export default CounterCircle;
