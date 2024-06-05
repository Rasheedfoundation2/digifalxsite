import React from 'react';
import faqData from '@/components/careers/DigiChampsFaqData';

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqData.map((faq, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-gray-100">{faq.question}</h3>
            <p className="mt-2 text-base text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
