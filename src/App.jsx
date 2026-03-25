import { useState } from "react";
import Nav from "./Components/Nav";
import LightRays from "./Components/LightRays";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Header from "./Components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col items-center w-full overflow-x-hidden relative justify-center ${isDarkMode ? "bg-primary" : "bg-tertiary"}`}>
      <LightRays
        className="pointer-events-none fixed inset-0 z-[999]"
        raysOrigin="top-center"
        raysColor="#00c6c1"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
      <Nav toggleDarkMode={toggleDarkMode} />
      <div className="w-[90%] md:w-[80%] flex items-center justify-center gap-20 md:gap-56 flex-col">
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </div>

    </div>
  );
}


export default App;
