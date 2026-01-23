import React from 'react';

interface TeamCategoryProps {
  title: string;
  items: string[];
}

export const TeamCategory: React.FC<TeamCategoryProps> = ({ title, items }) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-100 hover:border-gold/30 transition-all duration-300">
      <h3 className="text-xl font-bold text-luxury-black mb-6 pb-3 border-b border-gold/30">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <a 
              href="#" 
              className="text-gray-700 hover:text-gold-dark hover:pl-2 transition-all duration-300 flex items-center group"
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300"></span>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
