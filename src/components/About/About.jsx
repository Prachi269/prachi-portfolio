import React from "react";
import Tilt from "react-parallax-tilt";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaCode,
} from "react-icons/fa";

import profileImage from "../../assets/prachiPhoto.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-[7vw] lg:px-[12vw] pt-24"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 w-full">

        {/* LEFT SECTION */}

        <div className="lg:w-1/2 text-center lg:text-left">

          <p className="text-[#8245ec] font-semibold text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Prachi Agarwal
          </h1>

          {/* Animated Roles */}

          <div className="mt-5 h-[150px] overflow-hidden">
            <div className="animate-slide">

              <div className="text-2xl md:text-3xl font-semibold text-[#8245ec]">
                Full Stack Developer
              </div>

              <div className="text-2xl md:text-3xl font-semibold text-[#8245ec]">
                MERN Stack Developer
              </div>

              <div className="text-2xl md:text-3xl font-semibold text-[#8245ec]">
                AI/ML Enthusiast
              </div>

              <div className="text-2xl md:text-3xl font-semibold text-[#8245ec]">
                Problem Solver
              </div>

              <div className="text-2xl md:text-3xl font-semibold text-[#8245ec]">
                Software Developer
              </div>

            </div>
          </div>

          {/* Description */}

          <p className="mt-8 text-gray-400 text-lg leading-relaxed">
            Computer Science Engineering student with hands-on experience
            in Full Stack Development, MERN Stack, AI/ML, Python, and
            Database Management Systems.

            <br />
            <br />

            Built multiple real-world projects including AI-powered
            applications, cybersecurity tools, authentication systems,
            and machine learning solutions.

            <br />
            <br />

            Currently seeking Software Development, Full Stack
            Development, and AI/ML opportunities where I can contribute,
            learn, and grow as an engineer.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">

            <a
              href="/PRACHI_AGARWAL_updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#8245ec] text-white font-medium hover:scale-105 transition duration-300"
            >
              View Resume
            </a>

            <a
              href="/PRACHI_AGARWAL_updated.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#8245ec] text-white hover:bg-[#8245ec] transition duration-300"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="https://github.com/Prachi269"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#8245ec] text-white hover:bg-[#8245ec] transition duration-300"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/prachi-agarwal-6baaab2b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#8245ec] text-white hover:bg-[#8245ec] transition duration-300"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

          {/* Stats Cards */}

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">

            <div className="bg-[#111827]/40 backdrop-blur-lg border border-gray-800 rounded-xl p-4 text-center">
              <h3 className="text-[#8245ec] text-2xl font-bold">
                114+
              </h3>
              <p className="text-gray-400 text-sm">
                LeetCode
              </p>
            </div>

            <div className="bg-[#111827]/40 backdrop-blur-lg border border-gray-800 rounded-xl p-4 text-center">
              <h3 className="text-[#8245ec] text-2xl font-bold">
                6
              </h3>
              <p className="text-gray-400 text-sm">
                Badges
              </p>
            </div>

            <div className="bg-[#111827]/40 backdrop-blur-lg border border-gray-800 rounded-xl p-4 text-center">
              <h3 className="text-[#8245ec] text-2xl font-bold">
                9.15
              </h3>
              <p className="text-gray-400 text-sm">
                CGPA
              </p>
            </div>

            <div className="bg-[#111827]/40 backdrop-blur-lg border border-gray-800 rounded-xl p-4 text-center">
              <h3 className="text-[#8245ec] text-2xl font-bold">
                6+
              </h3>
              <p className="text-gray-400 text-sm">
                Projects
              </p>
            </div>

            <div className="bg-[#111827]/40 backdrop-blur-lg border border-gray-800 rounded-xl p-4 text-center">
              <h3 className="text-[#8245ec] text-2xl font-bold">
                1
              </h3>
              <p className="text-gray-400 text-sm">
                Internship
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SECTION */}
{/* RIGHT SECTION */}

<div className="lg:w-1/2 flex justify-center">

  <Tilt
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    scale={1.03}
    transitionSpeed={1500}
  >

    <div className="relative">

      {/* Glow Effect */}

      <div className="absolute inset-0 rounded-full bg-[#8245ec] blur-[120px] opacity-40"></div>

      {/* Profile Image Container */}

      <div
        className="
          relative
          w-[320px]
          h-[320px]
          md:w-[480px]
          md:h-[480px]
          rounded-full
          overflow-hidden
          border-4
          border-[#8245ec]
          shadow-[0_0_80px_rgba(130,69,236,0.7)]
        "
      >
        <img
          src={profileImage}
          alt="Prachi Agarwal"
          className="
           relative
    w-[300px]
    h-[300px]
    md:w-[420px]
    md:h-[420px]
    object-cover
    object-top
    scale-125
    rounded-full
    border-4
    border-[#8245ec]
    shadow-[0_0_60px_rgba(130,69,236,0.6)]
          "
        />
      </div>

      {/* Open To Work Badge */}

      <div
        className="
          absolute
          -bottom-5
          left-1/2
          -translate-x-1/2
          bg-[#111827]
          border
          border-[#8245ec]
          px-6
          py-3
          rounded-full
          flex
          items-center
          gap-2
          text-white
          shadow-lg
        "
      >
        <FaCode />
        Open To Work
      </div>

    </div>

  </Tilt>

</div>
      </div>
    </section>
  );
};

export default About;