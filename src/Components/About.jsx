import imgAbout from "/img/8.png";

function About() {
  return (
    <div className="about gap-10 flex flex-col-reverse lg:flex-row justify-between items-center w-full ">
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
            I'm a Front-end Developer specializing in React.js, with around three years of professional experience building modern and responsive web applications.
            I'm passionate about creating clean, maintainable, and user-friendly interfaces. I continuously work on improving my technical skills, exploring modern frontend technologies, and finding better ways to solve development challenges.
            I enjoy collaborating with others, sharing ideas, and contributing to team projects. I'm always eager to learn, take on new challenges, and grow as a developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
