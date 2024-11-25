import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface HeaderProps {
  label: string;
  links: { name: string; href: string }[];
}

function Header({ label, links }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode); // Ensure correct class toggle
  };

  return (
    <header className="bg-[var(--primary)] flex justify-between items-center py-4">
      <div className="flex items-center">
        {/* Dark mode toggle slider */}
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
      </div>

      <h1 className="text-2xl font-bold text-[var(--text-color)] font-hi-melody">
        {label}
      </h1>
      <nav>
        <ul className="flex space-x-4">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="text-[var(--secondary)] hover:text-[var(--secondary)]"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
