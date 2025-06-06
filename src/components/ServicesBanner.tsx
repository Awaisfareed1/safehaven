import Image from 'next/image';

const ServicesBanner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <div className="absolute inset-0">
        <Image
          src="/images/services-banner-img.jpg"
          alt="Wealth building services"
          fill
          className="object-cover bg-center"
          priority
        />
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="responsive-container">
          <div className="max-w-2xl text-white">
            <h2 className="text-[#9b9b9b] text-[22px] font-semibold mb-4">
              Our Services
            </h2>
            <p className="text-[#A02B22]  font-bold md:pr-10">
             At Safe Haven Financial Group, we offer a comprehensive range of wealth-building strategies and solutions designed to protect, grow, and distribute your assets effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;