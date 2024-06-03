import React from 'react';
import faqData from '@/components/careers/DigiChampsFaqData';

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white text-center">Frequently Asked Questions</h2>
      <p className="mt-4 text-lg text-gray-100 text-center">
        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
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
