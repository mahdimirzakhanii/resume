import logo from "/src/assets/img/logo3.png";
import { MdEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const socials = [
  {
    link: "mailto:mahdi.mirzakhani48@gmail.com",
    icon: <MdEmail />,
    title: "mahdi.mirzakhani48@gmail.com",
  },
  {
    link: "https://t.me/mahdimirzakhanii",
    icon: <BsTelegram />,
    title: "@mahdimirzakhanii",
  },
  {
    link: "https://instagram.com/mahdimirzakhanii4/",
    icon: <FaInstagramSquare />,
    title: "@mahdimirzakhanii4",
  },
  {
    link: "https://www.linkedin.com/in/mahdi-mirzakhani-b566b4281/",
    icon: <FaLinkedin />,
    title: "@mahdi-mirzakhani",
  },
  {
    link: "https://github.com/mahdimirzakhanii",
    icon: <FaGithub />,
    title: "@mahdimirzakhanii",
  },
];

function Footer() {
  return (
    <div className="footer flex items-center flex-col justify-center gap-10 md:gap-20 w-full mb-5 lg:mb-20">
      <h1 className="title dark:text-primary text-tertiary text-2xl md:text-4xl text-center relative flex font-bold w-fit ">
        Contact me
      </h1>

      <div className="flex items-center justify-center w-full flex-col gap-10 md:gap-20">
        <img src={logo} width={100} height={100} alt="" />
        <div className="social flex flex-col md:flex-row w-full lg:w-[70%] justify-between gap-5 relative ">
          {socials?.map((item, index) => (
            <div
              key={index}
              className="socials  flex justify-start md:justify-center items-center w-full "
            >
              <span className=" text-secondary text-3xl lg:text-3xl ">
                {item?.icon}
              </span>
              <a
                href={item?.link}
                className="text-social flex justify-center text-xl lg:text-3xl items-start dark:text-primary text-tertiary before:mx-1 md:mx-0"
              >
                {item?.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
