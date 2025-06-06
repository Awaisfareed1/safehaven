import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeAbout = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="responsive-container">
        {/* Top section - Meet Our Team */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
          <div className="lg:w-1/3">
            <h2 className=" font-bold text-primary text-[30px]">Meet Our Experienced Team</h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-gray-600 ">
              At Safe Haven Financial Group, our dedicated team of financial professionals is here to guide you every step of the way. Whether it's investments, retirement planning, tax strategies, insurance, or more, we provide personalized advice tailored to your unique goals.
            </p>
            <div className="mt-6">
              <Link href="/about" className="inline-block text-primary font-medium hover:text-black transition-colors">
                Know More...
              </Link>
            </div>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <div className="relative h-[400px] rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/ceo-image.jpeg"
                alt="Srini Padala"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:w-2/3 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[20px] font-bold text-primary">Narendra Savanagiri</h3>
              </div>
              <div className="text-right">
                <span className="inline-block px-4 py-1 bg-gray-200 text-primary rounded-full text-sm font-medium">
                  Founder & CEO
                </span>
              </div>
            </div>

            <div className="space-y-4 text-[15px] text-gray-600">
              <p>
                Founder & CEO
                Narendra Savanagiri is passionate about helping families and individuals achieve financial security and freedom. He believes everyone deserves a clear path to protect what matters most and build lasting wealth.
              </p>
              <p>
                With Safe Haven Financial Group, Narendra’s mission is to educate and empower clients to take control of their financial future. He is committed to providing personalized guidance that meets each person’s unique needs and goals.
              </p>
              <p>
                Narendra also believes in creating opportunities — offering those with the dream of owning their own financial services business a chance to build their future alongside a trusted and supportive team.
              </p>
              <p>
                At Safe Haven, Narendra is dedicated to making a positive difference, one family and one business at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;