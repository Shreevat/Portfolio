import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface HeaderProps {
  label: string;
  links: { name: string; href: string }[];
}

function Header({ label, links }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className="bg-var(--primary) flex justify-between items-center py-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="dark-mode-switch"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="mr-2"
        />
        <label htmlFor="dark-mode-switch">
          {darkMode ? <FaSun /> : <FaMoon />}
        </label>
      </div>
      <h1 className="text-2xl font-bold var(--text-color) font-hi-melody">
        {label}
      </h1>
      <nav>
        <ul className="flex space-x-4">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="text-var(--secondary) hover:text-var(--secondary)"
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