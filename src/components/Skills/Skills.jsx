import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[7vw] lg:px-[12vw]"
    >
      {/* Heading */}

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Technical Skills
        </h2>

        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
          Technologies, programming languages, frameworks and tools
          I use to build scalable applications and solve real-world
          problems.
        </p>
      </div>

      {/* Skill Categories */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            scale={1.02}
            transitionSpeed={1000}
          >
            <div className="bg-[#111827]/40 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 shadow-lg hover:border-[#8245ec] transition-all duration-300">

              <h3 className="text-2xl font-bold text-center text-[#8245ec] mb-8">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <Icon
                            size={24}
                            className="text-[#8245ec]"
                          />

                          <span className="text-white font-medium">
                            {skill.name}
                          </span>
                        </div>

                        <span className="text-[#8245ec] font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#8245ec] to-purple-400 rounded-full transition-all duration-1000"
                          style={{
                            width: `${skill.level}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Core Subjects */}

      <div className="mt-16">
        <div className="bg-[#111827]/40 border border-gray-800 rounded-3xl p-8 text-center">

          <h3 className="text-2xl font-bold text-[#8245ec] mb-6">
            Core Computer Science Knowledge
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            <span className="px-4 py-2 bg-[#8245ec]/15 border border-[#8245ec]/30 rounded-full text-white">
              Data Structures & Algorithms
            </span>

            <span className="px-4 py-2 bg-[#8245ec]/15 border border-[#8245ec]/30 rounded-full text-white">
              Object Oriented Programming
            </span>

            <span className="px-4 py-2 bg-[#8245ec]/15 border border-[#8245ec]/30 rounded-full text-white">
              DBMS
            </span>

            <span className="px-4 py-2 bg-[#8245ec]/15 border border-[#8245ec]/30 rounded-full text-white">
              Operating Systems
            </span>

            <span className="px-4 py-2 bg-[#8245ec]/15 border border-[#8245ec]/30 rounded-full text-white">
              Computer Networks
            </span>

            <span className="px-4 py-2 bg-[#8245ec]/15 border border-[#8245ec]/30 rounded-full text-white">
              REST APIs
            </span>

            <span className="px-4 py-2 bg-[#8245ec]/15 border border-[#8245ec]/30 rounded-full text-white">
              Machine Learning
            </span>

            <span className="px-4 py-2 bg-[#8245ec]/15 border border-[#8245ec]/30 rounded-full text-white">
              Git & GitHub
            </span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;