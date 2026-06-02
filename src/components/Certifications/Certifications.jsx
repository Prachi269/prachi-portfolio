import React from "react";
import { certifications } from "../../constants";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-[7vw] lg:px-[12vw]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Certifications
        </h2>

        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4"></div>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          Professional certifications validating my skills
          in AI, Cloud Computing, Programming and Problem Solving.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              bg-[#111827]/40
              border border-gray-800
              rounded-3xl
              p-6
              hover:border-[#8245ec]
              transition-all
              duration-300
              hover:-translate-y-2
            "
          >
            <div className="flex items-center justify-between">
              <FaCertificate
                size={35}
                className="text-[#8245ec]"
              />

              <FaExternalLinkAlt
                className="
                  text-gray-400
                  group-hover:text-[#8245ec]
                "
              />
            </div>

            <h3 className="text-xl font-bold text-white mt-5">
              {cert.title}
            </h3>

            <p className="text-[#8245ec] mt-3">
              {cert.issuer}
            </p>

            <p className="text-gray-400 mt-1">
              {cert.date}
            </p>

            <button
              className="
                mt-5
                px-4
                py-2
                rounded-full
                bg-[#8245ec]
                text-white
                text-sm
              "
            >
              View Certificate
            </button>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;