import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Home, Map, Heart, Info, Moon, Sun } from 'lucide-react';
import { useDarkModeStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import logoSekitarKampus from '../img/LogoSekitarKampus.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Beranda', icon: Home },
    { to: '/map', label: 'Peta', icon: Map },
    { to: '/favorit', label: 'Favorit', icon: Heart },
    { to: '/about', label: 'Tentang', icon: Info },
  ];

  return (
    <nav className="bg-custom-primary dark:bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-custom-accent p-0.5 rounded-lg group-hover:scale-110 transition-transform duration-300 w-10 h-10 flex items-center justify-center relative">
              <img 
                src={logoSekitarKampus} 
                alt="SekitarKampus Logo" 
                className="w-80 h-80 object-contain absolute"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">SekitarKampus</h1>
              <p className="text-xs text-custom-accent">Direktori UMKM</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-custom-accent text-custom-primary font-semibold'
                        : 'hover:bg-blue-700 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-custom-accent" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-custom-accent" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4"
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-custom-accent text-custom-primary font-semibold'
                          : 'hover:bg-blue-700 dark:hover:bg-gray-800'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </NavLink>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

