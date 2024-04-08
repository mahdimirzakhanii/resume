import { Flat } from "@alptugidin/react-circular-progress-bar";
import html from "../assets/img/html2.png";
import css from "../assets/img/Css2.png";
import js from "../assets/img/javascript.png";
import react from "../assets/img/react2.png";
import bootstrap from "../assets/img/bootstrap2.png";
import tailwind from "../assets/img/tailwind2.png";
import git from "../assets/img/Git2.png";
import mui from "../assets/img/material-ui2.png";
import redux from "../assets/img/Redux2.png";

function Skils() {

  return (
    <div className="skills my-64 relative z-20">
      <h1 className="title dark:text-primary text-tertiary text-2xl md:text-3xl text-center relative flex w-fit mx-auto">
        Skills
      </h1>

      <div className=" my-16 h-full w-10/12 lg:w-9/12 mx-auto flex flex-wrap justify-between lg:justify-around relative items-start">
        <div className=" flex justify-center relative w-6/12 md:w-5/12 lg:w-4/12 h-40 lg:h-56 my-11 lg:my-8 group">
          {/* <div className="absolute border-4 border-secondary rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl w-10/12 lg:w-8/12 xl:w-9/12 h-40 lg:h-64 top-8 left-2 md:left-6 lg:left-10 xl:left-12 group-hover:bg-secondary transition-all duration-500 group-hover:top-5 group-hover:right-6 lg:group-hover:left-16 "></div> */}
          <div
            className={` w-11/12 lg:w-9/12  h-52 bg-dark dark:bg-ligh dark:bg-ligh lg:h-64 lg:my-8 mx-1 rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl border-y-2 border-y-secondary border-x-0  bejustify-between relative flex flex-col items-center `}
          >
            <div className="bg-secondary relative flex justify-center items-center top-3 lg:w-fit rounded-full p-2">
              <img src={html} className="w-9 h-9 lg:w-12 lg:h-12 " alt="" />
            </div>
            <h1 className="text-tertiary dark:text-primary text-xl lg:text-3xl top-24 z-50 absolute">
              HTML 5
            </h1>
            <div className="w-5/12 md:w-4/12 lg:w-5/12 relative top-[98px] md:top-[88px] lg:top-28 z-50 ">
              <Flat
                progress={70}
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
        <div className=" flex justify-center relative w-6/12 md:w-5/12 lg:w-4/12 h-40 lg:h-56 my-11 lg:my-8 group">
          {/* <div className="absolute border-4 border-secondary rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl w-10/12 lg:w-8/12 xl:w-9/12 h-40 lg:h-64 top-8 left-2 md:left-6 lg:left-10 xl:left-12 group-hover:bg-secondary transition-all duration-500 group-hover:top-5 group-hover:right-6 lg:group-hover:left-16 "></div> */}
          <div
            className=" w-11/12 lg:w-9/12  bg-dark dark:bg-ligh dark:bg-ligh h-52 lg:h-64 lg:my-8 mx-1 rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl border-y-2 border-y-secondary border-x-0  bejustify-between relative flex flex-col items-center "
          >
            <div className="bg-secondary relative flex justify-center items-center top-3 w-fit rounded-full p-2">
              <img src={css} className="w-9 h-9 lg:w-12 lg:h-12 " alt="" />
            </div>

            <h1 className="text-tertiary dark:text-primary text-xl lg:text-3xl top-24 z-50 absolute">
              CSS 3
            </h1>

            <div className="w-5/12 md:w-4/12 lg:w-5/12 relative dark:text-tertiary text-primary top-[98px] md:top-[88px] lg:top-28 z-50 ">
              <Flat
                progress={65}
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

        <div className=" flex justify-center relative w-6/12 md:w-5/12 lg:w-4/12 h-40 lg:h-56 my-11 lg:my-8 group">
          {/* <div className="absolute border-4 border-secondary rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl w-10/12 lg:w-8/12 xl:w-9/12 h-40 lg:h-64 top-8 left-2 md:left-6 lg:left-10 xl:left-12 group-hover:bg-secondary transition-all duration-500 group-hover:top-5 group-hover:right-6 lg:group-hover:left-16 "></div> */}
          <div
            className=" w-11/12 lg:w-9/12 bg-dark dark:bg-ligh dark:bg-ligh h-52 lg:h-64 lg:my-8 mx-1 rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl border-y-2 border-y-secondary border-x-0  bejustify-between relative flex flex-col items-center "
          >
            <div className="bg-secondary relative flex justify-center items-center top-3 w-fit rounded-full p-2">
              <img src={js} className="w-9 h-9 lg:w-12 lg:h-12 " alt="" />
            </div>

            <h1 className="text-tertiary dark:text-primary text-xl lg:text-3xl top-24 z-50 absolute">
              JavaScript
            </h1>

            <div className="w-5/12 md:w-4/12 lg:w-5/12 relative dark:text-tertiary text-primary top-[98px] md:top-[88px] lg:top-28 z-50 ">
              <Flat
                progress={40}
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

        <div className=" flex justify-center relative w-6/12 md:w-5/12 lg:w-4/12 h-40 lg:h-56 my-11 lg:my-8 group">
          {/* <div className="absolute border-4 border-secondary rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl w-10/12 lg:w-8/12 xl:w-9/12 h-40 lg:h-64 top-8 left-2 md:left-6 lg:left-10 xl:left-12 group-hover:bg-secondary transition-all duration-500 group-hover:top-5 group-hover:right-6 lg:group-hover:left-16 "></div> */}
          <div
            className=" w-11/12 lg:w-9/12 bg-dark dark:bg-ligh  h-52 lg:h-64 lg:my-8 mx-1 rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl border-y-2 border-y-secondary border-x-0  bejustify-between relative flex flex-col items-center "
          >
            <div className="bg-secondary relative flex justify-center items-center top-3 w-fit rounded-full p-2">
              <img src={react} className="w-9 h-9 lg:w-12 lg:h-12 " alt="" />
            </div>

            <h1 className="text-tertiary dark:text-primary text-xl lg:text-3xl top-24 z-50 absolute">
              React.Js{" "}
            </h1>

            <div className="w-5/12 md:w-4/12 lg:w-5/12 relative top-[98px] md:top-[88px] lg:top-28 z-50 ">
              <Flat
                progress={40}
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

        <div className=" flex justify-center relative w-6/12 md:w-5/12 lg:w-4/12 h-40 lg:h-56 my-11 lg:my-8 group">
          {/* <div className="absolute border-4 border-secondary rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl w-10/12 lg:w-8/12 xl:w-9/12 h-40 lg:h-64 top-8 left-2 md:left-6 lg:left-10 xl:left-12 group-hover:bg-secondary transition-all duration-500 group-hover:top-5 group-hover:right-6 lg:group-hover:left-16 "></div> */}
          <div
            className=" w-11/12 lg:w-9/12 bg-dark dark:bg-ligh  h-52 lg:h-64 lg:my-8 mx-1 rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl border-y-2 border-y-secondary border-x-0  bejustify-between relative flex flex-col items-center "
          >
            <div className="bg-secondary relative flex justify-center items-center top-3 w-fit rounded-full p-2">
              <img
                src={bootstrap}
                className="w-9 h-9 lg:w-12 lg:h-12 "
                alt=""
              />
            </div>

            <h1 className="text-tertiary dark:text-primary text-xl lg:text-3xl top-24 z-50 absolute">
              BootStrap 5{" "}
            </h1>

            <div className="w-5/12 md:w-4/12 lg:w-5/12 relative dark:text-tertiary text-primary top-[98px] md:top-[88px] lg:top-28 z-50 ">
              <Flat
                progress={60}
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

        <div className=" flex justify-center relative w-6/12 md:w-5/12 lg:w-4/12 h-40 lg:h-56 my-11 lg:my-8 group">
          {/* <div className="absolute border-4 border-secondary rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl w-10/12 lg:w-8/12 xl:w-9/12 h-40 lg:h-64 top-8 left-2 md:left-6 lg:left-10 xl:left-12 group-hover:bg-secondary transition-all duration-500 group-hover:top-5 group-hover:right-6 lg:group-hover:left-16 "></div> */}
          <div
            className=" w-11/12 lg:w-9/12 bg-dark dark:bg-ligh  h-52 lg:h-64 lg:my-8 mx-1 rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl border-y-2 border-y-secondary border-x-0  bejustify-between relative flex flex-col items-center "
          >
            <div className="bg-secondary relative flex justify-center items-center top-3 w-fit rounded-full p-2">
              <img
                src={tailwind}
                className="w-9 h-9 lg:w-12 lg:h-12 "
                alt=""
              />
            </div>

            <h1 className="text-tertiary dark:text-primary text-xl lg:text-3xl top-24 z-50 absolute">
              Tailwind{" "}
            </h1>

            <div className="w-5/12 md:w-4/12 lg:w-5/12 relative dark:text-tertiary text-primary top-[98px] md:top-[88px] lg:top-28 z-50 ">
              <Flat
                progress={60}
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

        <div className=" flex justify-center relative w-6/12 md:w-5/12 lg:w-4/12 h-40 lg:h-56 my-11 lg:my-8 group">
          {/* <div className="absolute border-4 border-secondary rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl w-10/12 lg:w-8/12 xl:w-9/12 h-40 lg:h-64 top-8 left-2 md:left-6 lg:left-10 xl:left-12 group-hover:bg-secondary transition-all duration-500 group-hover:top-5 group-hover:right-6 lg:group-hover:left-16 "></div> */}
          <div
            className=" w-11/12 lg:w-9/12 bg-dark dark:bg-ligh  h-52 lg:h-64 lg:my-8 mx-1 rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl border-y-2 border-y-secondary border-x-0  bejustify-between relative flex flex-col items-center "
          >
            <div className="bg-secondary relative flex justify-center items-center top-3 w-fit rounded-full p-2">
              <img src={git} className="w-9 h-9 lg:w-12 lg:h-12 " alt="" />
            </div>

            <h1 className="text-tertiary dark:text-primary text-xl lg:text-3xl top-24 z-50 absolute">
              Git{" "}
            </h1>

            <div className="w-5/12 md:w-4/12 lg:w-5/12 relative dark:text-tertiary text-primary top-[98px] md:top-[88px] lg:top-28 z-50 ">
              <Flat
                progress={30}
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

        <div className=" flex justify-center relative w-6/12 md:w-5/12 lg:w-4/12 h-40 lg:h-56 my-11 lg:my-8 group">
          {/* <div className="absolute border-4 border-secondary rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl w-10/12 lg:w-8/12 xl:w-9/12 h-40 lg:h-64 top-8 left-2 md:left-6 lg:left-10 xl:left-12 group-hover:bg-secondary transition-all duration-500 group-hover:top-5 group-hover:right-6 lg:group-hover:left-16 "></div> */}
          <div
            className=" w-11/12 lg:w-9/12 bg-dark dark:bg-ligh  h-52 lg:h-64 lg:my-8 mx-1 rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl border-y-2 border-y-secondary border-x-0   bejustify-between relative flex flex-col items-center "
          >
            <div className="bg-secondary relative flex justify-center items-center top-3 w-fit rounded-full p-2">
              <img src={mui} className="w-9 h-9 lg:w-12 lg:h-12 " alt="" />
            </div>

            <h1 className="text-tertiary dark:text-primary text-xl lg:text-3xl top-24 z-50 absolute">
              Material UI{" "}
            </h1>

            <div className="w-5/12 md:w-4/12 lg:w-5/12 relative dark:text-tertiary text-primary top-[98px] md:top-[88px] lg:top-28 z-50 ">
              <Flat
                progress={45}
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

        <div className=" flex justify-center relative w-6/12 md:w-5/12 lg:w-4/12 h-40 lg:h-56 my-11 lg:my-8 group">
          {/* <div className="absolute border-4 border-secondary rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl w-10/12 lg:w-8/12 xl:w-9/12 h-40 lg:h-64 top-8 left-2 md:left-6 lg:left-10 xl:left-12 group-hover:bg-secondary transition-all duration-500 group-hover:top-5 group-hover:right-6 lg:group-hover:left-16 "></div> */}
          <div
            className=" w-11/12 lg:w-9/12 bg-dark dark:bg-ligh  h-52 lg:h-64 lg:my-8 mx-1 rounded-ss-xl rounded-ee-xl lg:rounded-ss-3xl lg:rounded-ee-3xl  border-y-2 border-y-secondary border-x-0 bejustify-between relative flex flex-col items-center "
          >
            <div className="bg-secondary relative flex justify-center items-center top-3 w-fit rounded-full p-2">
              <img src={redux} className="w-9 h-9 lg:w-12 lg:h-12 " alt="" />
            </div>

            <h1 className="text-tertiary dark:text-primary text-xl lg:text-3xl top-24 z-50 absolute">
              Redux Toolkit{" "}
            </h1>

            <div className="w-5/12 md:w-4/12 lg:w-5/12 relative dark:text-tertiary text-primary top-[98px] md:top-[88px] lg:top-28 z-50 ">
              <Flat
                progress={30}
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
      </div>
    </div>
  );
}

export default Skils;
