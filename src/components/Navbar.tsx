import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Facebook, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`hidden md:block w-full z-40 transition-all duration-300  ${isSticky ? 'fixed top-0 bg-gray-100 shadow-sm py-1' : 'fixed top-0 bg-gray-100 py-1'}`}>
        <div className="responsive-container text-md font-medium py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="tel:+913025212308" className="flex items-center hover:text-primary">
                <Phone className="h-4 w-4 mr-1" />
                (302) 521-2308
              </a>
              <a href="mailto:wisdom4safetynet@gmail" className="flex items-center hover:text-primary">
                <Mail className="h-4 w-4 mr-1" />
                wisdom4safetynet@gmail
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-md text-sm font-bold"
              >
                Book Appointment
              </Link>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-md bg-[#1877F2] hover:bg-primary cursor-pointer"
                onClick={() => window.open("https://www.facebook.com/WealthguardFinancialGroup", "_blank")}
                >
                  <Facebook
                    className="h-6 w-6 text-white transition-colors "
                    
                  />
                </div>
                <div className="p-2 rounded-md bg-[#0077B5] hover:bg-primary cursor-pointer"
                onClick={() => window.open("https://www.linkedin.com/company/wealthguard-financial-group", "_blank")}
                >
                  <Linkedin
                    className="h-6 w-6 text-white transition-colors ml-2"
                    
                  />
                </div>
                <div className="p-2 rounded-md bg-[#1da1f2] hover:bg-primary cursor-pointer"
                onClick={() => window.open("https://wa.me/12676449955", "_blank")}
                >
                  <Twitter
                    className="h-6 w-6 text-white ry transition-colors ml-2"
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className={`w-full z-50 font-Poppins transition-all duration-300 ${isSticky ? 'fixed top-0 md:top-16 left-0 bg-white shadow-md' : 'fixed top-0 md:top-16 bg-white'}`}>
        <div className="responsive-container">
          <div className="flex justify-between items-center h-16 md:h-28">
            <Link href="/" className="text-2xl font-semibold hover:text-primary transition-colors">
              <Image
                src="/logos/logo.jpeg"
                alt="Wealthguard Financial Group Logo"
                width={150}
                height={150}
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              <NavLink href="/" pathname={pathname} isSticky={isSticky}>Home</NavLink>
              <NavLink href="/services" pathname={pathname} isSticky={isSticky}>Services</NavLink>
              <NavLink href="/about-us" pathname={pathname} isSticky={isSticky}>About Us</NavLink>
              <NavLink href="/partnership" pathname={pathname} isSticky={isSticky}>Partnership</NavLink>
              <NavLink href="/contact-us" pathname={pathname} isSticky={isSticky}>Contact Us</NavLink>
            </div>

            <button
              className="lg:hidden p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={28} className="text-gray-800" />
              ) : (
                <Menu size={28} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`}>
        <div className="relative w-4/5 max-w-sm h-full bg-white shadow-xl">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="text-2xl font-semibold" onClick={() => setIsOpen(false)}>
                <span className="font-bold">Wealthguard</span>
                <span className="block text-xs font-light">FINANCIAL GROUP</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 focus:outline-none"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-800" />
              </button>
            </div>

            <div className="flex flex-col space-y-4 flex-grow">
              <MobileNavLink href="/" pathname={pathname} onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/services" pathname={pathname} onClick={() => setIsOpen(false)}>Services</MobileNavLink>
              <MobileNavLink href="/about-us" pathname={pathname} onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink href="/partnership" pathname={pathname} onClick={() => setIsOpen(false)}>Partnership</MobileNavLink>
              <MobileNavLink href="/contact-us" pathname={pathname} onClick={() => setIsOpen(false)}>Contact Us</MobileNavLink>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <a href="tel:+913025212308" className="flex items-center text-sm hover:text-primary">
                  <Phone className="h-4 w-4 mr-2" />
                  (302) 521-2308
                </a>
                <a href="mailto:wisdom4safetynet@gmail" className="text-sm hover:text-primary">
                  wisdom4safetynet@gmail
                </a>
                <Link
                  href="/"
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isSticky && <div className={`h-16 ${isSticky ? 'md:h-28' : ''}`}></div>}
    </>
  );
};


const NavLink = ({ href, pathname, children, isSticky }: { href: string, pathname: string, children: React.ReactNode, isSticky: boolean }) => (
  <Link href={href}>
    <span
      className={`${pathname === href ? "text-primary font-bold text-[18px]" : isSticky ? "text-gray-800 hover:text-primary font-bold" : "text-gray-700 hover:text-primary font-bold"} 
      transition-colors duration-200 px-3 py-2`}
    >
      {children}
    </span>
  </Link>
);

const MobileNavLink = ({ href, pathname, children, onClick }: { href: string, pathname: string, children: React.ReactNode, onClick: () => void }) => (
  <Link href={href} onClick={onClick}>
    <span
      className={`${pathname === href ? "text-primary font-medium" : "text-gray-800"} 
      block py-2 text-lg transition-colors duration-200`}
    >
      {children}
    </span>
  </Link>
);

export default Navbar;