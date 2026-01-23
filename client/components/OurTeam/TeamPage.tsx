import React from 'react';
import { TeamMember } from './TeamMember';
import { TeamCategory } from './TeamCategory';
import { ContactInfo } from './ContactInfo';
import { teamMembers } from '@/data/teamData';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-luxury-black mb-6 tracking-tight">
          MEET OUR TEAM
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
          Meet the passionate professionals who drive our success and share our vision for excellence.
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-gold via-gold-dark to-gold mx-auto rounded-full"></div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.id}
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
