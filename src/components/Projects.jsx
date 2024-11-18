import { PROJECTS } from "../constants/index.js";
import { MdPreview } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // For linking to the detailed page

function Projects() {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="rounded-lg border border-neutral-800 bg-neutral-950 shadow-lg hover:shadow-teal-400 hover:scale-105 transform transition duration-300 ml-4"
          >
            <Link
              to={`/ProjectDetail/${project.id}`}
              onClick={() => {
                window.scrollTo(0, 0); // Ensure the detailed page scrolls to the top
              }}
            >
              {/* Link to the project detail page */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg transform hover:scale-95 transition duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-neutral-800 text-teal-400 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-teal-300 flex items-center gap-2">
                  <MdPreview />
                  <span className="text-sm">Preview</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
