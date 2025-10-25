import React, { useContext, useState,useEffect } from 'react';
import { NavLink, Link } from 'react-router';
import logo from '/speakeasy.png';
import { AuthContext } from '../provider/AuthProvider';
import { FaMoon, FaSun } from 'react-icons/fa';


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

   useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#1a202c' : 'white';
  }, [darkMode]);



  const links = [
    { to: '/', text: 'Home' },
    { to: '/tutors', text: 'Find Tutors' },
    { to: '/addTutorial', text: 'Add Tutorial' },
    { to: '/myTutorials', text: 'My Tutorials' },
    { to: '/my-booked-Tutors', text: 'My Booked Tutors' },
  ];

  return (
    //apply glassmorphism effect to navbar
    // <div className='backdrop-blur-md shadow-md  top-0 z-50 bg-opacity-30 rounded-b-lg'>
      
    //   <div className="navbar w-11/12 mx-auto py-3 flex justify-between items-center  ">
    //     <div className="navbar-start flex items-center gap-1">
    //       <img className='w-10 h-10 rounded' src={logo} alt="logo" />
    //       <div className='text-2xl font-bold text-teal-900'>
    //         SPEAK<span className='text-teal-600'>EASY</span>
    //       </div>
    //     </div>

    //     {/* Center Links */}
    //     <div className="navbar-center hidden lg:flex gap-1">
    //       {links.map(link => (
    //         <NavLink
    //           key={link.to}
    //           to={link.to}
    //           className={({ isActive }) =>
    //             `btn btn-ghost text-teal-800 text-lg ${isActive ? 'text-teal-600 bg-slate-300 text-xl font-extrabold' : ''}`
    //           }
    //         >
    //           {link.text}
    //         </NavLink>
    //       ))}
    //     </div>

    //     {/* Right Buttons */}
    //     <div className="navbar-end flex items-center gap-2">

    //      <button
    //         onClick={() => setDarkMode(!darkMode)}
    //         //dark mode button with glowing background animation
    //         className={`btn rounded-full text-xl ${darkMode ? 'bg-teal-500' : 'bg-slate-300'} transition-all duration-300 hover:scale-110`}
    //         title="Toggle theme"
    //       >
    //         {darkMode ? <FaSun /> : <FaMoon />}
    //       </button>

    //       {user ? (
    //         <>
    //           <div
    //             className="relative group cursor-pointer"
    //             onMouseEnter={() => setShowName(true)}
    //             onMouseLeave={() => setShowName(false)}
    //           >
    //             <img
    //               src={user.photoURL || 'https://i.ibb.co/s3H1Ff8/default-avatar.png'}
    //               alt="User"
    //               className="w-10 h-10 rounded-full border-2 border-slate-500"
    //             />
    //             {showName && (
    //               <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-xl px-2 py-1 rounded text-md text-teal-800 z-10">
    //                 {user.displayName || 'Anonymous'}
    //               </div>
    //             )}
    //           </div>
    //           <button
    //             onClick={handleLogOut}
    //             className="btn bg-black text-white hover:bg-slate-600"
    //           >
    //             Logout
    //           </button>
    //         </>
    //       ) : (
    //         <Link to="/auth/login" className="btn bg-black text-white hover:bg-slate-600">
    //           Login / Signup
    //         </Link>
    //       )}
    //     </div>
    //   </div>

    //   {/* Mobile Links */}
    //   <div className="lg:hidden px-4 pb-3 flex flex-wrap justify-center">
    //     {links.map(link => (
    //       <NavLink
    //         key={link.to}
    //         to={link.to}
    //         className={({ isActive }) =>
    //           `btn text-lg btn-ghost text-teal-400 ${isActive ? 'text-green-800 border-b-2 border-green-700' : ''}`
    //         }
    //       >
    //         {link.text}
    //       </NavLink>
    //     ))}
    //   </div>
    // </div>

<div className=" top-0 left-0 w-full z-50 backdrop-blur-lg bg-cyan-500/30 dark:bg-slate-500/40 shadow-lg border-b border-none">
  <div className="w-11/12 mx-auto flex justify-between items-center py-4">
    
    {/* Logo */}
    <div className="flex items-center gap-2">
      <img src={logo} alt="logo" className="w-10 h-10 rounded-lg shadow-md" />
      <h1 className="text-2xl font-bold text-slate-900 dark:text-teal-00 tracking-tight">
        SPEAK<span className="text-teal-600">EASY</span>
      </h1>
    </div>

    {/* Center Links */}
    <div className="hidden lg:flex items-center gap-2">
      {links.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `relative px-4 py-2 text-base font-extrabold transition-all duration-300
             ${isActive 
               ? 'text-teal-700 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-teal-700 after:to-cyan-400'
               : 'text-slate-700 hover:text-teal-500'
             }`
          }
        >
          {link.text}
        </NavLink>
      ))}
    </div>

    {/* Right Buttons */}
    <div className="flex items-center gap-3">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`p-2 rounded-full border transition-all duration-300 
        ${darkMode 
          ? 'bg-gradient-to-tr from-teal-600 to-cyan-500 text-white shadow-md hover:shadow-teal-400/50'
          : 'bg-white text-slate-700 border-slate-300 hover:bg-teal-50'
        }`}
        title="Toggle theme"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* User Auth */}
      {user ? (
        <div className="flex items-center gap-2">
          <div className="relative group">
            <img
              src={user.photoURL || 'https://i.ibb.co/s3H1Ff8/default-avatar.png'}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-teal-400 hover:scale-105 transition-transform"
            />
            {showName && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg px-3 py-1 rounded text-slate-800 text-sm">
                {user.displayName || 'Anonymous'}
              </div>
            )}
          </div>
          <button
            onClick={handleLogOut}
            className="relative overflow-hidden px-4 py-2 rounded-lg text-white font-semibold 
                       bg-gradient-to-r from-teal-950 to-cyan-800
                       hover:from-cyan-800 hover:to-teal-950 transition-all duration-300"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/auth/login"
          className="relative overflow-hidden px-4 py-2 rounded-lg text-white font-semibold 
                     bg-gradient-to-r from-teal-900 to-cyan-700 hover:shadow-lg hover:shadow-teal-500 transition-all duration-300"
        >
          Login / Signup
        </Link>
      )}
    </div>
  </div>

  {/* Mobile Links */}
  <div className="lg:hidden flex flex-wrap justify-center py-2 border-t border-white/20 backdrop-blur-md">
    {links.map(link => (
      <NavLink
        key={link.to}
        to={link.to}
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md
           ${isActive ? 'bg-teal-100 text-teal-700' : 'text-slate-700 hover:text-teal-500 hover:bg-teal-50'}`
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