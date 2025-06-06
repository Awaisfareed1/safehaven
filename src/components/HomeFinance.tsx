import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const HomeFinance = () => {
  const counterRef1 = useRef<HTMLSpanElement>(null) as React.RefObject<HTMLSpanElement>;
  const counterRef2 = useRef<HTMLSpanElement>(null) as React.RefObject<HTMLSpanElement>;

  useEffect(() => {
    const animateCounter = (
      ref: React.RefObject<HTMLSpanElement>,
      target: number,
      duration: number = 2000
    ) => {
      if (!ref.current) return;
      
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        if (ref.current) {
          ref.current.textContent = Math.floor(current).toLocaleString() + '+';
        }
      }, 16);
    };

    animateCounter(counterRef1, 3000);
    animateCounter(counterRef2, 2000);
  }, []);

  return (
    <section className="w-full relative py-20 md:py-32 bg-gray-500 text-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-finance.jpg"
          alt="Finance background"
          fill
          className="object-cover"
          style={{ opacity: 1 }}
        />
      </div>
      
      <div className="responsive-container relative z-10 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-[34px] font-extrabold">
              Customized Financial Solutions: Your Trusted Finance Agency
            </h2>
            <p className="">
              At Safe Haven Financial Group, we collaborate with a broad network of trusted service providers to deliver personalized financial solutions tailored specifically to your unique needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 lg:gap-40 max-w-md text-center mx-auto items-center">
              <div className="text-center">
                <span 
                  ref={counterRef1}
                  className="block text-[70px] font-bold text-black mb-2"
                >
                  0+
                </span>
                <span className="text-black text-[18px] font-extrabold">Cases Successfully Handled</span>
              </div>
              <div className="text-center">
                <span 
                  ref={counterRef2}
                  className="block text-[70px] font-bold text-black mb-2"
                >
                  0+
                </span>
                <span className="text-black text-[18px] font-extrabold">Satisfied Clients Empowered</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeFinance;