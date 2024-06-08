import React, { useState } from 'react';
import faqData from './DigiChampsFaqData';  // Ensure the correct import path

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white text-center">Frequently Asked Questions</h2>
      <p className="mt-4 text-lg text-gray-400 text-center">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {faqData.map((faq, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAnswer(index)}>
              <h3 className="text-xl font-semibold text-gray-100">{faq.question}</h3>
              <button className={`ml-4 text-gray-100 p-2 rounded-full bg-BlueNew-100 hover:bg-BlueNew-100 ring-2 ring-transparent hover:ring-blue-400 transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}>
                &#x25B6; {/* Right arrow icon */}
              </button>
            </div>
            {openIndex === index && (
              <div className="mt-4 bg-white text-black p-4 rounded shadow-lg transition-opacity duration-500 ease-in-out">
                <p className="text-base">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
