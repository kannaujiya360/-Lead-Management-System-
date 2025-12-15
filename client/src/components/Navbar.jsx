import React, { useState, useEffect } from "react";
import { FiMenu, FiHome, FiUsers, FiBarChart2 } from "react-icons/fi";
import { MdNotificationsActive } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { getLeads } from "../api/leadApi";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [leads, setLeads] = useState([]);

  const navItems = [
    { name: "Dashboard", icon: <FiHome size={20} />, route: "/dashboard" },
    { name: "Leads", icon: <FiUsers size={20} />, route: "/leads" },
    { name: "Analytics", icon: <FiBarChart2 size={20} />, route: "/analytics" },
  ];

  useEffect(() => {
    const fetchLeads = async () => {
      const data = await getLeads();
      setLeads(data);
    };
    fetchLeads();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="h-14 sm:h-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 flex items-center justify-between shadow-lg sticky top-0 z-40">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/20 active:scale-95 transition"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu size={22} />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center font-bold text-sm">
              LMS
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm sm:text-lg font-semibold leading-tight">
                Lead Management
              </h1>
              <p className="text-xs text-white/70">Multi-Source Dashboard</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Notification */}
          <div className="relative cursor-pointer hover:text-yellow-300 transition">
            <MdNotificationsActive size={22} />
            {leads.length > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold">
                {leads.length}
              </span>
            )}
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-xs font-bold">
              A
            </div>
            <span className="hidden md:block text-sm">Admin</span>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />

          {/* DRAWER */}
          <aside
            onClick={(e) => e.stopPropagation()}
            className="fixed top-0 left-0 z-50 w-64 min-h-screen bg-gray-900 text-white p-6 md:hidden
                       transform transition-transform duration-300 translate-x-0"
          >
            {/* HEADER */}
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold">
                LMS <span className="text-blue-500">Admin</span>
              </h2>
              <p className="text-xs text-gray-400">Lead Management System</p>
            </div>

            {/* NAV */}
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.route}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-indigo-600 text-white shadow"
                        : "text-gray-300 hover:bg-gray-800"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
};

export default Navbar;
