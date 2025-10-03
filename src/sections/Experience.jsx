import React from "react";
import ExperienceHeading from "../components/ExperienceHeading";

const Experience = () => {
  return (
    <section className="EXPERIENCE-SECTION " id="experience">
      <div className="col-center gap-5 lg:gap-15">
        <ExperienceHeading />

        <p className="experience-text  ">
          " I&apos;ve developed expertise in manual, database, and API testing
          across multiple products. By collaborating closely with development
          teams and product owners, I&apos;ve gained a deep understanding of
          requirements, enabling me to design comprehensive testing strategies.
          My work bridges technical implementation and business needs, ensuring
          quality deliverables that meet stakeholder expectations.Additionally,
          I&apos;ve utilized Playwright automation to enhance test coverage
          across applications, improving efficiency and reliability while
          reducing manual effort."
        </p>
      </div>
    </section>
  );
};

export default Experience;
