export default function Blog() {
  const posts = [
    {
      date: 'January 10, 2025',
      category: 'Market Analysis',
      title: 'TradeWithShai.K Introduces New Trading Course',
      href: '#',
      image: '/images/course/c1.jpg',
      excerpt: 'Our latest course covers advanced trading strategies, risk management, and live market sessions for all levels.'
    },
    {
      date: 'December 25, 2024',
      category: 'Community',
      title: 'Alumni Networking Event: A Huge Success',
      href: '#',
      image: '/images/trade/t1.jpg',
      excerpt: 'Traders from across the country gathered to share insights, strategies, and success stories at our annual event.'
    },
    {
      date: 'November 15, 2024',
      category: 'Partnerships',
      title: 'New Partnership with Leading Financial Firms',
      href: '#',
      image: '/images/course/c2.jpg',
      excerpt: 'We are excited to announce collaborations with top financial institutions to bring exclusive resources to our members.'
    },
    {
      date: 'October 1, 2024',
      category: 'Education',
      title: '5 Essential Tips for New Traders',
      href: '#',
      image: '/images/trade/t2.jpg',
      excerpt: 'Start your trading journey with these proven tips to avoid common pitfalls and maximize your learning.'
    },
    {
      date: 'September 10, 2024',
      category: 'Market Analysis',
      title: 'How to Read Market Trends Like a Pro',
      href: '#',
      image: '/images/course/c3.jpg',
      excerpt: 'Learn to analyze charts, spot trends, and make informed decisions with our expert guide.'
    },
    {
      date: 'August 20, 2024',
      category: 'Strategy',
      title: 'Swing Trading vs. Day Trading: Which is Right for You?',
      href: '#',
      image: '/images/trade/t3.jpg',
      excerpt: 'Explore the pros and cons of swing and day trading to find the best fit for your trading style.'
    },
    {
      date: 'July 5, 2024',
      category: 'Technology',
      title: 'AI in Trading: The Future is Now',
      href: '#',
      image: '/images/course/c1.jpg',
      excerpt: 'Discover how artificial intelligence is revolutionizing trading and how you can leverage it.'
    },
    {
      date: 'June 18, 2024',
      category: 'Risk Management',
      title: 'Protecting Your Capital: Risk Management Essentials',
      href: '#',
      image: '/images/trade/t4.jpg',
      excerpt: 'Master the art of risk management to ensure long-term trading success.'
    },
    {
      date: 'May 30, 2024',
      category: 'Success Stories',
      title: 'From Novice to Pro: A Trader’s Journey',
      href: '#',
      image: '/images/course/c2.jpg',
      excerpt: 'Read how one of our members went from beginner to consistent profits in just one year.'
    },
  ];
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="text-center mb-14">
        <div className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4 shadow">📰 Trading Blog & Insights</div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Market Insights & News</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stay updated with the latest trends, strategies, and stories from the world of trading.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {posts.map((p) => (
          <article
            key={p.title}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col transition-all hover:-translate-y-2 hover:shadow-2xl overflow-hidden group"
          >
            <div className="relative">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold rounded-full px-3 py-1 shadow">{p.category}</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-xs text-gray-400 mb-2">{p.date}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{p.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{p.excerpt}</p>
              <a className="text-blue-600 font-bold text-sm mt-auto inline-flex items-center gap-1 hover:underline" href={p.href}>
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}