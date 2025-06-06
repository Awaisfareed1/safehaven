import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const slides = [
    {
      title: "Empowering Your Financial Journey with Trusted Guidance and Tailored Solutions",
      subtitle: "Agency Studio",
      description: "Unparalleled consulting services designed to protect, grow, and preserve your wealth.",
      button1: "Partner with Us",
      backgroundImage: "/images/heroslider.jpg",
      alt: "/images/heroslider.jpg"
    },{
      title: "If You Have the Dream, We Have the Financial Vehicle.",
      subtitle: "Agency Studio",
      description: "Join a risk-free business opportunity with Safe Haven Financial Group.",
      button1: "Partner with Us",
      backgroundImage: "/images/heroslider.jpg",
      alt: "/images/heroslider.jpg"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [slides.length, isHovered]);

  return (
    <>
      <div className={`transition-all duration-300 ${scrolled ? 'h-0' : 'h-0'}`}></div>
      
      <div 
        className="relative w-full overflow-hidden"
        style={{ height: scrolled ? 'calc(100vh)' : '100vh' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={slide.backgroundImage}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
          </div>
        ))}

        <div className="relative h-full w-full flex items-center justify-center text-center px-4 z-10">
          <div className="max-w-4xl px-4">
            
            <h1 className="text-[40px] font-bold mb-4 text-white">
              {slides[currentSlide].title}
            </h1>
            <p className="text-[22px] md:text-base uppercase tracking-widest text-white mb-4">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/" target='_blank'
                className="bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-md text-sm font-bold mt-8"
              >
                {slides[currentSlide].button1}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;