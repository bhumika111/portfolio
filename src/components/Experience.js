import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

export default function Experience() {
  const work = [
   {
  id:1,
  title:'Media Sector Manager',
  company:'RHYTHM',
  location:'On-site',
  duration:'Feb 2025–Mar 2025',
  type:'Leadership',
  desc:'Led a team of volunteers, overseeing participant coordination, guest engagement, and judge liaison to ensure smooth event operations.',
  ach:[
    'Managed logistics and communication to ensure all tasks were completed on time',
    'Conducted interviews with bloggers and press to secure event coverage',
    'Served as primary speaker announcing results and boosting event visibility'
  ],
  tech:[
    'Project Management',
    'Media Relations',
    'Team Leadership',
    'Communication'
  ]
}
  ];
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">Experience</h2>
        </div>
        <div className="space-y-8">
          {work.map((w,i)=>(
            <div key={w.id} className="card p-8 animate-fadeInUp" style={{animationDelay:`${i*0.1}s`}}>
              <div className="flex justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">{w.title}</h4>
                  <div className="flex items-center text-gray-600 my-1">
                    <FiBriefcase className="mr-1"/> {w.company} ({w.type})
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="mr-1"/> {w.location}
                  </div>
                </div>
                <div className="flex items-center text-gray-500">
                  <FiCalendar className="mr-1"/> {w.duration}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{w.desc}</p>
              <div className="mb-4">
                <h5 className="font-semibold mb-2 flex items-center"><FiAward className="mr-2 text-primary-600"/> Achievements</h5>
                <ul className="list-disc list-inside text-gray-600">
                  {w.ach.map((a,ai)=><li key={ai}>{a}</li>)}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {w.tech.map((t,ti)=><span key={ti} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
