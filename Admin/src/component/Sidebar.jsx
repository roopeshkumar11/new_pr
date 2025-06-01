
import React from 'react';
import { Home, Users, Settings, LogOut, PackagePlus, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { label: 'Dashboard', icon: <Home />, path: '/dashboard' },
    { label: 'Users', icon: <Users />, path: '/userList' },
    { label: 'Add Product', icon: <PackagePlus />, path: '/addproduct' },
    { label: 'Settings', icon: <Settings />, path: '/settings' },
    { label: 'Logout', icon: <LogOut />, path: '/logout' },
  ];

  return (
    <>
      {/* Sidebar for all screens */}
      <aside
        className={`min-h-screen fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-4 z-30 transform transition-transform duration-300 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:block`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(false)} // Auto-close on mobile
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
