"use client";

import React ,{ useState } from 'react';

const Form: React.FC = () => {
  const [role, setRole] = useState('');
  const [additionalInputs, setAdditionalInputs] = useState<JSX.Element | null>(null);
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    // Based on the selected role, render additional inputs
    switch (selectedRole) {
      case 'student':
        setAdditionalInputs(
          <div className="mb-4">
            <label htmlFor="college" className="block text-neutral-800 text-lg font-bold mb-2">
              College Name
            </label>
            <input
              type="text"
              id="college"
              name="college"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your college name"
            />
          </div>
        );
        break;
      case 'employee':
        setAdditionalInputs(
          <div className="mb-4">
            <label htmlFor="experience" className="block  text-neutral-800 text-lg font-bold mb-2">
              Years of Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-800 text-lg leading-tight focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter years of experience"
            />
            {/* Add more inputs for employee */}
          </div>
        );
        break;
      case 'freelancer':
        setAdditionalInputs(
          <div className="mb-4">
            <label htmlFor="projects" className="block text-neutral-800 text-lg font-bold mb-2">
              Projects Completed
            </label>
            <input
              type="text"
              id="projects"
              name="projects"
              className="shadow appearance-none border rounded w-full py-2 px-3  text-neutral-800 text-lg leading-tight focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter number of projects completed"
            />
            {/* Add more inputs for freelancer */}
          </div>
        );
        break;
      case 'influencer':
        setAdditionalInputs(
          <div className="mb-4">
            <label htmlFor="followers" className="block  text-neutral-800 text-lg font-bold mb-2">
              Followers Count
            </label>
            <input
              type="text"
              id="followers"
              name="followers"
              className="shadow appearance-none border rounded w-full py-2 px-3  text-neutral-800 text-lg leading-tight focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter number of followers"
            />
            {/* Add more inputs for influencer */}
          </div>
        );
        break;
      default:
        setAdditionalInputs(null);
        break;
    }
  };

  return (
    <div className="bg-neutral-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Application Form</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-black text-xl font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-600 bg-neutral-200 border-neutral-300 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-black text-xl font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-neutral-200 border-neutral-300 text-blackleading-tight focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Contact" className="block text-black text-xl font-bold mb-2">
                  Contact
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-neutral-200 border-neutral-300 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your Contact"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-black text-xl font-bold mb-2">
                  Select Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleRoleChange}
                  className="shadow appearance-none border rounded w-full py-2 text-lg px-3 text-neutral-600 bg-neutral-200  border-neutral-300 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="employee">Employee</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="influencer">Influencer</option>
                </select>
              </div>
              {additionalInputs}
              <div className="mb-4">
                <label htmlFor="Message" className="block text-black text-xl font-bold mb-2">
                  Message
                </label>
                <textarea 
                  id="Comment"
                  name="Comment"
                  rows={4}
                  cols={50}
                  className="shadow appearance-none border rounded w-full py-2 text-lg px-3 text-neutral-600 bg-neutral-200 border-neutral-300 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your Comments"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-BlueNew-100 text-white font-bold rounded-lg hover:bg-black focus:ring-4 focus:ring-blue-300 focus:outline-none"
              >
                Submit Application
              </button>
            </form>
          </div>
  );
};

export default Form;
