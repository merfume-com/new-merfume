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
// "use client";

// import { useState, useEffect } from "react";
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
// import { toast } from "sonner";

// interface Product {
//   productId: number;
//   productName: string;
//   brand: string;
//   productPrice: number;
//   originalPrice?: number;
//   productImageUrl: string;
//   productBackImageUrl?: string;
//   rating: number;
//   reviewCount: number;
//   productDescription: string;
//   notes: string[];
//   productCategory: string;
// }

// export const API_BASE_URL = "https://cb55c4aecb34.ngrok-free.app";//${API_BASE_URL}

// export async function fetchProducts(): Promise<Product[]> {
//   try {
//     const response = await fetch('https://cb55c4aecb34.ngrok-free.app/api/products/all', {
//       headers: {
//     'Content-Type': 'application/json',
//     'ngrok-skip-browser-warning': '69420' // यह ngrok के ब्राउज़र वार्निंग को स्किप करेगा
//   }
//     });

//     const contentType = response.headers.get("content-type");

//     // Check if response is actually JSON
//     if (!response.ok || !contentType?.includes("application/json")) {
//       const text = await response.text();
//       console.error("Non-JSON response from server:", text);
//       toast.error("Network error please refresh the page.");
//       return [];
//     }

//     const data: Product[] = await response.json();
//     return data;

//   } catch (error) {
//     console.error("Error fetching products:", error);
//     toast.error("Network error please refresh the page.");
//     return [];
//   }
// }

// export default function Store() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [sortBy, setSortBy] = useState("featured");
//   const [favorites, setFavorites] = useState<number[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const loadProducts = async () => {
//       setIsLoading(true);
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error loading products:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     loadProducts();
//   }, []);

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch =
//       product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.brand.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "all" || product.productCategory === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case "price-low":
//         return a.productPrice - b.productPrice;
//       case "price-high":
//         return b.productPrice - a.productPrice;
//       case "rating":
//         return b.rating - a.rating;
//       case "name":
//         return a.productName.localeCompare(b.productName);
//       default:
//         return 0;
//     }
//   });

//   const handleToggleFavorite = (productId: number) => {
//     setFavorites((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {[...Array(8)].map((_, index) => (
//               <div key={index} className="animate-pulse h-96 bg-muted rounded-lg" />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       <section className="py-8 border-b border-border/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
//             <div className="relative w-full md:w-64">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search products..."
//                 className="pl-10"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <div className="flex gap-2 w-full md:w-auto">
//               <Select
//                 value={selectedCategory}
//                 onValueChange={setSelectedCategory}
//               >
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Categories</SelectItem>
//                   <SelectItem value="evening">Evening</SelectItem>
//                   <SelectItem value="fresh">Fresh</SelectItem>
//                   <SelectItem value="luxury">Luxury</SelectItem>
//                   <SelectItem value="floral">Floral</SelectItem>
//                   <SelectItem value="masculine">Masculine</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Select value={sortBy} onValueChange={setSortBy}>
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="featured">Featured</SelectItem>
//                   <SelectItem value="price-low">Price: Low to High</SelectItem>
//                   <SelectItem value="price-high">Price: High to Low</SelectItem>
//                   <SelectItem value="rating">Rating</SelectItem>
//                   <SelectItem value="name">Name</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button variant="outline" size="icon">
//                 <Filter className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

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
//                   Showing {sortedProducts.length} of {products.length} products
//                 </p>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {sortedProducts.map((product, index) => (
//                   <ProductCard
//                     key={product.productId}
//                     productId={product.productId}
//                     productName={product.productName}
//                     brand={product.brand}
//                     productPrice={product.productPrice}
//                     originalPrice={product.originalPrice}
//                     productImageUrl={product.productImageUrl}
//                     productBackImageUrl={product.productBackImageUrl}
//                     rating={product.rating}
//                     reviewCount={product.reviewCount}
//                     productDescription={product.productDescription}
//                     notes={product.notes}
//                     onToggleFavorite={handleToggleFavorite}
//                     isFavorite={favorites.includes(product.productId)}
//                     className="animate-in fade-in slide-in-from-bottom-4"
//                     style={{ "--animation-delay": `${index * 100}ms` } as React.CSSProperties}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </section>

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



// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
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
// import { toast } from "sonner";

// interface Product {
//   productId: number;
//   productName: string;
//   brand: string;
//   productPrice: number;
//   originalPrice?: number;
//   productImageUrl: string;
//   productBackImageUrl?: string;
//   rating: number;
//   reviewCount: number;
//   productDescription: string;
//   notes: string[];
//   productCategory: string;
// }

// export const API_BASE_URL = "https://6a3dfa7e05c5.ngrok-free.app";

// // Axios instance with proper configuration
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   // timeout: 10000, // 10 seconds timeout
//   headers: {
//     "Content-Type": "application/json",
//     "ngrok-skip-browser-warning": "69420",
//     "Accept": "application/json",
//   },
// });

// // Add request interceptor for logging
// api.interceptors.request.use(
//   (config) => {
//     console.log(`Making request to: ${config.url}`);
//     // Add timestamp to prevent caching
//     if (config.url?.includes("?")) {
//       config.url += `&_t=${Date.now()}`;
//     } else {
//       config.url += `?_t=${Date.now()}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.error("Request error:", error);
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor for error handling and retry logic
// api.interceptors.response.use(
//   (response) => {
//     console.log(`Response received from: ${response.config.url}`);
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
    
//     // If error is due to network or CORS, retry once
//     if (!error.response && !originalRequest._retry) {
//       originalRequest._retry = true;
//       console.log("Retrying request due to network error...");
      
//       // Wait 1 second before retrying
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // Clear the timestamp for retry
//       originalRequest.url = originalRequest.url?.split("?")[0];
      
//       return api(originalRequest);
//     }
    
//     // Handle specific error cases
//     if (error.response) {
//       console.error("API Error:", {
//         status: error.response.status,
//         statusText: error.response.statusText,
//         url: error.config.url,
//         data: error.response.data
//       });
//     } else if (error.request) {
//       console.error("Network Error:", error.message);
//     } else {
//       console.error("Request Error:", error.message);
//     }
    
//     return Promise.reject(error);
//   }
// );

// export async function fetchProducts(): Promise<Product[]> {
//   try {
//     console.log("Fetching products from API...");
    
//     const response = await api.get("/api/products/all");
    
//     console.log("Products fetched successfully:", response.data.length);
    
//     if (!response.data || !Array.isArray(response.data)) {
//       console.error("Invalid response format:", response.data);
//       toast.error("Invalid data received from server.");
//       return [];
//     }
    
//     return response.data;
    
//   } catch (error: any) {
//     console.error("Error fetching products:", error);
    
//     // Show user-friendly error messages
//     if (error.code === 'ECONNABORTED') {
//       toast.error("Request timeout. Please check your connection.");
//     } else if (error.message?.includes('Network Error')) {
//       toast.error("Network error. Please check your internet connection.");
//     } else if (error.response?.status === 404) {
//       toast.error("API endpoint not found. Please contact support.");
//     } else if (error.response?.status >= 500) {
//       toast.error("Server error. Please try again later.");
//     } else {
//       toast.error("Failed to load products. Please refresh the page.");
//     }
    
//     return [];
//   }
// }

// export default function Store() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [sortBy, setSortBy] = useState("featured");
//   const [favorites, setFavorites] = useState<number[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadProducts = async () => {
//       setIsLoading(true);
//       setError(null);
      
//       try {
//         console.log("Loading products...");
//         const data = await fetchProducts();
        
//         if (data.length === 0) {
//           setError("No products available at the moment.");
//         }
        
//         setProducts(data);
//         console.log(`Loaded ${data.length} products`);
        
//       } catch (error) {
//         console.error("Error in loadProducts:", error);
//         setError("Failed to load products. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     loadProducts();
//   }, []);

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch =
//       product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.brand.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "all" || product.productCategory === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case "price-low":
//         return a.productPrice - b.productPrice;
//       case "price-high":
//         return b.productPrice - a.productPrice;
//       case "rating":
//         return b.rating - a.rating;
//       case "name":
//         return a.productName.localeCompare(b.productName);
//       default:
//         return 0;
//     }
//   });

//   const handleToggleFavorite = (productId: number) => {
//     setFavorites((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const handleRetry = () => {
//     window.location.reload();
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="flex flex-col items-center justify-center min-h-[60vh]">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
//             <p className="text-muted-foreground">Loading products...</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {[...Array(8)].map((_, index) => (
//               <div key={index} className="animate-pulse h-96 bg-muted rounded-lg" />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error && products.length === 0) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
//             <div className="text-6xl mb-4">😞</div>
//             <h2 className="text-2xl font-semibold mb-2">Unable to Load Products</h2>
//             <p className="text-muted-foreground mb-6">{error}</p>
//             <div className="flex gap-4">
//               <Button onClick={handleRetry}>Retry</Button>
//               <Button variant="outline" onClick={() => window.location.reload()}>
//                 Refresh Page
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       <section className="py-8 border-b border-border/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
//             <div className="relative w-full md:w-64">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search products..."
//                 className="pl-10"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <div className="flex gap-2 w-full md:w-auto">
//               <Select
//                 value={selectedCategory}
//                 onValueChange={setSelectedCategory}
//               >
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Categories</SelectItem>
//                   <SelectItem value="evening">Evening</SelectItem>
//                   <SelectItem value="fresh">Fresh</SelectItem>
//                   <SelectItem value="luxury">Luxury</SelectItem>
//                   <SelectItem value="floral">Floral</SelectItem>
//                   <SelectItem value="masculine">Masculine</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Select value={sortBy} onValueChange={setSortBy}>
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="featured">Featured</SelectItem>
//                   <SelectItem value="price-low">Price: Low to High</SelectItem>
//                   <SelectItem value="price-high">Price: High to Low</SelectItem>
//                   <SelectItem value="rating">Rating</SelectItem>
//                   <SelectItem value="name">Name</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button variant="outline" size="icon">
//                 <Filter className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {error && (
//             <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//               <p className="text-yellow-800">{error}</p>
//             </div>
//           )}
          
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
//                   Showing {sortedProducts.length} of {products.length} products
//                 </p>
//                 {isLoading && (
//                   <div className="flex items-center gap-2">
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
//                     <span className="text-sm text-muted-foreground">Loading...</span>
//                   </div>
//                 )}
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {sortedProducts.map((product, index) => (
//                   <ProductCard
//                     key={product.productId}
//                     productId={product.productId}
//                     productName={product.productName}
//                     brand={product.brand}
//                     productPrice={product.productPrice}
//                     originalPrice={product.originalPrice}
//                     productImageUrl={product.productImageUrl}
//                     productBackImageUrl={product.productBackImageUrl}
//                     rating={product.rating}
//                     reviewCount={product.reviewCount}
//                     productDescription={product.productDescription}
//                     notes={product.notes}
//                     onToggleFavorite={handleToggleFavorite}
//                     isFavorite={favorites.includes(product.productId)}
//                     className="animate-in fade-in slide-in-from-bottom-4"
//                     style={{ "--animation-delay": `${index * 100}ms` } as React.CSSProperties}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </section>

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





// "use client";

// import { useState, useEffect } from "react";
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
// import { Search, Filter, Heart } from "lucide-react";
// import { toast } from "sonner";
// import axios from "axios";

// interface Product {
//   productId: number;
//   productName: string;
//   brand: string;
//   productPrice: number;
//   originalPrice?: number;
//   productImageUrl: string;
//   productBackImageUrl?: string;
//   rating: number;
//   reviewCount: number;
//   productDescription: string;
//   notes: string[];
//   productCategory: string;
// }

// // Ek centralized axios instance create karte hain
// const api = axios.create({
//   // baseURL: "https://e46b4bafada4.ngrok-free.app",
//     baseURL: "https://merfume-backend-production-5068.up.railway.app",
//   headers: {
//     'Content-Type': 'application/json',
//     // 'ngrok-skip-browser-warning': '69420'
//   }
// });

// // Response interceptor add karte hain taaki har response check kar sakein
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response?.status === 404) {
//       toast.error("Resource not found");
//     } else if (error.response?.status >= 500) {
//       toast.error("Server error. Please try again later.");
//     } else if (!error.response) {
//       toast.error("Network error. Please check your connection.");
//     }
//     return Promise.reject(error);
//   }
// );

// export async function fetchProducts(): Promise<Product[]> {
//   try {
//     const response = await api.get("/api/products/all");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
    
//     if (axios.isAxiosError(error)) {
//       if (error.response) {
//         toast.error(error.response.data?.message || "Failed to load products");
//       } else {
//         toast.error("Network error please refresh the page.");
//       }
//     } else {
//       toast.error("An unexpected error occurred");
//     }
    
//     return [];
//   }
// }

// export default function Store() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [sortBy, setSortBy] = useState("featured");
//   const [favorites, setFavorites] = useState<number[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadProducts = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error loading products:", error);
//         setError("Failed to load products. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     loadProducts();
//   }, []);

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch =
//       product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.notes.some(note => 
//         note.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     const matchesCategory =
//       selectedCategory === "all" || product.productCategory === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case "price-low":
//         return a.productPrice - b.productPrice;
//       case "price-high":
//         return b.productPrice - a.productPrice;
//       case "rating":
//         return b.rating - a.rating;
//       case "name":
//         return a.productName.localeCompare(b.productName);
//       default:
//         return 0;
//     }
//   });

//   const handleToggleFavorite = (productId: number) => {
//     setFavorites((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const handleRetry = () => {
//     setError(null);
//     setIsLoading(true);
    
//     setTimeout(() => {
//       fetchProducts()
//         .then(data => {
//           setProducts(data);
//           setIsLoading(false);
//         })
//         .catch(() => {
//           setIsLoading(false);
//           setError("Failed to load products. Please try again.");
//         });
//     }, 1000);
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
//             {[...Array(8)].map((_, index) => (
//               <div key={index} className="animate-pulse h-96 bg-muted rounded-lg" />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="flex flex-col items-center justify-center h-64">
//             <div className="text-center">
//               <h3 className="text-lg font-semibold text-foreground mb-2">
//                 {error}
//               </h3>
//               <Button
//                 onClick={handleRetry}
//                 className="bg-gold hover:bg-gold-dark text-black mt-4"
//               >
//                 Try Again
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       <section className="py-8 border-b border-border/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
//             <div className="relative w-full md:w-64">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search products, brands or notes..."
//                 className="pl-10"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <div className="flex gap-2 w-full md:w-auto">
//               <Select
//                 value={selectedCategory}
//                 onValueChange={setSelectedCategory}
//               >
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Categories</SelectItem>
//                   <SelectItem value="standard">Standard</SelectItem>
//                   <SelectItem value="premium">Premium</SelectItem>
//                   <SelectItem value="luxury">Luxury</SelectItem>
//                   <SelectItem value="essential-oil">Essential Oil</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Select value={sortBy} onValueChange={setSortBy}>
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="featured">Featured</SelectItem>
//                   <SelectItem value="price-low">Price: Low to High</SelectItem>
//                   <SelectItem value="price-high">Price: High to Low</SelectItem>
//                   <SelectItem value="rating">Rating</SelectItem>
//                   <SelectItem value="name">Name</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button variant="outline" size="icon">
//                 <Filter className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

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
//                   Showing {sortedProducts.length} of {products.length} products
//                 </p>
//                 <div className="text-sm text-muted-foreground">
//                   {favorites.length > 0 && (
//                     <span className="inline-flex items-center gap-1">
//                       <Heart className="h-4 w-4 text-red-500 fill-current" />
//                       {favorites.length} favorite{favorites.length !== 1 ? 's' : ''}
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {sortedProducts.map((product, index) => (
//                   <ProductCard
//                     key={product.productId}
//                     productId={product.productId}
//                     productName={product.productName}
//                     brand={product.brand}
//                     productPrice={product.productPrice}
//                     originalPrice={product.originalPrice}
//                     productImageUrl={product.productImageUrl}
//                     productBackImageUrl={product.productBackImageUrl}
//                     rating={product.rating}
//                     reviewCount={product.reviewCount}
//                     productDescription={product.productDescription}
//                     notes={product.notes}
//                     onToggleFavorite={handleToggleFavorite}
//                     isFavorite={favorites.includes(product.productId)}
//                     className="animate-in fade-in slide-in-from-bottom-4"
//                     style={{ 
//                       animationDelay: `${index * 100}ms`,
//                       animationDuration: '300ms'
//                     } as React.CSSProperties}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </section>

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



"use client";

import { useState, useEffect, useCallback } from "react";
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
import { Search, Filter, Heart, X, Sparkles, Shield, Truck, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

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
  stock: number;
}

// Axios instance
const api = axios.create({
  baseURL: "https://merfume-backend-production-5068.up.railway.app",
  headers: {
    'Content-Type': 'application/json',
  }
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 404) {
      toast.error("Resource not found");
    } else if (error.response?.status >= 500) {
      toast.error("Server error. Please try again later.");
    } else if (!error.response) {
      toast.error("Network error. Please check your connection.");
    }
    return Promise.reject(error);
  }
);

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await api.get("/api/products/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data?.message || "Failed to load products");
    } else {
      toast.error("An unexpected error occurred");
    }
    return [];
  }
}

export default function Store() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  const brands = Array.from(new Set(products.map(p => p.brand)));
  const categories = ["all", "standard", "premium", "luxury", "essential-oil"];

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
      setError("Failed to load products. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.notes.some(note => 
        note.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesCategory =
      selectedCategory === "all" || product.productCategory === selectedCategory;
    
    const matchesPrice =
      product.productPrice >= priceRange[0] && 
      product.productPrice <= priceRange[1];
    
    const matchesBrand = 
      selectedBrands.length === 0 || 
      selectedBrands.includes(product.brand);

    return matchesSearch && matchesCategory && matchesPrice && matchesBrand;
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
      case "popular":
        return b.reviewCount - a.reviewCount;
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

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setPriceRange([0, 10000]);
    setSelectedBrands([]);
    setSearchTerm("");
  };

  const handleRetry = () => {
    loadProducts();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center min-h-[60vh]"
          >
            <div className="relative">
              <div className="animate-spin rounded-full h-20 w-20 border-2 border-gold border-t-transparent"></div>
              <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-gold animate-pulse" />
            </div>
            <p className="mt-6 text-lg text-muted-foreground font-light">
              Loading luxury fragrances...
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center min-h-[60vh] text-center"
          >
            <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 p-8 rounded-3xl mb-6">
              <X className="h-16 w-16 text-red-400 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Something went wrong
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              {error}
            </p>
            <Button
              onClick={handleRetry}
              className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black px-8 py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-luxury-black via-luxury-black/95 to-luxury-black/90 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1920')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
              Discover Your Signature <span className="text-gold">Scent</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-3xl mx-auto mb-8">
              Curated collection of luxury fragrances from around the world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Store Features */}
      <section className="py-6 bg-background border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-background to-background/50 border border-border/20">
              <Truck className="h-8 w-8 text-gold" />
              <div>
                <h4 className="font-semibold text-foreground">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">On orders over ₹5000</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-background to-background/50 border border-border/20">
              <Shield className="h-8 w-8 text-gold" />
              <div>
                <h4 className="font-semibold text-foreground">Authentic Products</h4>
                <p className="text-sm text-muted-foreground">100% genuine guarantee</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-background to-background/50 border border-border/20">
              <RefreshCw className="h-8 w-8 text-gold" />
              <div>
                <h4 className="font-semibold text-foreground">Easy Returns</h4>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Store Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-background to-background/80 border border-border/30 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Categories</h4>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-full border-border/30">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              <div className="flex items-center gap-2">
                                <span className="capitalize">
                                  {cat === "all" ? "All Categories" : cat.replace("-", " ")}
                                </span>
                                {selectedCategory === cat && (
                                  <span className="text-xs text-gold">✓</span>
                                )}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Price Range</h4>
                      <div className="px-2">
                        <Slider
                          value={priceRange}
                          onValueChange={(value) => setPriceRange(value as [number, number])}
                          max={10000}
                          step={100}
                          className="w-full"
                        />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>₹{priceRange[0]}</span>
                        <span>₹{priceRange[1]}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Brands</h4>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {brands.map((brand) => (
                          <div key={brand} className="flex items-center space-x-2">
                            <Checkbox
                              id={brand}
                              checked={selectedBrands.includes(brand)}
                              onCheckedChange={() => handleBrandToggle(brand)}
                            />
                            <label
                              htmlFor={brand}
                              className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                            >
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search and Controls */}
              <div className="bg-gradient-to-br from-background to-background/80 border border-border/30 rounded-2xl p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="relative flex-1 max-w-2xl">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search fragrances, brands, or notes..."
                      className="pl-12 h-12 text-lg border-2 border-border/30 focus:border-gold rounded-xl"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex border border-border/30 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`px-4 py-2 transition-all ${
                          viewMode === "grid"
                            ? "bg-gold text-black"
                            : "bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Grid
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`px-4 py-2 transition-all ${
                          viewMode === "list"
                            ? "bg-gold text-black"
                            : "bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        List
                      </button>
                    </div>
                    
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[180px] h-12 border-2 border-border/30 rounded-xl">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Top Rated</SelectItem>
                        <SelectItem value="name">Alphabetical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Active Filters */}
                {(selectedCategory !== "all" || selectedBrands.length > 0 || priceRange[0] > 0 || priceRange[1] < 10000) && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedCategory !== "all" && (
                      <Badge variant="secondary" className="gap-1">
                        {selectedCategory === "all" ? "All Categories" : selectedCategory.replace("-", " ")}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("all")} />
                      </Badge>
                    )}
                    {selectedBrands.map((brand) => (
                      <Badge key={brand} variant="secondary" className="gap-1">
                        {brand}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => handleBrandToggle(brand)} />
                      </Badge>
                    ))}
                    {(priceRange[0] > 0 || priceRange[1] < 10000) && (
                      <Badge variant="secondary" className="gap-1">
                        ₹{priceRange[0]} - ₹{priceRange[1]}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setPriceRange([0, 10000])} />
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              {/* Products */}
              <AnimatePresence mode="wait">
                {sortedProducts.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-16"
                  >
                    <div className="bg-gradient-to-br from-background to-background/50 border border-border/30 rounded-2xl p-12 max-w-md mx-auto">
                      <Search className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        No products found
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Try adjusting your search or filter criteria
                      </p>
                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="rounded-xl"
                      >
                        Clear All Filters
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={viewMode}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <p className="text-muted-foreground">
                          Showing <span className="font-semibold text-foreground">{sortedProducts.length}</span> of{" "}
                          <span className="font-semibold text-foreground">{products.length}</span> products
                        </p>
                        {/* Category Info */}
                        {selectedCategory !== "all" && (
                          <Badge variant="outline" className="bg-gold/10 text-gold border-gold/30">
                            Category: {selectedCategory.replace("-", " ")}
                          </Badge>
                        )}
                      </div>
                      {favorites.length > 0 && (
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <Heart className="h-4 w-4 text-red-500 fill-current" />
                          {favorites.length} in favorites
                        </div>
                      )}
                    </div>

                    {/* Using Single ProductCard Component for both views */}
                    {viewMode === "grid" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {sortedProducts.map((product, index) => (
                          <ProductCard
                            key={product.productId}
                            {...product}
                            onToggleFavorite={handleToggleFavorite}
                            isFavorite={favorites.includes(product.productId)}
                            variant="grid"
                            className="w-full"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4 md:space-y-6">
                        {sortedProducts.map((product, index) => (
                          <ProductCard
                            key={product.productId}
                            {...product}
                            onToggleFavorite={handleToggleFavorite}
                            isFavorite={favorites.includes(product.productId)}
                            variant="list"
                            className="w-full"
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-12 bg-gradient-to-b from-background to-luxury-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Featured Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {brands.slice(0, 6).map((brand) => (
              <div
                key={brand}
                className="bg-gradient-to-br from-background to-background/80 border border-border/30 rounded-xl p-6 text-center hover:border-gold/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => {
                  setSelectedBrands([brand]);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="h-12 w-12 mx-auto mb-3 bg-gradient-to-br from-gold/20 to-gold/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-gold" />
                </div>
                <p className="font-medium text-foreground">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-luxury-black to-black text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
                alt="Merfume"
                className="h-24 w-auto mb-6 brightness-110"
              />
              <p className="text-cream/80 max-w-xl leading-relaxed text-lg">
                Discover luxury fragrances that tell your story. Each scent in our collection 
                is carefully curated to evoke emotions and create lasting memories.
              </p>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" className="border-cream/30 text-cream hover:bg-cream/10">
                  Instagram
                </Button>
                <Button variant="outline" className="border-cream/30 text-cream hover:bg-cream/10">
                  Facebook
                </Button>
                <Button variant="outline" className="border-cream/30 text-cream hover:bg-cream/10">
                  Pinterest
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-gold font-semibold text-lg mb-6">Shop</h3>
              <ul className="space-y-3">
                {["All Fragrances", "New Arrivals", "Best Sellers", "Limited Edition", "Gift Sets"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-cream/80 hover:text-gold transition-colors text-lg">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-semibold text-lg mb-6">Help</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-cream/80 hover:text-gold transition-colors text-lg">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream/80 hover:text-gold transition-colors text-lg">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream/80 hover:text-gold transition-colors text-lg">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream/80 hover:text-gold transition-colors text-lg">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-12 pt-8 text-center">
            <p className="text-cream/60 text-lg">
              © 2024 Merfume. All rights reserved. Crafted with passion in India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
