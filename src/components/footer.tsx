import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

interface FooterProps {
  contact: { contact: string };
  links: { name: string; href: string }[];
}

function Footer({ links, contact }: FooterProps) {
  return (
    <footer className="bg-secondary flex flex-col items-center py-8">
      <div className="relative w-32 h-32  overflow-hidden bg-transparent mb-6">
        {/* Top-Left Quarter */}
        <a
          href="https://facebook.com"
          className="absolute w-1/2 h-1/2 bg-blue-500 flex items-center justify-center rounded-tl-full"
        >
          <FaFacebook className="text-white text-2xl" />
        </a>

        {/* Top-Right Quarter */}
        <a
          href="https://twitter.com"
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-300 flex items-center justify-center rounded-tr-full"
        >
          <FaTwitter className="text-white text-2xl" />
        </a>

        {/* Bottom-Left Quarter */}
        <a
          href="https://instagram.com"
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-pink-500 flex items-center justify-center rounded-bl-full"
        >
          <FaInstagram className="text-white text-2xl" />
        </a>

        {/* Bottom-Right Quarter */}
        <a
          href="https://linkedin.com"
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-700 flex items-center justify-center rounded-br-full"
        >
          <FaLinkedin className="text-white text-2xl" />
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col items-center">
        <ul className="flex space-x-6 mb-4">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a href={href} className="text-white hover:text-gray-300">
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Information */}
        <p className="text-white">{contact.contact}</p>
      </nav>
    </footer>
  );
}

export default Footer;
