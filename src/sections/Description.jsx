


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const chars = text.innerText.split("");
    text.innerHTML = "";

    chars.forEach((char) => {
      const span = document.createElement("span");
    
      span.innerHTML = char === " " ? "&nbsp;" : char;
      span.style.opacity = 0.2;
      span.style.display = "inline-block";
      text.appendChild(span);
    });

    gsap.to(text.querySelectorAll("span"), {
      opacity: 1,
      stagger: 0.03,
      ease: "none",
      scrollTrigger: {
        trigger: text,
        start: "top 80%", 
        end: "bottom 90%",  
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="col-center gap-5 lg:gap-15 bg-dust py-18 sticky top-0 px-3">
      <p
        ref={textRef}
        className="experience-text max-w-4xl text-center leading-relaxed text-lg"
      >
        " I&apos;ve developed expertise in manual, database, and API testing
        across multiple products. By collaborating closely with development
        teams and product owners, I&apos;ve gained a deep understanding of
        requirements, enabling me to design comprehensive testing strategies.
        My work bridges technical implementation and business needs, ensuring
        quality deliverables that meet stakeholder expectations. Additionally,
        I&apos;ve utilized Playwright automation to enhance test coverage across
        applications, improving efficiency and reliability while reducing manual
        effort."
      </p>
    </div>
  );
};

export default Description;
