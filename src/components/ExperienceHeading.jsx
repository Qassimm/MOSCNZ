import React from "react";

const ExperienceHeading = () => {
  return (
    <div className="relative text-5xl sm:text-7xl md:text-9xl font-nerko text-center text-primary mr-25">
      <p className="-rotate-8 translate-x-5 sm:translate-x-0">Trusted</p>
      <p className="rotate-12 text-end -translate-y-6 sm:-translate-y-8 md:-translate-y-18 translate-x-10">
        By
      </p>
      <p className="-rotate-3 text-end -translate-y-8 sm:-translate-y-12 md:-translate-y-18 -translate-x-1 sm:-translate-x-10">
        Contour
      </p>
      <p className="rotate-3 text-end -translate-y-8 sm:-translate-y-15 md:-translate-y-20 translate-x-25 sm:translate-x-30">
        Software
      </p>
      <img
        src="/rough-icons/roll.webp"
        alt="roll"
        loading="lazy"
        className="h-15 sm:h-22 md:h-40 absolute top-8 sm:top-12 md:top-20 -rotate-65 right-4 sm:right-10 md:right-25"
      />
      <img
        src="/rough-icons/flower.webp"
        alt="flower"
        loading="lazy"
        className="h-15 sm:h-20 md:h-35 absolute top-19 sm:top-28 md:top-55 -right-20 sm:-right-25 md:-right-20 rotate-15"
      />
      <img
        src="/rough-icons/yellow-circle.webp"
        alt="dot"
        loading="lazy"
        className="h-8 sm:h-10 md:h-20 absolute top-22.5 sm:top-33 md:top-63 -right-16.5 sm:-right-20 md:-right-12"
      />
      <img
        src="/rough-icons/star.webp"
        alt="star"
        loading="lazy"
        className="h-12 sm:h-15 md:h-30 absolute top-10 sm:top-15 md:top-25 -rotate-65 -left-2 sm:-left-10"
      />
      <img
        src="/rough-icons/pop-lines.webp"
        alt="pop-lines"
        loading="lazy"
        className="h-12 sm:h-22 md:h-30 absolute -top-5 sm:-top-10 rotate-35 left-0 sm:-left-10"
      />
      <img
        src="/rough-icons/pop-lines.webp"
        alt="pop-lines"
        loading="lazy"
        className="h-22 hidden sm:block md:h-30 absolute top-48 md:top-95 rotate-195 -right-45 md:-right-50"
      />
    </div>
  );
};

export default ExperienceHeading;
