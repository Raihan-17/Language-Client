
import React, { useContext, useState,useEffect } from 'react';
import { NavLink, Link } from 'react-router';
import logo from '/languageLogo.png';
import { AuthContext } from '../provider/AuthProvider';
// import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showName, setShowName] = useState(false);
//   const [darkMode, setDarkMode] = useState(false); 

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You Logged Out successfully");
      })
      .catch((error) => console.error(error));
  };

//    const toggleTheme = () => {
//     setDarkMode(prev => !prev);
//     document.documentElement.classList.toggle('dark');
//   };

  // Persist theme on page reload
//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme === 'dark') {
//       setDarkMode(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('theme', darkMode ? 'dark' : 'light');
//   }, [darkMode]);

  const links = [
    { to: '/', text: 'Home' },
    // { to: '/gardeners', text: 'Explore Gardeners' },
    // { to: '/tips', text: 'Trending Tips' },
    // ...(user ? [
    //   { to: '/shareTips', text: 'Share a Garden Tip' },
    //   { to: '/myTips', text: 'My Tips' }
    // ] : [])
  ];

  return (
    <div className='bg-white shadow-md sticky top-0 z-50'>
      <div className="navbar w-11/12 mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="navbar-start flex items-center gap-1">
          <img className='w-10 h-10 rounded' src={logo} alt="logo" />
          <div className='text-xl font-bold text-green-900'>
            GARDENER'S <span className='text-green-600'>POINT</span>
          </div>
        </div>

        {/* Center Links */}
        <div className="navbar-center hidden lg:flex gap-1">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `btn btn-ghost text-green-800 text-base ${isActive ? 'text-green-950 border-b-2 border-green-700' : ''}`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="navbar-end flex items-center gap-2">

          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="btn btn-outline rounded-4xl bg-slate-700 dark:text-white"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button> */}

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
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                />
                {showName && (
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-xl px-2 py-1 rounded text-md text-green-800 z-10">
                    {user.displayName || 'Anonymous'}
                  </div>
                )}
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-teal-900 text-white hover:bg-green-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth/login" className="btn bg-teal-900 text-white hover:bg-green-600">
              Login / Signup
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Links */}
      <div className="lg:hidden px-4 pb-3 flex flex-wrap justify-center">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `btn btn-ghost text-sm ${isActive ? 'text-green-800 border-b-2 border-green-700' : ''}`
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
