import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-200 border-t border-slate-800 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4">
  <span className="block w-full text-center mb-1 text-xs md:text-sm font-extrabold text-red-500 bg-red-100 rounded-lg px-4 py-2 shadow-sm">
          Disclaimer: My videos are for educational purposes only and are not intended to be used as financial advice. I cannot guarantee any profit or loss. For any loss or damage caused by my videos, I am not responsible. Please consult your financial advisor before investing.
        </span>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 pb-8 border-b border-slate-800">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white w-10 h-10 grid place-items-center rounded-lg font-bold text-lg shadow-lg">T</span>
              <span className="text-xl font-bold tracking-tight text-white">TradeWithShai.K</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs mb-2">
              Your trusted platform for professional development and learning excellence. We provide comprehensive trading education and mentorship to help you succeed in the financial markets.
            </p>
            <ul className="text-blue-200 text-base font-bold max-w-xs list-disc list-inside space-y-2 mt-2">
              <li className="leading-tight"><span className="text-blue-400">Trading Education</span></li>
              <li className="leading-tight"><span className="text-yellow-400">Expert Mentorship</span></li>
              <li className="leading-tight"><span className="text-pink-400">Market Analysis</span></li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/people/Trade-with-ShaiK/61568387962971/?rdid=dzngqG6r1AioVGAF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15uFpdSiaz%2F" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaFacebook /></a>
              <a href="https://x.com/Shailes12413904?t=QOA1Jizx1gLviCSg1MZLbw&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/trade-with-shai-k/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
              <a href="https://www.instagram.com/tradewithshai.k/?igsh=N3cxNzhuMTQ5bHR6#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
              <a href="https://www.youtube.com/@tradewithshai.k" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
          </div>

          {/* Quick Links */}
          <div >
            <h3 className="text-base font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="transition-colors duration-200 hover:text-blue-400">Home</Link></li>
              <li><Link to="/courses" className="transition-colors duration-200 hover:text-green-400">Courses</Link></li>
              <li><Link to="/about" className="transition-colors duration-200 hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/contact" className="transition-colors duration-200 hover:text-pink-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-400" /> IIIT, Jhalwa, Prayagraj, UP, India</li>
              <li className="flex items-center gap-2"><FaPhone className="text-green-400" /> +91 (7607941960)</li>
              <li className="flex items-center gap-2"><FaEnvelope className="text-purple-400" /> businesstradeshai@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-500 gap-4">
          <div>© 2025 TradeWithShai.K. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}