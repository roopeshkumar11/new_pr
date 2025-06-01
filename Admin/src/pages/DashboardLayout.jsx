
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar on mobile */}
        <div className="p-4 bg-white shadow-md flex items-center md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
          <h1 className="ml-4 text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>

        {/* Page content */}
        <main className="flex-1 p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
