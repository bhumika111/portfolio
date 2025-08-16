import React from 'react';
import { FiCode, FiPenTool, FiDatabase, FiSmartphone } from 'react-icons/fi';

export default function About() {
  const highlights = [
    { icon: FiCode, title: 'Frontend Development', description: 'React.js, HTML5, CSS3, JavaScript (ES6+)' },
    { icon: FiPenTool, title: 'UI/UX Design', description: 'Figma, responsive layouts, accessible design' },
    { icon: FiDatabase, title: 'Backend Development', description: 'Node.js, Express.js, REST APIs, MongoDB' },
    { icon: FiSmartphone, title: 'Mobile Friendly', description: 'Responsive and mobile-first applications' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">About Me</h2>
          <p className="text-lg text-gray-600 ">
            I’m a CSE student at JECRC University (2023–2027) with a CGPA of 8.24/10, specializing in full-stack development.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInLeft">
            <img src="/profile.jpg" alt="Bhumika Ramawat" className="rounded-2xl shadow-lg mx-auto w-full max-w-sm"/>
          </div>
          <div className="space-y-6 animate-fadeInRight">
            <p className="text-gray-600 ">
              As a passionate developer, I’ve built projects like TextUtils, NewsMonkey, and YourPlaces, leveraging modern web technologies to deliver performant, user-friendly applications.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div><strong>University:</strong> JECRC University</div>
              <div><strong>Degree:</strong> B.Tech CSE (2023–2027)</div>
              <div><strong>CGPA:</strong> 8.24/10</div>
              <div><strong>Freelance:</strong> Available</div>
            </div>
            <div className='pt-4'>
            <a href="/Resume.pdf" download className="btn-primary">Download Resume</a>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8 animate-fadeInUp">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h,i)=>(
             <div key={i} className="card p-6 text-center flex flex-col items-center animate-fadeInUp" style={{animationDelay:`${i*0.1}s`}}>
               <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
  <h.icon className="w-8 h-8 text-primary-600"/>
</div>

                <h4 className="text-xl font-semibold mb-3">{h.title}</h4>
                <p className="text-gray-600 ">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
