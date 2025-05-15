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
      <header className="fixed dark:shadow-lime-700 dark:shadow-sm z-50 px-16 top-4 left-1/2 -translate-x-1/2 bg-white transition-colors duration-300 dark:bg-gray-900 py-2 rounded-3xl flex items-center justify-between shadow-sm shadow-gray-600 mx-auto w-auto">
        <nav className="flex justify-around space-x-4">
          {/* Special case for About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive || location.pathname === '/' // Check if the current route is '/' or '/about'
                ? 'text-gray-700 dark:text-gray-300 text-lg font-semibold underline transition-colors duration-300'
                : 'text-gray-700 dark:text-gray-300 text-lg font-semibold dark:hover:text-lime-700 hover:text-orange-400 transition-colors duration-300'
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
                  : 'text-gray-700 dark:text-gray-300 text-lg font-semibold dark:hover:text-lime-700 hover:text-orange-400 transition-colors duration-300'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        
        {/* Dark mode button shows up in the navbar on smalls screens */}
        <button
        onClick={toggleDarkMode}
        className="z-50 transition-colors duration-300 text-white pl-4 rounded-2xl flex space-x-2"
      >
        {darkMode ? <div><SunIconSolidWhite /></div>: <div> <MoonIconSolidWhite /></div>}
      </button>
      </header>

      {/* Dark Mode Toggle Button for Larger Screens, not currently in use */}
      {/* <button
        onClick={toggleDarkMode}
        className="z-50 border transition-colors duration-300 border-gray-500 fixed top-4 right-10 bg-white dark:bg-gray-800 text-white px-4 py-3 rounded-2xl shadow-md flex space-x-2 hidden customWidth:block"
      >
        {darkMode ? <SunIconSolidWhite /> : <MoonIconSolidWhite />}
      </button> */}
    </div>
  );
}