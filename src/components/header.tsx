import { useState } from "react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";

interface HeaderProps {
  label: string;
  links: { name: string; href: string }[];
  classname?: string;
}

function Header({ label, links }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[var(--primary)] flex justify-between items-center py-4">
      
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
      <span className="ml-3">
        {darkMode ? (
          <FaMoon className="text-blue-400" />
        ) : (
          <FaSun className="text-yellow-400" />
        )}
      </span>

      {/* Label */}
      <div className="flex-1 text-center">
        <h1 className="text-2xl font-bold text-[var(--text-color)] font-hi-melody">
          <span className="text-tertiary">{label}</span>
        </h1>
      </div>

      {/* Menu */}
      <button className="md:hidden" onClick={toggleMenu}>
        <FaBars className="text-white" />
      </button>

      {/* Links */}
      <nav className={`hidden md:flex space-x-4`}>
        {links.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            className="text-[var(--secondary)] hover:text-[var(--secondary)]"
          >
            {name}
          </a>
        ))}
      </nav>

      {/* Side menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 right-0 w-50% h-full bg-[var(--primary)] p-4 md:hidden z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <FaBars className="text-white" />
          </button>
          <nav
            className={`md:hidden block space-y-4 mt-10`}
            style={{ width: "100%", right: 0 }}
          >
            {links.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="text-[var(--secondary)] hover:text-[var(--secondary)] block"
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
