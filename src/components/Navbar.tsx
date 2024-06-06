// src/components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils'; import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  return (
    <nav className="absolute top-10 w-full bg-transparent z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="primary-text text-2xl">
          <Link to="/"><img className='h-10 w-auto' src={logo} alt='React theme' /></Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="primary-text">
            Home
          </Link>
          <Link to="/products" className="primary-text">
            Products
          </Link>
          <Link to="/blogs" className="primary-text">
            About Us
          </Link>
          <Link to="/blogs" className="primary-text">
            Blogs
          </Link>
          <Link to="/admin" className="primary-text">
            Admin
          </Link>
          <Link to="/" className="primary-text">
            Contact
          </Link>
        </div>
        <div className="">
          {theme === 'base' ? (
            <button
              onClick={() => setTheme('dark')}
              className="w-12 h-12 flex items-center justify-center"
            > Dark
              <FontAwesomeIcon className='p-2' icon={faMoon} />
            </button>
          ) : (
            <button
              onClick={() => setTheme('base')}
              className="w-12 h-12 flex items-center justify-center"
            >Light
              <FontAwesomeIcon className='p-2' icon={faSun} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
