// import { Home, Users, Settings, LogOut, PackagePlus } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const menuItems = [
//     { label: 'Dashboard', icon: <Home />, path: '/dashboard' },
//     { label: 'Users', icon: <Users />, path: '/userList' },
//      { label: 'Add Product', icon:<PackagePlus/> , path: '/addproduct' },
//     { label: 'Settings', icon: <Settings />, path: '/settings' },
//     { label: 'Logout', icon: <LogOut />, path: '/logout' },
//   ];

//   return (
//     <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col">
//       <div className="p-4 text-2xl font-bold border-b border-gray-700">
//         Admin Panel
//       </div>
//       <nav className="flex-1 p-4 space-y-2">
//         {menuItems.map((item, index) => (
//           <Link
//             key={index}
//             to={item.path}
//             className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition-colors"
//           >
//             {item.icon}
//             <span>{item.label}</span>
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { Home, Users, Settings, LogOut, PackagePlus, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', icon: <Home />, path: '/dashboard' },
    { label: 'Users', icon: <Users />, path: '/userList' },
    { label: 'Add Product', icon: <PackagePlus />, path: '/addproduct' },
    { label: 'Settings', icon: <Settings />, path: '/settings' },
    { label: 'Logout', icon: <LogOut />, path: '/logout' },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden bg-gray-900 text-white p-4 flex items-center justify-between">
        <div className="text-xl font-bold">Admin Panel</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-4 transform transition-transform duration-300 z-50 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
      >
        <div className="text-2xl font-bold border-b border-gray-700 pb-4 mb-4">
          Admin Panel
        </div>
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(false)} // Close on mobile tap
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
