import { useState } from 'react';
import { FaPlayCircle, FaUsers, FaChartLine, FaTrophy, FaHeadset, FaChartBar, FaUserFriends, FaShieldAlt, FaGraduationCap, FaStar, FaCrown } from 'react-icons/fa';

// Simple Carousel component for trading images
const tradingImages = [
  '/images/trade/t1.jpg',
  '/images/trade/t2.jpg',
  '/images/trade/t3.jpg',
  '/images/trade/t4.jpg',
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? tradingImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === tradingImages.length - 1 ? 0 : c + 1));
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="aspect-[4/3] w-full max-w-lg md:max-w-xl lg:max-w-2xl rounded-3xl overflow-hidden shadow-2xl bg-white/10 flex items-center justify-center">
        <img
          src={tradingImages[current]}
          alt={`Trading ${current + 1}`}
          className="object-cover w-full h-full transition-all duration-500"
          loading="lazy"
        />
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {tradingImages.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === idx ? 'bg-blue-500' : 'bg-white/30'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-blue-500/80 text-white rounded-full p-2 shadow transition-all"
        aria-label="Previous"
        style={{ zIndex: 2 }}
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-blue-500/80 text-white rounded-full p-2 shadow transition-all"
        aria-label="Next"
        style={{ zIndex: 2 }}
      >
        &#8594;
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white trader-hero-bg">
        {/* Decorative SVG or shapes for trading theme */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-30 pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00c6ff" fillOpacity="0.15" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-20 pointer-events-none z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="#00c6ff" fillOpacity="0.10" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Headline & CTA */}
          <div>
            <div className="mb-4 inline-block px-4 py-1 bg-white/10 rounded-full text-xs font-semibold border border-white/10">🚀 Professional Trading Platform</div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Master the Markets
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-xl">
              Transform your trading journey with AI-powered insights, real-time market analysis, and expert mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#start" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-100 transition-all flex items-center gap-2 shadow">
                <FaPlayCircle className="text-xl" />
                Start Trading Journey
              </a>
              <a href="#consult" className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
                Schedule Consultation
              </a>
            </div>
          </div>
          {/* Right: Trading Images Carousel */}
          <Carousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-slate-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Trading by Numbers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real results from real traders using our platform</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaUsers, label: 'Active Traders', value: '200+', color: 'from-blue-500 to-cyan-500' },
              { icon: FaChartLine, label: 'Daily Volume', value: '1.5cr', color: 'from-green-500 to-emerald-500' },
              { icon: FaTrophy, label: 'Success Rate', value: '87%', color: 'from-purple-500 to-pink-500' },
              { icon: FaHeadset, label: 'Support', value: '24/7', color: 'from-orange-500 to-red-500' }
            ].map((i) => (
              <div key={i.label} className="bg-white rounded-2xl p-8 shadow hover:shadow-lg border border-gray-100 flex flex-col items-center transition-all">
                <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${i.color} flex items-center justify-center`}>
                  <i.icon className="text-2xl text-white" />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">{i.value}</div>
                <div className="text-gray-500 font-semibold text-xs uppercase tracking-wider">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trade With Us */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4">✨ Why Choose Us</div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Why Trade With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the cutting-edge advantages that set us apart in the competitive trading landscape</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaChartBar, title: 'Advanced Analytics', desc: 'Real-time market data and AI-powered professional-grade tools', color: 'from-blue-500 to-cyan-500' },
              { icon: FaGraduationCap, title: 'Expert Mentorship', desc: 'Learn from professional traders with decades of experience', color: 'from-green-500 to-emerald-500' },
              { icon: FaUserFriends, title: 'Trading Community', desc: 'Join an exclusive network of successful traders worldwide', color: 'from-purple-500 to-pink-500' },
              { icon: FaShieldAlt, title: 'Risk Management', desc: 'Advanced tools to protect capital and maximize returns', color: 'from-orange-500 to-red-500' }
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 shadow hover:shadow-lg border border-gray-100 flex flex-col items-center transition-all">
                <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center`}>
                  <f.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-24 flex items-center overflow-hidden bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] text-white trader-success-bg">
        {/* Decorative SVG or shapes for trading theme */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-20 pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00c6ff" fillOpacity="0.12" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10 pointer-events-none z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="#00c6ff" fillOpacity="0.10" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 w-full z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-white/10 rounded-full font-semibold mb-4">🌟 Success Stories</div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">Real Traders, Real Success</h2>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">Join thousands of traders who have transformed their financial future with our platform</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Akash Kumar', text: 'Transformed my career with detailed courses and supportive community. From beginner to consistent profits in just 6 months!', rating: 5, role: 'Stock Trader', avatar: 'A' },
              { name: 'Mona', text: 'Hands-on approach and real-time analysis I rely on every day. The mentorship program changed everything for me.', rating: 5, role: 'Forex Trader', avatar: 'M' },
              { name: 'Hemant Singh', text: 'Top-notch resources and priceless mentorship. The community support is unmatched in the industry.', rating: 5, role: 'Options Trader', avatar: 'H' }
            ].map((t) => (
              <div key={t.name} className="bg-white/10 rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">{t.avatar}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{t.name}</h3>
                    <p className="text-blue-200 text-xs mb-1">{t.role}</p>
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xs" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-blue-100/90 leading-relaxed italic text-base flex-1">"{t.text}"</p>
              </div>
            ))}
          </div>
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-blue-200 mb-4 text-base">Ready to join our success stories?</p>
            <a href="/courses" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow hover:shadow-lg">
              <FaPlayCircle className="text-lg" />
              Start Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* Premium Trading Courses */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4">🎓 Expert-Led Courses</div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Premium Trading Courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Master the markets with our comprehensive, industry-leading courses designed by professional traders</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { level: 'Beginner', title: 'Trading Fundamentals', price: '₹1', color: 'from-green-400 to-blue-500', icon: FaChartLine, img: '/images/course/c1.jpg' },
              { level: 'Intermediate', title: 'Technical Analysis Mastery', price: '₹1', color: 'from-blue-500 to-purple-600', icon: FaChartBar, img: '/images/course/c2.jpg' },
              { level: 'Advanced', title: 'Options Trading Specialist', price: '₹1', color: 'from-purple-600 to-pink-600', icon: FaCrown, img: '/images/course/c3.jpg' }
            ].map((c) => (
              <div
                key={c.title}
                className="group relative bg-white/80 rounded-3xl shadow-2xl border border-blue-200 flex flex-col items-center justify-center transition-all hover:-translate-y-3 hover:shadow-blue-300/70 hover:scale-105 duration-300 overflow-hidden p-0 backdrop-blur-xl"
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none z-0">
                  <div className={`w-full h-full animate-gradient-move bg-gradient-to-br ${c.color} opacity-30 group-hover:opacity-60 transition-all duration-500 rounded-3xl`}></div>
                </div>
                {/* Course Image */}
                <div className="w-full aspect-video relative z-10">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover rounded-t-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-3xl"></div>
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-6 py-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black text-xl font-extrabold rounded-full shadow-lg border-2 border-yellow-400 tracking-wider animate-bounce drop-shadow-lg">{c.price}</span>
                  </div>
                  {/* Icon Overlay */}
                  <div className="absolute left-4 bottom-4 w-14 h-14 rounded-2xl flex items-center justify-center text-4xl shadow-lg bg-gradient-to-br from-white/60 to-blue-200/80 text-blue-700 border-2 border-white z-20">
                    <c.icon />
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-2xl font-extrabold text-gray-900 my-10 text-center z-10 drop-shadow-lg tracking-tight px-6 group-hover:text-blue-700 transition-colors duration-300">{c.title}</h3>
                {/* Decorative floating shapes */}
                <div className="absolute left-0 bottom-0 w-36 h-36 bg-blue-300/30 rounded-full blur-2xl z-0 animate-float-slow"></div>
                <div className="absolute right-0 top-0 w-28 h-28 bg-blue-500/20 rounded-full blur-2xl z-0 animate-float"></div>
                <div className="absolute -right-8 bottom-10 w-16 h-16 bg-yellow-200/40 rounded-full blur-xl z-0 animate-float-reverse"></div>
              </div>
            ))}
          </div>
        
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 flex items-center overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#00c6ff] to-[#43cea2] text-white trader-cta-bg">
        {/* Decorative SVG or shapes for trading theme */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-20 pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#43cea2" fillOpacity="0.10" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10 pointer-events-none z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="#43cea2" fillOpacity="0.10" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 w-full z-10">
          <div className="text-center">
            <div className="inline-block px-5 py-2 bg-white/10 rounded-full font-semibold mb-6">🚀 Start Your Journey Today</div>
            <h3 className="text-3xl md:text-5xl font-black mb-6">Ready to Transform <span className="block text-2xl md:text-4xl">Your Trading Career?</span></h3>
            <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-3xl mx-auto">Join over 2,000+ successful traders who have mastered the markets with our proven strategies, expert mentorship, and cutting-edge tools. Your financial freedom starts here.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 max-w-3xl mx-auto">
              {[
                { number: '2,000+', label: 'Active Traders' },
                { number: '87%', label: 'Success Rate' },
                { number: '24/7', label: 'Support' },
                { number: '50+', label: 'Expert Mentors' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-xs font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-100 transition-all flex items-center gap-2 shadow">
                <FaPlayCircle className="text-xl" />
                Get Started Now
              </a>
              <a href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
                <FaHeadset className="text-xl" />
                Schedule Consultation
              </a>
            </div>
            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-blue-200 text-xs mb-2">Trusted by leading financial institutions</p>
              <div className="flex justify-center items-center gap-6 opacity-60 text-xs">
                <div className="font-bold">SECURE</div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="font-bold">CERTIFIED</div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="font-bold">VERIFIED</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}