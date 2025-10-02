import { useState } from 'react';

export default function Team() {
  const members = [
    {
      name: 'SHAI.K',
      role: 'Founder',
      bio: "I'm a trader with a focus on market analysis, risk management, and disciplined execution. I specialize in identifying high-probability setups through both technical and fundamental strategies, and I thrive in fast-paced market environments.",
      color: 'from-blue-500 to-purple-500',
      image: '/images/Shai.jpeg',
    },
    {
      name: 'Co-Founder',
      role: 'Software Developer',
      bio: "I'm a software developer with a passion for building efficient, scalable, and user-friendly digital solutions. I enjoy solving complex problems through clean code and thoughtful design, and I'm always looking to learn new technologies and improve my craft. Whether working on front-end interfaces or back-end systems, I strive to write maintainable code and contribute to meaningful projects.",
      color: 'from-green-400 to-blue-500',
      image: '/images/Ranjeet.jpeg',
    },
    {
      name: 'Amit',
      role: 'Digital Market Expert',
      bio: "I'm a digital expert with a deep understanding of how technology, data, and strategy intersect to drive growth and innovation. With a strong background in digital ecosystems, I help businesses optimize their online presence, streamline digital operations, and stay ahead in an ever-evolving landscape.",
      color: 'from-pink-500 to-yellow-500',
      image: '/images/Amit.jpeg',
    },
    {
      name: 'Sonu',
      role: 'Backend Team Support',
      bio: "I'm a backend support specialist dedicated to maintaining the performance, stability, and reliability of core systems. My goal is to support seamless user experiences by ensuring backend systems run efficiently, securely, and with minimal downtime.",
      color: 'from-indigo-500 to-blue-400',
      image: '/images/Sonu.jpeg',
    },
    {
      name: 'Raghav',
      role: 'Editor',
      bio: "I'm an editor with a sharp eye for detail and a passion for clear, compelling communication. Whether refining manuscripts, polishing digital content, or ensuring stylistic consistency, I help bring ideas to life with precision and purpose.",
      color: 'from-yellow-400 to-orange-500',
      image: '/images/Raghav.jpeg',
    },
  ];

  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? members.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === members.length - 1 ? 0 : c + 1));

  return (
    <main className="max-w-7xl mx-auto px-4 py-20 font-sans">
      <div className="text-center mb-14">
        <div className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4 shadow">Meet Our Team</div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Our Dedicated Team</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">A passionate group of professionals driving innovation, growth, and success at TradeWithShai.K.</p>
      </div>
      {/* Carousel */}
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/70 dark:bg-slate-900/70 rounded-[2.5rem] shadow-3xl flex flex-col items-center p-16 text-center transition-all duration-500 hover:scale-[1.03] hover:shadow-4xl ring-1 ring-white/40">
            <div className={`relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br ${members[current].color} flex items-center justify-center mb-10 shadow-2xl overflow-hidden group transition-all duration-500`}> 
              <img src={members[current].image} alt={members[current].name} className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-8 border-white shadow-xl group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute inset-0 rounded-full ring-4 ring-blue-400/30 pointer-events-none"></span>
            </div>
            <div className="font-bold text-4xl md:text-5xl text-gray-900 mb-3 drop-shadow-lg">{members[current].name}</div>
            <div className="text-blue-600 font-semibold text-2xl mb-5 uppercase tracking-wide drop-shadow">{members[current].role}</div>
            <p className="text-gray-700 text-lg md:text-xl mb-2 max-w-3xl mx-auto italic">{members[current].bio}</p>
          </div>
          {/* Carousel Controls */}
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full p-4 shadow-lg transition-all border-2 border-blue-100 hover:border-blue-600" aria-label="Previous" style={{zIndex:2}}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full p-4 shadow-lg transition-all border-2 border-blue-100 hover:border-blue-600" aria-label="Next" style={{zIndex:2}}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {members.map((_, idx) => (
            <button
              key={idx}
              className={`w-3.5 h-3.5 rounded-full border-2 border-blue-200 transition-all duration-300 ${current === idx ? 'bg-blue-600 border-blue-600 scale-125' : 'bg-white/70'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to member ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}