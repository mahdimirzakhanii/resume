import { Flat } from "@alptugidin/react-circular-progress-bar";

function Skills() {
  const skills = [
    {
      name: "JavaScript",
      progress: 40,
      img: "/assets/img/javascript.png",
    },
    {
      name: "React.Js",
      progress: 60,
      img: "/assets/img/react2.png",
    },
    {
      name: "Redux Toolkit",
      progress: 30,
      img: "/assets/img/Redux2.png",
    },
    {
      name: "Next.js",
      progress: 20,
      img: "/assets/img/next.png",
    },
    {
      name: "TypeScript",
      progress: 30,
      img: "/assets/img/typescript.png",
    },
    {
      name: "BootStrap",
      progress: 60,
      img: "/assets/img/bootstrap2.png",
    },
    {
      name: "Tailwind",
      progress: 70,
      img: "/assets/img/tailwind2.png",
    },
    {
      name: "Git",
      progress: 40,
      img: "/assets/img/Git2.png",
    },
    {
      name: "Material UI",
      progress: 40,
      img: "/assets/img/material-ui2.png",
    },
  ];

  return (
    <div className="flex flex-col items-center relative z-20 gap-20 w-full">
      <h1 className="title dark:text-primary text-tertiary text-2xl md:text-4xl text-center relative flex font-bold w-fit ">
        Skills
      </h1>
      <div
        className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10"
      data-aos="zoom-out-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="500"
      data-aos-offset="0"
      >
        {skills?.map((item, index) => (
          <div
            key={index}
            className="flex justify-center w-full min-h-fit h-full "
          >
            <div
              className={`w-full h-full bg-dark py-5 gap-10 dark:bg-ligh rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl border-y-2 border-y-secondary border-x-0 bejustify-between flex flex-col items-center `}
            >
              <div className="bg-secondary flex justify-center items-center top-3 lg:w-fit rounded-full p-2">
                <img
                  src={item?.img}
                  className="w-9 h-9 lg:w-12 lg:h-12 "
                  alt=""
                />
              </div>
              <h1 className="text-tertiary dark:text-primary text-lg lg:text-3xl z-50 ">
                {item?.name}
              </h1>
              {/* <div className="w-5/12 md:w-4/12 lg:w-5/12 relative top-[98px] md:top-[88px] lg:top-28 z-50 ">
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
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
