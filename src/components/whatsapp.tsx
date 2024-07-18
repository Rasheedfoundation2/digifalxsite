"use client";
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function Whatsapp() {
  return (
    <div className='whatsapp-button bottom-0 right-0'>
      <FloatingWhatsApp
        accountName="Digifalx"
        phoneNumber="+971547368162" // replace with your WhatsApp phone number 
        statusMessage="Your Digital Partner" // replace with your message
        darkMode={true}
        avatar='/assets/images/whatsapp.png'
      />
      <style jsx>{`
        .whatsapp-button .floating-whatsapp-button {
          width: 48px; /* Adjust size as needed */
          height: 48px; /* Adjust size as needed */
        }
        @media (max-width: 768px) {
          .whatsapp-button .floating-whatsapp-button {
            width: 32px; /* Adjust size for mobile */
            height: 32px; /* Adjust size for mobile */
          }
        }
      `}</style>
    </div>
  );
}
