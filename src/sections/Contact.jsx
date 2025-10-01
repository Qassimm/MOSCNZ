import React from "react";
import ContactHeading from "../components/ContactHeading";
import toast from "react-hot-toast";

const Contact = () => {
  return (
    <section
      className="bg-secondary h-[100vh] md:h-fit sm:py-8 md:py-12 lg:py-18  px-5 overflow-clip flex-center rounded-4xl"
      id="contact"
    >
      <div className="container col-center gap-10 md:gap-3 lg:gap-12">
        <ContactHeading />

        <img
          src="/arrows/connect-Arrow.svg"
          alt="white arrow"
          className="h-15  scale-x-[-1]"
        />

        <a
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText("mohsinali10753@gmail.com");
            toast.success("Email copied");
          }}
          className="sm:text-xl tracking-[2px] font-poppins font-[600] text-white hover:text-white/50 cursor-pointer transition "
        >
          mohsinali10753@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
