import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import LightRays from "./Components/LightRays";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col items-center w-full relative justify-center ${isDarkMode ? "bg-primary" : "bg-tertiary"}`}>
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
      <Routes>
        <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>
  );
}


export default App;
