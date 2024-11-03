import { Flat } from "@alptugidin/react-circular-progress-bar";

function Skils() {

  const skils = [
    {
      name: "HTML",
      progress: 70,
      img: "./public/assets/img/html2.png",
    },
    {
      name: "CSS",
      progress: 65,
      img: "./public/assets/img/Css2.png",
    },
    {
      name: "JavaScript",
      progress: 40,
      img: "./public/assets/img/javascript.png",
    },
    {
      name: " React.Js",
      progress: 40,
      img: "./public/assets/img/react2.png",
    },
    {
      name: " BootStrap",
      progress: 60,
      img: "./public/assets/img/bootstrap2.png",
    },
    {
      name: "Tailwind",
      progress: 60,
      img: "./public/assets/img/tailwind2.png",
    },
    {
      name: "Git",
      progress: 40,
      img: "./public/assets/img/Git2.png",
    },
    {
      name: "Material UI",
      progress: 40,
      img: "./public/assets/img/material-ui2.png",
    },
  ];


  return (
    <div className="skills my-32 lg:my-64 relative z-20">
      <h1 className="title dark:text-primary text-tertiary text-2xl md:text-3xl text-center relative flex w-fit mx-auto">
        Skills
      </h1>
      <div
        className=" my-16 h-full w-10/12 lg:w-9/12 mx-auto flex flex-wrap justify-between lg:justify-around relative items-start"
        data-aos="zoom-out-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="500"
        data-aos-offset="0"
      >
        <>
          {skils?.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center relative w-6/12 md:w-5/12 lg:w-4/12 h-40 lg:h-56 my-11 lg:my-8 group"
            >
              <div
                className={`w-11/12 lg:w-9/12 h-52 bg-dark dark:bg-ligh dark:bg-ligh lg:h-64 lg:my-8 mx-1 rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl border-y-2 border-y-secondary border-x-0  bejustify-between relative flex flex-col items-center `}
              >
                <div className="bg-secondary relative flex justify-center items-center top-3 lg:w-fit rounded-full p-2">
                  <img
                    src={item?.img}
                    className="w-9 h-9 lg:w-12 lg:h-12 "
                    alt=""
                  />
                </div>
                <h1 className="text-tertiary dark:text-primary text-xl lg:text-3xl top-24 z-50 absolute">
                  {item?.name}
                </h1>
                <div className="w-5/12 md:w-4/12 lg:w-5/12 relative top-[98px] md:top-[88px] lg:top-28 z-50 ">
                  <Flat
                    progress={item?.progress}
                    showMiniCircle={false}
                    sx={{
                      strokeColor: "#070f2b",
                      bgStrokeColor: "#ebeeff",
                      barWidth: 10,
                      shape: "half",
                      strokeLinecap: "square",
                      valueColor: "#ebeeff",
                      miniCircleColor: "#ecefff",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

export default Skils;
