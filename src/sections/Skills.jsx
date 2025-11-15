import React from "react";
import SkillCard from "../components/SkillsCards";
import TagSecondary from "../components/TagSecondary";

const Skills = () => {
  const skills = [
    {
      img: "/icons/manual.webp",
      alt: "manual",
      title: "Manual & Automation",
      description:
        "Skilled in executing test cases manually and automating workflows for efficiency.",
    },
    {
      img: "/icons/bug-tracking.webp",
      alt: "bug-tracking",
      title: "Bug-Tracking",
      description:
        "Experienced in using tools like Jira and Trello to identify, track, and report defects",
    },
    {
      img: "/icons/api-testing.webp",
      alt: "API Testing",
      title: "API Testing",
      description:
        "Proficient in validating REST APIs with Postman to ensure reliable backend communication.",
    },
    {
      img: "/icons/automation-tools.webp",
      alt: "Automation Tools",
      title: "Automation Tools",
      description:
        "Hands-on practice with Selenium and Cypress for web application testing.",
    },
    {
      img: "/icons/database-testing.webp",
      alt: "Database Testing",
      title: "Database Testing",
      description:
        "Able to write and execute SQL queries to verify data integrity and consistency.",
    },
    {
      img: "/icons/perfomance-testing.webp",
      alt: "Perfomance Testing",
      title: "Perfomance Testing",
      description:
        "Knowledge of using tools like JMeter to assess application speed, scalability, and stability.",
    },
  ];

  return (
    <section className="SKILLS-SECTION" id="skills">
      <div className="container relative col-center gap-15  lg:gap-5 ">
        <TagSecondary title="Skills" />

        <div className="cards-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 sm:gap-6 z-20 px-3 sm:px-0">
          {skills.map((skill, i) => (
            <SkillCard
              key={i}
              imgSrc={skill.img}
              alt={skill.alt}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>

        <img
          src="/background-imgs/blue-bg.webp"
          alt="bg-blue"
          loading="lazy"
          className="absolute h-200 -right-50 -bottom-30 opacity-50 hidden sm:block"
        />
        <img
          src="/rough-icons/blue-triangle.webp"
          alt="blue-triangle"
          loading="lazy"
          className="h-20 hidden sm:block sm:h-25 md:h-30 lg:h-40 absolute -left-5 sm:-left-0 top-8 sm:top-5 -rotate-100"
        />
        <img
          src="/rough-icons/blue-triangle.webp"
          alt="blue-triangle"
          loading="lazy"
          className="h-20 hidden sm:block sm:h-25 md:h-30 lg:h-40 absolute sm:-right-0  top-8 sm:top-5 -rotate-250 scale-x-[-1]"
        />
      </div>
    </section>
  );
};

export default Skills;
