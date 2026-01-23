import React from 'react';

interface TeamAvatarProps {
  image: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TeamAvatar: React.FC<TeamAvatarProps> = ({ 
  image, 
  name, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div className={`${sizeClasses[size]} relative rounded-full overflow-hidden border-2 border-white shadow-lg`}>
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover"
      />
      {/* Gold border effect on hover */}
      <div className="absolute inset-0 border-2 border-transparent hover:border-gold rounded-full transition-all duration-300"></div>
    </div>
  );
};
