"use client"
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';


export default function Whatsapp() {
    return (
      <div className=' bottom-0 right-0'>
        <FloatingWhatsApp
          accountName = "Digifalx"
          phoneNumber="+971547368162" // replace with your WhatsApp phone number 
          statusMessage="Your Digital Partner" // replace with your message
          darkMode= {true}
          avatar='/assets/images/img1.jpg'
        />
      </div>
    );
  }