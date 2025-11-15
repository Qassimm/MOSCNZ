export default function TagSecondary({ className, title }) {
  return (
    <div className={` ${className}`}>
      <div className="font-nerko relative">
        <h1 className="text-7xl md:text-8xl lg:text-9xl underline underline-offset-15 decoration-5 decoration-dashed text-center text-primary">
          {title}
          <img
            src="/rough-icons/pop-lines.webp"
            alt="yellow-line"
            className="h-15 md:h-20 absolute -top-8 -left-8 md:-left-12 rotate-30 "
          />
        </h1>
      </div>
    </div>
  );
}
