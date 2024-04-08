import logo from "../assets/img/logo3.png";
import { MdEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer relative pb-5 md:py-36">
      <h1 className="title dark:text-primary text-tertiary text-2xl md:text-3xl text-center relative flex w-fit mx-auto">
        Contact me
      </h1>

      <img
        src={logo}
        width={80}
        height={80}
        className="block mx-auto my-10"
        alt=""
      />
      <div className="social flex flex-col md:flex-row w-full lg:w-6/12 mx-auto justify-evenly relative top-0 lg:top-14">
        <div className="socials my-3 mx-auto md:mx-0 md:my-0 flex justify-start md:justify-center items-center w-full ">
          <MdEmail className="text-secondary text-3xl lg:text-3xl ms-3 me-1 md:mx-0" />
          <a className="text-social flex justify-center text-xl lg:text-3xl items-start dark:text-primary text-tertiary before:content-[':'] md:before:content-none before:mx-1 md:mx-0">
            mahdimirzakhani85@gmail.com
          </a>
        </div>

        <div className="socials my-3 mx-auto md:mx-0 md:my-0 flex justify-start md:justify-center items-center w-full">
          <BsTelegram className="text-secondary text-3xl lg:text-3xl ms-3 me-1 md:mx-0" />
          <a
            target="_blank"
            href="https://t.me/mahdi_mirzakhanii"
            className="text-social dark:text-primary text-tertiary text-xl lg:text-3xl before:content-[':'] md:before:content-none before:mx-1 md:mx-0"
          >
            mahdi_mirzakhanii
          </a>
        </div>

        <div className="socials my-3 mx-auto md:mx-0 md:my-0 flex justify-start md:justify-center items-center w-full">
          <FaInstagramSquare className="text-secondary text-3xl lg:text-3xl ms-3 me-1 md:mx-0" />
          <a
            target="_blank"
            href="https://instagram.com/mahdimirzakhanii4/"
            className="text-social dark:text-primary text-tertiary text-xl lg:text-3xl before:content-[':'] md:before:content-none before:mx-1 md:mx-0"
          >
            mahdimirzakhanii4
          </a>
        </div>

        <div className="socials my-3 mx-auto md:mx-0 md:my-0 flex justify-start md:justify-center items-center w-full">
          <FaLinkedin className="text-secondary text-3xl lg:text-3xl ms-3 me-1 md:mx-0" />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mahdi-mirzakhani-b566b4281/"
            className="text-social dark:text-primary text-tertiary text-xl lg:text-3xl before:content-[':'] md:before:content-none before:mx-1 md:mx-0"
          >
            mahdi-mirzakhani
          </a>
        </div>

        <div className="socials my-3 mx-auto md:mx-0 md:my-0 flex justify-start md:justify-center items-center w-full">
          <FaGithub className="text-secondary text-3xl lg:text-3xl ms-3 me-1 md:mx-0" />
          <a
            target="_blank"
            href="https://github.com/mahdimirzakhanii"
            className="text-social dark:text-primary text-tertiary text-xl lg:text-3xl before:content-[':'] md:before:content-none before:mx-1 md:mx-0"
          >
            mahdimirzakhanii
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
