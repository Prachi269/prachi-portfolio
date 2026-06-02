import React from "react";
import { education } from "../../constants";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] lg:px-[12vw]"
    >
      {/* Section Heading */}

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Education
        </h2>

        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
          My academic journey that laid the foundation for software
          development, artificial intelligence, and problem-solving.
        </p>
      </div>

      {/* Timeline */}

      <div className="relative max-w-5xl mx-auto">

        {/* Center Line */}

        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#8245ec]/30"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`mb-16 flex flex-col md:flex-row items-center ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Timeline Icon */}

            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-[#8245ec] items-center justify-center shadow-lg shadow-purple-500/40 z-10">
              <FaGraduationCap className="text-white text-xl" />
            </div>

            {/* Card */}

            <div className="w-full md:w-[45%]">
              <div className="bg-[#111827]/40 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 hover:border-[#8245ec] transition-all duration-300 shadow-lg">

                {/* Top */}

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-16 h-16 rounded-xl object-cover bg-white"
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>

                    <p className="text-[#8245ec]">
                      {edu.school}
                    </p>

                    <p className="text-gray-500 text-sm">
                      {edu.date}
                    </p>
                  </div>
                </div>

                {/* Grade */}

                <div className="mb-4">
                  <span className="px-4 py-2 rounded-full bg-[#8245ec]/15 text-[#c4b5fd] text-sm">
                    Grade : {edu.grade}
                  </span>
                </div>

                {/* Description */}

                <p className="text-gray-400 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary */}

      <div className="mt-10 text-center">
        <div className="inline-block px-6 py-4 rounded-2xl border border-[#8245ec]/40 bg-[#8245ec]/10">
          <h3 className="text-xl font-semibold text-white">
            Academic Highlights
          </h3>

          <p className="text-gray-400 mt-2">
            Pursuing B.Tech in Computer Science & Engineering while
            actively building Full Stack, AI/ML, and Software
            Development projects to bridge academic learning with
            real-world applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;