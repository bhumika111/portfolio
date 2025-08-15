import React, { useState, useEffect } from 'react';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  const roles = ['Full-Stack Developer','CSE Student','Problem Solver'];
  const [text,setText] = useState(''),[idx,setIdx]=useState(0),[del,setDel]=useState(false);

  useEffect(()=>{
    const handle = setTimeout(()=>{
      const role = roles[idx];
      if (del) {
        setText(role.substring(0,text.length-1));
        if (text==='') { setDel(false); setIdx((idx+1)%roles.length); }
      } else {
        setText(role.substring(0,text.length+1));
        if (text===role) setTimeout(()=>setDel(true),1500);
      }
    }, del?50:100);
    return ()=>clearTimeout(handle);
  },[text,idx,del]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 d"></div>
      <div className="container-custom relative z-10 text-center animate-fadeInUp">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 ">
              <span className="text-4xl font-bold text-gray-600 ">BR</span>
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6">Hi, I’m <span className="gradient-text">Bhumika Ramawat</span></h1>
        <p className="text-2xl text-gray-600 ">
          I’m a <span className="text-primary-600 ">{text}</span><span className="animate-pulse">|</span>
        </p>
        <p className="text-lg text-gray-500 ">
          CSE student skilled in React.js, Node.js, and full-stack development.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a href="/Resume.pdf" download className="btn-primary flex items-center justify-center">
            <FiDownload className="mr-2"/>Download Resume
          </a>
          <button onClick={()=>document.getElementById('projects').scrollIntoView({behavior:'smooth'})} className="btn-secondary">
            View Projects
          </button>
        </div>
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/bhumika111" className="social-icon"><FiGithub/></a>
          <a href="https://www.linkedin.com/in/bhumika-ramawat-999b70274/" className="social-icon"><FiLinkedin/></a>
          <a href="mailto:bhumikaramawat111@gmail.com" className="social-icon"><FiMail/></a>
        </div>
        <button onClick={()=>document.getElementById('about').scrollIntoView({behavior:'smooth'})} className="animate-bounce text-gray-500 ">
          <FiArrowDown size={24}/>
        </button>
      </div>
    </section>
  );
}
