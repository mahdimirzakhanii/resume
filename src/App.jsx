import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Skils from "./Components/Skils";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`App  ${isDarkMode ? "bg-primary" : "bg-tertiary"}`}>
        <header>
          <Header toggleDarkMode={toggleDarkMode} />
        </header>
        <main>
          <div>
            <About />
          </div>
          <div>
            <Skils />
          </div>
          <div>
            <Portfolio />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skils />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
