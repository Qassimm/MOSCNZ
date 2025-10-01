import React from "react";
import SkillCard from "../components/skillsCards";
import TagSecondary from "../components/TagSecondary";

const Skills = () => {

  const skills = [
    {img : '/icons/manual.png',
      alt:'manual',
      title:'Manual & Automation',
      description:'Skilled in executing test cases manually and automating workflows for efficiency.'
    },
    {img : '/icons/bug-tracking.png',
      alt:'bug-tracking',
      title:'Bug-Tracking',
      description:'Experienced in using tools like Jira and Trello to identify, track, and report defects'
    },
    {img : '/icons/api-testing.png',
      alt:'API Testing',
      title:'API Testing',
      description:'Proficient in validating REST APIs with Postman to ensure reliable backend communication.'
    },
    {img : '/icons/automation-tools.png',
      alt:'Automation Tools',
      title:'Automation Tools',
      description:'Hands-on practice with Selenium and Cypress for web application testing.'
    },
    {img : '/icons/database-testing.png',
      alt:'Database Testing',
      title:'Database Testing',
      description:'Able to write and execute SQL queries to verify data integrity and consistency.'
    },
    {img : '/icons/perfomance-testing.png',
      alt:'Perfomance Testing',
      title:'Perfomance Testing',
      description:'Knowledge of using tools like JMeter to assess application speed, scalability, and stability.'
    },

  ]

  return (
    <section
      className="SKILLS-SECTION" id="skills">
      <div className="container relative col-center gap-8 sm:gap-4 lg:gap-5 ">
        <TagSecondary title="Skills" />

        <div className="cards-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 z-20">
          {skills.map((skill, i) => (
            <SkillCard
            imgSrc={skill.img}
            alt={skill.alt}
            title={skill.title}
            description={skill.description}
          />
          ))}
        </div>

        <img
          src="/background-imgs/blue-bg.png"
          alt="bg-blue"
          className="absolute h-200 -right-50 -bottom-30 opacity-50 hidden sm:block"
        />
         <img
        src='/rough-icons/blue-triangle.gif'
        alt='blue-triangle'
        className="h-20 md:h-30 lg:h-40 absolute -left-5 sm:-left-10 top-8 sm:top-5 -rotate-100"
      />
         <img
        src='/rough-icons/blue-triangle.gif'
        alt='blue-triangle'
        className="h-20 md:h-30 lg:h-40 absolute -right-5 md:-right-10 top-8 sm:top-5 -rotate-250 scale-x-[-1]"
      />
      </div>
    </section>
  );
};

export default Skills;
