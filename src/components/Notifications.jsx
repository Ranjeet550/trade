// import { useState, useEffect } from 'react';

// export default function NewYearPopup() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Show the popup after 2 seconds
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//       {/* Snowfall Animation - CSS based */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute text-white text-xl animate-snowfall"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * -100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${5 + Math.random() * 5}s`
//             }}
//           >
//             ❄
//           </div>
//         ))}
//       </div>

//       <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-4 shadow-2xl border-2 border-white/20 overflow-hidden z-10">
//         {/* Close Button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all"
//           aria-label="Close"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//           </svg>
//         </button>

//         {/* Content */}
//         <div className="relative z-10 text-center text-white">
//           <h2 className="text-3xl md:text-4xl font-black mb-4 drop-shadow-lg">
//             🎉 Happy New Year 2026! 🎉
//           </h2>
//           <p className="text-lg mb-6 font-medium">
//             Wishing you a prosperous year ahead filled with successful trades and financial growth!
//           </p>
         
//           <button
//             onClick={handleClose}
//             className="bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-3 rounded-xl hover:bg-white/30 transition-all shadow-lg border border-white/20"
//           >
//             Start Trading Now →
//           </button>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400/30 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-400/30 rounded-full blur-xl animate-pulse"></div>
//       </div>
//     </div>
//   );
// }

// // Add custom CSS for snowfall animation
// const style = document.createElement('style');
// style.textContent = `
//   @keyframes snowfall {
//     0% {
//       transform: translateY(0) rotate(0deg);
//       opacity: 1;
//     }
//     100% {
//       transform: translateY(100vh) rotate(360deg);
//       opacity: 0;
//     }
//   }
//   .animate-snowfall {
//     animation: snowfall linear infinite;
//   }
// `;
// document.head.appendChild(style);