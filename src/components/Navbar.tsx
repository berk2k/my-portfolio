import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },    
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Blog", href: "#blog" }, 
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-neutral-950/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-indigo-400">
          MyPortfolio
        </a>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-indigo-400"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-gray-300 hover:text-indigo-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
