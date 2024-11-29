import { FOOTER_CONTACT, FOOTER_NAVIATION_LINKS } from "../constants/footer.ts";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row justify-around items-center py-8 relative inset-x-0 bottom-0 ">
      <div className="relative w-40 h-40 p-1 grid grid-cols-2 gap-2  overflow-hidden bg-transparent mb-6 ">
        {/* Top-Left Quarter */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link bg-blue-500 w-auto flex items-center justify-center rounded-tl-full "
        >
          <FaFacebook className="text-white text-2xl pt-2 pl-2" />
        </a>

        {/* Top-Right Quarter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link top-0 right-0 bg-blue-300 flex items-center justify-center rounded-tr-full"
        >
          <FaTwitter className="text-white text-2xl pt-2 pr-2" />
        </a>

        {/* Bottom-Left Quarter */}
        <a
          href="https://www.instagram.com/shreevat/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link bottom-0 left-0 bg-pink-500 flex items-center justify-center rounded-bl-full"
        >
          <FaInstagram className="text-white text-2xl pb-2 pl-2" />
        </a>

        {/* Bottom-Right Quarter */}
        <a
          href="https://www.linkedin.com/in/shreevatshanka-dhakal-b35a87176/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link bottom-0 right-0  bg-blue-700 flex items-center justify-center rounded-br-full"
        >
          <FaLinkedin className="text-white text-2xl pb-2 pr-2" />
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col items-center">
        <ul className="flex space-x-6 mb-4">
          {FOOTER_NAVIATION_LINKS.map(({ name, href }) => (
            <li key={name}>
              <a href={href} className="text-text hover:text-gray-300">
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Information */}
        <p className="text-text">{FOOTER_CONTACT}</p>
      </nav>
    </footer>
  );
}

export default Footer;
