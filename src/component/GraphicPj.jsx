import { useParams } from "react-router-dom";
import { Projects_List_Web } from "../content";
import { HashLink } from "react-router-hash-link";

function GraphicPj() {
  const { designId } = useParams();

  const project = Projects_List_Web.find(
    (proj) => proj.slug === designId && proj.projectType === "graphic"
  );

  return (
    <div className="container mx-auto p-8">
      {/* Project Title */}
      <h1 className="text-4xl mb-6">{project.title}</h1>
      <img src={project.coverImage} className="mb-6" alt={project.title} />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 pr-6">
          {project.image.map((imgSrc, index) => (
            <div key={index}>
              <img
                src={imgSrc}
                className="w-[500px] mb-6 "
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 pl-6">
          {/* Project Description */}
          <p className="text-neutral-400 text-justify mb-6">
            Project Date: {project.date}
          </p>
          <p className="text-neutral-400 text-justify mb-6">
            Client: {project.client}
          </p>

          <p className="text-neutral-400 text-justify mb-6">
            Project Type: {project.type}
          </p>

          <HashLink
            to={{
              pathname: "/",
              hash: "#projects",
              search: "?projectType=graphic_projects",
            }}
            className="text-teal-300 hover:underline"
          >
            &larr; Back to Projects
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default GraphicPj;
