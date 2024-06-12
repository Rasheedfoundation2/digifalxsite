"use client"
import { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowPopup(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full flex">
        <div className="w-1/2">
          <img src="/assets/images/digichamps.png" alt="Popup Image" className="w-full h-full object-cover rounded-l-lg" />
        </div>
        <div className="w-1/2 p-8 relative">
          <button
            className="absolute top-4 right-4 text-xl text-black font-bold"
            onClick={() => setShowPopup(false)}
          >
           <AiOutlineClose/>
          </button>
          <h2 className="text-3xl font-bold text-center text-gray-500 mt-4">Some Header</h2>
          <p className="text-center mt-2">Ready to book your dream rental property? Simply fill out the form below to get started.</p>
          <form className="mt-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded mt-2" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded mt-2" />
            <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded mt-2" />
            <button type="submit" className="w-full bg-yellow-500 text-white p-2 rounded mt-4">SUBMIT</button>
          </form>
          <div className="text-center mt-4">
            <button onClick={() => setShowPopup(false)} className="text-gray-600 underline">No Thanks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
