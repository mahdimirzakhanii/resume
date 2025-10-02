import Header from "./Header.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Footer from "./Footer.jsx";
import Skills from "./Skills.jsx";

const Home = () => {
  return (
    <div className="w-[90%] md:w-[80%] flex items-center justify-center gap-56 flex-col">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
};
export default Home;
