// import { Outlet } from "react-router-dom";
// import Sidebar from "../component/Sidebar";

// const DashboardLayout = () => {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <main className="flex-1 p-6 bg-gray-100">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;

import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-30 transform transition-transform duration-300 ease-in-out 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:block`}
      >
        <Sidebar />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar with toggle button on mobile */}
        <div className="p-4 bg-white shadow-md flex items-center md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
          <h1 className="ml-4 text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>

        {/* Page content */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
