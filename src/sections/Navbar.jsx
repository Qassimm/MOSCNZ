import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const navlinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <sections className="pb-4 lg:pb-8 flex justify-center   fixed w-full top-0 z-50">
      <div className="container max-w-full ">
        <div className="bg-dust rounded-b-4xl  ">
          <div className=" p-2 px-4 md:pr-2 flex justify-between  items-center max-w-[2000px] mx-auto">
            <a href="/">
              <p className="font-nerko text-5xl text-primary transition">
                <img src="/icons/logo.png" alt="logo" className="w-30  object-cover" />
              </p>
            </a>

            <div className="hidden md:block  justify-center items-center">
              <nav className=" flex gap-8 font-light">
                {navlinks.map((link, i) => (
                  <a
                    href={link.href}
                    key={i}
                    className="text-primary hover:scale-105 transition font-poppins font-semibold"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center justify-end gap-4">
              <svg
                xmlns="'http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu md:hidden text-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "rotate-45 -translate-y-1"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={twMerge("transition", isOpen && "opacity-0")}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "-rotate-45 translate-y-1"
                  )}
                ></line>
              </svg>

              <div className="flex items-center gap-2">
                <a href="#contact" className="hidden lg:inline mr-4 text-3xl font-nerko hover:text-primary text-secondary hover:bg-transparent bg-secondary transition border-primary border-2 rounded-xl py-1 px-2">
                  connect
                </a>
                <span className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 hover:text-primary text-secondary bg-secondary hover:bg-transparent hover:border-3  p-1 rounded-xl"
                  >
                    <path
                      d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 
           1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 
           1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 
           011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* mobile */}

        <div className="md:hidden absolute right-0 top-20 ">
          {isOpen && (
            <div>
              <div
                className={`flex flex-col items-center gap-8 py-4 font-nerko text-3xl text-primary  bg-dust w-[98vw] sm:w-[65vw] h-[100vh] border-r-0 border-3 rounded-tl-xl ${
                  isOpen ? "-translate-x-0" : "translate-x-full"
                } transition-all duration-300`}
              >
                {navlinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <span className="lg:hidden inline mr-4 text-3xl font-nerko hover:text-primary text-secondary hover:bg-transparent bg-secondary transition border-primary border-2 rounded-xl py-1 px-2">
                  Connect
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </sections>
  );
};

export default Navbar;
