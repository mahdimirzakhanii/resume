import logo from "../../public/assets/img/logo3.png";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";

const Nav = ({ toggleDarkMode }) => {
  const [theme, setTheme] = useState(true);
  const [show, setShow] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  //  hamburger menu
  const checkSize = () => {
    if (window.innerWidth < 768) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    checkSize();
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // navbar scrolled
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`top-header top-0 fixed duration-700 dark:bg-tertiary bg-primary z-50 h-20 w-full flex justify-around items-center 
        ${hasScrolled ? "shadow-md" : ""} `}
    >
      <div className="flex flex-row-reverse md:flex-row justify-between md:justify-around w-10/12 md:w-2/12">
        <div className="logo">
          <img src={logo} width={80} height={80} alt="" />
        </div>

        <div
          className="hamburger-icon flex justify-center items-center relative left-10 md:hidden"
          onClick={() => {
            setShow(!show);
          }}
        >
          <RxHamburgerMenu className="text-tertiary dark:text-primary text-3xl " />
        </div>
      </div>

      <div className="nav flex items-center w-5/12 relative ">
        {show && (
          <div className="fixed inset-0 overflow-hidden bg-black bg-opacity-50 z-50 md:static">
            <ul
              className={`flex flex-col absolute w-full h-full bg-black md:bg-transparent md:flex-row justify-around items-center  ${show ? "md:flex" : "hidden"
                }`}
            >
              <li>
                <button
                  className="block md:hidden text-tertiary text-3xl focus:bg-secondary rounded-full p-2 relative  "
                  onClick={() => {
                    if (window.innerWidth < 768) setShow(false);
                  }}
                >
                  <IoClose />
                </button>
              </li>
              <li>
                <Link
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={1000}
                  className="text-lg dark:md:text-primary dark:hover:text-secondary text-tertiary link-hover cursor-pointer"
                  onClick={() => {
                    if (window.innerWidth < 768) setShow(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={1000}
                  className="text-lg dark:md:text-primary dark:hover:text-secondary text-tertiary link-hover cursor-pointer"
                  onClick={() => {
                    if (window.innerWidth < 768) setShow(false);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={1000}
                  className="text-lg  dark:md:text-primary dark:hover:text-secondary text-tertiary link-hover cursor-pointer"
                  onClick={() => {
                    if (window.innerWidth < 768) setShow(false);
                  }}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={1000}
                  className="text-lg  dark:md:text-primary dark:hover:text-secondary text-tertiary link-hover cursor-pointer"
                  activeClass=" text-secondary"
                  onClick={() => {
                    if (window.innerWidth < 768) setShow(false);
                  }}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={1000}
                  className="text-lg dark:md:text-primary dark:hover:text-secondary text-tertiary link-hover cursor-pointer"
                  onClick={() => {
                    if (window.innerWidth < 768) setShow(false);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="theme w-2/12 flex justify-center relative right-10 lg:right-0">
        {theme ? (
          <BsSunFill
            className="dark:text-primary text-tertiary text-2xl cursor-pointer"
            onClick={() => {
              toggleDarkMode();
              setTheme(!theme);
            }}
          />
        ) : (
          <FaMoon
            className="dark:text-primary text-tertiary text-2xl cursor-pointer"
            onClick={() => {
              toggleDarkMode();
              setTheme(!theme);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Nav;
