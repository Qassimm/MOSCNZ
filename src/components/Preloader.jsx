// Preloader.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const percentRef = useRef(null);
  const preloaderRef = useRef(null);

  useEffect(() => {
    let progress = { value: 0 };

    // GSAP number animation (0 → 100)
    gsap.to(progress, {
      value: 100,
      duration: 2.5,
      ease: "power2.out",
      onUpdate: () => {
        percentRef.current.textContent = Math.floor(progress.value) + "%";
      },
      onComplete: () => {
        // fade out preloader after loading complete
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 1,
          delay:0.5,
          onComplete: () => {
            preloaderRef.current.style.display = "none";
          },
        });
      },
    });
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed top-0 left-0 w-full h-full bg-dust flex items-center justify-center text-primary font-nerko text-5xl font-bold z-[999]"
    >
      <div className="col-center gap-5">
        <img
          src="/icons/logo.webp"
          alt="logo"
          loading="eager"
          className="w-[65vw] sm:w-[35vw] md:w-[25vw] lg:w-[22vw] xl:w-[25vw] object-contain"
        />
        <span ref={percentRef}>0%</span>
      </div>
    </div>
  );
}
