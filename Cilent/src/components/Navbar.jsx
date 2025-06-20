


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useAuth } from '../ContextApi/Authcontext';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { token, logout } = useAuth(); // ⬅️ Use logout from context
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleLogout = () => {
    logout();              // Clears token from context and localStorage
    navigate('/login');    // Redirect after logout
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-400">Turbon</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/hero" className="hover:text-green-400">Products</Link>
          <Link to="/about" className="hover:text-green-400">About</Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 bg-white rounded-full text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* Cart */}
          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 hover:text-green-400" />
          </Link>

          {/* Login/Logout */}
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-green-400 text-black px-4 py-1 rounded hover:bg-green-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-green-400 text-black px-4 py-1 rounded hover:bg-green-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 px-2">
          <Link to="/" className="hover:text-green-400" onClick={toggleMenu}>Home</Link>
          <Link to="/hero" className="hover:text-green-400" onClick={toggleMenu}>Products</Link>
          <Link to="/about" className="hover:text-green-400" onClick={toggleMenu}>About</Link>

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-1 bg-white rounded-full text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <Link to="/cart" className="flex items-center gap-1 hover:text-green-400">
            <ShoppingCart className="w-5 h-5" /> Cart
          </Link>

          {token ? (
            <button
              onClick={() => {
                handleLogout();
                toggleMenu(); // Close menu
              }}
              className="bg-green-400 text-black px-4 py-1 rounded hover:bg-green-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={toggleMenu}
              className="bg-green-400 text-black px-4 py-1 rounded hover:bg-green-300"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
