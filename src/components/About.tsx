"use client"

import { motion } from "framer-motion"
import Illustration from "../assets/Images/Illustration.png"

const About = () => {
  

  return (
    <div id="about" className="min-h-screen flex items-center justify-center bg-background py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full mx-auto"
      >
        <div className="bg-tertiary rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Image with decorative elements */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:w-5/12 relative bg-primary/10"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent z-0"></div>

              <div className="relative z-10 flex items-center justify-center h-full p-8">
                <div className="relative">
                  {/* Decorative circles */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/20 animate-pulse"></div>
                  <div
                    className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/10 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Main image */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 p-2 rounded-xl transform rotate-2"
                  >
                    <img
                      src={Illustration || "/placeholder.svg"}
                      alt="Developer Illustration"
                      className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-sm uppercase tracking-wider text-primary font-semibold">Who I Am</h2>
                  <h1 className="text-4xl lg:text-5xl font-bold text-text mt-1">
                    <span className="text-primary">About</span> Me
                  </h1>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-bold text-text">Turning ideas into interactive experiences</h2>

                  <p className="text-text/80 leading-relaxed">
                    I'm passionate about creating engaging digital experiences that solve real problems. Currently
                    focusing on developing my skills as a{" "}
                    <span className="text-primary font-medium">web developer</span>, I combine creativity with technical
                    knowledge to build intuitive and responsive applications.
                  </p>

                  <p className="text-text/80 leading-relaxed">
                    My journey in development has equipped me with a diverse skill set and a problem-solving mindset
                    that I bring to every project I work on.
                  </p>

                 

                  <div className="pt-6">
                    <a
                      href="#contact"
                      className="inline-block bg-primary text-text font-medium px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                    >
                      Get In Touch
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About

