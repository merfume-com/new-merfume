// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Navigation from "@/components/Navigation";
// import { ArrowRight, Star, Sparkles, Gift } from "lucide-react";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-accent/20">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWY0ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0yLTYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
//           <div className="text-center">
//             <div className="mb-8">
//               <img
//                 src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
//                 alt="Merfume - Luxury Perfumes"
//                 className="h-30 md:h-38 lg:h-46 w-auto mx-auto drop-shadow-lg -mt-10"
//               />
//             </div>
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
//               Discover Your
//               <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
//                 Signature Scent
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
//               Experience the world of luxury fragrances. Each bottle tells a
//               story, each scent creates a memory. Welcome to Merfume.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/store">
//                 <Button
//                   size="lg"
//                   className="bg-gold hover:bg-gold-dark text-luxury-black font-semibold px-8 py-4 text-lg group"
//                 >
//                   Explore Collection
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//               <Link to="/about">
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="border-gold text-gold hover:bg-gold hover:text-luxury-black px-8 py-4 text-lg"
//                 >
//                   Our Story
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 bg-card">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Why Choose Merfume?
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               We're committed to bringing you the finest fragrances with
//               unmatched quality and service.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="border-border/50 hover:border-gold/50 transition-colors group">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
//                   <Sparkles className="h-8 w-8 text-gold" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">
//                   Premium Quality
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Each fragrance is carefully curated and sourced from the
//                   world's finest perfume houses.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-colors group">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
//                   <Star className="h-8 w-8 text-gold" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">
//                   Expert Curation
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Our perfume experts hand-select each fragrance to ensure
//                   exceptional quality and uniqueness.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-colors group">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
//                   <Gift className="h-8 w-8 text-gold" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">
//                   Luxury Experience
//                 </h3>
//                 <p className="text-muted-foreground">
//                   From packaging to delivery, every detail is designed to
//                   provide a luxurious experience.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-gradient-to-r from-gold/10 via-accent/20 to-gold/10">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//             Ready to Find Your Perfect Fragrance?
//           </h2>
//           <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Join thousands of satisfied customers who have discovered their
//             signature scent with Merfume.
//           </p>
//           <Link to="/store">
//             <Button
//               size="lg"
//               className="bg-gold hover:bg-gold-dark text-luxury-black font-semibold px-12 py-4 text-lg"
//             >
//               Shop Now
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-luxury-black text-cream py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <img
//                 src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
//                 alt="Merfume"
//                 className="h-20 w-auto mb-4 brightness-110"
//               />
//               <p className="text-cream/80 max-w-md">
//                 Discover the world of luxury fragrances with Merfume. Each scent
//                 tells a story, each bottle holds a memory.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     to="/about"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/store"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Store
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/ceo-vision"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     CEO Vision
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Support</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Shipping Info
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Returns
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Size Guide
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-cream/20 mt-12 pt-8 text-center">
//             <p className="text-cream/60">
//               © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Navigation from "@/components/Navigation";
// import { ArrowRight, Star, Sparkles, Gift, Flag, Award } from "lucide-react";
// import { useState, useEffect } from "react"; // Added for countdown

// export default function Home() {
//   // Countdown timer state for 3 days - Start with 2 days, 47 minutes, 19 seconds as shown in image
//   const [timeLeft, setTimeLeft] = useState({
//     days: 2, // Image shows 02
//     hours: 0, // Image doesn't show hours, shows HH
//     minutes: 47, // Image shows 47
//     seconds: 19, // Image shows 19
//     isOfferActive: true
//   });

//   useEffect(() => {
//     // Set offer to start immediately for 3 days
//     const targetDate = new Date();
//     targetDate.setDate(targetDate.getDate() + 3);
//     targetDate.setHours(23, 59, 59, 999); // End of day after 3 days

//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate.getTime() - now;

//       if (distance < 0) {
//         clearInterval(timer);
//         setTimeLeft({ 
//           days: 0, 
//           hours: 0, 
//           minutes: 0, 
//           seconds: 0,
//           isOfferActive: false 
//         });
//         return;
//       }

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       setTimeLeft({ 
//         days, 
//         hours, 
//         minutes, 
//         seconds,
//         isOfferActive: true 
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Republic Day Special Offer Banner - EXACTLY LIKE IMAGE */}
//       <div className="bg-gradient-to-r from-saffron via-white to-green relative overflow-hidden border-b-2 border-saffron/30">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI1IiBmaWxsPSIjRkY5OTMzIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-10"></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
//           <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
//             {/* Text Section */}
//             <div className="flex items-center gap-2">
//               <div className="relative">
//                 <Flag className="h-6 w-6 text-saffron" />
//               </div>
//               <div className="text-center md:text-left">
//                 <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
//                   <h3 className="text-base md:text-lg font-bold text-gray-900 tracking-wide uppercase">
//                     Republic Day SALE |
//                   </h3>
//                   <span className="text-base md:text-lg font-black text-red-600 animate-pulse">
//                     FLAT 26% OFF
//                   </span>
//                   <span className="text-base md:text-lg font-bold text-gray-900">
//                     IN
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Countdown Timer - EXACTLY LIKE IMAGE */}
//             <div className="flex items-center gap-1 md:gap-2">
//               {/* Days */}
//               <div className="relative">
//                 <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-saffron/30">
//                   <div className="text-2xl md:text-3xl font-black text-gray-900 leading-none">
//                     {timeLeft.days.toString().padStart(2, '0')}
//                   </div>
//                   <div className="text-[10px] md:text-xs font-bold text-gray-600 uppercase mt-0.5">
//                     DD
//                   </div>
//                 </div>
//               </div>
              
//               <div className="text-gray-900 font-black text-lg md:text-xl pb-3">:</div>
              
//               {/* Hours (HH) - Image shows HH but we'll show actual hours */}
//               <div className="relative">
//                 <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-saffron/30">
//                   <div className="text-2xl md:text-3xl font-black text-gray-900 leading-none">
//                     {timeLeft.hours.toString().padStart(2, '0')}
//                   </div>
//                   <div className="text-[10px] md:text-xs font-bold text-gray-600 uppercase mt-0.5">
//                     HH
//                   </div>
//                 </div>
//               </div>
              
//               <div className="text-gray-900 font-black text-lg md:text-xl pb-3">:</div>
              
//               {/* Minutes */}
//               <div className="relative">
//                 <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-saffron/30">
//                   <div className="text-2xl md:text-3xl font-black text-gray-900 leading-none">
//                     {timeLeft.minutes.toString().padStart(2, '0')}
//                   </div>
//                   <div className="text-[10px] md:text-xs font-bold text-gray-600 uppercase mt-0.5">
//                     MM
//                   </div>
//                 </div>
//               </div>
              
//               <div className="text-gray-900 font-black text-lg md:text-xl pb-3">:</div>
              
//               {/* Seconds */}
//               <div className="relative">
//                 <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-saffron/30 relative">
//                   <div className="text-2xl md:text-3xl font-black text-gray-900 leading-none">
//                     {timeLeft.seconds.toString().padStart(2, '0')}
//                   </div>
//                   <div className="text-[10px] md:text-xs font-bold text-gray-600 uppercase mt-0.5">
//                     SS
//                   </div>
//                   {/* Blinking dot animation */}
//                   <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
//                 </div>
//               </div>
//             </div>

//             <Link to="/store">
//               <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base shadow-lg hover:shadow-xl transition-all rounded-md">
//                 SHOP NOW
//               </Button>
//             </Link>
//           </div>
//         </div>
        
//         {/* Decorative dots like in image */}
//         <div className="absolute top-2 left-4 w-2 h-2 bg-green-600 rounded-full"></div>
//         <div className="absolute bottom-2 right-4 w-2 h-2 bg-saffron rounded-full"></div>
//       </div>

//       {/* Rest of your existing code remains the same */}
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-accent/20">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWY0ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0yLTYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
//           <div className="text-center">
//             <div className="mb-8">
//               <img
//                 src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
//                 alt="Merfume - Luxury Perfumes"
//                 className="h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-lg"
//               />
//             </div>
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
//               Discover Your
//               <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
//                 Signature Scent
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
//               Experience the world of luxury fragrances. Each bottle tells a
//               story, each scent creates a memory. Welcome to Merfume.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/store">
//                 <Button
//                   size="lg"
//                   className="bg-gold hover:bg-gold-dark text-luxury-black font-semibold px-8 py-4 text-lg group"
//                 >
//                   Explore Collection
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//               <Link to="/about">
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="border-gold text-gold hover:bg-gold hover:text-luxury-black px-8 py-4 text-lg"
//                 >
//                   Our Story
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section - Added Republic Day mention */}
//       <section className="py-24 bg-card">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-saffron/20 via-white/20 to-green/20 backdrop-blur-sm rounded-full px-6 py-2 border border-saffron/30">
//               <Flag className="h-4 w-4 text-saffron" />
//               <span className="text-sm font-semibold text-gray-800">Republic Day Special</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Why Choose Merfume?
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               We're committed to bringing you the finest fragrances with
//               unmatched quality and service.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Cards remain same */}
//             <Card className="border-border/50 hover:border-gold/50 transition-colors group">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
//                   <Sparkles className="h-8 w-8 text-gold" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">
//                   Premium Quality
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Each fragrance is carefully curated and sourced from the
//                   world's finest perfume houses.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-colors group">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
//                   <Star className="h-8 w-8 text-gold" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">
//                   Expert Curation
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Our perfume experts hand-select each fragrance to ensure
//                   exceptional quality and uniqueness.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-colors group">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
//                   <Gift className="h-8 w-8 text-gold" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">
//                   Luxury Experience
//                 </h3>
//                 <p className="text-muted-foreground">
//                   From packaging to delivery, every detail is designed to
//                   provide a luxurious experience.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section - Updated for Republic Day */}
//       <section className="py-24 bg-gradient-to-r from-gold/10 via-accent/20 to-gold/10">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-saffron to-green text-white rounded-full px-6 py-2">
//             <Flag className="h-4 w-4" />
//             <span className="text-sm font-bold">Limited Time Offer</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//             Republic Day Special - Save 26% on Premium Fragrances!
//           </h2>
//           <div className="flex justify-center items-center gap-3 mb-6">
//             <div className="bg-white rounded-lg shadow-lg p-3">
//               <div className="text-xl font-black text-gray-900">{timeLeft.days.toString().padStart(2, '0')}</div>
//               <div className="text-xs font-bold text-gray-600">DD</div>
//             </div>
//             <div className="text-gray-900 font-black text-lg">:</div>
//             <div className="bg-white rounded-lg shadow-lg p-3">
//               <div className="text-xl font-black text-gray-900">{timeLeft.hours.toString().padStart(2, '0')}</div>
//               <div className="text-xs font-bold text-gray-600">HH</div>
//             </div>
//             <div className="text-gray-900 font-black text-lg">:</div>
//             <div className="bg-white rounded-lg shadow-lg p-3">
//               <div className="text-xl font-black text-gray-900">{timeLeft.minutes.toString().padStart(2, '0')}</div>
//               <div className="text-xs font-bold text-gray-600">MM</div>
//             </div>
//             <div className="text-gray-900 font-black text-lg">:</div>
//             <div className="bg-white rounded-lg shadow-lg p-3">
//               <div className="text-xl font-black text-gray-900">{timeLeft.seconds.toString().padStart(2, '0')}</div>
//               <div className="text-xs font-bold text-gray-600">SS</div>
//             </div>
//           </div>
//           <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Celebrate with exclusive 26% discount. Offer ends soon!
//           </p>
//           <Link to="/store">
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
//             >
//               Shop Now - Get 26% OFF
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-luxury-black text-cream py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <img
//                 src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
//                 alt="Merfume"
//                 className="h-20 w-auto mb-4 brightness-110"
//               />
//               <p className="text-cream/80 max-w-md">
//                 Discover the world of luxury fragrances with Merfume. Each scent
//                 tells a story, each bottle holds a memory.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     to="/about"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/store"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Store
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/ceo-vision"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     CEO Vision
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Support</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Shipping Info
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Returns
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Size Guide
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-cream/20 mt-12 pt-8 text-center">
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <Flag className="h-5 w-5 text-saffron" />
//               <p className="text-cream/80 font-medium">Celebrating Republic Day with Special Offers</p>
//             </div>
//             <p className="text-cream/60">
//               © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Navigation from "@/components/Navigation";
// import { ArrowRight, Star, Sparkles, Gift, Flag, Award } from "lucide-react";
// import { useState, useEffect } from "react"; // Added for countdown

// export default function Home() {
//   // Countdown timer state for 3 days - Start with 2 days, 47 minutes, 19 seconds as shown in image
//   const [timeLeft, setTimeLeft] = useState({
//     days: 2,
//     hours: 0,
//     minutes: 47,
//     seconds: 19,
//     isOfferActive: true
//   });

//   useEffect(() => {
//     const targetDate = new Date();
//     targetDate.setDate(targetDate.getDate() + 3);
//     targetDate.setHours(23, 59, 59, 999);

//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate.getTime() - now;

//       if (distance < 0) {
//         clearInterval(timer);
//         setTimeLeft({ 
//           days: 0, 
//           hours: 0, 
//           minutes: 0, 
//           seconds: 0,
//           isOfferActive: false 
//         });
//         return;
//       }

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       setTimeLeft({ 
//         days, 
//         hours, 
//         minutes, 
//         seconds,
//         isOfferActive: true 
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // SINGLE Indian Flag SVG Component - Responsive
//   const IndianFlagIcon = ({ className = "h-5 w-5" }) => (
//     <svg 
//       className={className}
//       viewBox="0 0 24 16" 
//       fill="none" 
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {/* Saffron Stripe */}
//       <rect x="0" y="0" width="24" height="5.33" fill="#FF9933" />
//       {/* White Stripe */}
//       <rect x="0" y="5.33" width="24" height="5.33" fill="#FFFFFF" />
//       {/* Green Stripe */}
//       <rect x="0" y="10.66" width="24" height="5.34" fill="#138808" />
      
//       {/* Ashoka Chakra - Simplified for all screen sizes */}
//       <circle cx="12" cy="8" r="2.5" fill="none" stroke="#000080" strokeWidth="0.5" />
//       <circle cx="12" cy="8" r="1.8" fill="#000080" />
      
//       {/* 24 spokes of Ashoka Chakra */}
//       {Array.from({ length: 24 }).map((_, i) => {
//         const angle = (i * 15) * (Math.PI / 180);
//         const x1 = 12 + 2.5 * Math.cos(angle);
//         const y1 = 8 + 2.5 * Math.sin(angle);
//         const x2 = 12 + 1 * Math.cos(angle);
//         const y2 = 8 + 1 * Math.sin(angle);
        
//         return (
//           <line 
//             key={i}
//             x1={x1} 
//             y1={y1} 
//             x2={x2} 
//             y2={y2} 
//             stroke="#000080" 
//             strokeWidth="0.5" 
//             strokeLinecap="round"
//           />
//         );
//       })}
      
//       {/* Small dot in center */}
//       <circle cx="12" cy="8" r="0.3" fill="#FFFFFF" />
//     </svg>
//   );

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Republic Day Special Offer Banner - WITH REAL INDIAN FLAG */}
//       <div className="bg-gradient-to-r from-saffron via-white to-green relative overflow-hidden border-b-2 border-saffron/30">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI1IiBmaWxsPSIjRkY5OTMzIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-10"></div>
        
//         <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 md:py-3">
//           <div className="flex flex-row items-center justify-between gap-1 md:gap-4 overflow-x-auto scrollbar-hide">
            
//             {/* Left side - Text with Real Indian Flag - SINGLE FLAG */}
//             <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
//               {/* SINGLE Indian Flag Icon - Responsive sizing */}
//               <div className="relative">
//                 <IndianFlagIcon className="h-5 w-7 sm:h-6 sm:w-9 md:h-8 md:w-12" />
//                 <div className="absolute -top-1 -right-1 animate-pulse">
//                   <div className="w-2 h-2 rounded-full bg-red-600"></div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 md:gap-2 flex-nowrap whitespace-nowrap">
//                 <h3 className="text-[10px] sm:text-xs md:text-lg font-bold text-gray-900 tracking-wide uppercase">
//                   Republic Day SALE |
//                 </h3>
//                 <span className="text-[10px] sm:text-xs md:text-lg font-black text-red-600 animate-pulse">
//                   FLAT 26% OFF
//                 </span>
//                 <span className="text-[10px] sm:text-xs md:text-lg font-bold text-gray-900">
//                   IN
//                 </span>
//               </div>
//             </div>

//             {/* Center - Countdown Timer */}
//             <div className="flex items-center gap-0.5 md:gap-2 mx-1 md:mx-2 flex-shrink-0">
//               {/* Days */}
//               <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-saffron/20">
//                 <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
//                   {timeLeft.days.toString().padStart(2, '0')}
//                 </div>
//                 <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
//                   DD
//                 </div>
//               </div>
              
//               <div className="text-gray-900 font-black text-xs md:text-lg pb-2">:</div>
              
//               {/* Hours */}
//               <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-saffron/20">
//                 <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
//                   {timeLeft.hours.toString().padStart(2, '0')}
//                 </div>
//                 <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
//                   HH
//                 </div>
//               </div>
              
//               <div className="text-gray-900 font-black text-xs md:text-lg pb-2">:</div>
              
//               {/* Minutes */}
//               <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-saffron/20">
//                 <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
//                   {timeLeft.minutes.toString().padStart(2, '0')}
//                 </div>
//                 <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
//                   MM
//                 </div>
//               </div>
              
//               <div className="text-gray-900 font-black text-xs md:text-lg pb-2">:</div>
              
//               {/* Seconds */}
//               <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-saffron/20 relative">
//                 <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
//                   {timeLeft.seconds.toString().padStart(2, '0')}
//                 </div>
//                 <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
//                   SS
//                 </div>
//                 {/* Blinking dot for seconds */}
//                 <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
//               </div>
//             </div>

//             {/* Right side - Button */}
//             <Link to="/store" className="flex-shrink-0">
//               <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-base shadow hover:shadow transition-all rounded whitespace-nowrap">
//                 SHOP NOW
//               </Button>
//             </Link>
//           </div>
//         </div>
        
//         {/* Indian Flag Stripes Decoration */}
//         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-white to-green"></div>
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-white to-green"></div>
        
//         {/* Mini Indian Flags in corners - REMOVED to avoid multiple flags */}
//       </div>

//       {/* Rest of your existing code with updated flags */}
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-accent/20">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWY0ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0yLTYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
//           <div className="text-center">
//             <div className="mb-8">
//               <img
//                 src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
//                 alt="Merfume - Luxury Perfumes"
//                 className="h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-lg"
//               />
//             </div>
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
//   Discover Your
//   <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent pb-2 md:pb-3">
//     Signature Scent
//   </span>
// </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
//               Experience the world of luxury fragrances. Each bottle tells a
//               story, each scent creates a memory. Welcome to Merfume.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/store">
//                 <Button
//                   size="lg"
//                   className="bg-gold hover:bg-gold-dark text-luxury-black font-semibold px-8 py-4 text-lg group"
//                 >
//                   Explore Collection
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//               <Link to="/about">
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="border-gold text-gold hover:bg-gold hover:text-luxury-black px-8 py-4 text-lg"
//                 >
//                   Our Story
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section - Added Republic Day mention */}
//       <section className="py-24 bg-card">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-saffron/20 via-white/20 to-green/20 backdrop-blur-sm rounded-full px-6 py-2 border border-saffron/30">
//               <IndianFlagIcon className="h-5 w-7" />
//               <span className="text-sm font-semibold text-gray-800">Republic Day Special</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Why Choose Merfume?
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               We're committed to bringing you the finest fragrances with
//               unmatched quality and service.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Cards remain same */}
//             <Card className="border-border/50 hover:border-gold/50 transition-colors group">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
//                   <Sparkles className="h-8 w-8 text-gold" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">
//                   Premium Quality
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Each fragrance is carefully curated and sourced from the
//                   world's finest perfume houses.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-colors group">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
//                   <Star className="h-8 w-8 text-gold" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">
//                   Expert Curation
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Our perfume experts hand-select each fragrance to ensure
//                   exceptional quality and uniqueness.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-colors group">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
//                   <Gift className="h-8 w-8 text-gold" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">
//                   Luxury Experience
//                 </h3>
//                 <p className="text-muted-foreground">
//                   From packaging to delivery, every detail is designed to
//                   provide a luxurious experience.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section - Updated for Republic Day */}
//       <section className="py-24 bg-gradient-to-r from-gold/10 via-accent/20 to-gold/10">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-saffron to-green text-white rounded-full px-6 py-2">
//             <IndianFlagIcon className="h-5 w-7" />
//             <span className="text-sm font-bold">Republic Day Special</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//             Republic Day Special - Save 26% on Premium Fragrances!
//           </h2>
//           <div className="flex justify-center items-center gap-2 md:gap-3 mb-6">
//             <div className="bg-white rounded-lg shadow-lg p-2 md:p-3">
//               <div className="text-lg md:text-xl font-black text-gray-900">{timeLeft.days.toString().padStart(2, '0')}</div>
//               <div className="text-[8px] md:text-xs font-bold text-gray-600">DD</div>
//             </div>
//             <div className="text-gray-900 font-black text-sm md:text-lg">:</div>
//             <div className="bg-white rounded-lg shadow-lg p-2 md:p-3">
//               <div className="text-lg md:text-xl font-black text-gray-900">{timeLeft.hours.toString().padStart(2, '0')}</div>
//               <div className="text-[8px] md:text-xs font-bold text-gray-600">HH</div>
//             </div>
//             <div className="text-gray-900 font-black text-sm md:text-lg">:</div>
//             <div className="bg-white rounded-lg shadow-lg p-2 md:p-3">
//               <div className="text-lg md:text-xl font-black text-gray-900">{timeLeft.minutes.toString().padStart(2, '0')}</div>
//               <div className="text-[8px] md:text-xs font-bold text-gray-600">MM</div>
//             </div>
//             <div className="text-gray-900 font-black text-sm md:text-lg">:</div>
//             <div className="bg-white rounded-lg shadow-lg p-2 md:p-3">
//               <div className="text-lg md:text-xl font-black text-gray-900">{timeLeft.seconds.toString().padStart(2, '0')}</div>
//               <div className="text-[8px] md:text-xs font-bold text-gray-600">SS</div>
//             </div>
//           </div>
//           <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Celebrate Republic Day with exclusive 26% discount. Offer ends soon!
//           </p>
//           <Link to="/store">
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
//             >
//               Shop Now - Get 26% OFF
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-luxury-black text-cream py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <img
//                 src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
//                 alt="Merfume"
//                 className="h-20 w-auto mb-4 brightness-110"
//               />
//               <p className="text-cream/80 max-w-md">
//                 Discover the world of luxury fragrances with Merfume. Each scent
//                 tells a story, each bottle holds a memory.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     to="/about"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/store"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Store
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/ceo-vision"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     CEO Vision
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Support</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/shipping-policy"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Shipping Policies
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Returns
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Size Guide
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-cream/20 mt-12 pt-8 text-center">
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <IndianFlagIcon className="h-6 w-8" />
//               <p className="text-cream/80 font-medium">Celebrating Republic Day with Special Offers</p>
//             </div>
//             <p className="text-cream/60">
//               © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowRight, Star, Sparkles, Gift } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  // Countdown timer state (commented out for now)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOfferActive: false
  });

  // Commented out countdown timer effect
  /*
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
  */

  // Islamic Crescent Moon Icon Component (commented out for now)
  /*
  const IslamicCrescentIcon = ({ className = "h-5 w-5" }) => (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM19.24 17H13v-1h6.93c-.2.35-.43.69-.69 1zm.68-3H13v-1h7.13c-.04.34-.11.67-.19 1z"/>
    </svg>
  );
  */

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Special Offer Banner (Commented Out) */}
      {/*
      <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-700 relative overflow-hidden border-b-2 border-green-500/30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI1IiBmaWxsPSIjMDBhMDAwIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 md:py-3">
          <div className="flex flex-row items-center justify-between gap-1 md:gap-4 overflow-x-auto scrollbar-hide">
            
            <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
              <div className="relative">
                <IslamicCrescentIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                <div className="absolute -top-1 -right-1 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                </div>
              </div>
              <div className="flex items-center gap-1 md:gap-2 flex-nowrap whitespace-nowrap">
                <h3 className="text-[10px] sm:text-xs md:text-lg font-bold text-white tracking-wide uppercase">
                  Eid Milad-un-Nabi Special |
                </h3>
                <span className="text-[10px] sm:text-xs md:text-lg font-black text-yellow-300 animate-pulse">
                  FLAT 25% OFF
                </span>
                <span className="text-[10px] sm:text-xs md:text-lg font-bold text-white">
                  on Attars & Oud
                </span>
              </div>
            </div>

            <div className="flex items-center gap-0.5 md:gap-2 mx-1 md:mx-2 flex-shrink-0">
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-green-500/20">
                <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
                  DD
                </div>
              </div>
              
              <div className="text-white font-black text-xs md:text-lg pb-2">:</div>
              
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-green-500/20">
                <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
                  HH
                </div>
              </div>
              
              <div className="text-white font-black text-xs md:text-lg pb-2">:</div>
              
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-green-500/20">
                <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
                  MM
                </div>
              </div>
              
              <div className="text-white font-black text-xs md:text-lg pb-2">:</div>
              
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded shadow flex flex-col items-center justify-center border border-green-500/20 relative">
                <div className="text-sm md:text-xl lg:text-2xl font-black text-gray-900 leading-none">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-[6px] md:text-[9px] lg:text-xs font-bold text-gray-600 uppercase">
                  SS
                </div>
                <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <Link to="/store" className="flex-shrink-0">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-base shadow hover:shadow transition-all rounded whitespace-nowrap">
                SHOP NOW
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500"></div>
        
        <div className="absolute top-1 left-4 opacity-10 text-3xl font-arabic text-white">
          ﷺ
        </div>
      </div>
      */}

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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Discover Your
              <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent pb-2 md:pb-3">
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

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Special badge commented out */}
            {/*
            <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-green-600/20 via-yellow-400/20 to-emerald-600/20 backdrop-blur-sm rounded-full px-6 py-2 border border-green-500/30">
              <IslamicCrescentIcon className="h-5 w-5 text-green-700" />
              <span className="text-sm font-semibold text-gray-800">Eid Milad-un-Nabi Special</span>
            </div>
            */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Merfume?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to bringing you the finest fragrances with
              unmatched quality and service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* CTA Section (without offers) */}
      <section className="py-24 bg-gradient-to-r from-gold/10 via-accent/20 to-gold/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Explore Our Premium Fragrance Collection
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover scents that define elegance and create lasting impressions.
          </p>
          <Link to="/store">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-luxury-black font-bold px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Browse Collection
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
                    href="/track-order"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Track Order
                  </a>
                </li>
                <li>
                  <a
                    href="/shipping-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Shipping Policies
                  </a>
                </li>
                <li>
                  <a
                    href="/return-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="/how-to-manage-fragrance"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Fragrance care tips
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-12 pt-8 text-center">
            {/* Special offer message removed from footer */}
            {/*
            <div className="flex items-center justify-center gap-2 mb-4">
              <IslamicCrescentIcon className="h-6 w-6 text-gold" />
              <p className="text-cream/80 font-medium">Celebrating Eid Milad-un-Nabi with Special Offers</p>
            </div>
            */}
            <p className="text-cream/60">
              © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
