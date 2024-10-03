import { About_Context } from "../content";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About Me</h1>
      <div className="flex flex-wrap items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
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
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start ">
            <p className="text-justify my- max-w-xl py-6 ">{About_Context}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
