import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheck, FiClock } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''});
  const [status, setStatus] = useState('idle');
  const info = [
    {icon:FiMail,label:'Email',value:'bhumikaramawat111@gmail.com',link:'mailto:bhumikaramawat111@gmail.com'},
    {icon:FiPhone,label:'Phone',value:'6375496192',link:'tel:+916375496192'},
    {icon:FiMapPin,label:'Location',value:'Jaipur, India',link:'https://maps.google.com/?q=Jaipur,India'}
  ];
  const socials = [
    {icon:FiGithub,url:'https://github.com/bhumika111'},
    {icon:FiLinkedin,url:'https://www.linkedin.com/in/bhumika-ramawat-999b70274/'}
  ];
  const handleChange=e=>setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit=e=>{
    e.preventDefault();setStatus('sending');
    setTimeout(()=>{
      console.log(form);setStatus('sent');
      setForm({name:'',email:'',subject:'',message:''});
      setTimeout(()=>setStatus('idle'),5000);
    },1500);
  };
  const getIcon=()=> status==='sending'?<FiClock className="animate-spin"/>: status==='sent'?<FiCheck/>:<FiSend/>;
  const getText={'idle':'Send Message','sending':'Sending...','sent':'Message Sent!'}[status];

  return (
    <section id="contact" className="section-padding bg-gray-50 ">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">Contact Me</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fadeInLeft space-y-6">
            {info.map((i,idx)=>(
              <a key={idx} href={i.link} className="flex items-center p-4 bg-white ">
                <i.icon className="w-12 h-12 bg-primary-100 text-primary-600 p-3 rounded-lg mr-4"/>
                <div>
                  <div className="font-medium">{i.label}</div>
                  <div className="text-gray-600 ">{i.value}</div>
                </div>
              </a>
            ))}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socials.map((s,i)=>(
                  <a key={i} href={s.url} className="w-12 h-12 bg-white ">
                    <s.icon className="w-6 h-6 text-gray-600 "/>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="animate-fadeInRight">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">Name *</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="form-input"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email *</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="form-input"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2">Subject *</label>
                  <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required className="form-input"/>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message *</label>
                  <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required className="form-textarea"/>
                </div>
                <button type="submit" disabled={status==='sending'} className={`w-full btn-primary flex items-center justify-center ${status==='sent'?'bg-green-600 hover:bg-green-700':''}`}>
                  <span className="mr-2">{getIcon()}</span>{getText}
                </button>
              </form>
              {status==='sent' && (
                <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                  <FiCheck className="mr-2"/> Thank you! I’ll reply soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
