"use client";

import { useState, useEffect } from "react";
import { socialLinks } from "../constants/socialinks";
import me from "../assets/Images/Me.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProfileSection = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const phrases = ["a Frontend Developer", "a Creative Coder"];
    const timer = setTimeout(() => {
      setText(phrases[index].substring(0, text.length + 1));

      if (text.length === phrases[index].length) {
        setTimeout(() => {
          setText("");
          setIndex((index + 1) % phrases.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [text, index]);

  return (
    <div className="relative my-auto min-h-screen overflow-hidden flex justify-center items-center">
      {/* Profile Section */}
      <div className="relative h-screen bg-background overflow-hidden flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 w-full">
        {/* Glowing Element */}
        <div className="absolute bg-primary mx-auto rounded-3xl blur-3xl w-[260px] h-[280px] top-[200px] left-1/4 transform -translate-x-1/2 animate-shadow-slide z-10"></div>

        <motion.div
          className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Hello, I'm <span className="text-primary">Shreevatshanka</span>
          </h1>
          <div className="h-16 md:h-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              I am <span className="text-primary">{text}</span>
              <span className="animate-blink">|</span>
            </h2>
          </div>
          <p className="text-text text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 mt-4 pt-2">
            Passionate about creating beautiful, responsive, and user-friendly
            web experiences that solve real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="px-6 py-3 bg-primary text-text font-medium rounded-lg hover:bg-primary/90 transition-colors inline-block"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors inline-block"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Box Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-20 relative px-4 sm:px-8 mt-16 md:mt-0">
          <div className="main-box bg-secondary p-6 sm:p-8 rounded-lg shadow-md text-center max-w-[90%] sm:max-w-[500px] w-full relative">
            {/* Profile Image */}
            <img
              src={me || "/placeholder.svg"}
              alt="Pfp"
              className="absolute -top-14 sm:-top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-primary shadow-lg z-20"
            />
            {/* Developer Info */}
            <div className="mt-14 sm:mt-16">
              <h2 className="text-xl sm:text-2xl font-bold text-text">
                Shreevatshanka Dhakal
              </h2>
              <p className="text-sm sm:text-base text-text mt-2">Developer?</p>
              <p className="text-sm sm:text-base text-text mt-2">
                I enjoy coding :D
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center space-x-4 sm:space-x-6 mt-6">
              {socialLinks.map(({ href, Icon, name }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-full hover:bg-primary transition"
                  aria-label={name}
                >
                  <Icon className="w-5 h-5 text-text" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
