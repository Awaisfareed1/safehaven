import React from 'react';

const AboutVision = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="responsive-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Column */}
          <div className=" border-gray-200 pr-0 md:pr-12">
            <div className="flex items-center mb-6">
              <h2 className="text-[13px] uppercase font-bold text-primary">OUR MISSION</h2>
              <span className="mx-4 text-gray-400 text-2xl">—</span>
            </div>
            <div className="pl-4  border-primary-500">
              <h3 className="text-[18px] font-bold text-[#4a4a4a] mb-6">"Create Wealth for Families"</h3>
              <p className="text-primary text-[18px] font-bold">
                We empower financial success through personalized guidance, education, and solutions. Our goal is to help you navigate financial complexities, build trust, and optimize your wealth to achieve your personal objectives.
              </p>
            </div>
          </div>

          {/* Vision Column */}
          <div className="pl-0 md:pl-12">
            <div className="flex items-center mb-6">
              <h2 className="text-[13px] uppercase font-bold text-primary">OUR VISION</h2>
              <span className="mx-4 text-gray-400 text-2xl">—</span>
            </div>
            <div className="pl-4 b border-primary-500">
              <h3 className="text-[18px] font-bold text-[#4a4a4a] mb-6">"Lead the Consumer Empowerment Revolution"</h3>
              <p className="text-primary text-[18px] font-bold">
                We envision a future where financial prosperity is accessible to all. Through trust, innovation, and clear guidance, we are committed to leading you on a confident journey toward financial security and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;