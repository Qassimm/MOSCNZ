import React, { useCallback } from "react";
import ContactHeading from "../components/ContactHeading";
import toast from "react-hot-toast";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  

  const handleCopyEmail = useCallback ((e) => {
    e.preventDefault();
    navigator.clipboard.writeText("mohsinali10753@gmail.com");
    toast.success("Email copied");
  }, [])

  return (
    <section
      className="bg-secondary h-fit  pt-45 pb-45  sm:pt-35 sm:pb-35 md:pt-10 md:pb-10  lg:pt-35 lg:pb-35   px-5 overflow-clip flex-center rounded-4xl "
      id="contact"
    >
      <div className="container col-center gap-3 md:gap-3 lg:gap-2">
        <ContactHeading />

        <img
          src="/arrows/connect-Arrow.webp"
          alt="white arrow"
          className="h-15  scale-x-[-1]"
        />

       <a
  onClick={handleCopyEmail}
  className="group sm:text-xl tracking-[2px] font-poppins font-[600] text-white cursor-pointer transition flex items-center gap-3"
>
  <SiGmail className="bg-white text-primary text-3xl p-1 rounded transition group-hover:opacity-80" />
  <span className="group-hover:opacity-80 transition">mohsinali10753@gmail.com</span>
</a>

      </div>
    </section>
  );
};

export default Contact;
