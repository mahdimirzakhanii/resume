import imgAbout from "../../public/assets/img/8.png";

function About() {
  return (
    <div className="gap-10 flex  flex-col lg:flex-row justify-between items-center w-full ">

      <div
        className="w-full lg:w-[40%] relative flex items-center justify-center"
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <div className="bg-secondary opacity-25 rounded-full w-[300px] h-[300px] md:w-[380px] md:h-[380px]"></div>
        <img
          src={imgAbout}
          className="rounded-full absolute border-8 border-secondary w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-cover "
          alt=""
        />
      </div>

      <div
        className="w-full lg:w-[60%] flex flex-col items-center lg:items-start "
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="text-4xl font-bold text-secondary">About me</h1>

        <div className="w-full lg:w-[90%]">
          <p className="dark:text-primary text-tertiary text-lg lg:text-[21px] mt-4 leading-10 text-center lg:text-start  text-wrap">
            I am Mahdi Mirzakhani, 22 years old, living in Tehran. I am a
            software engineering student with a profound interest in my field. I
            have been active in the Front-end development area for about a year
            now, working with the React.js framework. I am deeply passionate
            about advancing in this field and spend every day studying various
            aspects of frontend development to enhance my skills. I have a
            strong inclination towards teamwork and participating in group
            projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
