import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';

const HomeWhy = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="responsive-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/why-wealth.jpg"
                alt="Wealthguard Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -left-4 bottom-1/4 bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-[100px] flex justify-center items-center flex-col">
              <Star className="text-primary w-6 h-6" />
              <p className="text-[15px] font-semibold">
                Experts
              </p>
            </div>
          </div>


          <div className="space-y-6">
            <h2 className="text-[28px] font-extrabold text-[#727272]">Why Choose Safe Haven Financial Group?</h2>
            <p className="text-gray-600">
              Safe Haven Financial Group is an independent financial services company dedicated to bringing expert Wall Street-level strategies directly to you. We also offer a unique and risk-free business opportunity for those who dream of owning their own financial services agency.
            </p>
            <p className="text-gray-600">
              No matter the financial challenges you face, Safe Haven has the experience and resources to build a successful, personalized financial plan. Our licensed professionals educate clients on the importance of a “Circle of Safety” — a comprehensive approach to preserving capital while pursuing long-term growth and wealth appreciation.
            </p>
            <p className='text-gray-600'>
              In today’s uncertain financial environment, protecting your assets is just as important as growing them. Our team consists of some of the most knowledgeable and well-trained experts in the industry, committed to guiding you through every step with clarity and integrity.
            </p>
            <p className='text-gray-600'>
              When you choose Safe Haven Financial Group, you’re partnering with the best professionals who prioritize your financial security and future success.
            </p>
            <button className="bg-none text-primary flex justify-center items-center gap-2 font-bold text-[18px] hover:text-black">
              <span>Read More </span>
              <span><ArrowRight className='w-5 h-5' /></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhy;