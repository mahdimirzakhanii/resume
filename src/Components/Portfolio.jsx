import p1 from "../../public/assets/img/p1.png";
import p2 from "../../public/assets/img/p2.png";
import { HiLink } from "react-icons/hi";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="title dark:text-primary text-tertiary text-2xl md:text-3xl text-center relative flex w-fit mx-auto">
        Portfolio
      </h1>
      <div className=" portfolio-link w-11/12 mx-auto flex flex-wrap flex-col md:flex-row justify-around items-center overflow-hidden">
        <div
          className=" portfolio-box w-full my-10 lg:mt-20  flex justify-start relative "
          data-aos="fade-right"
          data-aos-offset="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <div className=" w-10/12 mx-auto md:mx-0 md:w-5/12 rounded-md relative group">
            <img src={p1} className="rounded-md " alt="" />
            <div className="before:bg-black before:opacity-0 group-hover:before:opacity-50 before:rounded-md before:absolute before:inset-0 before:transition-all before:duration-700 before:ease-in-out"></div>{" "}
            <a
              href="https://mahdimirzakhanii.github.io/login/"
              className="bg-secondary text-md lg:text-xl py-1 px-4 lg:py-2 lg:px-5 z-30 absolute mx-auto flex rounded-md opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 bottom-4 lg:bottom-16 left-[26vw] md:left-[14vw] lg:left-56"
              target="_blank"
            >
              Project
              <HiLink className="relative left-3 top-1" />
            </a>
          </div>{" "}
        </div>

        <div
          className="portfolio-box w-full my-10 lg:mt-20 flex justify-end relative "
          data-aos="fade-left"
          data-aos-offset="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <div className="w-10/12 md:w-5/12 mx-auto md:mx-0 rounded-md relative md:bottom-56 md:right-14 group">
            <img src={p2} alt="" className="rounded-md " />
            <div className="before:bg-black  before:opacity-0 group-hover:before:opacity-50 before:rounded-md before:absolute before:inset-0 before:transition-all before:duration-700 before:ease-in-out"></div>
            <a
              href="https://mahdimirzakhanii.github.io/Technotive/"
              className="bg-secondary text-md lg:text-xl py-1 px-4 lg:py-2 lg:px-5 z-30 absolute mx-auto flex rounded-md  opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 bottom-4 lg:bottom-16 left-[26vw] md:left-[14vw] lg:left-56"
              target="_blank"
            >
              Project
              <HiLink className="relative left-3 top-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
