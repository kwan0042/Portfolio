import { Description_Context } from "../content";
import ProPic from "../assets/proPic.jpg";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const myTitle = ["Web Developer", "SEO Specialist", "Graphic Designer"];

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Home = () => {
  const [currentText, setCurrentText] = useState(myTitle[3]);
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls
        .start({
          opacity: 0,
          x: -2,
        })
        .then(() => {
          setIndex((prevIndex) => (prevIndex + 1) % myTitle.length);
          controls.start({ opacity: 1, x: 0 });
        });
    }, 1800);

    return () => clearInterval(interval);
  }, [controls]);

  useEffect(() => {
    setCurrentText(myTitle[index]);
  }, [index]);

  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className=" flex-col items-center lg:items-start">
            <motion.h1
              variants={container(2.5)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl"
            >
              Daniel Kwan
            </motion.h1>

            <motion.div
              variants={container(2.5)}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                animate={controls}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent pb-4"
              >
                {currentText}
              </motion.div>
            </motion.div>

            <motion.p
              variants={container(2.9)}
              initial="hidden"
              animate="visible"
              className="text-justify my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {Description_Context}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="h-[500px] w-full rounded-2xl object-cover"
              src={ProPic}
              alt="Daniel Kwan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
