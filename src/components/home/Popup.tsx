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
      <div className="bg-graycard rounded shadow-lg max-w-xl w-full flex">
        
        <div className=" p-8 relative">
          <button
            className="absolute top-4 right-4 text-xl text-white font-bold"
            onClick={() => setShowPopup(false)}
          >
           <AiOutlineClose/>
          </button>
          <h2 className="text-3xl font-bold text-center text-whiteheading mt-4">Hey There!!</h2>
          <p className="text-center mt-2">Ready to Boost your Business Online ? <br/>Simply fill out the form below to get started.</p>
          <form className="mt-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded mt-2 bg-black" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded mt-2 bg-black" />
            <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded mt-2 bg-black" />
            <button type="submit" className="w-full bg-BlueNew text-white p-2 rounded mt-4">SUBMIT</button>
          </form>
          <div className="text-center mt-4">
            <button onClick={() => setShowPopup(false)} className="text-graysubheading underline">No Thanks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
