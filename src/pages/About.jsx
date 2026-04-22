import { FaUsers, FaStar, FaBook, FaChartLine, FaShieldAlt, FaGraduationCap, FaTrophy, FaHeadset, FaUserFriends, FaChartBar } from 'react-icons/fa';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans">
      {/* Hero Section with Glassmorphism */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-40 bg-gradient-to-b from-white to-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image with Modern Frame */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 -z-10"></div>
                <img
                  src="/images/Shai.jpeg"
                  alt="Shai.K Founder"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border-8 border-white/80 backdrop-blur-sm"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-md border border-white/50">
                  <div className="text-sm font-bold text-blue-600">3+ Years</div>
                  <div className="text-xs text-gray-500">Trading Experience</div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-block w-fit px-4 py-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 font-semibold rounded-full mb-6 border border-blue-200">
                ✨ Meet Our Founder
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
                Shai.K
              </h1>
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 font-bold mb-6">
                Trader & Mentor | Indian Stock Market Specialist
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                With <span className="font-bold text-blue-600">3+ years</span> of dedicated experience in the Indian stock market, Shai.K has transformed from a passionate learner into a trusted mentor. Through <span className="font-bold text-blue-600">TradeWithShai.K</span>, he empowers traders with practical strategies, risk management expertise, and the mindset needed for sustainable success.
              </p>
              <div className="flex gap-6 mb-8">
                <a href="/courses" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Explore Courses
                </a>
                <a href="/contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Cards */}
      <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Years Experience', value: '3+', icon: FaChartBar },
              { label: 'Students Mentored', value: '500+', icon: FaUsers },
              { label: 'Success Stories', value: '100+', icon: FaStar },
              { label: 'Market Strategies', value: '20+', icon: FaTrophy },
            ].map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <IconComponent className="text-4xl text-blue-600 mb-3" />
                  <div className="text-3xl font-black text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100/80 backdrop-blur-sm text-purple-700 font-semibold rounded-full mb-4 border border-purple-200">
              <FaChartLine className="inline mr-2" /> Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">From Trader to Mentor</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A journey of learning, growth, and empowering others</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-12 md:space-y-0">
              {[
                {
                  year: '2020',
                  title: 'Started Trading Journey',
                  desc: 'Entered the Indian stock market with curiosity and determination, learning the fundamentals and building a strong foundation.',
                  icon: FaBook
                },
                {
                  year: '2021-2022',
                  title: 'Developed Trading Style',
                  desc: 'Through years of practice, real market experience, and continuous learning, created a unique, practical trading approach.',
                  icon: FaChartBar
                },
                {
                  year: '2023-2024',
                  title: 'Built Community',
                  desc: 'Launched TradeWithShai.K to mentor new traders, share strategies, and build a supportive community for sustainable success.',
                  icon: FaUserFriends
                },
                {
                  year: '2025+',
                  title: 'Scaling Impact',
                  desc: 'Expanding reach with advanced courses, personalized mentorship, and innovative trading education for global traders.',
                  icon: FaStar
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className={`flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 flex justify-center md:justify-end">
                      <div className={`w-full md:w-5/6 bg-white rounded-2xl p-8 shadow-lg border-l-4 ${idx % 2 === 0 ? 'border-blue-600' : 'border-purple-600'} hover:shadow-xl transition-all`}>
                        <div className="text-sm font-bold text-gray-500 mb-2">{item.year}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl shadow-lg border-4 border-white text-white">
                        <IconComponent />
                      </div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <FaTrophy className="text-6xl mb-6 mx-auto text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">Our Philosophy</h2>
            <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-8 text-gray-800">
              "Success in trading is not about luck, but about <span className="text-blue-600">discipline</span>, <span className="text-blue-600">learning</span>, and the <span className="text-blue-600">right mindset</span>."
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in teaching practical strategies, managing risk smartly, and building the psychological foundation for long-term trading success.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100/80 backdrop-blur-sm text-green-700 font-semibold rounded-full mb-4 border border-green-200">
              ✅ What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Choose TradeWithShai.K</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive trading education and mentorship tailored for your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaBook,
                title: 'Trading Education',
                desc: 'Comprehensive courses from beginner to advanced levels, covering market fundamentals, technical analysis, and trading psychology.',
                features: ['Live Classes', 'Video Tutorials', 'Study Materials']
              },
              {
                icon: FaGraduationCap,
                title: 'Expert Mentorship',
                desc: 'Personalized guidance and one-on-one support from experienced traders to accelerate your learning and growth.',
                features: ['1-on-1 Sessions', 'Portfolio Review', 'Strategy Guidance']
              },
              {
                icon: FaChartLine,
                title: 'Market Analysis',
                desc: 'In-depth research, real-time insights, and actionable trading strategies for every market condition.',
                features: ['Daily Analysis', 'Trade Signals', 'Market Reports']
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-400 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <IconComponent className="text-5xl text-blue-600 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
                    <div className="space-y-2">
                      {item.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-100/80 backdrop-blur-sm text-red-700 font-semibold rounded-full mb-4 border border-red-200">
              ❤️ Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Integrity',
                desc: 'We believe in honest, transparent trading education without false promises or unrealistic expectations.',
                icon: FaShieldAlt
              },
              {
                title: 'Excellence',
                desc: 'We continuously improve our strategies, courses, and mentorship to deliver the best results.',
                icon: FaStar
              },
              {
                title: 'Community',
                desc: 'We foster a supportive environment where traders help each other grow and succeed together.',
                icon: FaUsers
              },
              {
                title: 'Innovation',
                desc: 'We stay ahead of market trends and adapt our teaching methods to modern trading realities.',
                icon: FaChartBar
              },
            ].map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div key={idx} className="flex gap-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <IconComponent className="text-4xl text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Ready to Transform Your Trading?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join hundreds of traders who have already started their journey with expert guidance, proven strategies, and a supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/courses" className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg">
              Explore Our Courses
            </a>
            <a href="/contact" className="px-10 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 text-lg">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
