// src/App.tsx
import Header from "./components/header";
import AboutSection from "./components/aboutSection";
import Footer from "./components/footer";
import Skills from "./components/skillSection";

function App() {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
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
    // Add more skills as needed
  ];
  const contact = { contact: "9851230675" };

  return (
    <>
      <Header label="My Portfolio" links={links} />
      <AboutSection
        src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
        alt="About Us"
      />
      <Skills skills={skills} />
      <Footer links={links1} contact={contact} />
    </>
  );
}

export default App;
