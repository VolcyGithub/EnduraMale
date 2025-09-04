"use client";
import React, { useState, useEffect } from "react";
import {
  FaArrowCircleRight,
  FaArrowRight,
  FaShoppingCart,
  FaBars,
  FaBell,
  FaTimes,
  FaHome,
  FaBox,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

// Mock Link component for demo (replace with your actual React Router Link)
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Optional: Close sidebar when clicking outside (you can remove this if you only want toggle behavior)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".menu-button")
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { to: "/", label: "Home", icon: FaHome },
    { to: "/catalog", label: "Catalog", icon: FaBox },
    { to: "/about", label: "About Us", icon: FaInfoCircle },
    { to: "/contact", label: "Contact Us", icon: FaEnvelope },
  ];

  const userMenuItems = [{ to: "/orders", label: "My Orders", icon: FaBox }];

  return (
    <>
      <div className="sticky z-[3] top-0 h-[80px] w-full bg-black">
        <div className="grid justify-between items-center w-full grid-cols-2 lg:grid-cols-3 h-full px-6 md:px-10 xl:px-20">
          {/* Logo */}
          <Link to="/">
            <div className="w-full flex relative right-5 items-center h-full">
              <img
                src="/ENDURAMALE-WHITE.png"
                alt=""
                className="h-[50px] w-[50px] lg:h-[70px] lg:w-[70px]"
              />
              <span className="text-white text-md lg:text-2xl font-bold">
                ENDURAMALE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="text-[#f1f1f1] hidden lg:flex flex items-center font-medium text-lg justify-between">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className="hover:text-white transition-colors"
              >
                Catalog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Desktop Right Side */}
          <div className="items-center w-full hidden justify-end lg:flex">
            <FaShoppingCart className="text-white cursor-pointer hover:text-gray-300 transition-colors mr-4" />
          </div>

          {/* Mobile Menu Button */}
          <div className="items-center gap-4 justify-end flex lg:hidden">
            <FaShoppingCart className="text-white cursor-pointer hover:text-gray-300 transition-colors" />
            <button
              onClick={toggleSidebar}
              className="menu-button text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-[9998] lg:hidden" />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`sidebar fixed top-0 left-0 h-full w-80 bg-white z-[9999] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-black">
          <Link to="/">
            <div className="flex items-center">
              <img
                src="/ENDURAMALE-WHITE.png"
                alt=""
                className="h-[40px] w-[40px] mr-3"
              />
              <span className="text-white text-lg font-bold">ENDURAMALE</span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-black transition-colors"
                    >
                      <Icon className="mr-3 text-gray-500" size={18} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* User Menu Section */}
          <div className="p-4 border-t border-gray-200">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Account
            </h3>
            <ul className="space-y-2">
              {userMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-black transition-colors"
                    >
                      <Icon className="mr-3 text-gray-500" size={18} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Notifications Section */}
          <div className="p-4 border-t border-gray-200">
            <button className="flex items-center w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-black transition-colors">
              <FaBell className="mr-3 text-gray-500" size={18} />
              <span className="font-medium">Notifications</span>
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                3
              </span>
            </button>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 fixed bottom-0 w-full border-t border-gray-200 bg-gray-50">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">ENDURAMALE</p>
            <p className="text-xs text-gray-400">Premium Male Supplements</p>
          </div>
        </div>
      </div>
    </>
  );
}
