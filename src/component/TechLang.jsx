import { RiReactjsLine } from "react-icons/ri";
import aspIcon from "../assets/logo/aspnetcore-logo.png";
import { BiLogoPhp } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function TechLang() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVar(2.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVar(2)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={aspIcon} className=" h-[72px]" />
        </motion.div>
        <motion.div
          variants={iconVar(1)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPhp className="text-7xl text-[#787CB5]" />
        </motion.div>
        <motion.div
          variants={iconVar(3)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaWordpress className="text-7xl text-[#52ACCC]" />
        </motion.div>
        <motion.div
          variants={iconVar(1.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAdobe className="text-7xl text-[#FF0000]" />
        </motion.div>
        <motion.div
          variants={iconVar(2.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaFigma className="text-7xl " />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TechLang;
