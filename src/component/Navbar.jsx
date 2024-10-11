import { useEffect, useState } from "react";
import logo from "../assets/logo/nameLogo_W.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBackgroundShow, setisBackgroundShow] = useState(false);
  const container = (delay) => ({
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay },
    },
  });

  const handleScroll = () => {
    if (window.scrollY > 25) {
      setIsScrolled(true);
      setisBackgroundShow(true);
    } else {
      setIsScrolled(false);
      setisBackgroundShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full  flex items-center justify-between py-6 px-8 transition-all z-10 ${
        isBackgroundShow ? "bg-slate-700 bg-opacity-95" : ""
      }`}
    >
      <motion.div
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="flex flex-shrink-0 items-center"
      >
        <motion.img
          className={`mx-2 transition-all duration-300 ${
            isScrolled ? "w-[100px]" : "w-[200px]"
          } `}
          src={logo}
          alt="logo"
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="m-8 flex items-center justify-center gap-4 text-2xl"
      >
        <a href="https://www.linkedin.com/in/danielxkwan/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/kwan0042">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/daniel_kwan">
          <FaInstagram />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
