"use client";
import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

interface CareerCardProps {
  image: string;
  title: string;
  description: string;
  responsibilities: string[];
}

const CareerCard: React.FC<CareerCardProps> = ({ image, title, description, responsibilities }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    date: '',
  });
  const [message, setMessage] = useState('');

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setFormVisible(false); // Reset form visibility when closing the modal
  };

  const showForm = () => {
    setFormVisible(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Application submitted successfully!');
        // Clear form data
        setFormData({
          name: '',
          contact: '',
          email: '',
          date: '',
        });
        setFormVisible(false); // Hide the form
        setTimeout(() => {
          toggleModal(); // Close the modal after a short delay
        }, 1000); // Delay to allow user to see the success message
      } else {
        setMessage('Error submitting application.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setMessage('Error submitting application.');
    }
  };

  return (
    <div className="relative">
      <div className="bg-graycard p-9 shadow-lg" style={{ height: '300px' }}>
        <div className="flex justify-center">
          <img src={image} alt={title} className="h-12 w-12" />
        </div>
        <h2 className="text-xl font-semibold text-center text-graysubheading mt-4">{title}</h2>
        <p className="text-graysubheading text-center mt-2">{description}</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleModal}
            className="px-6 py-2 bg-BlackNew2 text-neutral-100  outline outline-offset-2 outline-BlueNew hover:bg-graysubheading hover:text-black hover:outline hover:outline-BlueNew transition-colors">
            View Details
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-BlackNew2 bg-opacity-75">
          <div className="bg-graycard p-6 sm:p-8 rounded-lg max-w-full sm:max-w-lg max-h-full overflow-y-auto mx-4 sm:mx-0 relative">
            <button onClick={toggleModal} className="absolute top-2 right-2 text-white focus:outline-none">
              <AiOutlineClose size={24} />
            </button>
            {!formVisible ? (
              <>
                <h2 className="text-2xl font-semibold text-whiteheading mb-4">{title}</h2>
                <p className="text-graysubheading mb-4">{description}</p>
                <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
                {responsibilities && responsibilities.length > 0 ? (
                  <ul className="list-disc ml-6 mb-4">
                    {responsibilities.map((resp, index) => (
                      <li key={index} className="text-graysubheading">{resp}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No responsibilities found.</p>
                )}
                <div className="flex justify-center">
                  <button
                    onClick={showForm}
                    className="px-6 py-2 bg-graysubheading text-white hover:bg-white hover:text-black transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </>
            ) : (
              <div>
                <button onClick={() => setFormVisible(false)} className="absolute top-2 right-2 text-white focus:outline-none">
                  <AiOutlineClose size={24} />
                </button>
                <h2 className="text-2xl font-semibold text-whiteheading mb-4">Apply for {title}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-graysubheading">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-BlackNew2 text-graysubheading"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-graysubheading">Contact</label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-BlackNew2 text-graysubheading"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-graysubheading">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-BlackNew2 text-graysubheading"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-graysubheading">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-BlackNew2 text-graysubheading"
                      required
                    />
                  </div>
                  <div className="flex justify-center">
                    <button type="submit" className="px-6 py-2 bg-graysubheading text-white hover:bg-white hover:text-black transition-colors">
                      Submit
                    </button>
                  </div>
                </form>
                {message && <p className="text-white mt-4">{message}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerCard;
