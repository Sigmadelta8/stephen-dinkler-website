import { NavLink, useLocation } from 'react-router-dom';
import MoonIconSolidWhite from '../assets/MoonIconSolidWhite.js';
import SunIconSolidWhite from '../assets/SunIconOutlineWhite.js';

export default function NavBar({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const location = useLocation(); // Get the current location

  // Array of navigation links (excluding /about since it has funky root logic)
  const navLinks = [
    { path: '/work-history', label: 'History' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div>
      <header className="fixed border border-gray-500 z-50 px-16 top-4 left-1/2 -translate-x-1/2 bg-white transition-colors duration-300 dark:bg-gray-900 py-2 rounded-3xl flex items-center justify-center shadow-2xl mx-auto w-auto">
        <nav className="flex justify-around space-x-4">
          {/* Special case for About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive || location.pathname === '/' // Check if the current route is '/' or '/about'
                ? 'text-gray-700 dark:text-gray-300 text-lg font-semibold underline transition-colors duration-300'
                : 'text-gray-700 dark:text-gray-300 text-lg font-semibold hover:text-blue-500 transition-colors duration-300'
            }
          >
            About
          </NavLink>

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-700 dark:text-gray-300 text-lg font-semibold underline transition-colors duration-300'
                  : 'text-gray-700 dark:text-gray-300 text-lg font-semibold hover:text-blue-500 transition-colors duration-300'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="z-50 border transition-colors duration-300 border-gray-500 fixed top-5 right-10 bg-white dark:bg-gray-800 text-white px-4 py-3 rounded-2xl shadow-md flex space-x-2"
      >
        {darkMode ? <SunIconSolidWhite /> : <MoonIconSolidWhite />}
      </button>
    </div>
  );
}