import React, { useEffect, useRef, useState } from "react";
import { FaPhone } from "react-icons/fa";

const navlinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);


  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (navRef.current) {
            if (current > lastScrollY.current && current > 80) {
              navRef.current.style.transform = "translateY(-100%)";
            } else {
              navRef.current.style.transform = "translateY(0)";
            }
          }
          lastScrollY.current = current;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[99] transition-transform duration-300 bg-dust md:rounded-b-4xl"
    >
      <div className="flex justify-between items-center px-4 py-3 max-w-[2000px] mx-auto">
        
        <a href="/" className="z-20">
          <img src="/icons/logo.webp" alt="logo" className="w-28 object-cover" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-semibold text-primary">
          {navlinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:scale-105 font-poppins transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4 z-20">
          {/* Desktop button */}
          <a
            href="#contact"
            className="hidden lg:inline text-3xl font-nerko text-secondary bg-secondary hover:bg-transparent hover:text-primary border-2 border-primary rounded-xl py-1 px-2 transition"
          >
            connect
          </a>

          {/* Mobile contact icon */}
          <a href="#contact" className="lg:hidden">
            <div className="flex-center text-2xl w-10 h-10 bg-secondary text-secondary hover:text-primary hover:bg-transparent hover:border-2 border-primary p-1 rounded-xl transition">
              <FaPhone/>
            </div>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden  relative w-10 h-10 flex flex-col justify-center items-center z-[100]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-[4px] w-8 bg-secondary transition-all duration-300 rounded-2xl   ${
                isOpen ? "rotate-45 translate-y-[10.5px]" : ""
              }`}
            ></span>
            <span
              className={`block h-[4px] w-8 bg-secondary transition-all duration-300 mt-1.5 rounded-2xl  ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-[4px] w-8 bg-secondary transition-all duration-300 mt-1.5 rounded-2xl ${
                isOpen ? "-rotate-45 -translate-y-[9px] " : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed right-0 top-0 w-screen h-screen bg-dust flex flex-col justify-between py-20 px-6 text-3xl font-poppins font-bold text-primary transition-transform duration-300 z-[10] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-10">
          {navlinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-2xl font-nerko">
          mohsinali10753@gmail.com
        </div>
      </div>
    </header>
  );
};

export default Navbar;