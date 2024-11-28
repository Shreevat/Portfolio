import Header from "../components/header";
import About from "./About";
import Footer from "../components/footer";
import Skills from "../components/skillSection";
import Gallery from "../components/Gallery";
import Projects from './Projects';

import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiUnity } from 'react-icons/si';
import ame from "../assets/Images/Aboutme.jpg";


const Home = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skillSection" },
  ];
  const links1 = [
    { name: "Services", href: "#services" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
  ];
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
      icon: <SiUnity size={24} />, // Add Unity icon
      name: "Unity",
    },
  ];
  const contact = { contact: "9851230675" };

  return (
    <>
      {/* <DarkModeToggle toggleDarkMode={() => {}} /> */}
      <Header label="PORTFOLIO" links={links} />
      <About  />
      <Skills skills={skills} />
      <Gallery />
      <Projects />
      <Footer links={links1} contact={contact} />
    </>
  );
};

export default Home;