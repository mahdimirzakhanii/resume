import Header from "./Header.jsx";
import About from "./About.jsx";
import Skils from "./Skils.jsx";
import Portfolio from "./Portfolio.jsx";
import Footer from "./Footer.jsx";

const Home = ({toggleDarkMode}) => {
    return (
        <div>
            <Header toggleDarkMode={toggleDarkMode}/>
            <About/>
            <Skils/>
            <Portfolio/>
            <Footer/>
        </div>
    )
}
export default Home
