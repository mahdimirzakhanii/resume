import myImg from "../../public/assets/img/prof2 (3).jpg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  AOS.init();
  return (
    <div className="w-full mt-44 z-20 lg:h-full flex flex-col lg:flex-row gap-5 justify-between items-center ">
      <div
        className="w-full lg:w-1/2 gap-3 lg:gap-0 flex items-start flex-col overflow-hidden"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <div className=" flex gap-1 md:gap-2 justify-start items-end w-full">
          <h1 className="dark:text-primary text-tertiary text-5xl lg:text-6xl ">
            Hello
          </h1>
          <span className="bottom-1 left-[104%] xl:left-[9.5vw] mb-1 w-2 h-2 md:h-3 md:w-3 bg-secondary rounded-full"></span>
          <h4 className="dark:text-primary text-tertiary text-3xl lg:text-4xl">
            I&apos;am
          </h4>
        </div>

        <div className="flex items-end justify-start w-full -ml-2 ">
          <p className=" text-secondary leading-[120px] lg:leading-[200px] font-semibold text-[150px] lg:text-[200px]">
            M
          </p>
          <div className="flex flex-col gap-2 items-start -mb-1 lg:mb-4 lg:gap-2">
            <p className="dark:text-primary leading-none text-tertiary text-[40px] lg:text-6xl">
              AHDI
            </p>
            <p className="dark:text-primary leading-none text-tertiary text-[40px] lg:text-6xl">
              IRZAKHANI
            </p>
          </div>
        </div>
        {/* </div> */}
        <h3 className="dark:text-primary text-tertiary text-4xl ">
          <Typewriter
            words={["Front-End Developer", "React Developer"]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={3000}
          />
        </h3>
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
        className="flex justify-center items-center md:pr-28 relative group "
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <div className="border-img absolute bg-gradient-to-b from-transparent to-secondary
          w-full md:w-[300px] h-[400px] left-4 top-4 rounded-br-[100px]"></div>
        <img
          src={myImg}
          className="h-[400px] relative rounded-br-[100px]"
          alt=""
        />
      </div>

    </div >
  );
}

export default Header;
