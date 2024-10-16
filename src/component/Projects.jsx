import { Link, useLocation } from "react-router-dom";
import { Projects_List_Web } from "../content";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Projects() {
  const [projectList, setProjectList] = useState("web_projects");
  const location = useLocation();

  useEffect(() => {
    // Parse the query parameter
    const params = new URLSearchParams(location.search);
    const projectType = params.get("projectType");

    // If the hash is #projects and a valid projectType is found, update the project list
    if (location.hash === "#projects" && projectType) {
      setProjectList(projectType);
    }
  }, [location]);

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

  const [hoveredItem, setHoveredItem] = useState(null);

  const hoverVariants = {
    hover: {
      x: 4,
      scale: [1.1, 1],
    },
    initial: {
      x: 0,
      scale: 1,
    },
  };

  return (
    <div id="projects" className="border-b border-neutral-800 pb-4">
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
        {projectList === "graphic_projects" ? (
          <div className=" grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-10 justify-items-center">
            {filteredProjects.map((pjw, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="max-w-sm  bg-teal-100/90 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
              >
                <Link to={`/graphic/${pjw.slug}`}>
                  <motion.img
                    whileHover={{}}
                    src={pjw.coverImage}
                    alt={pjw.title}
                    className="h-[300px] w-full rounded  object-cover object-center"
                  />
                </Link>
                <div className="px-3 py-3 flex-grow flex flex-col">
                  <Link to={`/graphic/${pjw.slug}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {pjw.title}
                    </h5>
                  </Link>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {pjw.summary}
                  </p>
                  <div className="mt-auto">
                    <Link
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      to={`/graphic/${pjw.slug}`}
                      className=" h-fit w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black hover:text-teal-300 bg-sky-50 rounded-lg hover:bg-black focus:ring-4 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <motion.svg
                        variants={hoverVariants}
                        animate={hoveredItem === index ? "hover" : "initial"}
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </motion.svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          filteredProjects.map((pjw, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <div className="w-full lg:w-1/4 pr-5 mb-6">
                <a href={pjw.url}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={pjw.image}
                    width={250}
                    alt={pjw.title}
                    className=" rounded h-[200px] object-cover object-top"
                  />
                </a>
              </div>
              <motion.div
                variants={itemVariants}
                className="w-full max-w-xl flex flex-wrap  lg:w-3/4"
              >
                <div>
                  <a
                    className="mb-5 inline-flex items-baseline  leading-tight  hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                    href={pjw.url}
                  >
                    {pjw.title}
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    >
                      <path
                        d="M2.33938 14.5896C1.44846 11.2534 2.31164 7.54623 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711C16.4538 21.6884 12.7466 22.5515 9.41045 21.6606M15.0001 15.0001V9.0001M15.0001 9.0001H9.00014M15.0001 9.0001L4.99995 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <p className="mb-4 text-neutral-400 text-justify ">
                    {pjw.description}
                  </p>
                </div>

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
          ))
        )}
      </motion.div>
    </div>
  );
}
export default Projects;
