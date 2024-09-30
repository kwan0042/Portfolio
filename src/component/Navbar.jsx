import logo from "../assets/logo/sLogo_W.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-10"
          src={logo}
          alt="logo"
          style={{ width: "60px" }}
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
