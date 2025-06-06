import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeTeam = () => {
    return (
        <section className="w-full relative">
            <div className="absolute inset-0 z-0 flex flex-col">
                <div className="h-2/3 bg-[#D5D0D082] w-full"></div>
                <div className="h-1/3 bg-white w-full"></div>
            </div>

            <div className="responsive-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20">
                    <div className="md:px-10">
                        <p>
                            Our team of independent financial experts empowers you to take control of your finances with personalized solutions tailored to your unique goals and needs.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <h2 className="text-[22px] font-extrabold xl:px-20">
                            "Take control of your finances with tailored solutions from our experts."
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
                    <div className="bg-white rounded-lg  relative group">
                        <div className="h-64 relative">
                            <Image
                                src="/images/home-consulting.jpg"
                                alt="Financial Consulting"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute  -bottom-5 left-0 right-0 flex justify-center">
                            <Link href="/" className="bg-white text-primary px-6 py-2  hover:bg-primary hover:text-white transition-all duration-300 font-medium text-[18px] shadow-md">
                                Consulting
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg relative group">
                        <div className="h-64 relative">
                            <Image
                                src="/images/home-services.jpg"
                                alt="Financial Services"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute  -bottom-5 left-0 right-0 flex justify-center">
                            <Link href="/services" className="bg-white text-primary px-6 py-2  hover:bg-primary hover:text-white transition-all duration-300 font-medium text-[18px] shadow-md">
                                Services
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg  relative group">
                        <div className="h-64 relative">
                            <Image
                                src="/images/home-partnership.jpg"
                                alt="Financial Partnership"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute  -bottom-5 left-0 right-0 flex justify-center">
                            <Link href="/partnership" className="bg-white text-primary px-6 py-2  hover:bg-primary hover:text-white transition-all duration-300 font-medium text-[18px] shadow-md">
                                Partnership
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTeam;