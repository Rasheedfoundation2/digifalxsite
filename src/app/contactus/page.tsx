
import React from 'react';
import ContactPage from '@/components/contact/ContactPage';
import ServiceNameBanner from '@/components/home/ServicecarousalBanner';


const ContactUs = () => {
  return (
    <div className='bg-black'>

     {/* services Banner */}
     <ServiceNameBanner/>

     <ContactPage/>
    </div>
     
  
  );
};

export default ContactUs;
