// import React from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';

// const Navbar = ({ toggleDarkMode, darkMode }) => {
//   return (
//     <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Achyut Dahal</h1>
//         <div className="flex space-x-4 items-center">
//           <a href="#about" className="hover:text-gray-400">About</a>
//           <a href="#skills" className="hover:text-gray-400">Skills</a>
//           <a href="#projects" className="hover:text-gray-400">Projects</a>
//           <a href="#contact" className="hover:text-gray-400">Contact</a>
//           {/* Dark mode toggle button */}
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//           >
//             {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-bold text-white hover:text-gray-400 focus:outline-none"
          style={{ backgroundColor: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          Achyut Dahal
        </button>
        <div className="flex space-x-4 items-center">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          {/* Dark mode toggle button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
