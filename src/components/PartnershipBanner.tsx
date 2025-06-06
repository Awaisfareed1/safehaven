import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const PartnershipBanner = () => {
  const quotes = [
    "“Opportunities don’t happen. You create them.” — Chris Grosser",
    "“The best way to predict the future is to create it.” — Peter Drucker",
  ];

  return (
    <div className="bg-[#F4F4F4] py-12 ">
      <div className="responsive-container">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10">
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 order-1">
            <h2 className="text-[13px] text-primary uppercase font-semibold tracking-wider">
              Aspiring for Partnership
            </h2>
            <h3 className="text-[32px] md:text-[40px] font-extrabold text-[#727272] leading-tight">
              Leaders with Vision Helping People with Dreams
            </h3>
          </div>

          <div className="w-full lg:w-1/2 order-2">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/partnership-banner-img.jpg"
                alt="Partnership meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>


        <div className="mt-8 md:mt-16 order-3">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className=""
          >
            {quotes.map((quote, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-4">
                  <p className="text-[18px] md:text-[20px] font-bold text-primary">
                    {quote}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PartnershipBanner;