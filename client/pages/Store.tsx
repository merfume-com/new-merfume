// import { useState } from "react";
// import Navigation from "@/components/Navigation";
// import ProductCard from "@/components/ProductCard";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Search, Filter } from "lucide-react";

// // Sample product data
// const sampleProducts = [
//   {
//     id: "1",
//     name: "Midnight Elegance",
//     brand: "Merfume Signature",
//     price: 165,
//     originalPrice: 220,
//     image:
//       "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
//     backImage:
//       "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
//     rating: 4.8,
//     reviewCount: 124,
//     description:
//       "A sophisticated blend of dark florals and amber, perfect for evening occasions.",
//     notes: ["Black Rose", "Amber", "Vanilla", "Sandalwood"],
//     category: "evening",
//   },
//   {
//     id: "2",
//     name: "Golden Dawn",
//     brand: "Merfume Classic",
//     price: 145,
//     image:
//       "https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=400&h=400&fit=crop",
//     backImage:
//       "https://images.unsplash.com/photo-1594736797933-d0b22fe37b8c?w=400&h=400&fit=crop",
//     rating: 4.6,
//     reviewCount: 89,
//     description: "Bright and refreshing citrus blend with golden undertones.",
//     notes: ["Bergamot", "Golden Citrus", "White Musk"],
//     category: "fresh",
//   },
//   {
//     id: "3",
//     name: "Royal Oud",
//     brand: "Merfume Prestige",
//     price: 285,
//     image:
//       "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
//     backImage:
//       "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=400&fit=crop",
//     rating: 4.9,
//     reviewCount: 203,
//     description: "An luxurious oud fragrance with royal complexity and depth.",
//     notes: ["Oud", "Rose", "Saffron", "Leather"],
//     category: "luxury",
//   },
//   {
//     id: "4",
//     name: "Ocean Breeze",
//     brand: "Merfume Fresh",
//     price: 125,
//     image:
//       "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop",
//     backImage:
//       "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
//     rating: 4.4,
//     reviewCount: 67,
//     description:
//       "Light and airy with marine notes that transport you to the seaside.",
//     notes: ["Sea Salt", "Marine Accord", "Driftwood"],
//     category: "fresh",
//   },
//   {
//     id: "5",
//     name: "Velvet Rose",
//     brand: "Merfume Romance",
//     price: 195,
//     originalPrice: 245,
//     image:
//       "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
//     backImage:
//       "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
//     rating: 4.7,
//     reviewCount: 156,
//     description: "Romantic and passionate with layers of velvety rose petals.",
//     notes: ["Damascus Rose", "Velvet", "Peony", "Musk"],
//     category: "floral",
//   },
//   {
//     id: "6",
//     name: "Smoky Leather",
//     brand: "Merfume Bold",
//     price: 175,
//     image:
//       "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
//     backImage:
//       "https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=400&h=400&fit=crop",
//     rating: 4.5,
//     reviewCount: 98,
//     description: "Bold and masculine with rich leather and smoky undertones.",
//     notes: ["Leather", "Smoke", "Cedar", "Black Pepper"],
//     category: "masculine",
//   },
// ];

// export default function Store() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [sortBy, setSortBy] = useState("featured");
//   const [favorites, setFavorites] = useState<string[]>([]);

//   const filteredProducts = sampleProducts.filter((product) => {
//     const matchesSearch =
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.brand.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "all" || product.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case "price-low":
//         return a.price - b.price;
//       case "price-high":
//         return b.price - a.price;
//       case "rating":
//         return b.rating - a.rating;
//       case "name":
//         return a.name.localeCompare(b.name);
//       default:
//         return 0;
//     }
//   });

//   const handleAddToCart = (productId: string) => {
//     console.log("Added to cart:", productId);
//     // TODO: Implement cart functionality
//   };

//   const handleToggleFavorite = (productId: string) => {
//     setFavorites((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId],
//     );
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Header */}
//       <section className="bg-gradient-to-r from-cream to-accent/20 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             Our Collection
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Discover our carefully curated selection of luxury fragrances, each
//             telling its own unique story.
//           </p>
//         </div>
//       </section>

//       {/* Filters */}
//       <section className="sticky top-20 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
//             <div className="flex flex-col sm:flex-row gap-4 items-center flex-1">
//               <div className="relative flex-1 max-w-md">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   placeholder="Search perfumes..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>
//               <Select
//                 value={selectedCategory}
//                 onValueChange={setSelectedCategory}
//               >
//                 <SelectTrigger className="w-40">
//                   <Filter className="h-4 w-4 mr-2" />
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Categories</SelectItem>
//                   <SelectItem value="fresh">Fresh</SelectItem>
//                   <SelectItem value="floral">Floral</SelectItem>
//                   <SelectItem value="evening">Evening</SelectItem>
//                   <SelectItem value="luxury">Luxury</SelectItem>
//                   <SelectItem value="masculine">Masculine</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <Select value={sortBy} onValueChange={setSortBy}>
//               <SelectTrigger className="w-40">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="featured">Featured</SelectItem>
//                 <SelectItem value="price-low">Price: Low to High</SelectItem>
//                 <SelectItem value="price-high">Price: High to Low</SelectItem>
//                 <SelectItem value="rating">Highest Rated</SelectItem>
//                 <SelectItem value="name">Name A-Z</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </section>

//       {/* Product Grid */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {sortedProducts.length === 0 ? (
//             <div className="text-center py-16">
//               <p className="text-lg text-muted-foreground">
//                 No products found matching your criteria.
//               </p>
//               <Button
//                 variant="outline"
//                 className="mt-4"
//                 onClick={() => {
//                   setSearchTerm("");
//                   setSelectedCategory("all");
//                 }}
//               >
//                 Clear Filters
//               </Button>
//             </div>
//           ) : (
//             <>
//               <div className="flex items-center justify-between mb-8">
//                 <p className="text-muted-foreground">
//                   Showing {sortedProducts.length} of {sampleProducts.length}{" "}
//                   products
//                 </p>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {sortedProducts.map((product, index) => (
//                   <div
//                     key={product.id}
//                     className="animate-in fade-in slide-in-from-bottom-4"
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     <ProductCard
//                       {...product}
//                       onAddToCart={handleAddToCart}
//                       onToggleFavorite={handleToggleFavorite}
//                       isFavorite={favorites.includes(product.id)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}
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
//               <p className="text-cream/80 max-w-md leading-relaxed">
//                 Explore our complete collection of luxury fragrances crafted
//                 with love and precision. Each scent tells a unique story.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Categories</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <button
//                     onClick={() => setSelectedCategory("fresh")}
//                     className="text-cream/80 hover:text-gold transition-colors text-left"
//                   >
//                     Fresh
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => setSelectedCategory("floral")}
//                     className="text-cream/80 hover:text-gold transition-colors text-left"
//                   >
//                     Floral
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => setSelectedCategory("luxury")}
//                     className="text-cream/80 hover:text-gold transition-colors text-left"
//                   >
//                     Luxury
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => setSelectedCategory("evening")}
//                     className="text-cream/80 hover:text-gold transition-colors text-left"
//                   >
//                     Evening
//                   </button>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Customer Care</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Size Guide
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Fragrance Care
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
//                     href="/contact"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-cream/20 mt-12 pt-8 text-center">
//             <p className="text-cream/60">
//               © 2024 Merfume. All rights reserved. Discover your signature
//               scent.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



//old but correct code without backend
// "use client";

// import { useState } from "react";
// import Navigation from "@/components/Navigation";
// import ProductCard from "@/components/ProductCard";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Search, Filter } from "lucide-react";
// import { useCart } from "@/components/CartContext"; // Updated import path

// interface Product {
//   id: string;
//   name: string;
//   brand: string;
//   price: number;
//   originalPrice?: number;
//   image: string;
//   backImage?: string;
//   rating: number;
//   reviewCount: number;
//   description: string;
//   notes: string[];
//   category: string;
// }

// const sampleProducts: Product[] = [
//   {
//     id: "1",
//     name: "Midnight Elegance",
//     brand: "Merfume Signature",
//     price: 165,
//     originalPrice: 220,
//     image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
//     backImage: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
//     rating: 4.8,
//     reviewCount: 124,
//     description: "A sophisticated blend of dark florals and amber, perfect for evening occasions.",
//     notes: ["Black Rose", "Amber", "Vanilla", "Sandalwood"],
//     category: "evening",
//   },
//   {
//     id: "2",
//     name: "Golden Dawn",
//     brand: "Merfume Classic",
//     price: 145,
//     image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=400&h=400&fit=crop",
//     backImage: "https://images.unsplash.com/photo-1594736797933-d0b22fe37b8c?w=400&h=400&fit=crop",
//     rating: 4.6,
//     reviewCount: 89,
//     description: "Bright and refreshing citrus blend with golden undertones.",
//     notes: ["Bergamot", "Golden Citrus", "White Musk"],
//     category: "fresh",
//   },
//   {
//     id: "3",
//     name: "Royal Oud",
//     brand: "Merfume Prestige",
//     price: 285,
//     image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
//     backImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=400&fit=crop",
//     rating: 4.9,
//     reviewCount: 203,
//     description: "An luxurious oud fragrance with royal complexity and depth.",
//     notes: ["Oud", "Rose", "Saffron", "Leather"],
//     category: "luxury",
//   },
//   {
//     id: "4",
//     name: "Ocean Breeze",
//     brand: "Merfume Fresh",
//     price: 125,
//     image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop",
//     backImage: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
//     rating: 4.4,
//     reviewCount: 67,
//     description: "Light and airy with marine notes that transport you to the seaside.",
//     notes: ["Sea Salt", "Marine Accord", "Driftwood"],
//     category: "fresh",
//   },
//   {
//     id: "5",
//     name: "Velvet Rose",
//     brand: "Merfume Romance",
//     price: 195,
//     originalPrice: 245,
//     image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
//     backImage: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
//     rating: 4.7,
//     reviewCount: 156,
//     description: "Romantic and passionate with layers of velvety rose petals.",
//     notes: ["Damascus Rose", "Velvet", "Peony", "Musk"],
//     category: "floral",
//   },
//   {
//     id: "6",
//     name: "Smoky Leather",
//     brand: "Merfume Bold",
//     price: 175,
//     image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
//     backImage: "https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=400&h=400&fit=crop",
//     rating: 4.5,
//     reviewCount: 98,
//     description: "Bold and masculine with rich leather and smoky undertones.",
//     notes: ["Leather", "Smoke", "Cedar", "Black Pepper"],
//     category: "masculine",
//   },
// ];

// export default function Store() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [sortBy, setSortBy] = useState("featured");
//   const [favorites, setFavorites] = useState<string[]>([]);
//   const { addToCart, cart } = useCart(); // Added cart to check items

//   const filteredProducts = sampleProducts.filter((product) => {
//     const matchesSearch =
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.brand.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "all" || product.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case "price-low":
//         return a.price - b.price;
//       case "price-high":
//         return b.price - a.price;
//       case "rating":
//         return b.rating - a.rating;
//       case "name":
//         return a.name.localeCompare(b.name);
//       default:
//         return 0;
//     }
//   });

//   const handleAddToCart = (product: Product) => {
//     console.log("Adding to cart:", product); // Debug log
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       quantity: 1,
//       image: product.image,
//       brand: product.brand,
//     });
//   };

//   const handleToggleFavorite = (productId: string) => {
//     setFavorites((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   // Debug: Log current cart state
//   console.log("Current cart:", cart);

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Header and Filters sections remain the same */}

//       {/* Product Grid */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {sortedProducts.length === 0 ? (
//             <div className="text-center py-16">
//               <p className="text-lg text-muted-foreground">
//                 No products found matching your criteria.
//               </p>
//               <Button
//                 variant="outline"
//                 className="mt-4"
//                 onClick={() => {
//                   setSearchTerm("");
//                   setSelectedCategory("all");
//                 }}
//               >
//                 Clear Filters
//               </Button>
//             </div>
//           ) : (
//             <>
//               <div className="flex items-center justify-between mb-8">
//                 <p className="text-muted-foreground">
//                   Showing {sortedProducts.length} of {sampleProducts.length}{" "}
//                   products
//                 </p>
//                 <p className="text-muted-foreground">
//                   Items in cart: {cart.length}
//                 </p>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {sortedProducts.map((product, index) => {
//                   const isInCart = cart.some(item => item.id === product.id);
//                   return (
//                     <ProductCard
//                       key={product.id}
//                       id={product.id}
//                       name={product.name}
//                       brand={product.brand}
//                       price={product.price}
//                       originalPrice={product.originalPrice}
//                       image={product.image}
//                       backImage={product.backImage}
//                       rating={product.rating}
//                       reviewCount={product.reviewCount}
//                       description={product.description}
//                       notes={product.notes}
//                       onAddToCart={() => handleAddToCart(product)}
//                       onToggleFavorite={handleToggleFavorite}
//                       isFavorite={favorites.includes(product.id)}
//                       isInCart={isInCart} // Pass this prop to ProductCard
//                       className="animate-in fade-in slide-in-from-bottom-4"
//                       style={{ animationDelay: `${index * 100}ms` }}
//                     />
//                   );
//                 })}
//               </div>
//             </>
//           )}
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
//               <p className="text-cream/80 max-w-md leading-relaxed">
//                 Explore our complete collection of luxury fragrances crafted
//                 with love and precision. Each scent tells a unique story.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Categories</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <button
//                     onClick={() => setSelectedCategory("fresh")}
//                     className="text-cream/80 hover:text-gold transition-colors text-left"
//                   >
//                     Fresh
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => setSelectedCategory("floral")}
//                     className="text-cream/80 hover:text-gold transition-colors text-left"
//                   >
//                     Floral
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => setSelectedCategory("luxury")}
//                     className="text-cream/80 hover:text-gold transition-colors text-left"
//                   >
//                     Luxury
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => setSelectedCategory("evening")}
//                     className="text-cream/80 hover:text-gold transition-colors text-left"
//                   >
//                     Evening
//                   </button>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Customer Care</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Size Guide
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Fragrance Care
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
//                     href="/contact"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-cream/20 mt-12 pt-8 text-center">
//             <p className="text-cream/60">
//               © 2024 Merfume. All rights reserved. Discover your signature
//               scent.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


//correct and Integrated code

// src/pages/Store.tsx
"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { toast } from "sonner";

interface Product {
  productId: number;
  productName: string;
  brand: string;
  productPrice: number;
  originalPrice?: number;
  productImageUrl: string;
  productBackImageUrl?: string;
  rating: number;
  reviewCount: number;
  productDescription: string;
  notes: string[];
  productCategory: string;
}

export const API_BASE_URL = "https://5170dd6c9895.ngrok-free.app";//${API_BASE_URL}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://5170dd6c9895.ngrok-free.app/api/products/all', {
      headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420' // यह ngrok के ब्राउज़र वार्निंग को स्किप करेगा
  }
    });

    const contentType = response.headers.get("content-type");

    // Check if response is actually JSON
    if (!response.ok || !contentType?.includes("application/json")) {
      const text = await response.text();
      console.error("Non-JSON response from server:", text);
      toast.error("Network error please refresh the page.");
      return [];
    }

    const data: Product[] = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching products:", error);
    toast.error("Network error please refresh the page.");
    return [];
  }
}

export default function Store() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.productCategory === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.productPrice - b.productPrice;
      case "price-high":
        return b.productPrice - a.productPrice;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.productName.localeCompare(b.productName);
      default:
        return 0;
    }
  });

  const handleToggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse h-96 bg-muted rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                  <SelectItem value="fresh">Fresh</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="floral">Floral</SelectItem>
                  <SelectItem value="masculine">Masculine</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No products found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-muted-foreground">
                  Showing {sortedProducts.length} of {products.length} products
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product, index) => (
                  <ProductCard
                    key={product.productId}
                    productId={product.productId}
                    productName={product.productName}
                    brand={product.brand}
                    productPrice={product.productPrice}
                    originalPrice={product.originalPrice}
                    productImageUrl={product.productImageUrl}
                    productBackImageUrl={product.productBackImageUrl}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    productDescription={product.productDescription}
                    notes={product.notes}
                    onToggleFavorite={handleToggleFavorite}
                    isFavorite={favorites.includes(product.productId)}
                    className="animate-in fade-in slide-in-from-bottom-4"
                    style={{ "--animation-delay": `${index * 100}ms` } as React.CSSProperties}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <footer className="bg-luxury-black text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
                alt="Merfume"
                className="h-20 w-auto mb-4 brightness-110"
              />
              <p className="text-cream/80 max-w-md leading-relaxed">
                Explore our complete collection of luxury fragrances crafted
                with love and precision. Each scent tells a unique story.
              </p>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory("fresh")}
                    className="text-cream/80 hover:text-gold transition-colors text-left"
                  >
                    Fresh
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedCategory("floral")}
                    className="text-cream/80 hover:text-gold transition-colors text-left"
                  >
                    Floral
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedCategory("luxury")}
                    className="text-cream/80 hover:text-gold transition-colors text-left"
                  >
                    Luxury
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedCategory("evening")}
                    className="text-cream/80 hover:text-gold transition-colors text-left"
                  >
                    Evening
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-4">Customer Care</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Size Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Fragrance Care
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
                    href="/contact"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-12 pt-8 text-center">
            <p className="text-cream/60">
              © 2024 Merfume. All rights reserved. Discover your signature
              scent.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
