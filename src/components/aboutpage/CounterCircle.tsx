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
    <div className="flex flex-col items-center justify-center w-52 h-52 border-white border-2 rounded-full shadow-lg mb-5 mt-5 m-1">
      <div className="text-6xl font-bold text-white outline-4 text-shadow-lg animate-grow">
        {Math.min(Math.floor(count), endCount)}{character}
      </div>
      <div className="text-xs text-white">{text}</div>
    </div>
  );
};

export default CounterCircle;
