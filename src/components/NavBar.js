import { NavLink } from 'react-router-dom';
import MoonIconSolidWhite from '../assets/MoonIconSolidWhite.js';
import SunIconSolidWhite from '../assets/SunIconOutlineWhite.js';

export default function NavBar({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <header className="fixed z-50 px-16 top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 py-2 rounded-3xl flex items-center justify-center shadow-2xl mx-auto w-auto">
        <nav className="flex justify-around space-x-4">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-gray-700 dark:text-gray-300 text-lg font-semibold underline'
                : 'text-gray-700 dark:text-gray-300 text-lg font-semibold hover:dark:text-orange-500 hover:text-blue-400'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/work-history"
            className={({ isActive }) =>
              isActive
                ? 'text-gray-700 dark:text-gray-300 text-lg font-semibold underline'
                : 'text-gray-700 dark:text-gray-300 text-lg font-semibold hover:dark:text-orange-600 hover:text-blue-400'
            }
          >
            History
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? 'text-gray-700 dark:text-gray-300 text-lg font-semibold underline'
                : 'text-gray-700 dark:text-gray-300 text-lg font-semibold hover:dark:text-orange-600 hover:text-blue-400'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-gray-700 dark:text-gray-300 text-lg font-semibold underline'
                : 'text-gray-700 dark:text-gray-300 text-lg font-semibold hover:dark:text-orange-600 hover:text-blue-400'
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>

      {/* Dark Mode Button */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-5 right-10 bg-white dark:bg-gray-800 text-white px-4 py-3 rounded-2xl shadow-md flex space-x-2"
      >
        {darkMode ? <SunIconSolidWhite /> : <MoonIconSolidWhite />}
      </button>
    </div>
  );
}