import { Projects_List_Web } from "../content";
import { motion } from "framer-motion";
import { useState } from "react";

function Projects() {
  const [projectList, setProjectList] = useState("web_projects");

  const filteredProjects = Projects_List_Web.filter(
    (project) =>
      (projectList === "web_projects" && project.projectType === "web") ||
      (projectList === "graphic_projects" &&
        project.projectType === "graphic") ||
      (projectList === "video_projects" && project.projectType === "video")
  );

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="mt-20 text-center text-4xl">Projects</h1>
      <nav className="my-10">
        <ul className="flex justify-center ">
          <li className=" w-[300px] grid justify-items-center">
            <button
              className="inline-block border-b-4 border-white rounded hover:border-teal-300 text-teal-300  py-2 px-4"
              onClick={() => setProjectList("web_projects")}
            >
              Web Projects
            </button>
          </li>
          <li className=" w-[300px] grid justify-items-center">
            <button
              className="inline-block border-b-4 border-white rounded hover:border-teal-300 text-teal-300 py-2 px-4"
              onClick={() => setProjectList("graphic_projects")}
            >
              Graphic Projects
            </button>
          </li>
          <li className=" w-[300px] grid justify-items-center">
            <button
              className="inline-block border-b-4 border-white rounded hover:border-teal-300 text-teal-300 py-2 px-4"
              onClick={() => setProjectList("video_projects")}
            >
              Videography Projects
            </button>
          </li>
        </ul>
      </nav>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        key={projectList}
      >
        {filteredProjects.map((pjw, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4 pr-5 mb-6">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={pjw.image}
                width={250}
                alt={pjw.title}
                className=" rounded h-[200px] object-cover object-top"
              />
            </div>
            <motion.div
              variants={itemVariants}
              className="w-full max-w-xl flex flex-wrap lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{pjw.title}</h6>
              <p className="mb-4 text-neutral-400 text-justify ">
                {pjw.description}
              </p>
              <div>
                <div className=" flex flex-wrap">
                  {pjw.technologies.map((skills, index) => (
                    <span
                      key={index}
                      className="mr-2 my-1 rounded  bg-teal-400/10 px-2 py-1 text-sm font-medium text-teal-300 text-nowrap"
                    >
                      {skills}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default Projects;
