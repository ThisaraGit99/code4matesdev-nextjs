import React from 'react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative min-h-screen bg-gradient-to-br from-dark-green via-emerald-800 to-teal-900 text-white overflow-hidden ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 animate-pulse">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000" />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-center px-4">
        <div className="text-center max-w-4xl animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent animate-slideUp animation-delay-200">
            Your Partner in Software Innovation
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 mb-8 animate-slideUp animation-delay-400">
            Building cutting-edge solutions for tomorrow&apos;s challenges
          </p>
          <div className="animate-slideUp animation-delay-600">
            <button className="px-8 py-3 bg-teal text-white text-lg rounded-full transition-all duration-300 hover:bg-light-green hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 shadow-lg active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
