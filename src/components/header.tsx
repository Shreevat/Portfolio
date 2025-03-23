"use client";

import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { HEADER_NAME, HEADER_NAVIATION_LINKS } from "../constants/header";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "@fontsource/roboto-slab";

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll detection for enhanced header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLabelClick = () => {
    // Navigate to the current page
    window.location.href = "/";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 md:px-8 ${
        isScrolled ? "border-b border-border shadow-sm" : "border-transparent"
      }`}
      style={{
        background: darkMode
          ? "linear-gradient(to right, hsl(var(--background)), hsl(var(--primary)) 50%)"
          : "linear-gradient(to right, hsl(var(--background)), hsl(var(--primary)) 50%)",
        backgroundSize: "100% 300px",
        backgroundPosition: "0% 100%",
        backgroundRepeat: "no-repeat",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
      }}
    >
      {/* Label as a clickable element to navigate to the current page itself */}
      <div
        onClick={handleLabelClick}
        className="ml-4 text-center md:text-left relative group"
      >
        <h1 className="text-2xl font-bold font-roboto-slab">
          <span className="text-primary cursor-pointer relative overflow-hidden inline-block">
            {HEADER_NAME}
            <span className="absolute bottom-0 left-0 w-full h-0.5  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
          {/* "AFTER DARK" text for dark mode */}
          {darkMode && (
            <span
              className="absolute bottom-0 right-0 text-xs text-white opacity-100 transition-all duration-300 z-10 glow-text"
              style={{ transform: "translate(20%, 20%)" }}
            >
              After Dark
            </span>
          )}
        </h1>
      </div>

      {/* Links for Desktop view */}
      <nav className={`hidden md:flex space-x-4`}>
        {HEADER_NAVIATION_LINKS.map(({ name, href }) => (
          <Link
            key={name}
            to={href} // Use Link component from react-router-dom
            className="text-text hover:text-primary relative group px-2 py-1 rounded transition-colors duration-200"
          >
            {name}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        ))}
      </nav>

      {/* Menu and Dark mode toggle */}
      <div className="flex items-center justify-end space-x-4">
        {/* Dark mode toggle with integrated icons */}
        <label className="relative inline-block w-[3.7em] h-[1.8em] cursor-pointer">
          <input
            type="checkbox"
            className="hidden peer"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <span className="absolute inset-0 bg-[#313033] rounded-[30px] transition duration-300 peer-focus:ring peer-focus:ring-[#3a4b39] peer-checked:bg-[#3a4b39] flex items-center justify-between px-[0.35em]">
            {/* Sun icon on the left */}
            <FaSun className="text-yellow-400 text-xs opacity-70 peer-checked:opacity-0 transition-opacity duration-300" />
            {/* Moon icon on the right */}
            <FaMoon className="text-blue-400 text-xs opacity-0 peer-checked:opacity-70 transition-opacity duration-300" />
          </span>
          <span className="absolute left-[0.2em] bottom-[0.2em] h-[1.4em] w-[1.4em] bg-[#aeaaae] rounded-[20px] transition-all duration-300 peer-checked:bg-[#84da89] peer-checked:translate-x-[1.9em] flex items-center justify-center">
            {/* Icon inside the toggle button */}
            {darkMode ? (
              <FaMoon className="text-blue-400 text-[0.6em]" />
            ) : (
              <FaSun className="text-yellow-400 text-[0.6em]" />
            )}
          </span>
        </label>

        {/* Hamburger Menu (Mobile view) */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-accent transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FaBars className="text-text" />
        </button>
      </div>

      {/* Side menu (Mobile view) */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden z-40"
            onClick={toggleMenu}
          ></div>

          {/* Menu panel */}
          <div
            className="fixed top-0 right-0 w-[70%] max-w-[300px] h-full bg-card border-l border-border p-6 md:hidden z-50 transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold font-roboto-slab text-primary">
                Menu
              </h2>
              <button
                className="p-2 rounded-full hover:bg-accent transition-colors duration-200"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <FaTimes className="text-text" />
              </button>
            </div>

            <nav className="space-y-6">
              {HEADER_NAVIATION_LINKS.map(({ name, href }) => (
                <Link
                  key={name}
                  to={href} // Use Link component for navigation
                  className="text-text hover:text-primary block py-2 border-b border-border transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              ))}
            </nav>

            {/* Dark mode toggle in mobile menu */}
            <div className="mt-8 flex items-center justify-between">
              <span className="text-text">Dark Mode</span>
              <label className="relative inline-block w-[3.7em] h-[1.8em] cursor-pointer">
                <input
                  type="checkbox"
                  className="hidden peer"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <span className="absolute inset-0 bg-[#313033] rounded-[30px] transition duration-300 peer-focus:ring peer-focus:ring-[#3a4b39] peer-checked:bg-[#3a4b39] flex items-center justify-between px-[0.35em]">
                  <FaSun className="text-yellow-400 text-xs opacity-70 peer-checked:opacity-0 transition-opacity duration-300" />
                  <FaMoon className="text-blue-400 text-xs opacity-0 peer-checked:opacity-70 transition-opacity duration-300" />
                </span>
                <span className="absolute left-[0.2em] bottom-[0.2em] h-[1.4em] w-[1.4em] bg-[#aeaaae] rounded-[20px] transition-all duration-300 peer-checked:bg-[#84da89] peer-checked:translate-x-[1.9em] flex items-center justify-center">
                  {darkMode ? (
                    <FaMoon className="text-blue-400 text-[0.6em]" />
                  ) : (
                    <FaSun className="text-yellow-400 text-[0.6em]" />
                  )}
                </span>
              </label>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
