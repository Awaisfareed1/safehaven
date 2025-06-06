import React from 'react';
import { Landmark, Shield, PiggyBank, HandCoins, HeartPulse, Layers, BriefcaseBusiness, BadgeCent, PencilRuler, House, Flag, BriefcaseMedical, FilePlus, ListFilterPlus } from 'lucide-react';

const ServicesCards = () => {
  const services = [
    {
      title: "Estate Planning (Will & Trust)",
      description: "Estate planning is the process of transferring assets from one generation to the next",
      icon: <HandCoins className="w-7 h-7" />
    },
    {
      title: "Life Insurance",
      description: "We can help you plan the best last gift for your family by calculating your liability needs accurately",
      icon: <HeartPulse className="w-7 h-7" />
    },
    {
      title: "IRA / 401K Rollover",
      description: "It's crucial to manage your tax-deferred account effectively. familiarize yourself with rollover options before making any decisions",
      icon: <Layers className="w-7 h-7" />
    }
    ,
    {
      title: "Annuities",
      description: "An annuity is an investment option that can provide a guaranteed income for an individual or their spouse throughout their retirement.",
      icon: <BriefcaseBusiness className="w-7 h-7" />
    }
    ,
    {
      title: "Retirement Planning",
      description: "Retirement planning focuses on making your money work for you once your job income ceases, regardless of age",
      icon: <HandCoins className="w-7 h-7" />
    }
    ,
    {
      title: "Lifetime Income Planning",
      description: "Guaranteed lifetime income planning becomes crucial when individuals lack Pension-Like Income",
      icon: <BadgeCent className="w-7 h-7" />
    }
    ,
    {
      title: "Kids Education Solutions",
      description: "Elevate your child's future with our personalized education planning. Achieve quality education while minimizing financial stress.",
      icon: <PencilRuler className="w-7 h-7" />
    }
    ,
    {
      title: "Mortgage Protection",
      description: "MPI is a type of insurance policy that helps your family make your monthly mortgage payments",
      icon: <House className="w-7 h-7" />
    }
    ,
    {
      title: "Investment Planning",
      description: "As money grows, so do tax and market risk concerns. Learn how To manage them for healthier investments",
      icon: <Flag className="w-7 h-7" />
    }
    ,
    {
      title: "Healthcare Planning",
      description: "Health insurance or medical insurance is a type of insurance that covers the whole or a part of the risk of a person incurring medical expenses",
      icon: <BriefcaseMedical className="w-7 h-7" />
    }
    ,
    {
      title: "Medicare & Medicaid",
      description: "Medicare is a government national health insurance program in the United States. It primarily provides health insurance for Americans aged 65 and older.",
      icon: <FilePlus className="w-7 h-7" />
    }
    ,
    {
      title: "Final Expenses",
      description: "Final expenses are the end-of-life costs an individual incurs shortly before and shortly after they die. That could include final medical bills and funeral costs.",
      icon: <ListFilterPlus className="w-7 h-7" />
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="responsive-container">
        <div className="text-center mb-12">
          <h2 className="text-[#727272] text-[30px] font-bold mb-4">Experience Our Exclusive Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative bg-white overflow-hidden transition-all duration-300 group"
            >
              <div className="absolute inset-0 rounded-tr-3xl rounded-bl-3xl border border-gray-200 group-hover:border-primary group-hover:bg-primary transition-all duration-300"></div>
              
              <div className="relative p-8 z-10 group-hover:text-white flex justify-center items-center flex-col">
                <div className="w-14 h-14 bg-primary text-white rounded-tr-lg rounded-bl-lg flex items-center justify-center mb-6 group-hover:bg-primary-light group-hover:bg-opacity-20 transition-all duration-300">
                  <span className="group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </span>
                </div>
                
                <h3 className="text-[24px] text-[#5e5e5e] font-bold  mb-3 group-hover:text-white transition-all duration-300">{service.title}</h3>
                <div className="relative w-full mb-6">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-[1px] bg-gray-200 w-8 group-hover:w-full group-hover:bg-white transition-all duration-300"></div>
                </div>
                <p className="text-gray-600 mb-6 group-hover:text-white transition-all duration-300 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;