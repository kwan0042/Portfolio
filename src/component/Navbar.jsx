import logo from "../assets/logo/nameLogo_W.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 w-full mb-5 flex items-center justify-between py-6 px-8 transition-all ">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-10"
          src={logo}
          alt="logo"
          style={{ width: "200px" }}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/danielxkwan/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/kwan0042">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/daniel_kwan">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
