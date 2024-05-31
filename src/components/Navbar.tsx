// src/components/Navbar.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ConfigContext } from '../utils/config';

const Navbar: React.FC = () => {
  const { theme } = useContext(ConfigContext);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link to="/">MyApp</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/products" className="text-white">
            Products
          </Link>
          <Link to="/blogs" className="text-white">
            Blogs
          </Link>
          <Link to="/admin" className="text-white">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
