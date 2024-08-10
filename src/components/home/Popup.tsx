"use client";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import logo from "@/app/white.svg";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowPopup(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitPopupForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setShowPopup(false); // Close the popup after successful submission
      } else {
        throw new Error("Form submission failed!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed!");
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-graycard rounded shadow-lg max-w-sm w-full">
        <BackgroundGradient className="p-4 bg-graycard">
          <div className="p-8 relative">
            <button
              className="absolute top-4 right-4 text-xl text-white font-bold"
              onClick={() => setShowPopup(false)}
            >
              <AiOutlineClose />
            </button>
            <div className="flex justify-center items-center mt-2">
              <Image src={logo} alt="logo" width={80} height={80} />
            </div>
            <h2 className="text-3xl font-bold text-center text-whiteheading mt-4">
              Hey There!!
            </h2>
            <p className="text-center mt-2 text-graysubheading">
              Ready to Boost your Business Online?
              <br />
              Simply fill out the form below to get started.
            </p>
            <form className="mt-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 rounded mt-2 bg-BlackNew text-graysubheading"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 rounded mt-2 bg-BlackNew text-graysubheading"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full p-2 mt-2 bg-BlackNew text-graysubheading"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full bg-graysubheading text-white p-2 mt-4"
              >
                SUBMIT
              </button>
            </form>
            <div className="text-center mt-4">
              <button
                onClick={() => setShowPopup(false)}
                className="text-graysubheading underline"
              >
                No Thanks
              </button>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Popup;
