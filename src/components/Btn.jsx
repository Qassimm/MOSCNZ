export default function Btn({ title, link, download }) {
  return (
    <a
      href={link}
      {...(download ? { download } : {})}
      className="relative overflow-hidden hover:text-secondary font-semibold py-2 px-4 
             border-2 border-primary rounded-lg transition-colors duration-300 
             text-primary group "
    >
      <span className="relative z-10">{title}</span>
      <span
        className="absolute left-0 bottom-0 w-full h-0 bg-secondary  
               transition-all duration-200 ease-in-out group-hover:h-full"
      ></span>
    </a>
  );
}
