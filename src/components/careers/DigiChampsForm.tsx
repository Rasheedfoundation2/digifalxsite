"use client";

import React from 'react';

const Form: React.FC = () => {
  return (
    <form className="mt-4">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Name</label>
        <input type="text" className="w-full p-2 rounded bg-gray-800 text-white" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Email</label>
        <input type="email" className="w-full p-2 rounded bg-gray-800 text-white" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Message</label>
        <textarea className="w-full p-2 rounded bg-gray-800 text-white"></textarea>
      </div>
      <button type="submit" className="bg-BlueNew-100 p-2 rounded">Submit</button>
    </form>
  );
};

export default Form;
