import myImg from "../../public/assets/img/me.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  AOS.init();
  return (
    <div className="header pt-2">
      {/* start header-info  */}
      <div className="info w-full mt-44 lg:h-full flex flex-wrap flex-col lg:flex-row justify-around items-center ">
        <div
          className="name w-10/12 md:w-6/12 flex items-start flex-col relative bottom-5 lg:top-0 lg:left-52 overflow-hidden"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div className="hello flex items-end relative ">
            <h1 className="dark:text-primary text-tertiary relative text-5xl lg:text-6xl ">
              Hello
            </h1>
            <span className="absolute bottom-1  left-[104%] xl:left-[9.5vw] mt-1 h-3 w-3 bg-secondary rounded-full"></span>
            <h4 className="dark:text-primary absolute left-[125%] xl:left-[10.5vw] text-tertiary text-3xl lg:text-4xl">
              I&apos;am
            </h4>
          </div>

          <div className="fullname relative h-32  mt-4 ">
            <p className=" text-secondary right-2 text-8xl lg:text-9xl relative">
              M
            </p>
            <div className="relative left-[42%] xl:left-[4vw] 2xl:left-[7vw] bottom-[84px] lg:bottom-[104px]">
              <p className="dark:text-primary text-tertiary text-4xl lg:text-5xl">
                AHDI
              </p>
              <p className="dark:text-primary text-tertiary text-4xl lg:text-5xl">
                IRZAKHANI
              </p>
            </div>
          </div>
          <div className="developer mt-0 lg:mt-6">
            <h3 className="dark:text-primary text-tertiary text-3xl md:text-4xl ">
              <Typewriter
                words={["Front-End Developer", "Web Developer"]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={100}
                delaySpeed={5000}
              />
            </h3>
          </div>
          <div className="btn-cv relative py-[7px] lg:left-20 mt-10 mx-auto lg:mx-0">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1000}
              className="btn-cv font-semibold cursor-pointer text-secondary px-4 border-none rounded-none hover:text-primary dark:hover:text-tertiary"
            >
              Know More
            </Link>
          </div>
        </div>
        <div
          className="img-header flex justify-center top-28 lg:top-0 relative w-6/12 "
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="border-img absolute border-4 border-secondary w-full md:w-9/12 lg:w-4/12 h-[280px] lg:h-[330px] left-[7vw] md:left-[12vw] lg:left-[19vw] top-10 rounded-xl"></div>
          <img
            src={myImg}
            className="w-full md:w-9/12 lg:w-4/12 h-[300px] lg:h-[350px] relative rounded-xl"
            alt=""
          />
        </div>
      </div>
      {/* start header-info  */}
    </div>
  );
}

export default Header;
