import React from 'react';
import Image from 'next/image';

const AboutTeam = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="responsive-container">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-6 text-center  lg:px-20">
            <h2 className="text-[30px] font-bold text-[#727272]">Our Team</h2>
            <div className="w-24 h-1 bg-primary-500 mb-6"></div>
            <p className="text-gray-600">
              Our licensed financial professionals are dedicated to helping you take control of your finances with customized solutions designed around your goals. As independent experts, we prioritize understanding your unique situation to provide the best possible support.
            </p>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/mytems-about.jpeg"
              alt="Our Financial Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutTeam;