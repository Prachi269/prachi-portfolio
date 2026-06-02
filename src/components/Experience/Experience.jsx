import React from "react";
import { experiences } from "../../constants";
import { FaBriefcase, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[7vw] lg:px-[12vw]"
    >
      {/* Heading */}

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Experience
        </h2>

        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
          Professional experience, internships and practical exposure
          in Artificial Intelligence, Machine Learning, Data Analytics
          and Software Development.
        </p>
      </div>

      {/* Timeline */}

      <div className="relative max-w-5xl mx-auto">

        {/* Timeline Line */}

        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-[#8245ec]/20 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`mb-16 flex ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Timeline Dot */}

            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-[#8245ec] items-center justify-center shadow-lg shadow-purple-500/40 z-10">
              <FaBriefcase className="text-white text-xl" />
            </div>

            {/* Card */}

            <div className="w-full md:w-[45%]">
              <div
                className="
                bg-[#111827]/40
                backdrop-blur-lg
                border border-gray-800
                rounded-3xl
                p-8
                hover:border-[#8245ec]
                hover:-translate-y-2
                hover:shadow-[0_0_35px_rgba(130,69,236,0.35)]
                transition-all
                duration-300
                "
              >
                {/* Header */}

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>

                    <p className="text-[#8245ec] font-medium">
                      {exp.company}
                    </p>

                    <p className="text-gray-500 text-sm">
                      {exp.date}
                    </p>
                  </div>
                </div>

                {/* Description */}

                <p className="text-gray-400 leading-relaxed mb-6">
                  {exp.desc}
                </p>

                {/* Skills */}

                <div className="flex flex-wrap gap-3 mb-6">
                  {exp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-[#8245ec]/15
                      border border-[#8245ec]/30
                      text-[#c4b5fd]
                      text-sm
                    "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4">

                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      flex items-center gap-2
                      px-5 py-3
                      rounded-xl
                      bg-gray-800
                      hover:bg-gray-700
                      text-white
                      transition
                    "
                    >
                      <FaGithub />
                      View Project
                    </a>
                  )}

                  {exp.website && (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      flex items-center gap-2
                      px-5 py-3
                      rounded-xl
                      bg-[#8245ec]
                      hover:bg-purple-700
                      text-white
                      transition
                    "
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Impact Section */}

      <div className="mt-16 text-center">

        <div
          className="
          inline-block
          px-8
          py-6
          rounded-3xl
          border border-[#8245ec]/30
          bg-[#8245ec]/10
        "
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Internship Impact
          </h3>

          <p className="text-gray-400 max-w-2xl">
            Developed an AI-powered leak detection solution using
            Machine Learning, IoT data and Tableau dashboards.
            Contributed towards improving monitoring efficiency,
            anomaly detection and predictive maintenance strategies.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;