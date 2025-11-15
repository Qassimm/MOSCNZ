import React from "react";

const Footer = () => {
  const icons = [
    {
      img: "/icons/instagram.webp",
      href: "https://www.instagram.com/mohsinhoon/",
      alt: "instagram-icon",
    },
    {
      img: "/icons/twitter.webp",
      href: "https://x.com/mohsinhoon",
      alt: "twitter-icon",
    },
    {
      img: "/icons/threads.webp",
      href: "https://www.threads.com/@mohssinn2.0 ",
      alt: "threads-icon",
    },
  ];

  return (
    <footer className="FOOTER-SECTION ">
      <div className="container relative  flex flex-col md:flex-row items-center gap-2 md:gap-0">
        <div className="z-20 ">
          <img
            src="/images/footer.webp"
            alt="footer-img"
            className=" h-60 sm:h-100 md:h-auto object-cover"
          />
        </div>

        <div className="col-center gap-5 z-20">
          <div>
            <img
              src="/icons/logo.webp"
              alt="logo"
              loading="lazy"
              className="w-50 sm:w-90 md:w-auto"
            />
          </div>
          <div className="social-media flex-center gap-5 ">
            {icons.map((icon, i) => (
              <a
                href={icon.href}
                key={i}
                target="__blank"
                rel="Noopener noreferrer"
              >
                <img
                  src={icon.img}
                  alt={icon.alt}
                  loading="lazy"
                  className="h-12 hover:scale-125"
                />
              </a>
            ))}
          </div>
          <a href="#" className="col-center mt-10 group md:hidden">
            <img
              src="/arrows/blackArrow.webp"
              alt="black-arrow"
              loading="lazy"
              className=" h-25 group-hover:-translate-y-5 transition duration-400"
            />
            <p className="text-5xl text-center font-nerko ">
              BACK <br /> TO TOP
            </p>
          </a>
          <img
            src="/rough-icons/blue-triangle.webp"
            alt="triangle"
            loading="lazy"
            className="h-20 sm:h-40 md:h-35 lg:h-52 -rotate-110 absolute -top-10 md:-top-25  left-0 md:-left-0"
          />
          <img
            src="/rough-icons/blue-triangle.webp"
            alt="triangle"
            className="h-24 sm:h-48 lg:h-68 -rotate-10 absolute -top-10 md:-top-25  right-0 md:right-80 lg:right-140 z-20"
          />
          <img
            src="/rough-icons/blue-roll.webp"
            alt="blue-roll"
            loading="lazy"
            className="hidden md:block h-30 lg:h-50 absolute bottom-5 right-70 lg:right-120 -rotate-120 z-20"
          />
        </div>
        <img
          src="/background-imgs/blue-bg.webp"
          alt="blue-halftone"
          loading="loazy"
          className="absolute hidden md:block h-130 lg:h-200 -right-70 opacity-40 "
        />
        <img
          src="/background-imgs/yellow-bg.webp"
          alt="yellow-halftone"
          loading="lazy"
          className="absolute hidden md:block h-200 lg:h-300 -left-50 opacity-70"
        />

        <a
          href="#"
          className="col-center mt-10 group  absolute -bottom-25 right-0 hidden md:block"
        >
          <img
            src="/arrows/blackArrow.webp"
            alt="black-arrow"
            loading="lazy"
            className=" h-16 lg:h-25 group-hover:-translate-y-5 transition duration-400"
          />
          <p className="md:text-4xl text-center  font-nerko ">
            BACK <br /> TO TOP
          </p>
        </a>
      </div>

      <div className="mb-3 font-poppins text-primary font-bold text-center">
        <p>© Copyrights 2025 Mohsin Ali. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
