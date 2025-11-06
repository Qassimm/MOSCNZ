import React from "react";
import Btn from "../components/Btn";

const Hero = ({ children }) => {
  return (
    <section className="HERO-SECTION ">
      <div className="hero-container">
        <div className="hero-text-content z-10 ">
          <p className="text-lg lg:tracking-[0.2em] lg:ml-2">Hello! I&apos;m</p>
          <h1 className="relative font-nerko text-secondary text-6xl sm:text-9xl lg:text-9xl bg-secondary px-1 rounded-xl ">
            MOHSIN-ALI
            <img
              src="/rough-icons/pop-lines.gif"
              alt="pop-line"
              className="h-35 absolute left-142 -top-22 rotate-120 hidden lg:block "
            />
          </h1>
          <p className="font-semibold sm:text-lg  sm:tracking-[0.4em] lg:tracking-[12px] ml-2">
            QUALITY-ASSURANCE-ENGINEER
          </p>

          <div className="flex justify-center gap-4 my-5 ml-2">
            <Btn
              title="Download CV"
              link="/pdf/MohsinAli-SQA-Analyst.pdf"
              download
            />
            <Btn title="Get in touch" link="#contact" />
          </div>
        </div>

        <img
          src="/arrows/blackArrow.svg"
          alt="arrow"
          className="rotate-160 h-30 lg:hidden"
        />

        <div className="z-10">
          <img
            src="/images/hero.png"
            alt="img"
            className="sm:h-[120vh] lg:h-auto max-h-[41em]  object-cover"
          />
        </div>

        <img
          src="/background-imgs/blue-bg.png"
          alt="halftone-blue"
          className="hidden md:block absolute md:right-5 md:bottom-0 md:top-110 lg:top-32 lg:right-0 md:h-[50em] lg:h-[45em] opacity-55"
        />
        <img
          src="/background-imgs/yellow-bg.png"
          alt="halftone-yellow"
          className="hidden md:block absolute md:-top-30 md:-left-60 lg:top-10 lg:-left-20 md:h-[45em] lg:h-[45em] opacity-65 "
        />

        <img
          src="/rough-icons/yellow-triangle.gif"
          alt="yellow-triangle"
          className="h-65 absolute right-0 top-0 -rotate-12 hidden lg:block "
        />
        <img
          src="/rough-icons/yellow-triangle.gif"
          alt="yellow-triangle"
          className="h-35 absolute right-120 top-10 rotate-12 scale-x-[-1] hidden lg:block"
        />
      </div>
    </section>
  );
};

export default Hero;
