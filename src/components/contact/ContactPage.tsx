"use client";
import { useState } from 'react';
import axios from 'axios';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      if (response.status === 200) {
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('message not sent!.');
    }
  };


  return (
   
  <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_2fr] sm:justify-items-start  space-y-2 p-5 ">
    <div className="hollow-text relative top-[35%] transform -translate-y-1/2 lg:-rotate-90  lg:left-36 lg:origin-center text-7xl sm:text-7xl md:text-7xl font-bold tracking-wide whitespace-wrap">
        Contact Us
      </div>
    <div className='grid lg:grid-cols-[1fr_3fr] sm:grid-cols-1 w-full  gap-5'>
      <div className="space-y-4 justify-center">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1511551192074!2d55.27078231500472!3d25.20484938388839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434df0000001%3A0x2f3b78d639d8d21f!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1626104473328!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160990088!2d72.74109913939033!3d19.08219783964407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be6c630ca000001%3A0x2c6155db2533c82a!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1626104520010!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    
    <div className="w-full bg-black p-8 rounded-lg border-white border-2">
      <form onSubmit={handleSubmit}>
      <div className="text-4xl text-lime-400 font-bold mb-2">Message with me</div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="fullName">Full Name</label>
          <input
            className="w-full px-3 py-2 mt-1 bg-black text-white rounded border-white border-2"
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="email">Email Address</label>
          <input
            className="w-full px-3 py-2 mt-1 bg-black text-white rounded border-white border-2"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="subject">Subject</label>
          <input
            className="w-full px-3 py-2 mt-1  bg-black text-white rounded border-white border-2"
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-1" htmlFor="message">Message</label>
          <textarea
            className="w-full px-3 py-2 mt-1  bg-black text-white rounded border-white border-2"
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-center text-black bg-lime-500 rounded hover:bg-white">
          Send Massage
        </button>
      </form>
    </div>
   </div>
  </div>
  
);
};

export default ContactPage;