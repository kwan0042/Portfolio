import { About_Context } from "../content";
import { motion } from "framer-motion";
import FlightAnimation from "./FlightAnimation";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className="mt-20 mb-10 text-center text-4xl"
      >
        About Me
      </motion.h1>
      <div className="flex flex-wrap items-center">
        <motion.div
          variants={container(1.2)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 lg:p-8"
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-cneter justify-center">
              <div className=" w-full rounded-2xl object-cover ">
                <iframe
                  className="w-full aspect-video rounded-2xl"
                  src="https://www.youtube.com/embed/vKAMaju1aNA?si=CQzN_i95aZHJ9IDw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={container(1.2)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2"
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center lg:justify-start ">
              <p className="text-justify  max-w-xl py-6 ">{About_Context}</p>
            </div>
            <div className="max-w-xl py-6 ">
              <FlightAnimation />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
