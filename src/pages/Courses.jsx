import { FaChartLine, FaChartBar, FaCrown } from 'react-icons/fa';

export default function Courses() {
  const items = [
    { level: 'Beginner', title: 'Trading Fundamentals', price: '₹1', color: 'from-green-400 to-blue-500', icon: FaChartLine, img: '/images/course/c1.jpg' },
    { level: 'Intermediate', title: 'Technical Analysis Mastery', price: '₹1', color: 'from-blue-500 to-purple-600', icon: FaChartBar, img: '/images/course/c2.jpg' },
    { level: 'Advanced', title: 'Options Trading Specialist', price: '₹1', color: 'from-purple-600 to-pink-600', icon: FaCrown, img: '/images/course/c3.jpg' },
  ];
  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4 shadow">🎓 Expert-Led Courses</div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Premium Trading Courses</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive courses designed to take your trading skills to the next level.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((c) => (
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
    </main>
  );
}

/* Add these keyframes to your global CSS (e.g., index.css or tailwind.config.js for custom animations):
@keyframes gradient-move {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient-move {
  background-size: 200% 200%;
  animation: gradient-move 4s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.animate-float { animation: float 5s ease-in-out infinite; }
.animate-float-slow { animation: float 8s ease-in-out infinite; }
@keyframes float-reverse {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(12px); }
}
.animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
*/