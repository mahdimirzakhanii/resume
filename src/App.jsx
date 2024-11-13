import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "bg-primary" : "bg-tertiary"}`}>
      <Routes>
        <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
