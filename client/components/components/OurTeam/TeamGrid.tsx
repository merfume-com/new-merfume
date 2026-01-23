import React from 'react';
import { TeamAvatar } from './TeamAvatar';
import { teamMembers } from '@/data/teamData';

export const TeamGrid: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-luxury-black text-center mb-12">
          Our Leadership Team
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="mb-4 relative">
                <TeamAvatar 
                  image={member.image} 
                  name={member.name}
                  size="lg"
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 rounded-full transition-all duration-300"></div>
              </div>
              
              <h3 className="font-semibold text-luxury-black group-hover:text-gold-dark transition-colors duration-300">
                {member.name.split(' ')[0]}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {member.position.split(',')[0]}
              </p>
              
              {/* Hover Tooltip */}
              <div className="absolute bottom-full mb-2 hidden group-hover:block bg-white p-4 rounded-lg shadow-xl border border-gray-100 min-w-[250px] z-50">
                <p className="text-sm text-gray-700 italic mb-2">
                  "{member.quote.substring(0, 100)}..."
                </p>
                <button className="text-gold text-sm font-medium hover:text-gold-dark transition-colors duration-300">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
