import { Projects_List_Web } from "../content";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {Projects_List_Web.map((pjw, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img src={pjw.image} alt={pjw.title} className=",b-6 rounded" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{pjw.title}</h6>
              <p className="mb-4 text-neutral-400 text-justify">
                {pjw.description}
              </p>
              {pjw.technologies.map((skills, index) => (
                <span
                  key={index}
                  className="mr-2 my-1 rounded  bg-teal-400/10 px-2 py-1 text-sm font-medium text-teal-300 "
                >
                  {skills}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
