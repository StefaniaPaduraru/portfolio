import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import PreLoader from "./components/PreLoader";
import { useEffect, useState } from "react";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <>
      <ReactLenis root duration={3} smooth>
        <NavBar />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </ReactLenis>
    </>
  );
}

export default App;
