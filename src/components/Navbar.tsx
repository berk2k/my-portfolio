import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Writing", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-neutral-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo (optional) */}
        {/* <a href="#home" className="text-sm font-medium text-gray-200">Berk Polat</a> */}

        {/* Desktop */}
        <ul className="hidden md:flex space-x-8 ml-auto">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-900 px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white"
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
