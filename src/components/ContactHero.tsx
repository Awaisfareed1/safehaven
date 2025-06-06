import React from 'react';
import Image from 'next/image';

const ContactHero = () => {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/aboutus-banner-img.jpg"
          alt="Contact Us background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      </div>

      <div className="responsive-container relative h-full flex items-center justify-start text-start z-10">
        <div className="w-full">
          <h1 className="text-[40px] font-bold text-white">
            Contact Us
          </h1>
          <div className="max-w-2xl ">
            <p className="text-[17px] text-white py-7">
              Thank you for your interest in Safe Haven Financial Group. We’re here to assist you with any questions or financial needs you may have.
            </p>
            <p className="text-[17px] text-white py-3">
              We look forward to connecting with you and helping you take the next step toward a secure financial future.
            </p>
            <p className="text-[17px] text-white py-3">
              Please use the form below to reach out to us — we’ll respond promptly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;