import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#727272] text-gray-300">
      <div className="responsive-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              alt="Legacy Wealth Redefined Logo"
              src="/logos/logo.jpeg"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/channie.nak" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-white hover:text-primary transition-colors" />
              </a>
              <a href="https://www.facebook.com/channie.nak" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-white hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/channie-nak" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-white hover:text-primary transition-colors" />
              </a>
              <a href="https://www.tiktok.com/@channie.nak" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 text-white hover:text-primary transition-colors" />
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="flex flex-col space-y-3 text-white">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white   flex-shrink-0 mt-0.5" />
                  <address className="not-italic text-[14px] font-medium text-white">
                    7150 E Camelback Road
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white flex-shrink-0" />
                  <Link href="tel:+91 302-521-2308" className="hover:text-white transition-colors">
                    +91 (302) 521-2308
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-white flex-shrink-0" />
                  <Link href="mailto:wisdom4safetynet@gmail.com" className="hover:text-white transition-colors">
                    wisdom4safetynet@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-6 text-center md:text-left">
              <Link href="/" className="text-white hover:text-white transition-colors ">
                Home
              </Link>
              <Link href="/about-us" className="text-white hover:text-white transition-colors ">
                About
              </Link>
              <Link href="/services" className="text-white hover:text-white transition-colors ">
                Services
              </Link>
              <Link href="/contact-us" className="text-white hover:text-white transition-colors ">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white text-lg font-semibold">Reach Us</h3>
            <div className="mt-10 rounded-lg overflow-hidden h-48 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.216678186675!2d-111.9268479241468!3d33.5024309733361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0bbd35df8635%3A0x9c41f1f0a1e9d9a1!2s7150%20E%20Camelback%20Rd%20%23444%2C%20Scottsdale%2C%20AZ%2085251!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>


        
      </div>
      {/* Copyright */}
        <div className="  text-center text-[14px] text-white bg-black py-6">
          <p>© {new Date().getFullYear()} Legacy Wealth Redefined. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;