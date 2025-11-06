import { Toaster } from "react-hot-toast";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Footer from "./sections/Footer";
import "./index.css";
import Preloader from "./components/Preloader"
import Description from "./sections/Description";


function App() {

  return (
    <>
      <Preloader />
      <main>
        <Toaster position="text-center" reverseOrder={false} />
        <Navbar />
        <Hero />

        <div className="lg:relative ">
          {/* About */}
          <section className="lg:h-[50vh] lg:relative lg:z-20">
            <About />
          </section>

          {/* skills*/}
          <section className="lg:sticky lg:top-0 lg:z-10">
            <Skills />
          </section>

          {/* work */}
          <div className="lg:h-[100vh]"></div>
          <section className="lg:h-[1vh] lg:relative lg:z-20">
            <Work />
          </section>

          {/*experience / Description*/}
          <section className="lg:sticky lg:top-0 lg:lg:h-760 lg:z-10 lg:bg-dust">
            <Experience />
            <Description />
          </section>

          {/* contact */}
          <section className="lg:h-[0vh] lg:relative lg:z-20">
            <Contact />
          </section>

          {/* footer */}
          <section className="lg:sticky lg:top-0 lg:z-10">
            <Footer />
          </section>

          {/* dummy div*/}
          <div className="lg:h-[100vh] "></div>
        </div>
      </main>
    </>
  );
}

export default App;
