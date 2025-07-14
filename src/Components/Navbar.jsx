import React, { useContext, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router'; // Fixed import
import logo from '/speakeasy.png'; // Adjusted path
import { AuthContext } from '../provider/AuthProvider';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showName, setShowName] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You Logged Out successfully");
      })
      .catch((error) => console.error(error));
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  // Persist theme on page reload
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const links = [
    { to: '/', text: 'Home' },
    { to: '/tutors', text: 'Find Tutors' },
    { to: '/addTutorial', text: 'Add Tutorial' },
    { to: '/myTutorials', text: 'My Tutorials' },
    { to: '/bookedTutors', text: 'My Booked Tutors' },
  ];

  return (
    <div className='bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 '>
      <div className="navbar w-11/12 mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="navbar-start flex items-center gap-1">
          <img className='w-10 h-10 rounded' src={logo} alt="logo" />
          <div className='text-2xl font-bold text-teal-900 dark:text-teal-300'>
            SPEAK<span className='text-teal-600 dark:text-teal-400'>EASY</span>
          </div>
        </div>

        {/* Center Links */}
        <div className="navbar-center hidden lg:flex gap-1">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `btn btn-ghost text-teal-800 dark:text-teal-200 text-base ${
                  isActive ? 'text-teal-600 dark:text-teal-400 bg-slate-200 dark:bg-gray-700 text-lg' : ''
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="navbar-end flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-3 00 transition-colors"
            title="Toggle Theme"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} className="text-yellow-300" /> : <Moon size={18} />}
          </button>

          {user ? (
            <>
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setShowName(true)}
                onMouseLeave={() => setShowName(false)}
              >
                <img
                  src={user.photoURL || 'https://i.ibb.co/s3H1Ff8/default-avatar.png'}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-slate-500 dark:border-slate-400"
                />
                {showName && (
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-700 shadow-xl px-2 py-1 rounded text-md text-teal-800 dark:text-teal-200 z-10 whitespace-nowrap">
                    {user.displayName || 'Anonymous'}
                  </div>
                )}
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-black dark:bg-gray-700 text-white hover:bg-slate-600 dark:hover:bg-gray-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth/login" className="btn bg-black dark:bg-gray-700 text-white hover:bg-slate-600 dark:hover:bg-gray-600">
              Login / Signup
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Links */}
      <div className="lg:hidden px-4 pb-3 flex flex-wrap justify-center gap-2">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `btn btn-sm btn-ghost ${isActive ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400' : 'text-teal-800 dark:text-teal-200'}`
            }
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;