import { useContext, useState } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { HEADER_NAME, HEADER_NAVIATION_LINKS } from "../constants/header";
import "@fontsource/roboto-slab";

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLabelClick = () => {
    // Navigate to the current page
    window.location.href = "/Portfolio/";
  };

  return (
    <header
      className=" flex justify-between items-center py-4 px-4 md:px-8 border-b-2 border-gray-200 "
      style={{
        background:
          "linear-gradient(to right, var(--background), var(--primary) 50%)",
        backgroundSize: "100% 300px",
        backgroundPosition: "0% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Label as a clickable element to navigate to the current page itself */}
      <div className="ml-4 text-center md:text-left">
        <h1 className="text-2xl font-bold font-roboto-slab">
          <span
            onClick={handleLabelClick}
            className="text-primary cursor-pointer"
          >
            {HEADER_NAME}
          </span>
        </h1>
      </div>

      {/* Links for Desktop view */}
      <nav className={`hidden md:flex space-x-4`}>
        {HEADER_NAVIATION_LINKS.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            className="text-text hover:text-secondary hover:bg-gray-200 px-2 py-1 rounded"
          >
            {name}
          </a>
        ))}
      </nav>

      {/* Menu and Dark mode toggle */}
      <div className="flex items-center justify-end space-x-4">
        {/* Dark mode slider */}
        <label className="relative inline-block w-[3.7em] h-[1.8em]">
          <input
            type="checkbox"
            className="hidden peer"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <span className="absolute cursor-pointer inset-0 bg-[#313033] rounded-[30px] transition duration-200 peer-focus:ring peer-focus:ring-[#3a4b39] peer-checked:bg-[#3a4b39]"></span>
          <span className="absolute left-[0.2em] bottom-[0.2em] h-[1.4em] w-[1.4em] bg-[#aeaaae] rounded-[20px] transition-transform duration-400 peer-checked:bg-[#84da89] peer-checked:translate-x-[1.9em]"></span>
        </label>
        <span>
          {darkMode ? (
            <FaMoon className="text-blue-400" />
          ) : (
            <FaSun className="text-yellow-400" />
          )}
        </span>

        {/* Hamburger Menu (Mobile view) */}
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars className="text-text" />
        </button>
      </div>

      {/* Side menu (Mobile view) */}
      {isMenuOpen && (
        <div
          className="fixed top-0 right-0 w-[50%] h-full bg-[var(--primary)] p-4 md:hidden z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <FaBars className="text-text" />
          </button>
          <nav
            className={`md:hidden block space-y-4 mt-10`}
            style={{ width: "100%", right: 0 }}
          >
            {HEADER_NAVIATION_LINKS.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="text-text hover:text-secondary block"
              >
                {name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
