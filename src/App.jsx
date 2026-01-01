
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Courses from './pages/Courses.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';
import TradingResults from './pages/TradingResults.jsx';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/trading-results" element={<TradingResults />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
