import { Home, Users, Settings, LogOut, PackagePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', icon: <Home />, path: '/dashboard' },
    { label: 'Users', icon: <Users />, path: '/userList' },
     { label: 'Add Product', icon:<PackagePlus/> , path: '/addproduct' },
    { label: 'Settings', icon: <Settings />, path: '/settings' },
    { label: 'Logout', icon: <LogOut />, path: '/logout' },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
