export default function ContactHeading() {
  return (
    <div className="relative text-6xl sm:text-8xl md:text-9xl font-nerko text-center text-secondary mr-15 ">
      <p className="-rotate-8 translate-x-5 sm:translate-x-0">READY</p>
      <p className="rotate-12 text-end -translate-y-10 sm:-translate-y-14 md:-translate-y-18 lg:-translate-y-22 lg: translate-x-8 sm:translate-x-5">
        TO
      </p>
      <p className="-rotate-3 text-end -translate-y-5 sm:-translate-y-10 md:-translate-y-18 translate-x-7 sm:translate-x-8">
        CONNECT?
      </p>
      <img
        src="/rough-icons/red-roll.webp"
        alt="roll"
        loading="lazy"
        className="h-20 sm:h-28 md:h-40 absolute top-10 sm:top-17 md:top-20 -rotate-65 right-4 sm:right-16 md:right-25"
      />

      <img
        src="/rough-icons/red-triangle.webp"
        alt="dot"
        loading="lazy"
        className="h-20 sm:h-32 md:h-45 absolute -top-5  sm:-top-8 md:-top-15 -right-16.5 sm:-right-15 md:-right-22 -rotate-20"
      />
      <img
        src="/rough-icons/red-triangle.webp"
        alt="pop-lines"
        loading="lazy"
        className="h-20 sm:h-32 md:h-45 absolute top-12 sm:top-16 md:top-15 left-0 sm:-left-6 md:-left-10  rotate-40 scale-x-[-1]"
      />
      <img
        src="/rough-icons/yellow-pop-lines.webp"
        alt="pop-lines"
        loading="lazy"
        className="h-15 sm:h-22 md:h-30 absolute -top-7 sm:-top-6 rotate-35 left-5 sm:-left-1"
      />
      <img
        src="/rough-icons/yellow-pop-lines.webp"
        alt="pop-lines"
        loading="lazy"
        className="h-15 sm:h-22 md:h-35 absolute top-32 sm:top-50 md:top-60 rotate-195 -right-18 sm:-right-20 md:-right-10 lg:-right-30"
      />
    </div>
  );
}
