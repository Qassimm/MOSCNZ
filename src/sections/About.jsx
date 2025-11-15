import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import TagPrimary from "../components/TagPrimary";

const About = () => {
  return (
    <section className="ABOUT-SECTION " id="about">
      <div className="About-container">
        <TagPrimary title="About Me" alt1="yellow-triangle" />

        <div className="flex justify-center items-center mx-auto">
          <div className="about-content-wrapper">
            <div className="about-left-side">
              <img
                src="/images/aboutt.webp"
                alt="about"
                loading="lazy"
                className="hidden md:block lg:h-140 object-cover"
              />
              <p className="font-poppins  text-[15px] sm:text-lg   lg:w-120 md:ml-8 lg:ml-0 text-center md:text-start">
                I break code to build quality. To me, quality means delivering reliable solutions that stay within budget and are ready on time, each element working together to create the best results. My approach combines critical thinking, active listening, adaptability, and teamwork. These skills enable me to understand requirements, resolve challenges effectively, and collaborate seamlessly to ensure everything meets the highest standards. With a strong focus on thorough testing, I am committed to building products that people can trust and enjoy.
              </p>

              <img
                src="/arrows/whiteArrow.webp"
                alt="white arrow"
                loading="lazy"
                className="absolute bottom-40 lg:bottom-30 right-40 lg:right-85 lg:h-46 -rotate-20 scale-x-[-1] hidden md:block"
              />
            </div>

            <div className="about-right-side">
              <img
                src="/rough-icons/roll.webp"
                alt="roll"
                loading="lazy"
                className="h-13 lg:h-45 absolute hidden sm:block -top-15 right-0 -rotate-20 scale-[-1]"
              />
              <img
                src="/rough-icons/yellow-triangle.webp"
                loading="lazy"
                alt="yellow-triangle"
                className="absolute h-60 left-0 rotate-240 hidden lg:block"
              />

              <h2 className="font-nerko text-2xl bg-[#ffd700] rounded-xl lg:rounded-4xl text-primary  md:text-7xl lg:text-8xl  max-w-2xl  py-1 md:mt-12 lg:mt-35">
                I Break Code to build Quality.
              </h2>

              <a
                href="https://www.linkedin.com/in/mohsin-ali-/"
                target="__blank"
                rel="Noopener noreferrer"
                className="text-lg flex-center gap-1 absolute -bottom-15 md:bottom-0 md:right-18 hover:text-white transition duration-200 mt-4"
              >
                <FaLinkedin className="text-xl mt-1 " />
                connect with me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
