import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/UI/ScrollToTop";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
// import Projects from "./Pages/ProjectsPage";

function App() {
  return (
    <Router basename="/Portfolio">
      <div className="bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Projects" element={<Projects />} /> */}
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
