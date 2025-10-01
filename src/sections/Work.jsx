import React from "react";
import TagPrimary from "../components/TagPrimary";
import ProjectCard from "../components/ProjectCards";
import { FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <section className="WORK-SECTION" id="work">
      <div
        className="work-container"
        
      >
        <TagPrimary title="My Work" />
        <div className="skills-cards-wrapper">
          <ProjectCard
            title="Replit-App"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis cumque nihil magnam sit ad, quibusdam quae inventore voluptatibus"
            link="https://github.com/MohsinHoon/Replit-Apps" className='sm:rotate-2 lg:-rotate-3'
          />
          <ProjectCard
            title="Play-wright with JS"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis cumque nihil magnam sit ad, quibusdam quae inventore voluptatibus"
            link="https://github.com/MohsinHoon/Playwright-with-Javascript" className='sm:-rotate-2  lg:rotate-2'
          />
          <ProjectCard
            title="Cypress-Projects"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis cumque nihil magnam sit ad, quibusdam quae inventore voluptatibus"
            link="https://github.com/MohsinHoon/Cypress-Projects" className='sm:rotate-2  lg:-rotate-3'
          />
          <ProjectCard
            title="Cypress-Automation"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis cumque nihil magnam sit ad, quibusdam quae inventore voluptatibus"
            link="https://github.com/MohsinHoon/Cypress-Automation" className='sm:-rotate-2 lg:rotate-2'
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
        <img src="/background-imgs/yellow-bg.png" alt="yellow-bg" className="w-150 absolute -left-30 opacity-70 hidden sm:block"/>
        <img src="/background-imgs/yellow-bg.png" alt="yellow-bg" className="w-150 absolute -right-30 opacity-70 scale-x-[-1] hidden sm:block"/>
      </div>
      
      
    </section>
  );
};

export default Work;
