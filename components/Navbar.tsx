import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";
import { useSite } from "../context/SiteContext";

const Navbar: React.FC = () => {
  const { config, isAdmin } = useSite();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Plane className="h-8 w-8 text-secondary" />
              <span className="font-heading font-bold text-2xl text-primary">
                {config.name}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isAdmin && (
               <Link
               to="/admin"
               className="px-4 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-opacity-90 transition"
             >
               Dashboard
             </Link>
            )}
            {!isAdmin && (
                <Link to="/admin" className="text-gray-300 hover:text-gray-500 text-xs">Admin</Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "text-secondary bg-gray-50"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
             {isAdmin && (
               <Link
               to="/admin"
               onClick={() => setIsOpen(false)}
               className="block px-3 py-2 rounded-md text-base font-medium text-primary bg-gray-100"
             >
               Dashboard
             </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
