import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const AboutBanner = () => {
  const sequences = [
    "Preserving Your ",
    "Preserving Your ",
  ];
  
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState(0); // 0: building, 1: breaking, 2: switching
  const [currentSeqIndex, setCurrentSeqIndex] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = sequences[currentSeqIndex];
      
      if (phase === 0) { // Building phase
        if (index < currentText.length) {
          setDisplayText(currentText.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setPhase(1); // Switch to breaking phase
        }
      } 
      else if (phase === 1) { // Breaking phase
        if (index > 0) {
          setDisplayText(currentText.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          setPhase(2); // Switch to sequence change
        }
      }
      else if (phase === 2) { // Sequence change phase
        setCurrentSeqIndex((currentSeqIndex + 1) % sequences.length);
        setPhase(0); // Back to building
        setIndex(0);
      }
    }, 150); // Animation speed

    return () => clearInterval(interval);
  }, [index, phase, currentSeqIndex]);

  return (
    <section className="w-full relative h-[500px] md:h-[600px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aboutus-banner-img.jpg"
          alt="About Us Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="responsive-container relative z-10 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-[24px] md:text-[32px] font-bold text-white mb-6">
            Trust Our Experts. We Focus on <br className='hidden md:block'/>
            <span className="text-primary-300 min-h-[60px] inline-block">
              {displayText}
              <span className="animate-pulse">_</span>
            </span> Wealth.
          </h1>
          
          <p className="text-[20px] font-medium text-white">
           At Safe Haven Financial Group, we act as your fiduciaries — always putting your best interests first. Our recommendations are unbiased and carefully aligned with your unique financial goals, ensuring you receive the guidance and solutions you deserve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;