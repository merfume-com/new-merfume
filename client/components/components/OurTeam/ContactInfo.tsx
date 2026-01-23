import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-luxury-black to-gray-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gold">
          CONTACT US
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Timings */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cream">Timings:</h3>
            <p className="text-gray-300 mb-6">
              Monday to Friday / 10am to 6pm
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-cream">Email:</h3>
            <a 
              href="mailto:ajmal.help@nha-world.com" 
              className="text-gold hover:text-gold-dark transition-colors duration-300 text-lg"
            >
              ajmal.help@nha-world.com
            </a>
          </div>
          
          {/* Right Column - Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cream">Address:</h3>
            <p className="text-gray-300 leading-relaxed">
              1 Aerocity, Ground Floor,<br />
              Office no. 02/03, Safed Pul,<br />
              Sarkadia, Andheri Kurla Rd,<br />
              Andheri East, Mumbai<br />
              400072
            </p>
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-gold/30 text-center">
          <p className="text-gray-400">
            © 2026, Ajmal Perfumes India Powered by Marmeto
          </p>
        </div>
      </div>
    </div>
  );
};
