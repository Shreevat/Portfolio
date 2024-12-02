// src/Pages/Home.tsx

import Profile from "./Profile";
import About from "../components/About";
import Skills from "../components/skillSection";
// import Gallery from "../components/Gallery";
import Projects from "./DisplayProject";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiUnity, SiTypescript } from "react-icons/si";
import withLayout from "../hoc/withLayout";

const Home = (props: any) => {
  console.log({ props });

  const skills = [
    {
      icon: <FaHtml5 size={24} />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 size={24} />,
      name: "CSS3",
    },
    {
      icon: <FaNodeJs size={24} />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss size={24} />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaReact size={24} />,
      name: "React",
    },
    {
      icon: <SiUnity size={24} />,
      name: "Unity",
    },
    {
      icon: <FaJs size={24} />,
      name: "JavaScript",
    },
    {
      icon: <FaGitAlt size={24} />,
      name: "Git",
    },
    {
      icon: <SiTypescript size={24} />,
      name: "Typescript",
    },
  ];

  return (
    <>
      <Profile />
      <About />
      <Skills skills={skills} />
      {/* <Gallery /> */}
      <Projects />
    </>
  );
};

const HomeWithLayout = withLayout(Home);

export default HomeWithLayout;
