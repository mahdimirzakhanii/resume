import imgAbout from "../assets/img/me.jpg";
function About() {
  return (
    <div className="about flex relative flex-col lg:flex-row justify-around items-center mt-56 ">
      {/* start image about  */}
      <div
        className="img-about relative w-full md:w-5/12"
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <div className="relative inset-0 flex items-center justify-center">
          <div className="bg-secondary opacity-25 rounded-full w-[280px] h-[280px] md:w-[380px] md:h-[380px] relative"></div>
          <img
            src={imgAbout}
            className="rounded-full absolute border-8 border-secondary w-[250px] h-[250px] md:w-[350px] md:h-[350px] "
            alt=""
          />
        </div>
      </div>
      {/* end image about  */}

      {/* start text about  */}
      <div
        className="text-about w-full lg:w-5/12 flex flex-col items-center lg:items-start top-20 lg:top-0  lg:-left-10 relative"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <div className="about-title ">
          <h1 className="text-4xl text-secondary">About me</h1>
        </div>
        <div className="about-text w-10/12 lg:w-11/12">
          <p className="dark:text-primary text-tertiary text-xl lg:text-[21px] mt-4 leading-loose  text-justify ">
            I am Mahdi Mirzakhani, 21 years old, living in Tehran. I am a
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
      {/* end text about  */}
    </div>
  );
}

export default About;
