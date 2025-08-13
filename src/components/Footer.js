import React from 'react';
import { FiHeart, FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = ['home','about','skills','projects','experience','contact'];
  const socials = [
    {icon:FiGithub,href:'https://github.com/bhumika111'},
    {icon:FiLinkedin,href:'https://www.linkedin.com/in/bhumika-ramawat-999b70274/'}
  ];

  const scrollTo=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16 grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold mb-4 gradient-text cursor-pointer" onClick={()=>scrollTo('home')}>Bhumika Ramawat</h3>
          <p className="leading-relaxed mb-6">Full-Stack Developer & CSE Student at JECRC University.</p>
          <div className="flex space-x-4">
            {socials.map((s,i)=>(
              <a key={i} href={s.href} className="social-icon bg-gray-800 hover:bg-primary-600">
                <s.icon className="w-5 h-5"/>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {links.map(l=>(
              <li key={l}>
                <button onClick={()=>scrollTo(l)} className="hover:text-primary-400 transition">{l.charAt(0).toUpperCase()+l.slice(1)}</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p><a href="mailto:bhumikaramawat111@gmail.com" className="hover:text-primary-400 transition">bhumikaramawat111@gmail.com</a></p>
          <p><a href="tel:+916375496192" className="hover:text-primary-400 transition">6375496192</a></p>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {year} Bhumika Ramawat. Made with <FiHeart className="inline text-red-500"/> React & Tailwind CSS</p>
          <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="flex items-center hover:text-primary-400 transition"><FiArrowUp className="mr-1"/>Back to Top</button>
        </div>
      </div>
    </footer>
  );
}
