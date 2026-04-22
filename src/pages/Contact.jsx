import { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    try {
      // Use image-based approach to bypass CORS without page navigation
      const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      const url = `https://api.callmebot.com/text.php?source=web&user=@Tradeshai&text=${text}`;
      
      // Create a temporary image element to trigger the request
      const img = new Image();
      img.src = url;
      img.style.display = 'none';
      document.body.appendChild(img);
      
      // Clean up after a short delay
      setTimeout(() => {
        document.body.removeChild(img);
      }, 1000);
      
      // Show success message
      setSuccess('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      
    } catch {
      setSuccess('Failed to send message. Please try again.');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 font-semibold rounded-full mb-6 border border-blue-200">
            <FaCommentDots className="inline mr-2" /> Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our trading courses or mentorship programs? We're here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FaPhone,
                title: 'Phone',
                info: '+91 (7607941960)',
                desc: 'Call us during business hours'
              },
              {
                icon: FaEnvelope,
                title: 'Email',
                info: 'businesstradeshai@gmail.com',
                desc: 'We respond within 24 hours'
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Location',
                info: 'IIIT, Jhalwa, Prayagraj, UP',
                desc: 'India'
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{item.info}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
                    <FaUser className="text-blue-600" /> Full Name
                  </label>
                  <input
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition bg-white hover:border-gray-300"
                    placeholder="Your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
                    <FaEnvelope className="text-blue-600" /> Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition bg-white hover:border-gray-300"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
                    <FaCommentDots className="text-blue-600" /> Message
                  </label>
                  <textarea
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition bg-white hover:border-gray-300 resize-none"
                    rows="6"
                    placeholder="Tell us how we can help you..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold shadow-lg transition-all text-lg tracking-wide flex items-center gap-2 justify-center disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 duration-300"
                  disabled={loading}
                >
                  <FaPaperPlane className="text-white text-lg" />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {/* Success/Error Message */}
                {success && (
                  <div className={`text-center text-sm font-semibold p-4 rounded-xl ${success.includes('success') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {success}
                  </div>
                )}
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Contact Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Get personalized trading guidance',
                    'Learn about our premium courses',
                    'Schedule a free consultation',
                    'Join our trading community',
                    'Ask about mentorship programs'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <FaClock className="text-blue-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Available:</span> Monday - Friday, 9 AM - 6 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">Ready to Start Your Trading Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't wait! Connect with our team today and take the first step towards mastering the markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/917607941960" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg transform hover:scale-105">
              Chat on WhatsApp
            </a>
            <a href="/courses" className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all">
              Explore Courses
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
