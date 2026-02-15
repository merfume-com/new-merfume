// import React from 'react';

// export const ContactInfo: React.FC = () => {
//   return (
//     <div className="bg-gradient-to-r from-luxury-black to-gray-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center text-gold">
//           CONTACT US
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Left Column - Timings */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4 text-cream">Timings:</h3>
//             <p className="text-gray-300 mb-6">
//               Monday to Friday / 10am to 6pm
//             </p>
            
//             <h3 className="text-xl font-semibold mb-4 text-cream">Email:</h3>
//             <a 
//               href="mailto:ajmal.help@nha-world.com" 
//               className="text-gold hover:text-gold-dark transition-colors duration-300 text-lg"
//             >
//               merfume.s@gmail.com
//             </a>
//           </div>
          
//           {/* Right Column - Address */}
//           {/* <div>
//             <h3 className="text-xl font-semibold mb-4 text-cream">Address:</h3>
//             <p className="text-gray-300 leading-relaxed">
//               1 Aerocity, Ground Floor,<br />
//               Office no. 02/03, Safed Pul,<br />
//               Sarkadia, Andheri Kurla Rd,<br />
//               Andheri East, Mumbai<br />
//               400072
//             </p>
//           </div> */}
//         </div>
        
//         {/* Footer Note */}
//         <div className="mt-12 pt-8 border-t border-gold/30 text-center">
//           <p className="text-gray-400">
//             © 2026, Ajmal Perfumes India Powered by Marmeto
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };


import React from 'react';
import { Link } from 'react-router-dom';

export const ContactInfo: React.FC = () => {
  return (
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
                  <Link
                    to="/track-order"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Shipping Policies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Privacy Policies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-to-manage-fragrance"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Fragrance care tips
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-12 pt-8 text-center">
            <p className="text-cream/60">
              © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
            </p>
          </div>
        </div>
      </footer>
  );
};
