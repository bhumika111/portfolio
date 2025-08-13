import React, { useState } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar({ darkMode, toggleDarkMode, activeSection }) {
  const [open, setOpen] = useState(false);
  const items = ['home','about','skills','projects','experience','contact'];

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    setOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b">
      <div className="container-custom flex justify-between items-center h-16">
        <a onClick={()=>scrollTo('home')} className="text-2xl font-bold gradient-text cursor-pointer">Bhumika Ramawat</a>
        <div className="hidden md:flex space-x-6">
          {items.map(id=>(
            <button key={id} onClick={()=>scrollTo(id)}
              className={`text-sm font-medium transition ${
                activeSection===id
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600'
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
              {id.charAt(0).toUpperCase()+id.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition">
            {darkMode ? <FiSun size={20}/> : <FiMoon size={20}/>}
          </button>
          <button className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition" onClick={()=>setOpen(!open)}>
            {open ? <FiX size={24}/> : <FiMenu size={24}/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          {items.map(id=>(
            <button key={id} onClick={()=>scrollTo(id)} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {id.charAt(0).toUpperCase()+id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
