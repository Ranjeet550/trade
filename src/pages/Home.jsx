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
      <section className="relative bg-gradient-to-br from-[#0f2027] via-[#232526] to-[#2c5364] py-20 overflow-hidden">
        {/* Decorative SVG for trading theme */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00c6ff" fillOpacity="0.18" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight drop-shadow">Market Pulse: Live Trading Stats</h2>
            <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">Dynamic insights from our thriving trading community</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaUsers, label: 'Active Traders', value: '2,000+', color: 'from-blue-500 to-cyan-500', desc: 'Traders online now' },
              { icon: FaChartLine, label: 'Live Volume', value: '₹3.2cr', color: 'from-green-500 to-emerald-500', desc: 'Today’s trades' },
              { icon: FaTrophy, label: 'Win Rate', value: '89%', color: 'from-purple-500 to-pink-500', desc: 'Profitable trades' },
              { icon: FaHeadset, label: 'Support', value: '24/7', color: 'from-orange-500 to-red-500', desc: 'Expert help anytime' }
            ].map((i) => (
              <div key={i.label} className="bg-white/10 rounded-2xl p-8 shadow-xl hover:shadow-blue-400/30 border border-white/10 flex flex-col items-center transition-all backdrop-blur-xl">
                <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${i.color} flex items-center justify-center shadow-lg border-4 border-white/20`}>
                  <i.icon className="text-3xl text-white drop-shadow" />
                </div>
                <div className="text-4xl font-extrabold text-white mb-1 tracking-tight drop-shadow-lg">{i.value}</div>
                <div className="text-blue-200 font-semibold text-xs uppercase tracking-wider mb-1">{i.label}</div>
                <div className="text-blue-100/80 text-xs text-center">{i.desc}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Animated trading tickers at the bottom */}
        <div className="absolute left-0 right-0 bottom-0 w-full flex justify-center z-20">
          <marquee behavior="scroll" direction="left" scrollamount="7" className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 text-white text-xs font-mono px-6 py-2 rounded-t-xl shadow-lg whitespace-nowrap">
            NIFTY 50: <span className="font-bold">+0.85%</span> &nbsp; | &nbsp; BANKNIFTY: <span className="font-bold">+1.12%</span> &nbsp; | &nbsp; SENSEX: <span className="font-bold">+0.67%</span> &nbsp; | &nbsp; USD/INR: <span className="font-bold">83.12</span> &nbsp; | &nbsp; GOLD: <span className="font-bold">₹59,800</span> &nbsp; | &nbsp; SILVER: <span className="font-bold">₹72,300</span> &nbsp; | &nbsp; RELIANCE: <span className="font-bold">₹2,650</span> &nbsp; | &nbsp; TCS: <span className="font-bold">₹3,550</span> &nbsp; | &nbsp; HDFC BANK: <span className="font-bold">₹1,520</span> &nbsp; | &nbsp; INFY: <span className="font-bold">₹1,420</span> &nbsp; | &nbsp; CRUDE OIL: <span className="font-bold">₹6,800</span> &nbsp; | &nbsp; NIFTY IT: <span className="font-bold">+1.05%</span> &nbsp; | &nbsp; NIFTY FMCG: <span className="font-bold">+0.45%</span>
          </marquee>
        </div>
      </section>

      {/* Why Trade With Us */}
      <section className="relative py-24 bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] overflow-hidden">
        {/* Decorative SVG for trading theme */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00c6ff" fillOpacity="0.13" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-blue-600/20 text-blue-200 font-semibold rounded-full mb-4 tracking-wider shadow">✨ Why Choose Us</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow">Why Trade With Us</h2>
            <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">Discover the trading advantages that set us apart in the Indian markets</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaChartBar, title: 'Advanced Analytics', desc: 'Live market data, AI-powered signals, and pro charting tools', color: 'from-blue-500 to-cyan-500' },
              { icon: FaGraduationCap, title: 'Expert Mentorship', desc: 'Guidance from SEBI-registered traders & industry veterans', color: 'from-green-500 to-emerald-500' },
              { icon: FaUserFriends, title: 'Trading Community', desc: 'Network with 2,000+ active traders, share strategies & wins', color: 'from-purple-500 to-pink-500' },
              { icon: FaShieldAlt, title: 'Risk Management', desc: 'Smart stop-loss, capital protection, and portfolio insights', color: 'from-orange-500 to-red-500' }
            ].map((f) => (
              <div key={f.title} className="relative bg-white/10 rounded-2xl p-10 shadow-xl hover:shadow-blue-400/30 border border-white/10 flex flex-col items-center transition-all backdrop-blur-xl group overflow-hidden">
                {/* Animated Gradient Border */}
                <div className={`absolute inset-0 rounded-2xl pointer-events-none z-0 group-hover:opacity-70 transition-all duration-500`}> 
                  <div className={`w-full h-full animate-gradient-move bg-gradient-to-br ${f.color} opacity-20 group-hover:opacity-40 rounded-2xl`}></div>
                </div>
                <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-lg border-4 border-white/20 z-10`}>
                  <f.icon className="text-3xl text-white drop-shadow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 z-10 drop-shadow-lg">{f.title}</h3>
                <p className="text-blue-100/90 text-center z-10">{f.desc}</p>
                {/* Decorative floating trading shapes */}
                <div className="absolute left-0 bottom-0 w-20 h-20 bg-blue-300/20 rounded-full blur-2xl z-0 animate-float-slow"></div>
                <div className="absolute right-0 top-0 w-16 h-16 bg-blue-500/20 rounded-full blur-2xl z-0 animate-float"></div>
                <div className="absolute -right-6 bottom-8 w-10 h-10 bg-yellow-200/30 rounded-full blur-xl z-0 animate-float-reverse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-24 flex items-center overflow-hidden bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] text-white trader-success-bg">
        {/* Decorative SVG for trading theme */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-15 pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00c6ff" fillOpacity="0.13" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10 pointer-events-none z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="#00c6ff" fillOpacity="0.10" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 w-full z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-blue-600/20 text-blue-200 font-semibold rounded-full mb-4 tracking-wider shadow">🌟 Success Stories</div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight drop-shadow">Real Traders, Real Success</h2>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">Join thousands of traders who have transformed their financial future with our platform</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Akash Kumar', text: 'Transformed my career with detailed courses and supportive community. From beginner to consistent profits in just 6 months!', rating: 5, role: 'Stock Trader', avatar: 'A' },
              { name: 'Mona', text: 'Hands-on approach and real-time analysis I rely on every day. The mentorship program changed everything for me.', rating: 5, role: 'Forex Trader', avatar: 'M' },
              { name: 'Hemant Singh', text: 'Top-notch resources and priceless mentorship. The community support is unmatched in the industry.', rating: 5, role: 'Options Trader', avatar: 'H' }
            ].map((t) => (
              <div key={t.name} className="relative bg-white/10 rounded-2xl p-10 border border-white/10 hover:bg-white/20 transition-all flex flex-col h-full shadow-xl backdrop-blur-xl group overflow-hidden">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none z-0 group-hover:opacity-70 transition-all duration-500">
                  <div className="w-full h-full animate-gradient-move bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-40 rounded-2xl"></div>
                </div>
                <div className="flex items-center mb-4 z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg border-2 border-white/20">{t.avatar}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 drop-shadow">{t.name}</h3>
                    <p className="text-blue-200 text-xs mb-1">{t.role}</p>
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xs" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-blue-100/90 leading-relaxed italic text-base flex-1 z-10">"{t.text}"</p>
                {/* Decorative floating trading shapes */}
                <div className="absolute left-0 bottom-0 w-16 h-16 bg-blue-300/20 rounded-full blur-2xl z-0 animate-float-slow"></div>
                <div className="absolute right-0 top-0 w-12 h-12 bg-blue-500/20 rounded-full blur-2xl z-0 animate-float"></div>
                <div className="absolute -right-4 bottom-6 w-8 h-8 bg-yellow-200/30 rounded-full blur-xl z-0 animate-float-reverse"></div>
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
      <section className="relative py-24 bg-gradient-to-br from-[#0f2027] via-[#232526] to-[#2c5364] overflow-hidden">
        {/* Decorative SVG for trading theme */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00c6ff" fillOpacity="0.13" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-blue-600/20 text-blue-200 font-semibold rounded-full mb-4 tracking-wider shadow">🎓 Expert-Led Courses</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow">Premium Trading Courses</h2>
            <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">Master the markets with our comprehensive, industry-leading courses designed by professional traders</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { level: 'Beginner', title: 'Trading Fundamentals', price: '₹1', color: 'from-green-400 to-blue-500', icon: FaChartLine, img: '/images/course/c1.jpg' },
              { level: 'Intermediate', title: 'Technical Analysis Mastery', price: '₹1', color: 'from-blue-500 to-purple-600', icon: FaChartBar, img: '/images/course/c2.jpg' },
              { level: 'Advanced', title: 'Options Trading Specialist', price: '₹1', color: 'from-purple-600 to-pink-600', icon: FaCrown, img: '/images/course/c3.jpg' }
            ].map((c) => (
              <div
                key={c.title}
                className="group relative bg-white/10 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center justify-center transition-all hover:-translate-y-3 hover:shadow-blue-300/70 hover:scale-105 duration-300 overflow-hidden p-0 backdrop-blur-xl"
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
                <h3 className="text-2xl font-extrabold text-white my-10 text-center z-10 drop-shadow-lg tracking-tight px-6 group-hover:text-blue-300 transition-colors duration-300">{c.title}</h3>
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
        {/* Decorative SVG for trading theme */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-15 pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00c6ff" fillOpacity="0.13" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10 pointer-events-none z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200"fill="#00c6ff" fillOpacity="0.10" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 w-full z-10">
          <div className="text-center">
            <div className="inline-block px-5 py-2 bg-blue-600/20 text-blue-200 font-semibold rounded-full mb-6 tracking-wider shadow">🚀 Start Your Journey Today</div>
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight drop-shadow">Ready to Transform <span className="block text-2xl md:text-4xl">Your Trading Career?</span></h3>
            <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-3xl mx-auto">Join over 2,000+ successful traders who have mastered the markets with our proven strategies, expert mentorship, and cutting-edge tools. Your financial freedom starts here.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 max-w-3xl mx-auto">
              {[
                { number: '2,000+', label: 'Active Traders' },
                { number: '87%', label: 'Success Rate' },
                { number: '24/7', label: 'Support' },
                { number: '50+', label: 'Expert Mentors' }
              ].map((stat) => (
                <div key={stat.label} className="relative text-center bg-white/10 rounded-xl p-6 shadow-lg border border-white/10 hover:bg-white/20 transition-all backdrop-blur-xl group overflow-hidden">
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 rounded-xl pointer-events-none z-0 group-hover:opacity-70 transition-all duration-500">
                    <div className="w-full h-full animate-gradient-move bg-gradient-to-br from-blue-400 via-cyan-400 to-green-400 opacity-20 group-hover:opacity-40 rounded-xl"></div>
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-white mb-1 z-10 drop-shadow-lg">{stat.number}</div>
                  <div className="text-blue-200 text-xs font-medium uppercase tracking-wider z-10">{stat.label}</div>
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