import { FaChartLine, FaTrophy, FaArrowUp, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TradingResults() {
  // Result images data
  const resultImages = [
    { id: 1, src: '/images/result images/R1.jpeg' },
    { id: 2, src: '/images/result images/R2.jpeg' },
    { id: 3, src: '/images/result images/R3.jpeg' },
    { id: 4, src: '/images/result images/R4.jpeg' },
    { id: 5, src: '/images/result images/R5.jpeg' },
    { id: 6, src: '/images/result images/R6.jpeg' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-0 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 md:py-28">
        <div className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4 shadow">📈 Real Trading Results</div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Our Trading Success Stories
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          These are real trading results from our community members. Each image represents 
          actual profits and successful trades made using our proven strategies and expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-lg">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <FaTrophy className="text-white text-xl" />
            </div>
            <span className="font-semibold text-gray-700">Proven Success</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <FaArrowUp className="text-white text-xl" />
            </div>
            <span className="font-semibold text-gray-700">Consistent Profits</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <FaChartLine className="text-white text-xl" />
            </div>
            <span className="font-semibold text-gray-700">Expert Strategies</span>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4">Trading Portfolio</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Real Results Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of successful trading outcomes and see the potential of our strategies
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {resultImages.map((image) => (
            <div
              key={image.id}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="w-full">
                <img
                  src={image.src}
                  alt={`Trading Result ${image.id}`}
                  className="w-full h-auto object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-8 md:mb-12 px-4">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4 text-sm md:text-base">Video Results</div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Trading Results in Action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Watch detailed explanations of our trading strategies and see real-time results
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 px-4">
          {/* First Video */}
          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-blue-200 overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-10 rounded-2xl md:rounded-3xl"></div>
            
            <div className="relative z-10 p-4 md:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <FaPlay className="text-white text-lg md:text-2xl ml-1" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center sm:text-left">Trading Results Video 1</h3>
              </div>
              
              {/* Video Container - Responsive */}
              <div className="relative w-full">
                {/* Aspect ratio container */}
                <div className="relative w-full pb-[56.25%] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl bg-gray-900">
                  <video
                    controls
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    poster="/images/result images/R1.jpeg"
                    preload="metadata"
                  >
                    <source src="/images/result images/Rvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              <p className="text-center text-gray-600 mt-4 md:mt-6 text-sm md:text-base lg:text-lg px-2">
                Detailed walkthrough of our trading methodology and real market results
              </p>
            </div>
          </div>

          {/* Second Video */}
          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-blue-200 overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-10 rounded-2xl md:rounded-3xl"></div>
            
            <div className="relative z-10 p-4 md:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <FaPlay className="text-white text-lg md:text-2xl ml-1" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center sm:text-left">Trading Results Video 2</h3>
              </div>
              
              {/* Video Container - Responsive */}
              <div className="relative w-full">
                {/* Aspect ratio container */}
                <div className="relative w-full pb-[56.25%] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl bg-gray-900">
                  <video
                    controls
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    poster="/images/result images/R2.jpeg"
                    preload="metadata"
                  >
                    <source src="/images/result images/R2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              <p className="text-center text-gray-600 mt-4 md:mt-6 text-sm md:text-base lg:text-lg px-2">
                Advanced trading strategies and live market analysis demonstrations
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="text-center py-16">
        <div className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4">Ready to Start?</div>
        <h3 className="text-2xl md:text-3xl font-black mb-6">Achieve Similar Results</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our trading community and start your journey to financial success with proven strategies and expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/courses" 
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl inline-block text-center"
          >
            View Our Courses
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl inline-block text-center"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}