import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiCplusplus,
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

// ================= SKILLS =================

export const SkillsInfo = [
  {
  title: "Frontend",
  skills: [
    { name: "HTML", icon: FaHtml5, level: 90 },
    { name: "CSS", icon: FaCss3Alt, level: 85 },
    { name: "JavaScript", icon: SiJavascript, level: 80 },
    { name: "React JS", icon: FaReact, level: 80 },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
  ],
},
{
  title: "Backend",
  skills: [
    { name: "Node JS", icon: FaNodeJs, level: 75 },
    { name: "Express JS", icon: SiExpress, level: 75 },
    { name: "MySQL", icon: SiMysql, level: 80 },
    { name: "MongoDB", icon: SiMongodb, level: 70 },
  ],
},
{
  title: "Programming Languages",
  skills: [
    { name: "C", icon: FaCode, level: 80 },
    { name: "C++", icon: SiCplusplus, level: 85 },
    { name: "Python", icon: FaPython, level: 85 },
    { name: "JavaScript", icon: SiJavascript, level: 80 },
  ],
},
{
  title: "Tools & Platforms",
  skills: [
    { name: "Git", icon: FaGitAlt, level: 80 },
    { name: "GitHub", icon: FaGithub, level: 85 },
    { name: "Postman", icon: SiPostman, level: 80 },
    { name: "Vercel", icon: SiVercel, level: 85 },
    { name: "Tableau", icon: FaChartBar, level: 75 },
  ],
},
];

// ================= EXPERIENCE =================

export const experiences = [
  {
    id: 0,

   img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",

    role: "AI & Data Science Intern",

    company: "1 Million 1 Billion (1M1B)",

    date: "Sep 2025 - Oct 2025",

    desc:
      "Designed and implemented an AI-powered leak detection system using Python, IoT sensor data, machine learning algorithms, and Tableau dashboards. Developed predictive models to detect abnormal flow patterns and improve monitoring efficiency.",

    skills: [
      "Python",
      "Machine Learning",
      "Scikit-Learn",
      "IoT",
      "Tableau",
      "Data Analysis",
      "Data Visualization",
    ],

    github: "https://github.com/Prachi269/1M1B-PROJECT",

    website: "https://1-m1-b-project.vercel.app/",
  },
];

// ================= EDUCATION =================

export const education = [
  {
    id: 0,

    img:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=500",

    school: "MCKV Institute of Engineering",

    date: "2022 - 2026",

    grade: "B.Tech CSE",

    desc:
      "Bachelor of Technology in Computer Science & Engineering with focus on Full Stack Development, AI/ML, Database Systems and Software Engineering.",

    degree: "Bachelor of Technology (B.Tech) - CSE",
  },

  {
    id: 1,

    img:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500",

    school: "CBSE Class XII",

    date: "2021 - 2022",

    grade: "85.8%",

    desc:
      "Completed Higher Secondary Education and secured 85.8% along with 3rd position in school.",

    degree: "CBSE (XII)",
  },

  {
    id: 2,

    img:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500",

    school: "CBSE Class X",

    date: "2019 - 2020",

    grade: "86%",

    desc:
      "Completed Secondary Education with strong academic performance and excellent fundamentals.",

    degree: "CBSE (X)",
  },
];

// ================= CERTIFICATIONS =================

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    link: "/Certificates/oracle.pdf",
  },

  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2025",
    link: "/Certificates/python-basic.pdf",
  },

  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2025",
    link: "/Certificates/problem-solving-basic.pdf",
  },

  {
    title: "Getting Started with AI",
    issuer: "IBM",
    date: "2025",
    link: "/Certificates/ibm.pdf",
  },
];

// ================= PROJECTS =================

export const projects = [
  {
    id: 0,

    title: "Login & Signup Web Application",

    description:
      "Built a secure authentication system using React.js, Node.js, Express.js and MySQL. Includes signup, login, validation and API integration using Postman.",

    image: "/screenshots/login.png",

    tags: [
      "React JS",
      "Node JS",
      "Express JS",
      "MySQL",
      "Postman",
    ],

    github: "https://github.com/Prachi269/login-page",

    webapp: "https://login-page-mauve-kappa.vercel.app/",
  },

  {
    id: 1,

    title: "QR Code Generator",

    description:
      "Responsive web application that generates QR codes instantly for text and URLs using JavaScript.",

image: "/screenshots/qr-code.png",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "QR Generator",
    ],

    github: "https://github.com/Prachi269/QR-CODE",

    webapp: "https://qr-code-sepia-delta.vercel.app/",
  },

  {
    id: 2,

    title: "AI Coding Game Platform",

    description:
      "A MERN Stack coding platform inspired by LeetCode featuring coding challenges, leaderboards, progress tracking, daily problems and gamified learning.",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",

    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node JS",
      "MERN",
    ],

     github:
      "https://github.com/Prachi269/1M1B-PROJECT",

    webapp:
      "https://1-m1-b-project.vercel.app/",
  },

  {
    id: 3,

    title: "AI Crop Disease Detection",

    description:
      "AI-based crop disease detection system using CNN(mobileNet algorithm), TensorFlow, OpenCV and Flask. Users upload crop images and receive disease predictions. It also has a special feature that is weather predictions.",

image: "/screenshots/crop-disease.png",

    tags: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "CNN",
      "Flask",
      "Machine Learning",
    ],

    github:
      "https://github.com/Sumi269/CROP-DETECTION-project.git",

    webapp:
      "https://crop-detection-project.vercel.app/",
  },

  {
    id: 4,

    title: "Cybersecurity Port Scanner",

    description:
      "Python-based port scanner utilizing socket programming and multithreading to identify open ports and assess network security.",

    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800",

    tags: [
      "Python",
      "Cybersecurity",
      "Socket Programming",
      "Multithreading",
    ],

    github: "https://github.com/Prachi269/port-scanner",

    webapp: "#",
  },

  {
    id: 5,

    title: "Personal Portfolio Website",

    description:
      "Modern responsive developer portfolio showcasing projects, certifications, skills, coding profiles and achievements.",

    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",

    tags: [
      "React JS",
      "Tailwind CSS",
      "JavaScript",
      "Portfolio",
    ],

    github:
      "https://github.com/Prachi269",

    webapp: "#",
  },
];

// ================= CODING PROFILES =================
export const codingProfiles = [
  {
    id: 1,
    platform: "LeetCode",
    username: "K26u2b3nZp",
    stats: "114+ Problems Solved",
    link: "https://leetcode.com/u/K26u2b3nZp/",
  },

  {
    id: 2,
    platform: "HackerRank",
    username: "prachiagarwal261",
    stats: "6 Skill Badges",
    link: "https://www.hackerrank.com/profile/prachiagarwal261",
  },

  {
    id: 3,
    platform: "GeeksForGeeks",
    username: "prachiagarwpksm",
    stats: "Active Profile",
    link: "https://www.geeksforgeeks.org/user/prachiagarwpksm/",
  },

  {
    id: 4,
    platform: "GitHub",
    username: "Prachi269",
    stats: "12 Repositories",
    link: "https://github.com/Prachi269",
  },
];

// ================= LEETCODE STATS =================

export const leetcodeStats = {
  solved: 114,
  easy: 67,
  medium: 39,
  hard: 8,
  contestRating: 1414,
  globalRank: "691,099",
};

// ================= HACKERRANK BADGES =================

export const hackerRankBadges = [
  "Problem Solving",
  "Python",
  "SQL",
  "C Language",
  "C++",
  "Days of Code",
];

// ================= SOCIAL LINKS =================

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/Prachi269",
  },

  {
    id: 2,
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/prachi-agarwal-6baaab2b4/",
  },

  {
    id: 3,
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/K26u2b3nZp/",
  },

  {
    id: 4,
    name: "HackerRank",
    icon: SiHackerrank,
    link: "https://www.hackerrank.com/profile/prachiagarwal261",
  },
];