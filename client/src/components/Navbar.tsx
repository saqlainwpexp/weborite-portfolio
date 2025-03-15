import { useState } from "react";
import { Link } from "wouter";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Finance", href: "#" },
    { name: "Launch", href: "#" },
    { name: "Products", href: "#" },
    { name: "Company", href: "#" }
  ];

  return (
    <header className="px-6 py-4 flex items-center justify-between border-b border-opacity-10 border-[#00ff4c]">
      <div className="flex items-center">
        {/* Logo */}
        <Link href="/" className="logo-hover">
          <div className="flex items-center">
            <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20L20 8L32 20L20 32L8 20Z" stroke="#00ff4c" strokeWidth="2" fill="none" />
              <path d="M15 15L25 25M15 25L25 15" stroke="#00ff4c" strokeWidth="2" />
            </svg>
            <div className="ml-2">
              <div className="text-white font-bold text-lg">Apex</div>
              <div className="text-[#00ff4c] text-xs font-medium">Antenoal</div>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link 
            key={item.name}
            href={item.href} 
            className="text-white hover:text-[#00ff4c] transition-colors duration-200 font-medium text-sm"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      
      {/* Connect Button */}
      <button className="bg-[#181a18] hover:bg-[#00ff4c] hover:text-[#0c0e0c] transition-colors duration-300 text-white font-medium py-2 px-4 rounded-full text-sm flex items-center">
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Connect Wallet
      </button>
      
      {/* Mobile menu button - only show on small screens */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu - show when toggled */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-[#0c0e0c] z-50 p-4 border-b border-[#00ff4c] border-opacity-10">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="block py-2 text-white hover:text-[#00ff4c] transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
