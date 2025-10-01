import { FaGithub } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

export default function ProjectCard({ link, title, description, className }) {
  return (
    <div
      className={` h-90 lg:h-100 w-fit lg:max-w-88 rounded-2xl col-center justify-center gap-6 p-1 bg-primary ${className}`}
    >
      <img src="/rough-icons/star.gif" alt="star" className="h-20" />
      <div className="text-primary text-center col-center gap-4">
        <h3 className="font-nerko text-3xl md:text-4xl">{title}</h3>
        <p className="font-poppins">{description}</p>
      </div>
      <a
        href={link}
        target="__blank"
          rel="Noopener noreferrer"
        className="hover:bg-transparent bg-secondary text-secondary hover:text-primary border-2 border-primary rounded-full "
      >
        <LuArrowUpRight className="text-2xl" />
      </a>

      
    </div>
  );
}
