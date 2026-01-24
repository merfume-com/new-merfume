// import React from 'react';

// export interface TeamMemberProps {
//   name: string;
//   position: string;
//   quote: string;
//   image: string;
//   imageAlt?: string;
// }

// export const TeamMember: React.FC<TeamMemberProps> = ({ 
//   name, 
//   position, 
//   quote, 
//   image,
//   imageAlt = `${name}'s portrait`
// }) => {
//   return (
//     <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gold/30 transform hover:-translate-y-1">
//       {/* Gold accent line */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-dark z-10"></div>
      
//       <div className="flex flex-col h-full">
//         {/* Improved Image Section - Full Fill */}
//         <div className="relative overflow-hidden h-64">
//           {/* Image Container with Face Detection */}
//           <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
//             <div className="relative w-full h-full overflow-hidden">
//               <img 
//                 src={image} 
//                 alt={imageAlt}
//                 className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
//                 style={{
//                   objectPosition: 'center 1%', // Face ko upper center mein rakhne ke liye
//                 }}
//                 loading="lazy"
//                 onError={(e) => {
//                   e.currentTarget.style.display = 'none';
//                   const container = e.currentTarget.parentElement?.parentElement;
//                   if (container) {
//                     // Show initials if image fails to load
//                     const initials = name
//                       .split(' ')
//                       .map(n => n[0])
//                       .join('')
//                       .toUpperCase()
//                       .substring(0, 2);
                    
//                     const initialsDiv = document.createElement('div');
//                     initialsDiv.className = 'flex items-center justify-center w-full h-full';
//                     initialsDiv.innerHTML = `
//                       <div class="flex flex-col items-center justify-center gap-2">
//                         <div class="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-xl">
//                           <span class="text-white text-3xl font-bold">${initials}</span>
//                         </div>
//                         <span class="text-gray-600 font-medium">${name}</span>
//                       </div>
//                     `;
//                     container.appendChild(initialsDiv);
//                   }
//                 }}
//               />
//             </div>
            
//             {/* Smart Face Highlight Overlay */}
//             <div className="absolute inset-0 pointer-events-none">
//               {/* Top gradient for face area */}
//               <div 
//                 className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/5 to-transparent"
//                 style={{
//                   maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 70%)',
//                   WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 70%)'
//                 }}
//               />
              
//               {/* Bottom gradient for text readability */}
//               <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
//             </div>
//           </div>
          
//           {/* Position badge - Always visible */}
//           <div className="absolute bottom-4 left-0 right-0 px-4">
//             <div className="inline-block bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-white/50 max-w-full">
//               <span className="text-sm font-bold text-luxury-black truncate block tracking-wide">
//                 {position}
//               </span>
//             </div>
//           </div>
          
//           {/* Hover effect overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//         </div>
        
//         {/* Content Section */}
//         <div className="p-6 flex-1 flex flex-col">
//           {/* Name */}
//           <h3 className="text-xl font-bold text-luxury-black mb-2 group-hover:text-gold-dark transition-colors duration-300 line-clamp-1">
//             {name}
//           </h3>
          
//           {/* Full Position (mobile only) */}
//           <p className="text-gray-600 text-xs mb-4 md:hidden line-clamp-2">
//             {position}
//           </p>
          
//           {/* Separator */}
//           <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-gold-dark mb-4 rounded-full"></div>
          
//           {/* Quote */}
//           <div className="flex-1">
//             <div className="relative">
//               <div className="absolute -top-3 -left-2 text-3xl text-gold/20 font-serif">"</div>
//               <p className="text-gray-700 leading-relaxed text-base italic pl-4 line-clamp-4 min-h-[6rem]">
//                 {quote}
//               </p>
//               <div className="absolute -bottom-3 -right-2 text-3xl text-gold/20 font-serif">"</div>
//             </div>
//           </div>
          
//           {/* Read More Button */}
//           <button className="mt-4 text-gold hover:text-gold-dark text-sm font-medium transition-colors duration-300 text-left group/btn">
//             <span className="inline-flex items-center gap-2">
//               Read Full Quote
//               <svg 
//                 className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </span>
//           </button>
//         </div>
//       </div>
      
//       {/* Hover effect background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-white via-cream/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
//     </div>
//   );
// };


import React, { useState, useRef, useEffect } from 'react';

export interface TeamMemberProps {
  name: string;
  position: string;
  quote: string;
  image: string;
  imageAlt?: string;
  imageSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
}

const getImageSizeClass = (size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge') => {
  switch(size) {
    case 'small':
      return 'h-48';
    case 'medium':
      return 'h-56';
    case 'large':
      return 'h-64';
    case 'xlarge':
      return 'h-72';
    case 'xxlarge':
      return 'h-80 md:h-96';
    default:
      return 'h-64';
  }
};

export const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  position, 
  quote, 
  image,
  imageAlt = `${name}'s portrait`,
  imageSize = 'large'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  
  const imageHeightClass = getImageSizeClass(imageSize);
  
  // Check if quote text is truncated (needs read more)
  useEffect(() => {
    if (quoteRef.current) {
      const isTruncated = quoteRef.current.scrollHeight > quoteRef.current.clientHeight;
      setShowReadMore(isTruncated);
    }
  }, [quote]);
  
  const toggleQuote = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gold/30 transform hover:-translate-y-1">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-dark z-10"></div>
      
      <div className="flex flex-col h-full">
        {/* Improved Image Section */}
        <div className={`relative overflow-hidden ${imageHeightClass}`}>
          <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="relative w-full h-full overflow-hidden">
              <img 
                src={image} 
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                style={{
                  objectPosition: 'center 1%',
                }}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const container = e.currentTarget.parentElement?.parentElement;
                  if (container) {
                    const initials = name
                      .split(' ')
                      .map(n => n[0])
                      .join('')
                      .toUpperCase()
                      .substring(0, 2);
                    
                    const initialsDiv = document.createElement('div');
                    initialsDiv.className = 'flex items-center justify-center w-full h-full';
                    initialsDiv.innerHTML = `
                      <div class="flex flex-col items-center justify-center gap-2">
                        <div class="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-xl">
                          <span class="text-white text-3xl font-bold">${initials}</span>
                        </div>
                        <span class="text-gray-600 font-medium">${name}</span>
                      </div>
                    `;
                    container.appendChild(initialsDiv);
                  }
                }}
              />
            </div>
            
            {/* Smart Face Highlight Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/5 to-transparent"
                style={{
                  maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 70%)'
                }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            </div>
          </div>
          
          {/* Position badge */}
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <div className="inline-block bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-white/50 max-w-full">
              <span className="text-sm font-bold text-luxury-black truncate block tracking-wide">
                {position}
              </span>
            </div>
          </div>
          
          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Name */}
          <h3 className="text-xl font-bold text-luxury-black mb-2 group-hover:text-gold-dark transition-colors duration-300 line-clamp-1">
            {name}
          </h3>
          
          {/* Full Position */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-medium">
            {position}
          </p>
          
          {/* Separator */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-gold-dark mb-4 rounded-full"></div>
          
          {/* Quote with Expand/Collapse */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -top-3 -left-2 text-3xl text-gold/20 font-serif">"</div>
              
              <p 
                ref={quoteRef}
                className={`text-gray-700 leading-relaxed text-base italic pl-4 transition-all duration-300 ${
                  isExpanded ? '' : 'line-clamp-4'
                } ${isExpanded ? 'min-h-auto' : 'min-h-[6rem]'}`}
              >
                {quote}
              </p>
              
              <div className="absolute -bottom-3 -right-2 text-3xl text-gold/20 font-serif">"</div>
            </div>
          </div>
          
          {/* Read More / Show Less Button - Only show if needed */}
          {showReadMore && (
            <button 
              onClick={toggleQuote}
              className="mt-4 text-gold hover:text-gold-dark text-sm font-medium transition-colors duration-300 text-left group/btn"
            >
              <span className="inline-flex items-center gap-2">
                {isExpanded ? 'Show Less' : 'Read Full Quote'}
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : 'group-hover/btn:translate-x-1'
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isExpanded ? "M19 9l-7 7-7-7" : "M14 5l7 7m0 0l-7 7m7-7H3"} 
                  />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
      
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cream/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </div>
  );
};
