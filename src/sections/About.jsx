import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import TagPrimary from "../components/TagPrimary";

const About = () => {
  return (
    <section className="ABOUT-SECTION" id="about">
      <div className="About-container">
        <TagPrimary
          title="About Me"
          alt1="yellow-triangle"
        />

        <div className="flex justify-center items-center mx-auto">
          <div className="about-content-wrapper">
            <div className="about-left-side">
              <img
                src="/images/aboutt.png"
                alt="about"
                className="hidden md:block lg:h-140 object-cover"
              />
              <p className="font-poppins text-center sm:text-lg px-8 sm:px-10 md:px-0 lg:w-120 lg:text-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                sit adipisci impedit animi, laudantium ex maiores esse
                doloremque! Quas, ipsam eos. Ipsam perspiciatis non
                exercitationem, perferendis cum inventore ipsum
                dignissimos.maiores esse doloremque! Quas, ipsam eos. Ipsam
                perspiciatis non exercitationem, perferendis cum inventore ipsum
                dignissimos.
              </p>
              <img
                src="/rough-icons/roll.gif"
                alt="roll"
                className="h-14 lg:h-24 absolute -bottom-15 left-0 rotate-160 scale-[-1]"
              />

              <img
                src="/arrows/whiteArrow.svg"
                alt="white arrow"
                className="absolute bottom-20 lg:bottom-30 right-40 lg:right-85 lg:h-46 -rotate-20 scale-x-[-1] hidden md:block"
              />
            </div>

            <div className="about-right-side">
              <img
                src="/rough-icons/roll.gif"
                alt="roll"
                className="h-13 lg:h-45 absolute -top-15 right-0 -rotate-20 scale-[-1]"
              />
              <img
                src="/rough-icons/yellow-triangle.gif"
                alt="yellow-circle"
                className="absolute h-60 left-0 rotate-240 hidden lg:block"
              />

              <h2 className="font-nerko text-2xl bg-[#ffd700] rounded-xl lg:rounded-4xl text-primary  md:text-8xl  max-w-2xl px-1 py-2 lg:mt-35">
                I Break Code to build Quality.
              </h2>

              <a
                href="https://www.linkedin.com/in/mohsin-ali-/"
                target="__blank"
                rel="Noopener noreferrer"
                className="text-lg flex-center gap-1 absolute -bottom-15 md:bottom-0 md:right-18 hover:text-white transition duration-200"
              >
                <FaLinkedin className="text-xl mt-1" />
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
