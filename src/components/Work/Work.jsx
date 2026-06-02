import React, { useState } from "react";
import { projects } from "../../constants";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[7vw] lg:px-[12vw]"
    >
      {/* Heading */}

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Projects
        </h2>

        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
          A collection of projects showcasing my expertise in
          Full Stack Development, Artificial Intelligence,
          Machine Learning, Cybersecurity, and Problem Solving.
        </p>
      </div>

      {/* Projects Grid */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-[#111827]/40 backdrop-blur-lg border border-gray-800 rounded-3xl overflow-hidden hover:border-[#8245ec] hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >
            {/* Image */}

            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-[#8245ec]/15 text-[#c4b5fd]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-center items-center p-4">
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl max-w-4xl w-full overflow-hidden relative">

            {/* Close */}

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 text-white text-2xl hover:text-[#8245ec]"
            >
              <FaTimes />
            </button>

            {/* Image */}

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-72 object-cover"
            />

            {/* Content */}

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Tags */}

              <div className="flex flex-wrap gap-3 mt-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-[#8245ec]/15 text-[#c4b5fd]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-8">

                {selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition"
                  >
                    <FaGithub />
                    View Code
                  </a>
                )}

                {selectedProject.webapp !== "#" && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8245ec] hover:bg-purple-700 text-white transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Work;