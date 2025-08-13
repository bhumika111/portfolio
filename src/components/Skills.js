import React, { useState } from 'react';
import { FiExternalLink, FiGithub, FiFilter, FiEye } from 'react-icons/fi';

export default function Projects() {
  const [filter,setFilter]=useState('all'),[hovered,setHovered]=useState(null);
  const data = [
    {
      id:1,
      title:'TextUtils',
      category:'frontend',
      featured:true,
      demo:'#',
      code:'https://github.com/bhumika111/TextUtils',
      desc:'React-based text utilities app with case conversion, counts, and TTS integration.',
      tech:['React','Web Speech API','CSS3']
    },
    {
      id:2,
      title:'NewsMonkey',
      category:'frontend',
      featured:true,
      demo:'#',
      code:'https://github.com/bhumika111/NewsMonkey',
      desc:'Real-time news app with category routing, lazy loading, and caching strategies.',
      tech:['React','NewsAPI','Lazy Loading']
    },
    {
      id:3,
      title:'YourPlaces',
      category:'fullstack',
      featured:true,
      demo:'#',
      code:'https://github.com/bhumika111/yourPlaces',
      desc:'Full-stack location management with Node.js/Express backend and responsive frontend.',
      tech:['Node.js','Express','React']
    }
  ];
  const cats=[{id:'all',name:'All'},{id:'frontend',name:'Frontend'},{id:'fullstack',name:'Full Stack'}];
  const filtered = filter==='all'?data:data.filter(d=>d.category===filter);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">Projects</h2>
        </div>
        <h3 className="text-2xl font-bold text-center mb-8 animate-fadeInUp">Featured Projects</h3>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cats.map(c=>(
            <button key={c.id} onClick={()=>setFilter(c.id)}
              className={`px-6 py-2 rounded-full transition ${filter===c.id?'bg-primary-600 text-white':'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
              <FiFilter className="inline mr-1"/>{c.name}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(p=>(
            <div key={p.id} className="card overflow-hidden animate-fadeInUp"
                 onMouseEnter={()=>setHovered(p.id)} onMouseLeave={()=>setHovered(null)}>
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                  <FiEye className="text-white opacity-50 w-16 h-16"/>
                </div>
                <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity ${hovered===p.id?'opacity-100':'opacity-0'}`}>
                  <a href={p.demo} className="p-3 bg-white/20 rounded-full mx-2"><FiEye className="text-white"/></a>
                  <a href={p.code} className="p-3 bg-white/20 rounded-full mx-2"><FiGithub className="text-white"/></a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t,i)=><span key={i} className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded">{t}</span>)}
                </div>
                <div className="flex justify-between">
                  <a href={p.demo} className="text-primary-600 hover:underline flex items-center"><FiEye className="mr-1"/> Demo</a>
                  <a href={p.code} className="text-gray-600 hover:underline flex items-center"><FiGithub className="mr-1"/> Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
