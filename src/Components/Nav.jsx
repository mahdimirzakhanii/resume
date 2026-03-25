import logo from "/src/assets/img/logo3.png";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";

const nav = [
  {
    name: "Home",
    link: "header",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Portfolio",
    link: "portfolio",
  },
  {
    name: "Contact me",
    link: "footer",
  },
];

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

  // Remove Scroller
  useEffect(() => {
    if (window.innerWidth < 768 && show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [show])

  // navbar scrolled
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`top-0 fixed duration-700 dark:bg-tertiary bg-primary z-50 h-20 w-full flex justify-around items-center
        ${hasScrolled ? "shadow-md" : ""} `}
    >
      <div className="flex items-center flex-row-reverse md:flex-row justify-between w-[90%] md:w-[80%]">

        <div className="flex items-center flex-row md:flex-row-reverse justify-between w-[60%] md:w-fit">
          <img src={logo} width={80} height={80} alt="" />

          <div className="flex md:hidden flex-row-reverse md:flex-row justify-between md:justify-around ">
            <div
              className="flex justify-center items-center"
              onClick={() => setShow(!show)}
            >
              <RxHamburgerMenu className="text-tertiary dark:text-primary text-3xl " />
            </div>
          </div>
        </div>

        <div className={`justify-center gap-2 items-center w-[50%] ${show ? "flex" : "hidden"}`}>
          {show && (
            <div className="fixed md:static flex items-center p-5 justify-between w-full right-0 top-0 min-h-screen md:min-h-fit overflow-hidden bg-black/40 backdrop-blur-xl md:backdrop-blur-none md:bg-transparent z-50 ">
              <ul
                className={`flex flex-col min-h-screen w-full md:flex-row gap-5 justify-start items-center
                   ${show ? "md:flex " : "hidden absolute "}`}
              >
                <li className="w-full flex md:hidden items-center justify-end ">
                  <button
                    className="text-white bg-secondary text-xl focus:bg-secondary rounded-full p-1 relative"
                    onClick={() => {
                      if (window.innerWidth < 768) setShow(false);
                    }}
                  >
                    <IoClose />
                  </button>
                </li>

                <div className="flex items-center justify-between w-full md:flex-row flex-col min-h-[70vh]">
                  {nav.map((item, index) => (
                    <Link
                      key={index}
                      to={item?.link}
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={1000}
                      className="text-lg dark:md:text-primary dark:hover:text-secondary text-tertiary link-hover cursor-pointer"
                      onClick={() => {
                        if (window.innerWidth < 768) setShow(false);
                      }}
                    >
                      {item?.name}
                    </Link>
                  ))}
                </div>
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
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
    </div >
  );
};

export default Nav;
