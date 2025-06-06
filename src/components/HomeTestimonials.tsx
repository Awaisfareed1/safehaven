import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const HomeTestimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      author: "Anita Sharma, Small Business Owner",
      content: "Safe Haven Financial Group helped me create a clear, achievable plan for my retirement. Narendra’s team made the complex simple and always kept my best interests at heart."
    },
    {
      id: 2,
      author: "Rohan Mehta, Engineer",
      content: "Thanks to Safe Haven’s personalized approach, I feel confident about protecting my family’s future. Their expert guidance turned my worries into a solid plan."
    },
    {
      id: 3,
      author: "Priya Kapoor, Marketing Executive",
      content: "From investment strategies to insurance solutions, Safe Haven’s team delivered comprehensive advice that aligned perfectly with my goals."
    },
    {
      id: 4,
      author: "Sanjay Desai, IT Professional",
      content: "Narendra and his team made financial planning easy to understand and implement. Their dedication to client success is unmatched."
    },
    {
      id: 5,
      author: "Meera Patel, Financial Advisor",
      content: "The business opportunity offered by Safe Haven changed my life. I now run my own financial services agency with full support from a trusted network."
    },
    {
      id: 6,
      author: "Vikram Singh, Entrepreneur",
      content: "Safe Haven Financial Group truly cares about their clients. Their proactive approach and continuous support have been invaluable to my financial growth."
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="px-5">
        <h2 className="text-[30px] font-bold text-center mb-12 text-gray-700">Our Testimonials</h2>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2
              }
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev'
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'testimonial-bullet',
              bulletActiveClass: 'testimonial-bullet-active'
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#ECECEC] p-8 rounded-3xl shadow-md h-full">
                  <h3 className="text-[18px] font-bold mb-4 text-primary">{testimonial.author}</h3>
                  <p className="text-gray-600">"{testimonial.content}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        <div className="testimonial-pagination flex justify-center mt-8 space-x-2"></div>
      </div>
    </section>
  );
};

export default HomeTestimonials;