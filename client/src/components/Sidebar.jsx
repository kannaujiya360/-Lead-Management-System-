import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdPeople, MdAnalytics } from "react-icons/md";

const Sidebar = ({ isOpen, onClose }) => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-4 p-3 rounded-xl transition-all duration-300 relative
     cursor-pointer hover:scale-105 transform
     ${
       isActive
         ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
         : "text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 hover:text-white"
     }`;

  return (
    <>
    
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

    
      <aside
        className={`
          fixed md:static top-0 left-0 z-40
          w-64 bg-gray-900 text-white min-h-screen p-6 flex flex-col
          transform transition-transform duration-300 will-change-transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 pointer-events-auto shadow-2xl
        `}
      >
        
        <div className="mb-10 flex flex-col items-start">
          <h2 className="text-3xl font-extrabold tracking-wide text-white">
            LMS <span className="text-blue-400">Admin</span>
          </h2>
          <p className="text-sm text-gray-400 mt-1">Lead Management System</p>
        </div>

   
        <nav className="flex flex-col gap-3">
          <NavLink to="/dashboard" className={linkClasses} onClick={onClose}>
            <MdDashboard size={24} className="flex-shrink-0" />
            <span className="font-medium text-base">Dashboard</span>
            {({ isActive }) =>
              isActive && (
                <span className="absolute left-0 top-0 h-full w-1 bg-blue-400 rounded-r-full" />
              )
            }
          </NavLink>

          <NavLink to="/leads" className={linkClasses} onClick={onClose}>
            <MdPeople size={24} className="flex-shrink-0" />
            <span className="font-medium text-base">Leads</span>
            {({ isActive }) =>
              isActive && (
                <span className="absolute left-0 top-0 h-full w-1 bg-blue-400 rounded-r-full" />
              )
            }
          </NavLink>

          <NavLink to="/analytics" className={linkClasses} onClick={onClose}>
            <MdAnalytics size={24} className="flex-shrink-0" />
            <span className="font-medium text-base">Analytics</span>
            {({ isActive }) =>
              isActive && (
                <span className="absolute left-0 top-0 h-full w-1 bg-blue-400 rounded-r-full" />
              )
            }
          </NavLink>
        </nav>

      
        <div className="mt-auto text-xs text-gray-500 pt-6 border-t border-gray-700 flex flex-col gap-1">
          <span>© {new Date().getFullYear()} LMS Dashboard</span>
          <span className="text-gray-400 text-[10px]">All rights reserved.</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
