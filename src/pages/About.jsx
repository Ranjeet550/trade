export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-0 font-sans">
      {/* Split Hero: Bio + Highlights */}
      <section className="flex flex-col md:flex-row items-center gap-12 py-20 md:py-28">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <img
            src="/images/Shai.jpeg"
            alt="Shai.K Founder"
            className="w-44 h-44 md:w-64 md:h-64 rounded-full object-cover mb-6 shadow-lg border-4 border-white/40 bg-gradient-to-br from-blue-400 to-purple-600"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Meet Our Founder</h2>
          <div className="text-lg font-semibold text-blue-700 mb-2">Shai.K</div>
          <div className="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">Trader & Mentor | Indian Stock Market Specialist</div>
        </div>
        <div className="flex-1 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-blue-600 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-black text-blue-900 mb-4 tracking-tight">Empowering Traders for Success</h1>
          <p className="text-gray-700 mb-6">Shai.K is a trader and mentor with strong knowledge of the Indian stock market. He started his trading journey in the early 2020s and has over <span className="font-bold text-blue-700">3+ years</span> of experience in the financial market. He built his own trading style through years of learning, practice, and real market experience. Now, through <span className="font-bold text-blue-600">TradeWithShai.K</span>, he helps new and growing traders understand the market in a simple and practical way. His goal is to teach easy-to-use strategies, manage risk smartly, and guide traders to build the right mindset for long-term success.</p>
          <div className="flex gap-8 w-full justify-start">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-black text-blue-600">3+ Years</div>
              <div className="text-xs text-gray-500">Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-black text-blue-600">Expert</div>
              <div className="text-xs text-gray-500">Trader</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-black text-blue-600">Global</div>
              <div className="text-xs text-gray-500">Mentor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Steps Section */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4">Journey & Growth</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Story in Steps</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between">
            {[
              {
                step: 1,
                title: 'Started Trading Journey',
                desc: 'Early 2020s: Entered the Indian stock market, learning the basics and building a foundation.'
              },
              {
                step: 2,
                title: 'Developed Unique Trading Style',
                desc: 'Years of practice, learning, and real market experience led to a practical, effective trading approach.'
              },
              {
                step: 3,
                title: 'Mentoring & Community Building',
                desc: 'Now, through TradeWithShai.K, helping new and growing traders with simple strategies, risk management, and mindset for long-term success.'
              },
            ].map((x, idx) => (
              <div key={x.step} className="flex-1 flex flex-col items-center md:items-start relative pb-10 md:pb-0 md:pr-10 last:pb-0 last:pr-0">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl mb-4 shadow-lg">{x.step}</div>
                <h3 className="font-bold text-blue-700 text-lg mb-1">{x.title}</h3>
                <p className="text-gray-600 text-center md:text-left">{x.desc}</p>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-6 right-0 w-10 h-1 bg-blue-200 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="mb-24">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 via-blue-400 to-purple-500 text-white rounded-3xl shadow-xl p-10 md:p-16 flex flex-col items-center">
          <svg className="w-10 h-10 mb-4 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h1V7a4 4 0 00-4-4H7a4 4 0 00-4 4v2a4 4 0 004 4h1v2a4 4 0 01-4 4v2a4 4 0 004 4h2a4 4 0 004-4v-2a4 4 0 00-4-4H9z" /></svg>
          <p className="text-xl md:text-2xl font-semibold text-center mb-4">“Success in trading is not about luck, but about discipline, learning, and the right mindset. At TradeWithShai.K, we’re here to guide you every step of the way.”</p>
          <div className="font-bold text-lg">Shai.K</div>
          <div className="text-blue-100 text-xs">Founder & Mentor</div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4">Why Choose Us</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">What Sets Us Apart</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Trading Education',
              desc: 'Comprehensive courses and resources to help you master the markets, from beginner to advanced.'
            },
            {
              title: 'Expert Mentorship',
              desc: 'Personalized guidance and support from experienced traders to accelerate your growth.'
            },
            {
              title: 'Market Analysis',
              desc: 'In-depth research, real-time insights, and actionable strategies for every market condition.'
            },
          ].map((x) => (
            <div key={x.title} className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center border-t-4 border-blue-600 hover:shadow-2xl transition-all">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold text-2xl mb-4">{x.title[0]}</div>
              <div className="text-lg font-bold text-gray-900 mb-2">{x.title}</div>
              <div className="text-gray-600 text-center">{x.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <div className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4">Ready to Start?</div>
        <h3 className="text-2xl md:text-3xl font-black mb-6">Join Our Trading Community</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Take the next step in your trading journey with expert guidance, proven strategies, and a supportive community.</p>
        <a href="/courses" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow inline-block">Explore Courses</a>
      </section>
    </main>
  );
}