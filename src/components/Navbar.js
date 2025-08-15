import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const items = ['home','about','skills','projects','experience','contact'];

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    setOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container-custom flex justify-between items-center h-16">
        <a onClick={()=>scrollTo('home')} className="text-2xl font-bold gradient-text cursor-pointer">Bhumika Ramawat</a>
        <div className="hidden md:flex space-x-6">
          {items.map(id=>(
            <button key={id} onClick={()=>scrollTo(id)}
              className={`text-sm font-medium transition ${
                activeSection===id
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-700'
              }`}>
              {id.charAt(0).toUpperCase()+id.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="md:hidden p-2 rounded hover:bg-gray-200 transition" onClick={()=>setOpen(!open)}>
            {open ? <FiX size={24}/> : <FiMenu size={24}/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {items.map(id=>(
            <button key={id} onClick={()=>scrollTo(id)} className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition">
              {id.charAt(0).toUpperCase()+id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
