// src/components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils'; import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const menuItems = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Products", href: "/products" },
  { id: 3, name: "About Us", href: "/" },
  { id: 4, name: "Blogs", href: "/blogs" },
  { id: 5, name: "Admin", href: "/admin" },
  { id: 6, name: "Contact", href: "/" },
];
const Navbar: React.FC = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-20 bg-transparent">
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none lg:hidden">
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-xl" />
      </button>
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden lg:flex">
          <Link to="/"><img className='h-10 w-auto' src={logo} alt='React theme' /></Link>
        </div>
        <div className='hidden lg:flex space-x-4'>
          {menuItems.map(item => (
            <Link key={item.id} to={item.href} className="primary-text hover:text-purple-700" onClick={toggleMenu}>
              {item.name}
            </Link>
          ))}
        </div>
        <div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex flex-col items-start p-4 space-y-4">
          <div>
            <Link to="/"><img className='h-10 w-auto' src={logo} alt='React theme' /></Link>
          </div>
          {menuItems.map(item => (
            <Link key={item.id} to={item.href} className="text-white hover:text-purple-700" onClick={toggleMenu}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {theme === 'base' ? (
        <button
          onClick={() => setTheme('dark')}
          className="w-12 h-12 flex items-center justify-center hover:text-purple-700"
        > Dark
          <FontAwesomeIcon className='p-2' icon={faMoon} />
        </button>
      ) : (
        <button
          onClick={() => setTheme('base')}
          className="text-white focus:outline-none w-12 h-12 flex items-center justify-center hover:text-purple-700"
        >Light
          <FontAwesomeIcon className='p-2' icon={faSun} />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
