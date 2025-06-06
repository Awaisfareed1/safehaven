import Link from 'next/link';

const BusinessOpportunity = () => {
  const benefits = [
    "No Major Investment",
    "No Franchise Fees",
    "No Loss of Job Security",
    "No Experience Required",
    "Start Part-Time or Full-Time",
  ];

  const finance = [
    "Revolutionary Compensation System",
    "Unlimited Territory (USA and Canada)",
    "Proven, Predictable, and Profitable Business Model",
    "Strong Leadership Team with a Track Record of Success",
    "A History of Revolutionizing Major Industries",
    "Access to Innovative, Consumer-Oriented Financial Products",
    "Cutting-Edge Technology to Support and Grow Your Business",
    "World-Class Recognition and Reward Programs",
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="responsive-container">
        <div className="">
          <h2 className="text-[26px] font-bold text-[#727272] mb-6">
            We Offer a Risk-Free Business Opportunity
          </h2>
          
          <ul className="space-y-3 text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <p className="text-gray-700">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className=" mt-7">
          <h2 className="text-[26px] font-bold text-[#727272] mb-6">
            Why Partner with Safe Haven Financial Group?
          </h2>
          
          <ul className="space-y-3 text-left">
            {finance.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <p className="text-gray-700">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            target="_blank"
            className="inline-block bg-primary text-white font-bold px-5 py-3 rounded-md hover:bg-primary-dark transition-colors"
          >
            Schedule An Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessOpportunity;