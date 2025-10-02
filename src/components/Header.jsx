import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaBook, FaBlog, FaInfo, FaUsers, FaPhone, FaExclamationTriangle } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: FaHome },
    { to: '/courses', label: 'Courses', icon: FaBook },
    { to: '/blog', label: 'Blog', icon: FaBlog },
    { to: '/about', label: 'About', icon: FaInfo },
    { to: '/team', label: 'Team', icon: FaUsers },
    { to: '/contact', label: 'Contact', icon: FaPhone },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="w-full bg-red-100 border-b border-red-300 text-center py-2 flex flex-col md:flex-row md:items-center md:justify-center gap-1">
        <span className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-red-600">
          <FaExclamationTriangle className="text-red-500" />
          Disclaimer: We are not registered with SEBI. Trading involves risk.
        </span>
        <a href="tel:+917607941960" className="text-blue-700 hover:underline text-xs md:ml-4">+91 (7607941960)</a>
        <a href="mailto:businesstradeshai@gmail.com" className="text-blue-700 hover:underline text-xs md:ml-4">businesstradeshai@gmail.com</a>
      </div>

      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
            <span className="bg-blue-600 text-white w-10 h-10 grid place-items-center rounded-lg font-bold text-lg shadow">T</span>
            <span className="text-gray-900">TradeWithShai.K</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 px-3 py-2 rounded transition-colors"
              >
                <link.icon size={15} />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden text-gray-700 hover:text-blue-600 p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow animate-fade-in">
            <nav className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 px-3 py-2 rounded transition-colors"
                  >
                    <link.icon size={16} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}