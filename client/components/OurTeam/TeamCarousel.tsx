import React, { useState } from 'react';
import { teamMembers } from '@/data/teamData';
import { TeamMember } from './TeamMember';

export const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-12 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-luxury-black text-center mb-12">
          Featured Team Members
        </h2>
        
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream to-white p-8">
          <div className="flex transition-transform duration-500 ease-in-out">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`flex-shrink-0 w-full transition-all duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/3">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.imageAlt}
                        className="w-64 h-64 rounded-2xl object-cover mx-auto shadow-xl"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-gold text-white px-4 py-2 rounded-lg shadow-lg">
                        <span className="font-semibold">{member.position.split(',')[0]}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold text-luxury-black mb-4">
                      {member.name}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {member.quote}
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <button 
                        onClick={prevSlide}
                        className="p-2 rounded-full border border-gray-300 hover:border-gold hover:bg-gold/10 transition-all duration-300"
                      >
                        ←
                      </button>
                      <span className="text-gray-600">
                        {currentIndex + 1} / {teamMembers.length}
                      </span>
                      <button 
                        onClick={nextSlide}
                        className="p-2 rounded-full border border-gray-300 hover:border-gold hover:bg-gold/10 transition-all duration-300"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gold w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
