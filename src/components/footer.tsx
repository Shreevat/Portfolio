interface FooterProps {
  contact: { contact: string };
  links: { name: string; href: string }[];
}

function Footer({ links, contact }: FooterProps) {
  return (
    <footer className="bg-red-200 flex justify-between items-center px-4 py-4">
      <nav className="flex">
        <ul className="float-end">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a href={href} className="text-blue-600 hover:text-blue-800">
                {name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-between px-4 py-4 mx-10">
          <p className="flex justify">{contact.contact}</p>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
