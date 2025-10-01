import React from "react";

export default function SkillCard({ imgSrc, alt, title, description, className }) {
  return (
    <div className={`h-60 w-fit border-4 border-primary rounded-2xl col-center justify-center gap-5 px-1 bg-primary shadow-lg shadow-black/50 ${className}`}>
      <img src={imgSrc} alt={alt} className="h-20" />

      <div className="text-primary text-center">
        <h3 className="font-nerko text-3xl md:text-4xl">{title}</h3>
        <p className="font-poppins">{description}</p>
      </div>
    </div>
  );
}
