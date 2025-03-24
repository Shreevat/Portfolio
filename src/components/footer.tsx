"use client"

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"
import { FOOTER_NAVIATION_LINKS } from "../constants/footer";

const FOOTER_CONTACT = "contact@example.com | (123) 456-7890"

export default function Footer() {
  const socialLinks = [
    {
      name: "facebook",
      icon: FaFacebook,
      href: "https://facebook.com",
      position: "rounded-tl-full rounded-br-md",
      bg: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "twitter",
      icon: FaTwitter,
      href: "https://twitter.com",
      position: "rounded-tr-full rounded-bl-md",
      bg: "bg-blue-400 hover:bg-blue-500",
    },
    {
      name: "instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/shreevat/",
      position: "rounded-bl-full rounded-tr-md",
      bg: "bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 hover:from-pink-600 hover:via-purple-600 hover:to-orange-500",
    },
    {
      name: "linkedin",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/shreevatshanka-dhakal-b35a87176/",
      position: "rounded-br-full rounded-tl-md",
      bg: "bg-blue-700 hover:bg-blue-800",
    },
  ]

  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-8 px-4 lg:px-16 relative inset-x-0 bottom-0 bg-background">
      {/* Thank You Section - Visible Only on Large Screens */}
      <div className="hidden lg:block lg:w-1/3 text-left self-center">
        <h2 className="text-xl font-semibold text-text">Thank You for Visiting</h2>
        <p className="text-gray-500 mt-2">
          We appreciate your interest in our work. Stay connected with us on social media or contact us for inquiries.
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="w-full lg:w-1/3 flex flex-col items-center lg:items-center text-center self-center">
        <ul className="flex justify-center lg:justify-start space-x-6 mb-4">
          {FOOTER_NAVIATION_LINKS.map(({ name, href }) => (
            <li key={name}>
              <a href={href} className="text-text hover:text-primary transition-colors duration-200">
                {name}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-gray-500">{FOOTER_CONTACT}</p>
      </nav>

      {/* Social Media Wheel */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-6 lg:mt-0">
        <div className="relative w-40 h-40 grid grid-cols-2 gap-2 bg-transparent">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.position} ${social.bg} flex items-center justify-center transition-all duration-300 shadow-md relative`}
              whileHover={{
                scale: 1.1,
                zIndex: 10,
                transition: { duration: 0.01 },
              }}
            >
              <social.icon
                className={`text-white text-2xl ${
                  social.name === "facebook"
                    ? "ml-3 mt-3"
                    : social.name === "twitter"
                      ? "mr-3 mt-3"
                      : social.name === "instagram"
                        ? "ml-3 mb-3"
                        : "mr-3 mb-3"
                }`}
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright - Mobile Only */}
      <div className="w-full text-center mt-8 lg:hidden">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

