import { useState } from 'react';

export default function Team() {
  const members = [
    {
      name: 'SHAI.K',
      role: 'Founder & Lead Trader',
      bio: "I'm a trader with a focus on market analysis, risk management, and disciplined execution. I specialize in identifying high-probability setups through both technical and fundamental strategies, and I thrive in fast-paced market environments.",
      color: 'from-blue-500 to-purple-500',
      image: '/images/Shai.jpeg',
      icon: '📈',
    },
    {
      name: 'Ranjeet',
      role: 'Co-Founder & Software Developer',
      bio: "I'm a software developer with a passion for building efficient, scalable, and user-friendly digital solutions. I enjoy solving complex problems through clean code and thoughtful design, and I'm always looking to learn new technologies and improve my craft.",
      color: 'from-green-400 to-blue-500',
      image: '/images/Ranjeet.jpeg',
      icon: '💻',
    },
    {
      name: 'Amit',
      role: 'Digital Market Expert',
      bio: "I'm a digital expert with a deep understanding of how technology, data, and strategy intersect to drive growth and innovation. With a strong background in digital ecosystems, I help businesses optimize their online presence and stay ahead.",
      color: 'from-pink-500 to-yellow-500',
      image: '/images/Amit.jpeg',
      icon: '🎯',
    },
    {
      name: 'Sonu',
      role: 'Backend Team Support',
      bio: "I'm a backend support specialist dedicated to maintaining the performance, stability, and reliability of core systems. My goal is to support seamless user experiences by ensuring backend systems run efficiently and securely.",
      color: 'from-indigo-500 to-blue-400',
      image: '/images/Sonu.jpeg',
      icon: '⚙️',
    },
    {
      name: 'Raghav',
      role: 'Content Editor',
      bio: "I'm an editor with a sharp eye for detail and a passion for clear, compelling communication. Whether refining content or ensuring stylistic consistency, I help bring ideas to life with precision and purpose.",
      color: 'from-yellow-400 to-orange-500',
      image: '/images/Raghav.jpeg',
      icon: '✍️',
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold rounded-full mb-4 shadow-sm border border-blue-200">
            ✨ Meet Our Team
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Our Dedicated <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Professionals</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate group of experts driving innovation, growth, and success at TradeWithShai.K. Together, we're committed to delivering excellence in trading education and digital solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              onClick={() => setExpandedId(expandedId === idx ? null : idx)}
            >
              <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Image */}
                  <div className={`relative w-full h-40 mb-4 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 bg-white`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{member.name}</h3>

                  {/* Role */}
                  <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                    {member.role}
                  </p>

                  {/* Bio - Expandable */}
                  <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${
                    expandedId === idx ? 'line-clamp-none' : 'line-clamp-2'
                  }`}>
                    {member.bio}
                  </p>

                  {/* Expand Indicator */}
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-purple-500' : 'bg-pink-500'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-all duration-300 ${
                        expandedId === idx ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <p className="text-gray-600 font-semibold">Expert Team Members</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-600 font-semibold">Dedicated to Excellence</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
              ∞
            </div>
            <p className="text-gray-600 font-semibold">Continuous Growth</p>
          </div>
        </div>
      </div>
    </main>
  );
}