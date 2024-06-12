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
            <label htmlFor="college" className="block text-graysubheading text-lg font-bold mb-2">
              College Name
            </label>
            <input
              type="text"
              id="college"
              name="college"
              className="shadow appearance-none border rounded w-full py-2 px-3  bg-black text-graysubheading leading-tight focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your college name"
            />
          </div>
        );
        break;
      case 'employee':
        setAdditionalInputs(
          <div className="mb-4">
            <label htmlFor="experience" className="block   text-graysubheading text-lg font-bold mb-2">
              Years of Experience
            </label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              className="shadow appearance-none border rounded w-full py-2 px-3  bg-black text-graysubheading text-lg leading-tight focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter the name of the company"
            />
            {/* Add more inputs for employee */}
          </div>
        );
        break;
      case 'freelancer':
        setAdditionalInputs(
          <div className="mb-4">
            <label htmlFor="projects" className="block  text-graysubheading text-lg font-bold mb-2">
              Projects Completed
            </label>
            <input
              type="text"
              id="projects"
              name="projects"
              className="shadow appearance-none border rounded w-full py-2 px-3  bg-black text-graysubheading text-lg leading-tight focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter number of projects completed"
            />
            {/* Add more inputs for freelancer */}
          </div>
        );
        break;
      case 'influencer':
        setAdditionalInputs(
          <div className="mb-4">
            <label htmlFor="followers" className="block   text-graysubheading text-lg font-bold mb-2">
              Followers Count
            </label>
            <input
              type="text"
              id="followers"
              name="followers"
              className="shadow appearance-none border rounded w-full py-2 px-3  bg-black text-graysubheading text-lg leading-tight focus:outline-none focus:ring-1 focus:ring-black"
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
    <div className="bg-graycard p-8  shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-whiteheading">Application Form</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-graysubheading text-xl font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-graysubheading bg-black leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-graysubheading  text-xl font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-graysubheading leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Contact" className="block text-graysubheading  text-xl font-bold mb-2">
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-graysubheading leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your Contact"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-graysubheading  text-xl font-bold mb-2">
                  Select Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleRoleChange}
                  className="shadow appearance-none border rounded w-full py-2 text-lg px-3 text-graysubheading bg-black leading-tight focus:outline-none focus:ring-2 focus:ring-black"
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
                <label htmlFor="Message" className="block text-graysubheading  text-xl font-bold mb-2">
                  Message
                </label>
                <textarea 
                  id="Comment"
                  name="Comment"
                  rows={4}
                  cols={50}
                  className="shadow appearance-none border rounded w-full py-2 text-lg px-3 text-graysubheading bg-black  leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your Comments"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-BlueNew text-white font-bold rounded hover:bg-black focus:ring-4 focus:ring-blue-300 focus:outline-none"
              >
                Submit Application
              </button>
            </form>
          </div>
  );
};

export default Form;
