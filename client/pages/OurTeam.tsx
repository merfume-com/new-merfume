import React from 'react';
import { TeamMember } from '@/components/OurTeam/TeamMember';
import { TeamCategory } from '@/components/OurTeam/TeamCategory';
import { ContactInfo } from '@/components/OurTeam/ContactInfo';
import Navigation from '@/components/Navigation';

// Add image URLs for each team member
const teamData = [
  {
    name: "Syed Musaib Ali",
    position: "CEO & Founder of Merfumes",
    quote: "At NHA, our journey is driven by a relentless pursuit of excellence and a shared vision of success. We believe that every challenge presents an opportunity for innovation and growth. As a team, we are committed to pushing the boundaries of what's possible and turning our collective aspirations into reality. Our success is a testament to the dedication and talent of each individual who contributes to our mission.",
    image: "https://res.cloudinary.com/dhkdhupwg/image/upload/v1769090232/syed-musaib-ali_ikfbdh.jpg",
    imageAlt: "Portrait of Syed Musaib Ali"
  },
  {
    name: "Nilendu Mitra",
    position: "Head - Human Resources & Office Administration",
    quote: "I personally believe in the art of learning to deliver exemplary results without limiting creativity and innovation which are both inspiring and motivation at NHA we are very passionate about open and entrepreneurial culture which not only ensures high productivity but also inspires our team members.",
    image: "/images/team/nilendu-mitra.png",
    imageAlt: "Portrait of Nilendu Mitra"
  },
  {
    name: "Siddhi Diwadkar",
    position: "Head - Human Resources & Office Administration",
    quote: "We at NHA are a young, dynamic, full believe in complete ownership of our projects, pure partnership and an enhanced work ethic... We share a great passion to achieve our highest potential and push each other to do so. Yet, in all of this, we don't forget to have fun and rejoice all the way!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
    imageAlt: "Portrait of Siddhi Diwadkar"
  },
  {
    name: "Ameet Shah",
    position: "Vice President - Ecommerce",
    quote: "Your attitude is critical to success. If you expect things to be difficult, it becomes harder. Every day will bring a new challenge, keep moving with a positive attitude & things will fall in place. This is what we follow at NHA (New Horizons of Ajmal) & keep taking new challenges.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    imageAlt: "Portrait of Ameet Shah"
  },
  {
    name: "Nadeem Ghaznavi",
    position: "Head of Commercial Operations",
    quote: "The real competitive advantage in any business is just one word and that is 'People' We at NHA ensure that our open and fun working culture not only motivates but also retains our talented people.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
    imageAlt: "Portrait of Nadeem Ghaznavi"
  },
  {
    name: "Omprakash Matolia",
    position: "Head of Account and Finance",
    quote: "At NHA we believe that if you save a dollar, you'll add a dollar to the bottom line. But if you save a dollar and you reinvest that back into the business in a disciplined/return-based way, that dollar is actually worth a lot more in the future. And that's really what running a business is all about. No longer is our job just about revenue, costs and budgets. We strongly emphasis on managing risk, driving performance and ensuring the integrity and accuracy of company information.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
    imageAlt: "Portrait of Omprakash Matolia"
  },
  {
    name: "Shweta Kevalramani",
    position: "Business Head - Offline Sales",
    quote: "I am a firm believer of efforts and hard work which constructs the bridge that connects your dreams to reality. This gives me that Space and culture to paint my own canvas of dreams to reality. Every day is new possibility as I am not the same person as yesterday.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face",
    imageAlt: "Portrait of Shweta Kevalramani"
  },
  {
    name: "Nilesh Kamath",
    position: "National Sales Manager - Key Accounts",
    quote: "Success is driven by the unwavering pursuit of excellence and a commitment to turning challenges into opportunities. Embracing a forward-thinking mindset and tackling obstacles with creativity and determination lead to exceptional achievements and set new standards. Every endeavor is a chance to innovate, push boundaries, and transform aspirations into reality, reflecting the power of dedication and vision.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=500&fit=crop&crop=face",
    imageAlt: "Portrait of Nilesh Kamath"
  },
  {
    name: "Dibyendu Poddar",
    position: "National Sales Manager - Distribution",
    quote: "Transforming challenges into opportunities is a hallmark of progress. A commitment to innovation and a relentless drive for success lay the groundwork for significant accomplishments and ongoing improvement.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
    imageAlt: "Portrait of Dibyendu Poddar"
  },
  {
    name: "Deepti Vaidya",
    position: "Business Lead - Ecommerce",
    quote: "Success is professional growth comes from combining ambition with resilience. Tackling tasks with a strong commitment and willingness to learn helps you advance and contribute effectively.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop&crop=face",
    imageAlt: "Portrait of Deepti Vaidya"
  }
];

const categories = [
  {
    title: "Shop by Category",
    items: [
      "Men's Perfumes",
      "Women's Perfumes",
      "Unisex Perfumes",
      "Attar",
      "Bashoori & Dashhoon",
      "Gift Sets",
      "New Arrivals"
    ]
  },
  {
    title: "Customer Service",
    items: [
      "Contact Us",
      "Order Tracking",
      "Shipping & Delivery",
      "Return & Refund",
      "Policy",
      "Perfume Care Tips",
      "Order Return"
    ]
  },
  {
    title: "Legal & Policies",
    items: [
      "Privacy Policy",
      "Terms & Conditions"
    ]
  },
  {
    title: "Our Journey Dubai",
    items: [
      "Our Journey Dubai"
    ]
  }
];

export const TeamPage: React.FC = () => {
  return (
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-luxury-black mb-6 tracking-tight">
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
