import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./Layouts/Navbar";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
