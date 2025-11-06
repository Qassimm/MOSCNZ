// import React, { useState } from "react";
// import { twMerge } from "tailwind-merge";

// const navlinks = [
//   { label: "Home", href: "#" },
//   { label: "About", href: "#about" },
//   { label: "Skills", href: "#skills" },
//   { label: "Work", href: "#work" },
//   { label: "Experience", href: "#experience" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <sections className="pb-4 lg:pb-8 flex justify-center   fixed w-full top-0 z-99">
//       <div className="container max-w-full ">
//         <div className="bg-dust md:rounded-b-4xl  ">
//           <div className=" p-2 px-4 md:pr-2 flex justify-between  items-center max-w-[2000px] mx-auto ">
//             <a href="/" className="z-90">
//               <p className="font-nerko text-5xl text-primary ">
//                 <img
//                   src="/icons/logo.png"
//                   alt="logo"
//                   className="w-30  object-cover "
//                 />
//               </p>
//             </a>

//             <div className="hidden md:block  justify-center items-center ">
//               <nav className=" flex gap-8 font-light">
//                 {navlinks.map((link, i) => (
//                   <a
//                     href={link.href}
//                     key={i}
//                     className="text-primary hover:scale-105 transition font-poppins font-semibold"
//                   >
//                     {link.label}
//                   </a>
//                 ))}
//               </nav>
//             </div>

//             <div className="flex items-center justify-end gap-4 ">
//               <div className="flex items-center gap-2">
//                 <a
//                   href="#contact"
//                   className="hidden lg:inline mr-4 text-3xl font-nerko hover:text-primary text-secondary hover:bg-transparent bg-secondary transition border-primary border-2 rounded-xl py-1 px-2"
//                 >
//                   connect
//                 </a>
//                 <a href="#contact" className="lg:hidden z-90">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     className="w-10 h-10 hover:text-primary text-secondary bg-secondary hover:bg-transparent hover:border-3  p-1 rounded-xl "
//                   >
//                     <path
//                       d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 
//            1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 
//            1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 
//            011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"
//                     />
//                   </svg>
//                 </a>
//               </div>
//               <svg
//                 xmlns="'http://www.w3.org/2000/svg"
//                 width="40"
//                 height="40"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="feather feather-menu md:hidden text-primary z-100"
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 <line
//                   x1="3"
//                   y1="6"
//                   x2="21"
//                   y2="6"
//                   className={twMerge(
//                     "origin-left transition",
//                     isOpen && "rotate-45 -translate-y-1"
//                   )}
//                 ></line>
//                 <line
//                   x1="3"
//                   y1="12"
//                   x2="21"
//                   y2="12"
//                   className={twMerge("transition", isOpen && "opacity-0")}
//                 ></line>
//                 <line
//                   x1="3"
//                   y1="18"
//                   x2="21"
//                   y2="18"
//                   className={twMerge(
//                     "origin-left transition",
//                     isOpen && "-rotate-45 translate-y-1"
//                   )}
//                 ></line>
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* mobile */}

//         <div className="md:hidden absolute right-0 top-10 ">
//           {isOpen && (
//             <div className="col-center justify-evenly">
//               <div
//                 className={`flex flex-col overflow-auto justify-between py-15 px-5 font-poppins font-bold text-3xl text-primary  bg-dust w-screen h-[100vh] rounded-tl-xl ${
//                   isOpen ? "-translate-x-0" : "translate-x-full"
//                 } transition-all duration-300`}
//               >
//                 <div className="flex-col flex gap-8">
//                   {navlinks.map((link) => (
//                   <a
//                     href={link.href}
//                     key={link.label}
//                     onClick={() => setIsOpen(false)}
//                     className=""
//                   >
//                     {link.label}
//                   </a>
//                 ))}
//                 </div>
//                 <div>
//                 <a  className="font-nerko text-primary text-[26px]">mohsinali10753@gmail.com</a>
//               </div>
//               </div>

              
//             </div>
//           )}
//         </div>
//       </div>
//     </sections>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
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
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <section
      className={twMerge(
        "pb-4 lg:pb-8 flex justify-center fixed w-full top-0 z-[99] transition-transform duration-500 ease-in-out",
        showNavbar ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container max-w-full">
        <div className="bg-dust md:rounded-b-4xl">
          <div className="p-2 px-4 md:pr-2 flex justify-between items-center max-w-[2000px] mx-auto">
            <a href="/" className="z-90">
              <img
                src="/icons/logo.png"
                alt="logo"
                className="w-30 object-cover"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <nav className="flex gap-8 font-light">
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

            {/* Right Side */}
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center gap-2">
                <a
                  href="#contact"
                  className="hidden lg:inline mr-4 text-3xl font-nerko hover:text-primary text-secondary hover:bg-transparent bg-secondary transition border-primary border-2 rounded-xl py-1 px-2"
                >
                  connect
                </a>

                {/* Mobile contact icon */}
                <a href="#contact" className="lg:hidden z-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 hover:text-primary text-secondary bg-secondary hover:bg-transparent p-1 rounded-xl"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 
                      1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 
                      1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 
                      011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
                  </svg>
                </a>
              </div>

              {/* Hamburger */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu md:hidden text-primary z-100 cursor-pointer"
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
                />
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={twMerge("transition", isOpen && "opacity-0")}
                />
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "-rotate-45 translate-y-1"
                  )}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute right-0 top-10">
            <div className="col-center justify-evenly">
              <div
                className={`flex flex-col overflow-auto justify-between py-15 px-5 font-poppins font-bold text-3xl text-primary bg-dust w-screen h-[100vh] rounded-tl-xl transition-all duration-300 ${
                  isOpen ? "-translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex-col flex gap-8">
                  {navlinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div>
                  <a className="font-nerko text-primary text-[26px]">
                    mohsinali10753@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
