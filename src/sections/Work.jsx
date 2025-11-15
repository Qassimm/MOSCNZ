import React from "react";
import TagPrimary from "../components/TagPrimary";
import ProjectCard from "../components/ProjectCards";
import { FaGithub } from "react-icons/fa";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Work = () => {

  gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  gsap.from(".card", {
    yPercent: 15,

    scrollTrigger: {
      trigger: ".card",
      start: "top 85%",
      end: "top 5%",
      scrub: true,   // scroll ke sath animation
    }
  });
});



  return (
    <section className="WORK-SECTION" id="work">
      <div className="work-container relative">
        <TagPrimary title="My Work" />
        <div className="skills-cards-wrapper">
          <ProjectCard
            title="Replit-App"
            img='/icons/replit.webp'
            link="https://github.com/MohsinHoon/Replit-Apps"
            className="card lg:-rotate-3"
          />
          <ProjectCard
            title="Play-wright with JS"
            img='/icons/playwright.webp'
            className='card'
            link="https://github.com/MohsinHoon/Playwright-with-Javascript"
          />
          <ProjectCard
            title="Cypress-Projects"
            img='/icons/cypress.webp'
            link="https://github.com/MohsinHoon/Cypress-Projects"
            className="card  lg:rotate-3 sm:col-span-2 lg:col-span-1  "
          />
        </div>

        <a
          href="https://github.com/MohsinHoon"
          target="__blank"
          rel="Noopener noreferrer"
          className="text-secondary text-lg flex-center gap-1 hover:text-white transition duration-200 mt-5"
        >
          <FaGithub className="text-xl mt-1" />
          connect with me
        </a>
        <img
          src="/background-imgs/yellow-bg.webp"
          alt="yellow-bg"
          loading="lazy"
          className="w-150 absolute -left-50 opacity-70 hidden sm:block"
        />
        <img
          src="/background-imgs/yellow-bg.webp"
          alt="yellow-bg"
          loading="lazy"
          className="w-150 absolute -right-50 opacity-70 scale-x-[-1] hidden sm:block"
        />
        <img
          src="/rough-icons/yellow-triangle.webp"
          alt="yelow-triangle"
          loading="lazy"
          className="h-20 hidden sm:block sm:h-25 md:h-30 lg:h-40 absolute -left-5 sm:-left-0 top-8 sm:top-5 -rotate-100"
        />
        <img
          src="/rough-icons/yellow-triangle.webp"
          alt="yellow-triangle"
          loading="lazy"
          className="h-20 hidden sm:block sm:h-25 md:h-30 lg:h-40 absolute sm:-right-0  top-8 sm:top-5 -rotate-250 scale-x-[-1]"
        />
      </div>
    </section>
  );
};

export default Work;
