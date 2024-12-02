import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import ScrollToTop from "./components/UI/ScrollToTop";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Projects from "./Pages/ProjectsPage";
import { DarkModeProvider } from './context/darkModeContext';

function AppContent() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Router basename="/Portfolio">
      <div className={`bg-background ${darkMode ? 'dark-mode' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;