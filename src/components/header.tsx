// src/components/header.tsx
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface HeaderProps {
  label: string;
  links: { name: string; href: string }[];
}

function Header({ label, links }: HeaderProps) {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    console.log("clicked");
    setDarkMode(!darkMode);
    //print statein console
    console.log(darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <header
      className={`bg-${
        darkMode ? 'gray-900' : 'primary'
      } flex justify-between items-center py-4`}
    >
      <h1
        className={`text-2xl font-bold ${
          darkMode ? "text-gray-100" : "text-gray-900"
        } font-hi-melody`}
      >
        {label}
      </h1>
      <nav>
        <ul className="flex space-x-4">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className={`text-${
                  darkMode ? "gray-100" : "blue-600"
                } hover:text-${darkMode ? "gray-200" : "blue-800"}`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleDarkMode}
          className={`text-${darkMode ? "gray-100" : "black"} hover:text-${
            darkMode ? "gray-200" : "red-500"
          }`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}

export default Header;
