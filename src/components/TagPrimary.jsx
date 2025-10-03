export default function TagPrimary({ className, title }) {
  return (
    <div className={`flex-center w-full, ${className}`}>
      <div className="font-nerko relative">
        <h1 className="text-6xl md:text-8xl lg:text-9xl underline underline-offset-15 decoration-5 decoration-dashed text-center text-secondary">
          {title}
        </h1>
        <img
          src="/rough-icons/yellow-pop-lines.gif"
          alt="yellow-line"
          className="h-15 md:h-20 absolute -top-8 -left-8 md:-left-12 rotate-30 "
        />
      </div>
    </div>
  );
}
