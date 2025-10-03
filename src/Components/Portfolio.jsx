import p2 from "../../public/assets/img/p2.png";
import p3 from "../../public/assets/img/online-shop.png";
import { HiLink } from "react-icons/hi";

const portfolio = [
  {
    "href": "https://technotive.vercel.app/",
    "img": p2,
  },
  {
    "href": "https://mobile-zone.vercel.app/",
    "img": p3,
  },
]

function Portfolio() {
  return (
    <div className="portfolio flex items-center justify-center flex-col">
      <h1 className="title dark:text-primary text-tertiary text-2xl md:text-4xl text-center relative flex font-bold w-fit ">
        Portfolio
      </h1>
      <div className="portfolio-link w-11/12 my-10 lg:mb-20 flex flex-wrap flex-col gap-10 md:flex-row justify-around items-center overflow-hidden">
        {portfolio?.map((item, index) => {
          const animationDirection = index % 2 === 0 ? "fade-right" : "fade-left";
          const isOddItem = index % 2 !== 0;
          return (
            <div
              key={index}
              data-aos={animationDirection}
              data-aos-offset="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className={`portfolio-box w-full md:w-[45%] flex flex-col relative ${isOddItem ? "md:mt-40" : "md:mt-0"}`}
            >
              <div className="flex items-center justify-center md:mx-0 shadow-md rounded-md  relative group">
                <img src={item?.img} className="rounded-md group-hover:brightness-50 duration-700" alt="" />
                <a
                  href={item?.href}
                  className="bg-secondary text-sm lg:text-xl opacity-0 group-hover:opacity-100 w-32 py-1.5 z-30 absolute flex items-center justify-center gap-2 rounded-md transition-all duration-700 ease-in-out bottom-4 lg:bottom-16 hover:!opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project
                  <HiLink />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
