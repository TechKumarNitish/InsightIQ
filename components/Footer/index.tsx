"use client";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "How It Works", href: "#" },
  { name: "Features", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Login", href: "#" },
];

const companyLinks = [
  { name: "About Us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Blog", href: "#" },
];

const supportLinks = [
  { name: "Help Center", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { name: "Twitter", href: "#", icon: "🐦" },
  { name: "LinkedIn", href: "#", icon: "🔗" },
  { name: "Instagram", href: "#", icon: "📸" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-50 pt-14 pb-8 mt-10 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 justify-between">
        {/* Logo & Newsletter */}
        <div className="flex-1 min-w-[220px]">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/assets/insightiq-logo.png"
              alt="InsightIQ Logo"
              className="h-10 w-10 object-contain rounded bg-white border border-gray-200 shadow-sm"
            />
            <span className="text-2xl font-extrabold text-white">
              Insight<span className="text-red-400">IQ</span>
            </span>
          </div>
          <p className="text-blue-200 mb-4 text-sm">
            Empowering students and professionals with real mentorship and a thriving learning community.
          </p>
          <form className="flex items-center gap-2 mb-4">
            <input
              type="email"
              placeholder="Subscribe for updates"
              className="px-3 py-2 rounded-l bg-blue-900 text-blue-50 placeholder-blue-300 border border-blue-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r font-semibold transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-2">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="text-2xl hover:text-red-400 transition"
                aria-label={s.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Navigation Columns */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-red-300 transition text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-red-300 transition text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-red-300 transition text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-blue-900 mt-10 pt-6 text-center text-xs text-blue-300">
        &copy; {new Date().getFullYear()} InsightIQ. All rights reserved. | Built with passion for learners.
      </div>
    </footer>
  );
}