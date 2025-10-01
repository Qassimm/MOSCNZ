export default function TagPrimary ({ className, title}) {
    return(
        <div className={`flex-center w-full, ${className}`}>
          
            <img
              src='/rough-icons/yellow-triangle.gif'
              alt='yellow-triangles'
              className="w-25 object-cover sm:w-40 md:w-45 scale-x-[-1]"
            />
          <div className="font-nerko">
            <h1 className="text-7xl md:text-8xl lg:text-9xl underline underline-offset-15 decoration-5 decoration-dashed text-center text-secondary">{title}</h1>
          </div>
           <img
              src='/rough-icons/yellow-triangle.gif'
              alt='yellow-triangle'
              className="w-25 object-cover sm:w-40 md:w-45"
            />
        </div>
    )
}