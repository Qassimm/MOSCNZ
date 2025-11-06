import { FaLink } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";

export default function ProjectCard({ link, title, img, className }) {
  return (
    <div
      className={`  h-90 lg:h-100 lg:max-w-88 rounded-2xl col-center justify-center md:gap-6  p-3 bg-primary ${className}`}
    >
      <img src={img} alt="star" className="h-25 sm:h-30" />
      <div className="text-primary text-center col-center gap-4">
        <h3 className="font-nerko text-3xl md:text-4xl">{title}</h3>
      </div>
      <a
        href={link}
        target="__blank"
        rel="Noopener noreferrer"
        className="hover:bg-transparent bg-secondary text-secondary hover:text-primary border-2 border-primary flex-center gap-1 rounded-full  p-1"
      >
        <FaLink className="text-2xl" />
      </a>
    </div>
  );
}
