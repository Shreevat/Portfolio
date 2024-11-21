import Header from "../components/header";
import About from "./About";
import Footer from "../components/footer";
import Skills from "../components/skillSection";
import Gallery from "../components/Gallery";
// import DarkModeToggle from "../components/DarkModeToggle";

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
      image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      name: "React?",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      name: "Node",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      name: "Node",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      name: "React?",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      name: "Node",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      name: "Node",
    },
    // Add more skills as needed
  ];
  const contact = { contact: "9851230675" };

  return (
    <>
      {/* <DarkModeToggle toggleDarkMode={() => {}} /> */}
      <Header label="My Portfolio" links={links} />
      <About src="Aboutme.jpg" alt="About Us" />
      <Skills skills={skills} />
      <Gallery />
      <Footer links={links1} contact={contact} />
    </>
  );
};

export default Home;