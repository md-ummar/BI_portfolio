import { useParams } from "react-router-dom"; // To fetch project ID from the URL
import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

function ProjectDetail() {
  const { id } = useParams(); // Get project ID from URL params
  const project = PROJECTS.find((p) => p.id === parseInt(id)); // Find the specific project based on ID

  if (!project) {
    return <div className="text-center text-white">Project not found</div>;
  }

  return (
    <div className="p-8 bg-neutral-950 text-white m-10">
      {/* Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl font-bold text-center mb-6"
      >
        {project.title}
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-8 ">
        {/* Image */}
        <div
          className="w-full h-96 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "contain",
          }}
        ></div>

        {/* Project Overview */}
        <div>
          <h4 className="text-2xl text-teal-300 ">Project Overview</h4>
          <p className="text-neutral-400 mt-4">{project.description}</p>
        </div>

        {/* Objectives */}
        <div>
          <h5 className="text-xl text-teal-400 mb-3">Objectives:</h5>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            {project.objectives.map((objective, index) => (
              <li key={index} className="text-base">
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div>
          <h5 className="text-xl text-teal-400 mb-3">Technologies Used:</h5>
          <div className="flex gap-2 flex-wrap">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-neutral-800 text-teal-400 px-3 py-2 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Insights/Outcome */}
        <div>
          <h5 className="text-xl text-teal-400 mb-3">Insights / Outcome:</h5>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            {project.outcomes.map((outcome, index) => (
              <li key={index} className="text-base">
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {/* GitHub Link Button */}
        {project.githubLink && (
          <div className="mt-6">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600"
            >
              <FaGithub className="w-6 h-6 mr-2" />{" "}
              {/* Use GitHub icon from react-icons */}
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
