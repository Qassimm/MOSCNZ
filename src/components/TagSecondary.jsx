export default function TagSecondary({className, title}) {
  return (
    <div className={` ${className}`}>
     
      <div className="font-nerko">
        <h1 className="text-7xl md:text-8xl lg:text-9xl underline underline-offset-15 decoration-5 decoration-dashed text-center text-primary">
          {title}
        </h1>
      </div>
      
    </div>
  );
}
