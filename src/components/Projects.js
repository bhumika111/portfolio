// src/components/Projects.js

import React, { useState } from 'react';
import { FiFilter, FiEye, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [hovered, setHovered] = useState(null);

  const data = [
    {
      id: 1,
      title: 'TextUtils',
      category: 'frontend',
      demo: '#',
      code: 'https://github.com/bhumika111/TextUtils',
      desc: 'React-based text utilities app with case conversion, counts, and TTS integration.',
      tech: ['React', 'Web Speech API', 'CSS3'],
    },
    {
      id: 2,
      title: 'NewsMonkey',
      category: 'frontend',
      demo: '#',
      code: 'https://github.com/bhumika111/NewsMonkey',
      desc: 'Real-time news app with category routing, lazy loading, and caching strategies.',
      tech: ['React', 'NewsAPI', 'Lazy Loading'],
    },
    {
      id: 3,
      title: 'YourPlaces',
      category: 'fullstack',
      demo: '#',
      code: 'https://github.com/bhumika111/yourPlaces',
      desc: 'Full-stack location management with Node.js/Express backend and responsive frontend.',
      tech: ['Node.js', 'Express', 'React'],
    },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  const filtered = filter === 'all'
    ? data
    : data.filter((item) => item.category === filter);

  return (
    <section id="projects" className="section-padding bg-gray-50 ">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">My Projects</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full transition ${
                filter === cat.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <FiFilter className="inline mr-1" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj, idx) => (
            <div
              key={proj.id}
              className="card overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHovered(proj.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                  <FiEye className="text-white opacity-50 w-16 h-16" />
                </div>
                <div
                  className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity ${
                    hovered === proj.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <a href={proj.demo} className="p-3 bg-white/20 rounded-full mx-2">
                    <FiEye className="text-white" />
                  </a>
                  <a href={proj.code} className="p-3 bg-white/20 rounded-full mx-2">
                    <FiGithub className="text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-600 ">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, ti) => (
                    <span
                      key={ti}
                      className="px-2 py-1 bg-primary-100 "
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={proj.demo} className="text-primary-600 hover:underline flex items-center">
                    <FiEye className="mr-1" />
                    Demo
                  </a>
                  <a href={proj.code} className="text-gray-600 hover:underline flex items-center">
                    <FiGithub className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16 mb-5">
          <a href="https://github.com/bhumika111" className="btn-primary">
            <FiGithub className="inline mr-2" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
