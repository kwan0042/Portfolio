import { useParams, Link } from "react-router-dom";
import { Projects_List_Web } from "../content";

function DesignPageComponent() {
  const { designId } = useParams();

  const project = Projects_List_Web.find(
    (proj) => proj.slug === designId && proj.projectType === "graphic"
  );

  return (
    <div className="container mx-auto p-8">
      {/* Project Title */}
      <h1 className="text-4xl mb-6">{project.title}</h1>

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto mb-6 rounded shadow-lg"
      />

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

      {/* Navigation Back to Projects */}
      <Link to="/" className="text-teal-300 hover:underline">
        &larr; Back to Projects
      </Link>
    </div>
  );
}

export default DesignPageComponent;
