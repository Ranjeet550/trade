import { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from 'react-icons/fa';

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
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-24 font-sans  via-white to-blue-200">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto backdrop-blur-2xl bg-white/90 rounded-[2.5rem] shadow-3xl p-12 flex flex-col gap-8 border-t-4 border-blue-600">
        <div className="text-center mb-6">
          <div className="inline-block px-6 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4 shadow-lg flex items-center gap-2 justify-center">
            <FaCommentDots className="text-blue-500 text-xl" /> Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight flex items-center justify-center gap-2">
            <FaEnvelope className="text-blue-400 text-3xl" /> Send Us a Message
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We'd love to hear from you! Fill out the form below and our team will get back to you soon.</p>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700 flex items-center gap-2">
            <FaUser className="text-blue-400" /> Name
          </label>
          <input
            className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition bg-white/80"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700 flex items-center gap-2">
            <FaEnvelope className="text-blue-400" /> Email
          </label>
          <input
            type="email"
            className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition bg-white/80"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700 flex items-center gap-2">
            <FaCommentDots className="text-blue-400" /> Message
          </label>
          <textarea
            className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition bg-white/80"
            rows="5"
            placeholder="How can we help?"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold shadow-lg transition-all text-lg mt-2 tracking-wide flex items-center gap-2 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={loading}
        >
          <FaPaperPlane className="text-white text-lg" />
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {success && (
          <div className={`text-center text-sm font-semibold mt-2 ${success.includes('success') ? 'text-green-600' : 'text-red-500'}`}>{success}</div>
        )}
      </form>
    </main>
  );
}