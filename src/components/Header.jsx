import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaBook, FaBlog, FaInfo, FaUsers, FaPhone, FaChartLine } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: FaHome },
    { to: '/courses', label: 'Courses', icon: FaBook },
    { to: '/trading-results', label: 'Trading Results', icon: FaChartLine },
    { to: '/blog', label: 'Blog', icon: FaBlog },
    { to: '/about', label: 'About', icon: FaInfo },
    { to: '/team', label: 'Team', icon: FaUsers },
    { to: '/contact', label: 'Contact', icon: FaPhone },
  ];

  return (
    <div className="sticky top-0 z-50">
     
     

      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-2 px-2 sm:py-3 sm:px-4">
          <Link to="/" className="flex items-center gap-3 font-semibold text-base sm:text-lg min-w-0">
            <img 
              src="/images/Logo/tradewithshai.png" 
              alt="TradeWithShai.K Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg shrink-0 object-cover border-2 border-blue-200"
            />
            <span className="text-gray-900 truncate">TradeWithShai.K</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2 lg:gap-4 text-xs sm:text-sm font-medium overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded transition-colors whitespace-nowrap"
                tabIndex={0}
              >
                <link.icon size={15} />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden text-gray-700 hover:text-blue-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle menu"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            {isMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow animate-fade-in">
            <nav className="max-w-6xl mx-auto px-1 py-1 xs:px-2 xs:py-2 sm:px-4 sm:py-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 px-3 py-3 rounded transition-colors text-base font-medium min-h-[48px]"
                    tabIndex={0}
                    style={{ minWidth: 44 }}
                  >
                    <link.icon size={20} />
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