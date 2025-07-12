"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type SidebarItem = { name: string; href: string; highlight?: boolean };
const navItems = [
  { name: "Home", href: "#" },
  { name: "Become a Mentor", href: "#" },
  // Add more items here in the future
];

const sidebarItems: SidebarItem[] = [
  ...navItems,
  { name: "Login", href: "#", highlight: true },
  // Add more sidebar-only items here
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on ESC
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSidebarOpen(false);
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sidebarOpen, handleKeyDown]);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white border-b border-gray-200 shadow-sm backdrop-blur bg-opacity-95">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Placeholder logo, replace src with your logo file */}
          <img
            src="/assets/insightiq-logo.png"
            alt="InsightIQ Logo"
            className="h-10 w-10 object-contain rounded bg-white border border-gray-200 shadow-sm"
            onError={(e) => {
              // fallback to text if image not found
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <span className="text-2xl font-extrabold text-black leading-tight hidden sm:inline">
            Insight<span className="text-red-600">IQ</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-base font-medium text-gray-900 hover:text-red-600 transition">
              {item.name}
            </Link>
          ))}
          <button className="ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full shadow transition">
            Book a Free Session
          </button>
        </div>

        {/* Hamburger always visible */}
        <button
          className="flex items-center justify-center h-12 w-12 rounded-lg border-2 border-red-400 bg-gradient-to-br from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 transition lg:ml-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          {/* Hamburger icon as in your image */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="2" y="2" width="28" height="28" rx="6" stroke="white" strokeWidth="3" fill="none" />
            <rect x="8" y="12" width="16" height="2.5" rx="1.25" fill="white" />
            <rect x="8" y="17.5" width="16" height="2.5" rx="1.25" fill="white" />
          </svg>
        </button>
      </nav>

      {/* Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${sidebarOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!sidebarOpen}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 ${sidebarOpen ? 'opacity-0' : 'opacity-0'}`}
          onClick={() => setSidebarOpen(false)}
        />
        {/* Sidebar */}
        <aside
        // className={`fixed right-0 top-16 h-full w-72 max-w-full z-50 bg-gradient-to-b from-red-100 via-white to-blue-100 shadow-2xl border-l border-gray-200 flex flex-col pt-6 pb-8 px-6 transition-transform duration-500 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
          className={`fixed right-0 top-0 h-[100vh] w-72 max-w-full bg-gradient-to-b from-red-100 via-white to-blue-100 shadow-2xl border-l border-gray-200 flex flex-col pt-6 pb-8 px-6 transition-transform duration-500 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
        >
          {/* Sidebar Logo */}
          <div className="flex items-center space-x-2 mb-8">
            <img
              src="/assets/insightiq-logo.png"
              alt="InsightIQ Logo"
              className="h-10 w-10 object-contain rounded bg-white border border-gray-200 shadow-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="text-2xl font-extrabold text-black leading-tight">
              Insight<span className="text-red-600">IQ</span>
            </span>
          </div>
          <nav className="flex-1 flex flex-col gap-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded text-base font-medium transition ${item.highlight ? 'bg-red-500 text-white hover:bg-red-600' : 'text-gray-900 hover:bg-gray-100 hover:text-red-600'}`}
                onClick={() => setSidebarOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Book a Free Session in sidebar for mobile only */}
            <button className="mt-4 block lg:hidden bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full shadow transition">
              Book a Free Session
            </button>
          </nav>
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 focus:outline-none"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l16 16M6 22L22 6" />
            </svg>
          </button>
        </aside>
      </div>
    </header>
  );
};

export default Header;
