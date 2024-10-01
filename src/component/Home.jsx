import { Description_Context } from "../content";
import ProPic from "../assets/proPic.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className=" flex-col items-center lg:items-start">
            <motion.h1
              animate={{ x: 50 }}
              transition={{ delay: 2.6 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl"
            >
              Daniel Kwan
            </motion.h1>
            <motion.span
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>
            <p className="text-justify my-2 max-w-xl py-6 font-light tracking-tighter">
              {Description_Context}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
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
