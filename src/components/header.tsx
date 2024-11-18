// src/components/Header.tsx

interface HeaderProps {
  label: string;
  links: { name: string; href: string }[];
}

function Header({ label, links }: HeaderProps) {
  return (
    <header className="bg-teal-200 flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">{label}</h1>
      <nav>
        <ul className="flex space-x-4">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a href={href} className="text-blue-600 hover:text-blue-800">
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
