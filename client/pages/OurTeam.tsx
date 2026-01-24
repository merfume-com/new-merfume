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


import React from 'react';
import { TeamMember } from '@/components/OurTeam/TeamMember';
import { TeamCategory } from '@/components/OurTeam/TeamCategory';
import { ContactInfo } from '@/components/OurTeam/ContactInfo';
import Navigation from '@/components/Navigation';

// Team data with custom image sizes
const teamData = [
  {
    name: "Syed Musaib Ali",
    position: "CEO & Founder of Merfumes",
    quote: "In every drop of fragrance lies a memory waiting to be created. We don't just sell perfumes; we craft stories that linger in the soul long after the scent has faded. Our vision is to transform ordinary moments into extraordinary memories through the power of scent. Just as each person has a unique essence, so too should every fragrance tell a personal tale of elegance, passion, and timeless beauty.",
    image: "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769090232/syed-musaib-ali_ikfbdh.jpg",
    imageAlt: "Portrait of Syed Musaib Ali",
    imageSize: "xxlarge"
  },
  {
    "name": "Nahid Khan",
    "position": "Core & Production Team Manager",
    "quote": "Creating luxury fragrances is both an art and a science. In our production process, we blend traditional craftsmanship with modern innovation to ensure every bottle meets our exacting standards. I believe that true creativity thrives within a framework of precision—where attention to detail meets boundless imagination. Each scent we produce tells a story, and it's my responsibility to ensure that story is told flawlessly from formulation to final product.",
    "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769247008/team_member_2_qzmsfs.jpg",
    "imageAlt": "Portrait of Nahid Khan",
    "imageSize": "xxlarge"
  },
  {
    "name": "Sarin Ahmed",
    "position": "Inventory & Warehouse Executive",
    "quote": "The journey of our fragrances doesn't end with creation—it begins in our meticulous inventory management. Like a perfectly balanced perfume, our warehouse operations require harmony between precision and anticipation. Every bottle has its place, every scent its story, and ensuring this symphony flows seamlessly is what allows our customers to experience luxury without compromise. We manage more than stock; we safeguard the promise of quality.",
    "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769247220/team_member_3_mfowji.jpg",
    "imageAlt": "Portrait of Sarin Ahmed",
    "imageSize": "xxlarge"
  },
  {
    "name": "Yusuf Rahman",
    "position": "Packaging & Dispatch Supervisor",
    "quote": "The final touch before a fragrance finds its home is where artistry meets functionality. Our packaging isn't just protection—it's the first tangible experience of luxury. Each box we prepare carries not just a bottle, but the anticipation of discovery. We ensure that from our hands to our customers', every item arrives as perfect as when it left our facility, because the unboxing experience is part of the fragrance journey itself.",
    "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769260071/Merfume_Packaging_Team_Member_photo_cotpcb.jpg",
    "imageAlt": "Portrait of Yusuf Rahman",
    "imageSize": "xxlarge"
  },
  {
    "name": "Faisal Ahmed",
    "position": "E-commerce & Marketplace Manager",
    "quote": "In the digital world, a fragrance must speak through more than just scent. We create virtual experiences that capture the essence of luxury, translating olfactory notes into compelling stories online. Every click, scroll, and purchase is an opportunity to connect someone with their perfect scent. Our mission is to make the discovery of luxury fragrances as seamless and personalized as the scents themselves.",
    "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769260206/Merfume_E-commerce_and_MarketPlace_manager_team_member_wxgzqp.jpg",
    "imageAlt": "Portrait of Faisal Ahmed",
    "imageSize": "xxlarge"
  },
  {
    "name": "Elina Zahra",
    "position": "Customer Experience Manager",
    "quote": "A fragrance isn't truly experienced until it becomes part of someone's story. My role is to ensure that from the first inquiry to years of loyalty, every interaction with Merfume feels personal and exceptional. We don't just sell scents—we build relationships. Because the perfect fragrance might last hours, but a perfect experience lasts a lifetime.",
    "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769260453/Merfume_Customer_Experience_Manager_Team_memeber_photo_ywgonq.jpg",
    "imageAlt": "Portrait of Elina Zahra",
    "imageSize": "xxlarge"
  },
  {
    "name": "Behrad Noor",
    "position": "Franchise Development Manager",
    "quote": "Expanding the world of Merfume is about sharing our passion for luxury fragrances with new communities. Each franchise isn't just a business location it's a new home for scent enthusiasts. We look for partners who understand that we're not just selling products; we're inviting people into an experience, creating spaces where fragrance becomes part of local culture and personal identity.",
    "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769259718/team_member_4.jpg_ztbrfw.jpg",
    "imageAlt": "Portrait of Behrad Noor",
    "imageSize": "xxlarge"
  },
  {
    "name": "Dibyendu Poddar",
    "position": "Key Account Manager (Distributors & Wholesalers)",
    "quote": "Building relationships with our partners is like crafting a perfect blend—it requires balance, understanding, and shared vision. We work closely with distributors to ensure our fragrances reach every corner with the same quality and care we put into creating them. It's about creating a network that shares our commitment to excellence, ensuring that wherever you find Merfume, you find luxury.",
    "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769260651/Merfume_Key_Account_Manager_Team_Member_ak3pqt.jpg",
    "imageAlt": "Portrait of Dibyendu Poddar",
    "imageSize": "xxlarge"
  },
  {
    "name": "Sarah Khan",
    "position": "HR & Compliance",
    "quote": "Our greatest asset at Merfume isn't our fragrances—it's our people. I help build a team that's as exceptional as the scents we create, ensuring our workplace nurtures creativity, values integrity, and celebrates diversity. We cultivate an environment where passion for perfumery meets professional excellence, because creating luxury requires a team that feels valued, inspired, and empowered.",
    "image": "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769259902/Merfumes_HR_Team_Member_photo.jpg_jgmdti.jpg",
    "imageAlt": "Portrait of Sarah Khan",
    "imageSize": "xxlarge"
  }
];

const categories = [
  // {
  //   title: "Shop by Category",
  //   items: [
  //     "Men's Perfumes",
  //     "Women's Perfumes",
  //     "Unisex Perfumes",
  //     "Attar",
  //     "Bashoori & Dashhoon",
  //     "Gift Sets",
  //     "New Arrivals"
  //   ]
  // },
  // {
  //   title: "Customer Service",
  //   items: [
  //     "Contact Us",
  //     "Order Tracking",
  //     "Shipping & Delivery",
  //     "Return & Refund",
  //     "Policy",
  //     "Perfume Care Tips",
  //     "Order Return"
  //   ]
  // },
  // {
  //   title: "Legal & Policies",
  //   items: [
  //     "Privacy Policy",
  //     "Terms & Conditions"
  //   ]
  // },
  // {
  //   title: "Our Journey Dubai",
  //   items: [
  //     "Our Journey Dubai"
  //   ]
  // }
];

export const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <div className="text-center mb-16 px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-luxury-black mb-6 tracking-tight">
          MEET OUR TEAM
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
          Meet the passionate professionals who drive our success and share our vision for excellence.
        </p>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {teamData.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            position={member.position}
            quote={member.quote}
            image={member.image}
            imageAlt={member.imageAlt}
            imageSize={member.imageSize as any} // Type assertion
          />
        ))}
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {categories.map((category, index) => (
          <TeamCategory
            key={index}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>

      {/* Contact Section */}
      <ContactInfo />
    </div>
  );
};
