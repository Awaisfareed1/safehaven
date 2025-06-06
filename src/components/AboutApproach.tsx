import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import Image from 'next/image';

const AboutApproach = () => {
  const slides = [
    {
      id: 1,
      title: "Personalized Approach",
      description: "We provide tailored strategies based on your individual needs, risk tolerance, time horizon, affordability, and overall suitability — because no two financial journeys are the same.",
      image: "/images/about-swiper-coins.jpg"
    },
    {
      id: 2,
      title: "Comprehensive Expertise",
      description: "Our team combines deep industry knowledge across investments, insurance, retirement planning, and tax strategies to deliver holistic financial solutions that cover all aspects of your wealth.",
      image: "/images/about-swiper-coins.jpg"
    },
    {
      id: 3,
      title: "Client-Centered Commitment",
      description: "We prioritize transparent communication and long-term relationships, ensuring you feel informed, confident, and supported at every step of your financial journey.",
      image: "/images/about-swiper-coins.jpg"
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className='responsive-container '>
        <h2 className="text-[30px] font-bold text-center text-[#727272]">
          Why Choose Us?
        </h2>
      </div>

      <div className="">


        <div className="mt-16">
          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
                origin: 'left center',
              },
              next: {
                shadow: true,
                translate: ['100%', '100%', 0],
                origin: 'right bottom',
                rotate: [0, 0, -90]
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectCreative, Autoplay]}
            className="h-[500px]"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="bg-white rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Image - Right Side */}
                  <div className="relative">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Text Content - Left Side */}
                  <div className="p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{slide.title}</h3>
                    <p className="text-gray-600">{slide.description}</p>
                  </div>


                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AboutApproach;