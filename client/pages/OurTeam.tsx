// import React from 'react';
// import { TeamMember } from '@/components/OurTeam/TeamMember';
// import { TeamCategory } from '@/components/OurTeam/TeamCategory';
// import { ContactInfo } from '@/components/OurTeam/ContactInfo';
// import Navigation from '@/components/Navigation';

// // Add image URLs for each team member
// const teamData = [
//   {
//     name: "Syed Musaib Ali",
//     position: "CEO & Founder of Merfumes",
//     quote: "At NHA, our journey is driven by a relentless pursuit of excellence and a shared vision of success. We believe that every challenge presents an opportunity for innovation and growth. As a team, we are committed to pushing the boundaries of what's possible and turning our collective aspirations into reality. Our success is a testament to the dedication and talent of each individual who contributes to our mission.",
//     image: "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769090232/syed-musaib-ali_ikfbdh.jpg",
//     imageAlt: "Portrait of Syed Musaib Ali"
//   },
//   {
//     name: "Nilendu Mitra",
//     position: "Core & Production Team Manager",
//     quote: "I personally believe in the art of learning to deliver exemplary results without limiting creativity and innovation which are both inspiring and motivation at NHA we are very passionate about open and entrepreneurial culture which not only ensures high productivity but also inspires our team members.",
//     image: "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769244892/Merfume_Team_Member_2_l72zla.png",
//     imageAlt: "Portrait of Nilendu Mitra"
//   },
//   {
//     name: "Siddhi Diwadkar",
//     position: "Inventory & Warehouse Executive",
//     quote: "We at NHA are a young, dynamic, full believe in complete ownership of our projects, pure partnership and an enhanced work ethic... We share a great passion to achieve our highest potential and push each other to do so. Yet, in all of this, we don't forget to have fun and rejoice all the way!",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
//     imageAlt: "Portrait of Siddhi Diwadkar"
//   },
//   {
//     name: "Ameet Shah",
//     position: "Packaging & Dispatch Supervisor",
//     quote: "Your attitude is critical to success. If you expect things to be difficult, it becomes harder. Every day will bring a new challenge, keep moving with a positive attitude & things will fall in place. This is what we follow at NHA (New Horizons of Ajmal) & keep taking new challenges.",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
//     imageAlt: "Portrait of Ameet Shah"
//   },
//   {
//     name: "Nadeem Ghaznavi",
//     position: "E-commerce & Marketplace Manager",
//     quote: "The real competitive advantage in any business is just one word and that is 'People' We at NHA ensure that our open and fun working culture not only motivates but also retains our talented people.",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
//     imageAlt: "Portrait of Nadeem Ghaznavi"
//   },
//   {
//     name: "Omprakash Matolia",
//     position: "Customer Experience Manager",
//     quote: "At NHA we believe that if you save a dollar, you'll add a dollar to the bottom line. But if you save a dollar and you reinvest that back into the business in a disciplined/return-based way, that dollar is actually worth a lot more in the future. And that's really what running a business is all about. No longer is our job just about revenue, costs and budgets. We strongly emphasis on managing risk, driving performance and ensuring the integrity and accuracy of company information.",
//     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
//     imageAlt: "Portrait of Omprakash Matolia"
//   },
//   {
//     name: "Shweta Kevalramani",
//     position: "Talent Acquisition Executive",
//     quote: "I am a firm believer of efforts and hard work which constructs the bridge that connects your dreams to reality. This gives me that Space and culture to paint my own canvas of dreams to reality. Every day is new possibility as I am not the same person as yesterday.",
//     image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face",
//     imageAlt: "Portrait of Shweta Kevalramani"
//   },
//   {
//     name: "Nilesh Kamath",
//     position: "Franchise Development Manager",
//     quote: "Success is driven by the unwavering pursuit of excellence and a commitment to turning challenges into opportunities. Embracing a forward-thinking mindset and tackling obstacles with creativity and determination lead to exceptional achievements and set new standards. Every endeavor is a chance to innovate, push boundaries, and transform aspirations into reality, reflecting the power of dedication and vision.",
//     image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=500&fit=crop&crop=face",
//     imageAlt: "Portrait of Nilesh Kamath"
//   },
//   {
//     name: "Dibyendu Poddar",
//     position: "Key Account Manager (Distributors & Wholesalers)",
//     quote: "Transforming challenges into opportunities is a hallmark of progress. A commitment to innovation and a relentless drive for success lay the groundwork for significant accomplishments and ongoing improvement.",
//     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
//     imageAlt: "Portrait of Dibyendu Poddar"
//   },
//   {
//     name: "Deepti Vaidya",
//     position: "HR & Compliance",
//     quote: "Success is professional growth comes from combining ambition with resilience. Tackling tasks with a strong commitment and willingness to learn helps you advance and contribute effectively.",
//     image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop&crop=face",
//     imageAlt: "Portrait of Deepti Vaidya"
//   }
// ];

// const categories = [
//   {
//     title: "Shop by Category",
//     items: [
//       "Men's Perfumes",
//       "Women's Perfumes",
//       "Unisex Perfumes",
//       "Attar",
//       "Bashoori & Dashhoon",
//       "Gift Sets",
//       "New Arrivals"
//     ]
//   },
//   {
//     title: "Customer Service",
//     items: [
//       "Contact Us",
//       "Order Tracking",
//       "Shipping & Delivery",
//       "Return & Refund",
//       "Policy",
//       "Perfume Care Tips",
//       "Order Return"
//     ]
//   },
//   {
//     title: "Legal & Policies",
//     items: [
//       "Privacy Policy",
//       "Terms & Conditions"
//     ]
//   },
//   {
//     title: "Our Journey Dubai",
//     items: [
//       "Our Journey Dubai"
//     ]
//   }
// ];

// export const TeamPage: React.FC = () => {
//   return (
//     // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       {/* Header */}
//       <div className="text-center mb-16 px-4 sm:px-6 lg:px-8 py-12">
//         <h1 className="text-4xl font-bold text-luxury-black mb-6 tracking-tight">
//           MEET OUR TEAM
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
//           Meet the passionate professionals who drive our success and share our vision for excellence.
//         </p>
//         <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
//       </div>

//       {/* Team Members Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//         {teamData.map((member, index) => (
//           <TeamMember
//             key={index}
//             name={member.name}
//             position={member.position}
//             quote={member.quote}
//             image={member.image}
//             imageAlt={member.imageAlt}
//           />
//         ))}
//       </div>

//       {/* Categories Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//         {categories.map((category, index) => (
//           <TeamCategory
//             key={index}
//             title={category.title}
//             items={category.items}
//           />
//         ))}
//       </div>

//       {/* Contact Section */}
//       <ContactInfo />
//     </div>
//   );
// };


// import React from 'react';
// import { TeamMember } from '@/components/OurTeam/TeamMember';
// import { TeamCategory } from '@/components/OurTeam/TeamCategory';
// import { ContactInfo } from '@/components/OurTeam/ContactInfo';
// import Navigation from '@/components/Navigation';

// // Team data with custom image sizes
// const teamData = [
//   {
//     name: "Syed Musaib Ali",
//     position: "CEO & Founder of Merfumes",
//     quote: "In every drop of fragrance lies a memory waiting to be created. We don't just sell perfumes; we craft stories that linger in the soul long after the scent has faded. Our vision is to transform ordinary moments into extraordinary memories through the power of scent. Just as each person has a unique essence, so too should every fragrance tell a personal tale of elegance, passion, and timeless beauty.",
//     image: "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769090232/syed-musaib-ali_ikfbdh.jpg",
//     imageAlt: "Portrait of Syed Musaib Ali",
//     imageSize: "xxlarge"
//   },
//   {
//     "name": "Nahid Khan",
//     "position": "Core & Production Team Manager",
//     "quote": "Creating luxury fragrances is both an art and a science. In our production process, we blend traditional craftsmanship with modern innovation to ensure every bottle meets our exacting standards. I believe that true creativity thrives within a framework of precision where attention to detail meets boundless imagination. Each scent we produce tells a story, and it's my responsibility to ensure that story is told flawlessly from formulation to final product.",
//     "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769247008/team_member_2_qzmsfs.jpg",
//     "imageAlt": "Portrait of Nahid Khan",
//     "imageSize": "xxlarge"
//   },
//   {
//     "name": "Sarin Ahmed",
//     "position": "Inventory & Warehouse Executive",
//     "quote": "The journey of our fragrances doesn't end with creation it begins in our meticulous inventory management. Like a perfectly balanced perfume, our warehouse operations require harmony between precision and anticipation. Every bottle has its place, every scent its story, and ensuring this symphony flows seamlessly is what allows our customers to experience luxury without compromise. We manage more than stock; we safeguard the promise of quality.",
//     "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769247220/team_member_3_mfowji.jpg",
//     "imageAlt": "Portrait of Sarin Ahmed",
//     "imageSize": "xxlarge"
//   },
//   {
//     "name": "Yusuf Rahman",
//     "position": "Packaging & Dispatch Supervisor",
//     "quote": "The final touch before a fragrance finds its home is where artistry meets functionality. Our packaging isn't just protection—it's the first tangible experience of luxury. Each box we prepare carries not just a bottle, but the anticipation of discovery. We ensure that from our hands to our customers', every item arrives as perfect as when it left our facility, because the unboxing experience is part of the fragrance journey itself.",
//     "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769260071/Merfume_Packaging_Team_Member_photo_cotpcb.jpg",
//     "imageAlt": "Portrait of Yusuf Rahman",
//     "imageSize": "xxlarge"
//   },
//   {
//     "name": "Faisal Ahmed",
//     "position": "E-commerce & Marketplace Manager",
//     "quote": "In the digital world, a fragrance must speak through more than just scent. We create virtual experiences that capture the essence of luxury, translating olfactory notes into compelling stories online. Every click, scroll, and purchase is an opportunity to connect someone with their perfect scent. Our mission is to make the discovery of luxury fragrances as seamless and personalized as the scents themselves.",
//     "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769260206/Merfume_E-commerce_and_MarketPlace_manager_team_member_wxgzqp.jpg",
//     "imageAlt": "Portrait of Faisal Ahmed",
//     "imageSize": "xxlarge"
//   },
//   {
//     "name": "Elina Zahra",
//     "position": "Customer Experience Manager",
//     "quote": "A fragrance isn't truly experienced until it becomes part of someone's story. My role is to ensure that from the first inquiry to years of loyalty, every interaction with Merfume feels personal and exceptional. We don't just sell scents we build relationships. Because the perfect fragrance might last hours, but a perfect experience lasts a lifetime.",
//     "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769260453/Merfume_Customer_Experience_Manager_Team_memeber_photo_ywgonq.jpg",
//     "imageAlt": "Portrait of Elina Zahra",
//     "imageSize": "xxlarge"
//   },
//   {
//     "name": "Behrad Noor",
//     "position": "Franchise Development Manager",
//     "quote": "Expanding the world of Merfume is about sharing our passion for luxury fragrances with new communities. Each franchise isn't just a business location it's a new home for scent enthusiasts. We look for partners who understand that we're not just selling products; we're inviting people into an experience, creating spaces where fragrance becomes part of local culture and personal identity.",
//     "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769259718/team_member_4.jpg_ztbrfw.jpg",
//     "imageAlt": "Portrait of Behrad Noor",
//     "imageSize": "xxlarge"
//   },
//   {
//     "name": "Dibyendu Poddar",
//     "position": "Key Account Manager (Distributors & Wholesalers)",
//     "quote": "Building relationships with our partners is like crafting a perfect blend it requires balance, understanding, and shared vision. We work closely with distributors to ensure our fragrances reach every corner with the same quality and care we put into creating them. It's about creating a network that shares our commitment to excellence, ensuring that wherever you find Merfume, you find luxury.",
//     "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769260651/Merfume_Key_Account_Manager_Team_Member_ak3pqt.jpg",
//     "imageAlt": "Portrait of Dibyendu Poddar",
//     "imageSize": "xxlarge"
//   },
//   {
//     "name": "Sarah Khan",
//     "position": "HR & Compliance",
//     "quote": "Our greatest asset at Merfume isn't our fragrances it's our people. I help build a team that's as exceptional as the scents we create, ensuring our workplace nurtures creativity, values integrity, and celebrates diversity. We cultivate an environment where passion for perfumery meets professional excellence, because creating luxury requires a team that feels valued, inspired, and empowered.",
//     "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769259902/Merfumes_HR_Team_Member_photo.jpg_jgmdti.jpg",
//     "imageAlt": "Portrait of Sarah Khan",
//     "imageSize": "xxlarge"
//   }
// ];

// const categories = [
//   // {
//   //   title: "Shop by Category",
//   //   items: [
//   //     "Men's Perfumes",
//   //     "Women's Perfumes",
//   //     "Unisex Perfumes",
//   //     "Attar",
//   //     "Bashoori & Dashhoon",
//   //     "Gift Sets",
//   //     "New Arrivals"
//   //   ]
//   // },
//   // {
//   //   title: "Customer Service",
//   //   items: [
//   //     "Contact Us",
//   //     "Order Tracking",
//   //     "Shipping & Delivery",
//   //     "Return & Refund",
//   //     "Policy",
//   //     "Perfume Care Tips",
//   //     "Order Return"
//   //   ]
//   // },
//   // {
//   //   title: "Legal & Policies",
//   //   items: [
//   //     "Privacy Policy",
//   //     "Terms & Conditions"
//   //   ]
//   // },
//   // {
//   //   title: "Our Journey Dubai",
//   //   items: [
//   //     "Our Journey Dubai"
//   //   ]
//   // }
// ];

// export const TeamPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       {/* Header */}
//       <div className="text-center mb-16 px-4 sm:px-6 lg:px-8 py-12">
//         <h1 className="text-4xl font-bold text-luxury-black mb-6 tracking-tight">
//           MEET OUR TEAM
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
//           Meet the passionate professionals who drive our success and share our vision for excellence.
//         </p>
//         <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
//       </div>

//       {/* Team Members Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//         {teamData.map((member, index) => (
//           <TeamMember
//             key={index}
//             name={member.name}
//             position={member.position}
//             quote={member.quote}
//             image={member.image}
//             imageAlt={member.imageAlt}
//             imageSize={member.imageSize as any} // Type assertion
//           />
//         ))}
//       </div>

//       {/* Categories Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//         {categories.map((category, index) => (
//           <TeamCategory
//             key={index}
//             title={category.title}
//             items={category.items}
//           />
//         ))}
//       </div>

//       {/* Contact Section */}
//       <ContactInfo />
//     </div>
//   );
// };


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowRight, Star, Sparkles, Gift, Flag, Award } from "lucide-react";
import { useState, useEffect } from "react"; // Added for countdown

export default function Home() {
  // Countdown timer state for 3 days - Start with 2 days, 47 minutes, 19 seconds as shown in image
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 47,
    seconds: 19,
    isOfferActive: true
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ 
          days: 0, 
          hours: 0, 
          minutes: 0, 
          seconds: 0,
          isOfferActive: false 
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ 
        days, 
        hours, 
        minutes, 
        seconds,
        isOfferActive: true 
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // SINGLE Indian Flag SVG Component - Responsive
  const IndianFlagIcon = ({ className = "h-5 w-5" }) => (
    <svg 
      className={className}
      viewBox="0 0 24 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Saffron Stripe */}
      <rect x="0" y="0" width="24" height="5.33" fill="#FF9933" />
      {/* White Stripe */}
      <rect x="0" y="5.33" width="24" height="5.33" fill="#FFFFFF" />
      {/* Green Stripe */}
      <rect x="0" y="10.66" width="24" height="5.34" fill="#138808" />
      
      {/* Ashoka Chakra - Simplified for all screen sizes */}
      <circle cx="12" cy="8" r="2.5" fill="none" stroke="#000080" strokeWidth="0.5" />
      <circle cx="12" cy="8" r="1.8" fill="#000080" />
      
      {/* 24 spokes of Ashoka Chakra */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15) * (Math.PI / 180);
        const x1 = 12 + 2.5 * Math.cos(angle);
        const y1 = 8 + 2.5 * Math.sin(angle);
        const x2 = 12 + 1 * Math.cos(angle);
        const y2 = 8 + 1 * Math.sin(angle);
        
        return (
          <line 
            key={i}
            x1={x1} 
            y1={y1} 
            x2={x2} 
            y2={y2} 
            stroke="#000080" 
            strokeWidth="0.5" 
            strokeLinecap="round"
          />
        );
      })}
      
      {/* Small dot in center */}
      <circle cx="12" cy="8" r="0.3" fill="#FFFFFF" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Republic Day Special Offer Banner - WITH REAL INDIAN FLAG */}
      <div className="bg-gradient-to-r from-saffron via-white to-green relative overflow-hidden border-b-2 border-saffron/30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI1IiBmaWxsPSIjRkY5OTMzIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 md:py-3">
          <div className="flex flex-row items-center justify-between gap-1 md:gap-4 overflow-x-auto scrollbar-hide">
            
            {/* Left side - Text with Real Indian Flag - SINGLE FLAG */}
            <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
              {/* SINGLE Indian Flag Icon - Responsive sizing */}
              <div className="relative">
                <IndianFlagIcon className="h-5 w-7 sm:h-6 sm:w-9 md:h-8 md:w-12" />
                <div className="absolute -top-1 -right-1 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                </div>
              </div>
              <div className="flex items-center gap-1 md:gap-2 flex-nowrap whitespace-nowrap">
                <h3 className="text-[10px] sm:text-xs md:text-lg font-bold text-gray-900 tracking-wide uppercase">
                  Republic Day SALE |
                </h3>
                <span className="text-[10px] sm:text-xs md:text-lg font-black text-red-600 animate-pulse">
                  FLAT 26% OFF
                </span>
                <span className="text-[10px] sm:text-xs md:text-lg font-bold text-gray-900">
                  IN
                </span>
              </div>
            </div>

            {/* Center - Countdown Timer */}
            <div className="flex items-center gap-0.5 md:gap-2 mx-1 md:mx-2 flex-shrink-0">
              {/* Days */}
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-saffron/20">
                <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
                  DD
                </div>
              </div>
              
              <div className="text-gray-900 font-black text-xs md:text-lg pb-2">:</div>
              
              {/* Hours */}
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-saffron/20">
                <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
                  HH
                </div>
              </div>
              
              <div className="text-gray-900 font-black text-xs md:text-lg pb-2">:</div>
              
              {/* Minutes */}
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-saffron/20">
                <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
                  MM
                </div>
              </div>
              
              <div className="text-gray-900 font-black text-xs md:text-lg pb-2">:</div>
              
              {/* Seconds */}
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-saffron/20 relative">
                <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
                  SS
                </div>
                {/* Blinking dot for seconds */}
                <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Right side - Button */}
            <Link to="/store" className="flex-shrink-0">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-base shadow hover:shadow transition-all rounded whitespace-nowrap">
                SHOP NOW
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Indian Flag Stripes Decoration */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-white to-green"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-white to-green"></div>
        
        {/* Mini Indian Flags in corners - REMOVED to avoid multiple flags */}
      </div>

      {/* Rest of your existing code with updated flags */}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-accent/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWY0ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0yLTYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
                alt="Merfume - Luxury Perfumes"
                className="h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Discover Your
              <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
                Signature Scent
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the world of luxury fragrances. Each bottle tells a
              story, each scent creates a memory. Welcome to Merfume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/store">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-luxury-black font-semibold px-8 py-4 text-lg group"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gold text-gold hover:bg-gold hover:text-luxury-black px-8 py-4 text-lg"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Added Republic Day mention */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-saffron/20 via-white/20 to-green/20 backdrop-blur-sm rounded-full px-6 py-2 border border-saffron/30">
              <IndianFlagIcon className="h-5 w-7" />
              <span className="text-sm font-semibold text-gray-800">Republic Day Special</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Merfume?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to bringing you the finest fragrances with
              unmatched quality and service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards remain same */}
            <Card className="border-border/50 hover:border-gold/50 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <Sparkles className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Premium Quality
                </h3>
                <p className="text-muted-foreground">
                  Each fragrance is carefully curated and sourced from the
                  world's finest perfume houses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <Star className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Expert Curation
                </h3>
                <p className="text-muted-foreground">
                  Our perfume experts hand-select each fragrance to ensure
                  exceptional quality and uniqueness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <Gift className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Luxury Experience
                </h3>
                <p className="text-muted-foreground">
                  From packaging to delivery, every detail is designed to
                  provide a luxurious experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated for Republic Day */}
      <section className="py-24 bg-gradient-to-r from-gold/10 via-accent/20 to-gold/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-saffron to-green text-white rounded-full px-6 py-2">
            <IndianFlagIcon className="h-5 w-7" />
            <span className="text-sm font-bold">Republic Day Special</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Republic Day Special - Save 26% on Premium Fragrances!
          </h2>
          <div className="flex justify-center items-center gap-2 md:gap-3 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-2 md:p-3">
              <div className="text-lg md:text-xl font-black text-gray-900">{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="text-[8px] md:text-xs font-bold text-gray-600">DD</div>
            </div>
            <div className="text-gray-900 font-black text-sm md:text-lg">:</div>
            <div className="bg-white rounded-lg shadow-lg p-2 md:p-3">
              <div className="text-lg md:text-xl font-black text-gray-900">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-[8px] md:text-xs font-bold text-gray-600">HH</div>
            </div>
            <div className="text-gray-900 font-black text-sm md:text-lg">:</div>
            <div className="bg-white rounded-lg shadow-lg p-2 md:p-3">
              <div className="text-lg md:text-xl font-black text-gray-900">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-[8px] md:text-xs font-bold text-gray-600">MM</div>
            </div>
            <div className="text-gray-900 font-black text-sm md:text-lg">:</div>
            <div className="bg-white rounded-lg shadow-lg p-2 md:p-3">
              <div className="text-lg md:text-xl font-black text-gray-900">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-[8px] md:text-xs font-bold text-gray-600">SS</div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Celebrate Republic Day with exclusive 26% discount. Offer ends soon!
          </p>
          <Link to="/store">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Shop Now - Get 26% OFF
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
                alt="Merfume"
                className="h-20 w-auto mb-4 brightness-110"
              />
              <p className="text-cream/80 max-w-md">
                Discover the world of luxury fragrances with Merfume. Each scent
                tells a story, each bottle holds a memory.
              </p>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ceo-vision"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    CEO Vision
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-12 pt-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <IndianFlagIcon className="h-6 w-8" />
              <p className="text-cream/80 font-medium">Celebrating Republic Day with Special Offers</p>
            </div>
            <p className="text-cream/60">
              © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
