import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="border-t border-gray-800 bg-[#050414] text-white py-10">

      <div className="max-w-7xl mx-auto px-[7vw]">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}

          <div>
            <h2 className="text-2xl font-bold text-[#8245ec]">
              Prachi Agarwal
            </h2>

            <p className="text-gray-400 mt-3 leading-relaxed">
              Computer Science Engineer passionate about
              Full Stack Development, AI/ML and Software Engineering.
            </p>
          </div>

          {/* Center */}

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <button onClick={() => handleScroll("about")}>
                About
              </button>

              <button onClick={() => handleScroll("skills")}>
                Skills
              </button>

              <button onClick={() => handleScroll("experience")}>
                Experience
              </button>

              <button onClick={() => handleScroll("work")}>
                Projects
              </button>

              <button onClick={() => handleScroll("education")}>
                Education
              </button>

              <button onClick={() => handleScroll("contact")}>
                Contact
              </button>

            </div>
          </div>

          {/* Right */}

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Info
            </h3>

            <div className="space-y-3 text-gray-400">

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>
                  prachiagarwal26092003@gmail.com
                </span>
              </div>
<div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>
                  9002967702
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>
                  West Bengal, India
                </span>
              </div>

            </div>

            <div className="flex gap-4 mt-6">

              <a
                href="https://github.com/Prachi269"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/prachi-agarwal-6baaab2b4/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://leetcode.com/u/K26u2b3nZp/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode size={22} />
              </a>

              <a
                href="https://www.hackerrank.com/profile/prachiagarwal261"
                target="_blank"
                rel="noreferrer"
              >
                <FaHackerrank size={22} />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 Prachi Agarwal. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;