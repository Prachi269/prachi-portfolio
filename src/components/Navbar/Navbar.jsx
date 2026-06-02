import React, { useState, useEffect } from "react";

import {
  FiMenu,
  FiX,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("about");

  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "about",
        "skills",
        "experience",
        "work",
        "education",
        "certifications",
        "coding",
        "leetcode",
        "contact",
      ];

      sections.forEach((section) => {
        const element =
          document.getElementById(section);

        if (element) {
          const top =
            element.offsetTop - 150;

          const height =
            element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY <
              top + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const handleMenuItemClick = (
    sectionId
  ) => {
    setIsOpen(false);

    const section =
      document.getElementById(
        sectionId
      );

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050816]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="px-[7vw] lg:px-[12vw]">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}

          <div
            onClick={() =>
              handleMenuItemClick(
                "about"
              )
            }
            className="text-2xl font-bold cursor-pointer"
          >
            <span className="text-[#8245ec]">
              &lt;
            </span>

            <span className="text-white">
              Prachi
            </span>

            <span className="text-[#8245ec]">
              /
            </span>

            <span className="text-white">
              Agarwal
            </span>

            <span className="text-[#8245ec]">
              &gt;
            </span>
          </div>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() =>
                    handleMenuItemClick(
                      item.id
                    )
                  }
                  className={`transition-all duration-300 font-medium ${
                    activeSection ===
                    item.id
                      ? "text-[#8245ec]"
                      : "text-gray-300 hover:text-[#8245ec]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Links */}

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://github.com/Prachi269"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/prachi-agarwal-6baaab2b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://leetcode.com/u/K26u2b3nZp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition"
            >
              <SiLeetcode size={22} />
            </a>

            <a
              href="https://www.hackerrank.com/profile/prachiagarwal261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition"
            >
              <SiHackerrank size={22} />
            </a>
          </div>

          {/* Mobile Menu Button */}

          <div className="lg:hidden">
            {isOpen ? (
              <FiX
                size={28}
                className="text-[#8245ec] cursor-pointer"
                onClick={() =>
                  setIsOpen(false)
                }
              />
            ) : (
              <FiMenu
                size={28}
                className="text-[#8245ec] cursor-pointer"
                onClick={() =>
                  setIsOpen(true)
                }
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}

      {isOpen && (
        <div className="lg:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-gray-800">
          <ul className="flex flex-col items-center py-8 gap-5">

            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() =>
                    handleMenuItemClick(
                      item.id
                    )
                  }
                  className={`text-lg ${
                    activeSection ===
                    item.id
                      ? "text-[#8245ec]"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex gap-6 mt-4">

              <a
                href="https://github.com/Prachi269"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={22}
                  className="text-gray-300 hover:text-[#8245ec]"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/prachi-agarwal-6baaab2b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={22}
                  className="text-gray-300 hover:text-[#8245ec]"
                />
              </a>

              <a
                href="https://leetcode.com/u/K26u2b3nZp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode
                  size={22}
                  className="text-gray-300 hover:text-[#8245ec]"
                />
              </a>

              <a
                href="https://www.hackerrank.com/profile/prachiagarwal261"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiHackerrank
                  size={22}
                  className="text-gray-300 hover:text-[#8245ec]"
                />
              </a>

            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;