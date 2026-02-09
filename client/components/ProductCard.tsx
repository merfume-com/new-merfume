// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ShoppingCart, Heart, Star } from "lucide-react";
// import { toast } from "sonner";

// interface ProductCardProps {
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
//   onToggleFavorite?: (id: number) => void;
//   isFavorite?: boolean;
//   className?: string;
//   style?: React.CSSProperties;
// }

// export default function ProductCard({
//   productId,
//   productName,
//   brand,
//   productPrice,
//   originalPrice,
//   productImageUrl,
//   productBackImageUrl,
//   rating,
//   reviewCount,
//   productDescription,
//   notes,
//   onToggleFavorite,
//   isFavorite = false,
//   className,
//   style,
// }: ProductCardProps) {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [isAdding, setIsAdding] = useState(false);
//   const [added, setAdded] = useState(false);

//   const getCartToken = () => {
//     if (typeof window === "undefined") return "";
    
//     let token = localStorage.getItem("cartToken");
//     if (!token) {
//       token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//       localStorage.setItem("cartToken", token);
//     }
//     return token;
//   };

//   const handleToggleFavorite = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     onToggleFavorite?.(productId);
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.stopPropagation();

//     if (isAdding) return;

//     setIsAdding(true);
//     try {
//       const cartToken = getCartToken();

//       const API_BASE_URL = "https://cb55c4aecb34.ngrok-free.app";
//       const response = await fetch(`https://cb55c4aecb34.ngrok-free.app/api/cart/add`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Cart-Token": cartToken,
//           'ngrok-skip-browser-warning': '69420'
//         },
//         body: JSON.stringify({
//           productId,
//           quantity: 1,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error("Network error please refresh the page.");
//       }

//       const addedItem = {
//         productId,
//         productName,
//         brand,
//         productPrice,
//         quantity: 1,
//         productImageUrl,
//       };

//       const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      
//       const index = existingCart.findIndex((item: any) => item.productId === productId);
//       if (index > -1) {
//         existingCart[index].quantity += 1;
//       } else {
//         existingCart.push(addedItem);
//       }

//       localStorage.setItem("cart", JSON.stringify(existingCart));

//       setAdded(true);
//       toast.success("Added to cart successfully");

//       setTimeout(() => setAdded(false), 2000);
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       toast.error(error instanceof Error ? error.message : "Network error please refresh the page.");
//     } finally {
//       setIsAdding(false);
//     }
//   };

//   return (
//     <div 
//       className={`group relative w-full ${className}`} 
//       style={{ height: '28rem', ...style }}
//       onMouseEnter={() => productBackImageUrl && setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}
//     >
//       <div 
//         className={`relative w-full h-full transition-all duration-500 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}
//         style={{ 
//           transformStyle: 'preserve-3d',
//           transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
//         }}
//       >
//         {/* Front of Card */}
//          <div 
//           className="absolute inset-0 w-full h-full"
//           style={{ backfaceVisibility: 'hidden' }}
//         >
//           <Card className="h-full border border-border/50 hover:border-gold/50 transition overflow-hidden">
//             <CardContent className="p-0 h-full flex flex-col">
//               <div className="relative h-48 flex-shrink-0">
//                 <img 
//                   src={productImageUrl} 
//                   alt={productName} 
//                   className="w-full h-full object-cover" 
//                 />
//                 {onToggleFavorite && (
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background ${
//                       isFavorite ? "text-red-500" : "text-muted-foreground"
//                     }`}
//                     onClick={handleToggleFavorite}
//                   >
//                     <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
//                   </Button>
//                 )}
//                 {originalPrice && (
//                   <div className="absolute top-3 left-3 bg-gold text-black px-2 py-1 text-xs font-semibold rounded">
//                     SALE
//                   </div>
//                 )}
//               </div>
              
//               <div className="p-4 flex flex-col flex-1">
//                 <div className="flex items-center gap-1 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`h-3 w-3 ${
//                         i < Math.floor(rating)
//                           ? "text-gold fill-current"
//                           : "text-muted-foreground/30"
//                       }`}
//                     />
//                   ))}
//                   <span className="text-xs text-muted-foreground ml-1">
//                     ({reviewCount})
//                   </span>
//                 </div>
//                 <p className="text-sm text-muted-foreground mb-1">{brand}</p>
//                 <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
//                   {productName}
//                 </h3>
                
//                 {/* Description on Front Card */}
//                 <div className="mb-3">
//                   <p className="text-sm text-muted-foreground line-clamp-2">
//                     {productDescription}
//                   </p>
//                 </div>
                
//                 {/* Notes on Front Card */}
//                 <div className="mb-3">
//                   <p className="text-xs font-medium text-foreground mb-1">Notes:</p>
//                   <div className="flex flex-wrap gap-1">
//                     {notes.slice(0, 2).map((note, index) => (
//                       <span
//                         key={index}
//                         className="text-xs bg-accent/100 text-accent-foreground px-2 py-1 rounded"
//                       >
//                         {note}
//                       </span>
//                     ))}
//                     {notes.length > 2 && (
//                       <span className="text-xs bg-accent/100 text-accent-foreground px-2 py-1 rounded">
//                         +{notes.length - 2} more
//                       </span>
//                     )}
//                   </div>
//                 </div>
                
//                 <div className="mt-auto pt-3">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <span className="text-lg font-bold text-gold">₹{productPrice}</span>
//                       {originalPrice && (
//                         <span className="text-sm text-muted-foreground line-through">
//                           ₹{originalPrice}
//                         </span>
//                       )}
//                     </div>
//                     <Button
//                       size="sm"
//                       className="bg-gold hover:bg-gold-dark text-black min-w-[40px] h-9"
//                       onClick={handleAddToCart}
//                       disabled={isAdding || added}
//                     >
//                       {isAdding ? (
//                         <span className="text-xs">Adding...</span>
//                       ) : added ? (
//                         <span className="text-xs">Added</span>
//                       ) : (
//                         <ShoppingCart className="h-4 w-4" />
//                       )}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Back of Card */}
//         {productBackImageUrl && (
//           <div 
//             className="absolute inset-0 w-full h-full"
//             style={{ 
//               backfaceVisibility: 'hidden',
//               transform: 'rotateY(180deg)'
//             }}
//           >
//             <Card className="h-full border border-border/50 overflow-hidden">
//               <CardContent className="p-0 h-full flex flex-col">
//                 <div className="relative h-48 flex-shrink-0">
//                   <img
//                     src={productBackImageUrl}
//                     alt={`${productName} - Back view`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4 flex flex-col flex-1">
//                   <h3 className="font-semibold text-foreground mb-2">{productName}</h3>
//                   <div className="flex-1 overflow-hidden">
//                     <p className="text-sm text-muted-foreground mb-3 line-clamp-3 h-full">
//                       {productDescription}
//                     </p>
//                   </div>
//                   <div className="mb-3 mt-2">
//                     <p className="text-xs font-medium text-foreground mb-1">Notes:</p>
//                     <div className="flex flex-wrap gap-1">
//                       {notes.slice(0, 3).map((note, index) => (
//                         <span
//                           key={index}
//                           className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded"
//                         >
//                           {note}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="mt-2">
//                     <Button
//                       className="w-full bg-gold hover:bg-gold-dark text-black h-10 py-2"
//                       onClick={handleAddToCart}
//                       disabled={isAdding || added}
//                     >
//                       {isAdding ? (
//                         <span className="flex items-center justify-center">
//                           <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></span>
//                           Adding...
//                         </span>
//                       ) : added ? (
//                         "✓ Added to Cart"
//                       ) : (
//                         <span className="flex items-center justify-center gap-2">
//                           <ShoppingCart className="h-4 w-4" />
//                           Add to Cart
//                         </span>
//                       )}
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ShoppingCart, Heart, Star, Loader2 } from "lucide-react";
// import { toast } from "sonner";

// interface ProductCardProps {
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
//   onToggleFavorite?: (id: number) => void;
//   isFavorite?: boolean;
//   className?: string;
//   style?: React.CSSProperties;
// }

// // Create axios instance with configuration
// const api = axios.create({
//   baseURL: "https://6a3dfa7e05c5.ngrok-free.app",
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
//     // Add timestamp to prevent caching for GET requests
//     if (config.method?.toLowerCase() === "get" && config.url) {
//       const timestamp = `_t=${Date.now()}`;
//       config.url += config.url.includes("?") ? `&${timestamp}` : `?${timestamp}`;
//     }
    
//     return config;
//   },
//   (error) => {
//     console.error("Request error:", error);
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor for retry logic
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
    
//     // Retry on network errors (no response) and not already retried
//     if (!error.response && !originalRequest?._retry) {
//       originalRequest._retry = true;
//       console.log("Retrying request due to network error...");
      
//       // Wait 1 second before retrying
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // Clear timestamp for retry
//       if (originalRequest.url) {
//         originalRequest.url = originalRequest.url.split("?")[0];
//       }
      
//       return api(originalRequest);
//     }
    
//     return Promise.reject(error);
//   }
// );

// export default function ProductCard({
//   productId,
//   productName,
//   brand,
//   productPrice,
//   originalPrice,
//   productImageUrl,
//   productBackImageUrl,
//   rating,
//   reviewCount,
//   productDescription,
//   notes,
//   onToggleFavorite,
//   isFavorite = false,
//   className,
//   style,
// }: ProductCardProps) {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [isAdding, setIsAdding] = useState(false);
//   const [added, setAdded] = useState(false);
//   const [localCartCount, setLocalCartCount] = useState<number>(() => {
//     // Initialize local cart count from localStorage
//     if (typeof window !== "undefined") {
//       const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//       const item = existingCart.find((item: any) => item.productId === productId);
//       return item ? item.quantity : 0;
//     }
//     return 0;
//   });

//   const getCartToken = () => {
//     if (typeof window === "undefined") return "";
    
//     let token = localStorage.getItem("cartToken");
//     if (!token) {
//       token = "cart-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//       localStorage.setItem("cartToken", token);
//     }
//     return token;
//   };

//   const handleToggleFavorite = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     e.preventDefault();
//     onToggleFavorite?.(productId);
//   };

//   const updateLocalCart = (productId: number, quantityChange: number) => {
//     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     const itemIndex = existingCart.findIndex((item: any) => item.productId === productId);
    
//     if (itemIndex > -1) {
//       existingCart[itemIndex].quantity += quantityChange;
//       if (existingCart[itemIndex].quantity <= 0) {
//         existingCart.splice(itemIndex, 1);
//         setLocalCartCount(0);
//       } else {
//         setLocalCartCount(existingCart[itemIndex].quantity);
//       }
//     } else if (quantityChange > 0) {
//       existingCart.push({
//         productId,
//         productName,
//         brand,
//         productPrice,
//         quantity: quantityChange,
//         productImageUrl,
//       });
//       setLocalCartCount(quantityChange);
//     }
    
//     localStorage.setItem("cart", JSON.stringify(existingCart));
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.stopPropagation();
//     e.preventDefault();

//     if (isAdding) return;

//     setIsAdding(true);
    
//     try {
//       const cartToken = getCartToken();
      
//       // Prepare the payload
//       const payload = {
//         productId,
//         quantity: 1,
//       };

//       console.log("Adding to cart:", payload);

//       // Make API call with axios
//       const response = await api.post("/api/cart/add", payload, {
//         headers: {
//           "Cart-Token": cartToken,
//         },
//       });

//       console.log("Add to cart response:", response.data);

//       // Update local storage
//       updateLocalCart(productId, 1);

//       setAdded(true);
//       toast.success("Added to cart successfully!", {
//         description: `${productName} has been added to your cart.`,
//       });

//       // Dispatch custom event for other components to refresh cart
//       if (typeof window !== "undefined") {
//         window.dispatchEvent(new CustomEvent("cart-updated"));
//       }

//       // Reset added state after 2 seconds
//       setTimeout(() => setAdded(false), 2000);

//     } catch (error: any) {
//       console.error("Error adding to cart:", error);
      
//       let errorMessage = "Failed to add item to cart. ";
      
//       if (error.code === "ECONNABORTED") {
//         errorMessage += "Request timeout. Please check your connection.";
//       } else if (error.message?.includes("Network Error")) {
//         errorMessage += "Network error. Please check your internet connection.";
//       } else if (error.response?.status === 409) {
//         errorMessage = "Item is already in your cart.";
//       } else if (error.response?.status === 404) {
//         errorMessage = "Product not found.";
//       } else if (error.response?.status >= 500) {
//         errorMessage = "Server error. Please try again later.";
//       } else if (error.response?.data?.message) {
//         errorMessage = error.response.data.message;
//       } else {
//         errorMessage += "Please try again.";
//       }
      
//       toast.error(errorMessage, {
//         duration: 4000,
//       });
      
//       // Still update local storage for offline mode
//       updateLocalCart(productId, 1);
      
//     } finally {
//       setIsAdding(false);
//     }
//   };

//   const handleQuickView = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     e.preventDefault();
    
//     // Dispatch event for quick view modal
//     if (typeof window !== "undefined") {
//       window.dispatchEvent(new CustomEvent("product-quick-view", {
//         detail: {
//           productId,
//           productName,
//           brand,
//           productPrice,
//           originalPrice,
//           productImageUrl,
//           productBackImageUrl,
//           rating,
//           reviewCount,
//           productDescription,
//           notes,
//         }
//       }));
//     }
//   };

//   const handleCardClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     // Navigate to product detail page or show quick view
//     handleQuickView(e);
//   };

//   // Calculate discount percentage
//   const discountPercentage = originalPrice 
//     ? Math.round(((originalPrice - productPrice) / originalPrice) * 100)
//     : 0;

//   return (
//     <div 
//       className={`group relative w-full cursor-pointer ${className}`} 
//       style={{ height: '28rem', ...style }}
//       onMouseEnter={() => productBackImageUrl && setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}
//       onClick={handleCardClick}
//     >
//       <div 
//         className={`relative w-full h-full transition-all duration-500 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}
//         style={{ 
//           transformStyle: 'preserve-3d',
//           transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
//         }}
//       >
//         {/* Front of Card */}
//         <div 
//           className="absolute inset-0 w-full h-full"
//           style={{ backfaceVisibility: 'hidden' }}
//         >
//           <Card className="h-full border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-primary/5">
//             <CardContent className="p-0 h-full flex flex-col">
//               {/* Product Image Section */}
//               <div className="relative h-48 flex-shrink-0 overflow-hidden">
//                 <img 
//                   src={productImageUrl} 
//                   alt={productName} 
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   loading="lazy"
//                 />
                
//                 {/* Favorite Button */}
//                 {onToggleFavorite && (
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className={`absolute top-3 right-3 bg-background/90 backdrop-blur-sm hover:bg-background transition-all ${
//                       isFavorite ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-foreground"
//                     }`}
//                     onClick={handleToggleFavorite}
//                     aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
//                   >
//                     <Heart className={`h-4 w-4 transition-all ${isFavorite ? "fill-current" : ""}`} />
//                   </Button>
//                 )}
                
//                 {/* Discount Badge */}
//                 {originalPrice && discountPercentage > 0 && (
//                   <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-md shadow-lg">
//                     {discountPercentage}% OFF
//                   </div>
//                 )}
                
//                 {/* Local Cart Count Badge */}
//                 {localCartCount > 0 && (
//                   <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded-full shadow-md">
//                     {localCartCount} in cart
//                   </div>
//                 )}
//               </div>
              
//               {/* Product Info Section */}
//               <div className="p-4 flex flex-col flex-1">
//                 {/* Rating */}
//                 <div className="flex items-center gap-1 mb-2">
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`h-3 w-3 ${
//                           i < Math.floor(rating)
//                             ? "text-yellow-500 fill-current"
//                             : "text-muted-foreground/30"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                   <span className="text-xs text-muted-foreground ml-1">
//                     ({reviewCount.toLocaleString()})
//                   </span>
//                 </div>
                
//                 {/* Brand */}
//                 <p className="text-sm text-muted-foreground mb-1 font-medium">{brand}</p>
                
//                 {/* Product Name */}
//                 <h3 className="font-semibold text-foreground mb-2 line-clamp-2 h-10">
//                   {productName}
//                 </h3>
                
//                 {/* Description */}
//                 <div className="mb-3">
//                   <p className="text-sm text-muted-foreground line-clamp-2">
//                     {productDescription}
//                   </p>
//                 </div>
                
//                 {/* Notes */}
//                 <div className="mb-3">
//                   <p className="text-xs font-medium text-foreground mb-1">Notes:</p>
//                   <div className="flex flex-wrap gap-1">
//                     {notes.slice(0, 2).map((note, index) => (
//                       <span
//                         key={index}
//                         className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full border border-accent/30"
//                       >
//                         {note}
//                       </span>
//                     ))}
//                     {notes.length > 2 && (
//                       <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded-full">
//                         +{notes.length - 2} more
//                       </span>
//                     )}
//                   </div>
//                 </div>
                
//                 {/* Price and Add to Cart Button */}
//                 <div className="mt-auto pt-3 border-t border-border/50">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-baseline gap-2">
//                       <span className="text-lg font-bold text-primary">₹{productPrice.toLocaleString()}</span>
//                       {originalPrice && (
//                         <>
//                           <span className="text-sm text-muted-foreground line-through">
//                             ₹{originalPrice.toLocaleString()}
//                           </span>
//                           <span className="text-xs font-semibold text-red-500">
//                             Save ₹{(originalPrice - productPrice).toLocaleString()}
//                           </span>
//                         </>
//                       )}
//                     </div>
//                     <Button
//                       size="sm"
//                       className={`min-w-[40px] h-9 transition-all duration-300 ${
//                         added 
//                           ? "bg-green-500 hover:bg-green-600 text-white" 
//                           : "bg-primary hover:bg-primary/90 text-primary-foreground"
//                       } ${localCartCount > 0 ? "ring-2 ring-primary/30" : ""}`}
//                       onClick={handleAddToCart}
//                       disabled={isAdding}
//                       aria-label={added ? "Added to cart" : "Add to cart"}
//                     >
//                       {isAdding ? (
//                         <Loader2 className="h-4 w-4 animate-spin" />
//                       ) : added ? (
//                         <span className="text-xs">✓</span>
//                       ) : localCartCount > 0 ? (
//                         <span className="flex items-center gap-1">
//                           <ShoppingCart className="h-3 w-3" />
//                           <span className="text-xs">+{localCartCount}</span>
//                         </span>
//                       ) : (
//                         <ShoppingCart className="h-4 w-4" />
//                       )}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Back of Card */}
//         {productBackImageUrl && (
//           <div 
//             className="absolute inset-0 w-full h-full"
//             style={{ 
//               backfaceVisibility: 'hidden',
//               transform: 'rotateY(180deg)'
//             }}
//           >
//             <Card className="h-full border border-border/50 overflow-hidden hover:shadow-lg">
//               <CardContent className="p-0 h-full flex flex-col">
//                 {/* Back Image */}
//                 <div className="relative h-48 flex-shrink-0 overflow-hidden">
//                   <img
//                     src={productBackImageUrl}
//                     alt={`${productName} - Back view`}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//                   <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
//                     Back View
//                   </div>
//                 </div>
                
//                 {/* Back Info */}
//                 <div className="p-4 flex flex-col flex-1">
//                   <h3 className="font-semibold text-foreground mb-2">{productName}</h3>
                  
//                   {/* Full Description */}
//                   <div className="flex-1 overflow-hidden mb-3">
//                     <p className="text-sm text-muted-foreground line-clamp-4">
//                       {productDescription}
//                     </p>
//                   </div>
                  
//                   {/* All Notes */}
//                   <div className="mb-4">
//                     <p className="text-xs font-medium text-foreground mb-2">Fragrance Notes:</p>
//                     <div className="flex flex-wrap gap-1">
//                       {notes.map((note, index) => (
//                         <span
//                           key={index}
//                           className="text-xs bg-primary/10 text-primary-foreground px-2 py-1 rounded-full border border-primary/20"
//                         >
//                           {note}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Add to Cart Button on Back */}
//                   <div className="mt-auto">
//                     <Button
//                       className={`w-full h-11 transition-all duration-300 ${
//                         added 
//                           ? "bg-green-500 hover:bg-green-600 text-white" 
//                           : "bg-primary hover:bg-primary/90 text-primary-foreground"
//                       }`}
//                       onClick={handleAddToCart}
//                       disabled={isAdding}
//                     >
//                       {isAdding ? (
//                         <span className="flex items-center justify-center gap-2">
//                           <Loader2 className="h-4 w-4 animate-spin" />
//                           Adding...
//                         </span>
//                       ) : added ? (
//                         <span className="flex items-center justify-center gap-2">
//                           ✓ Added to Cart
//                         </span>
//                       ) : localCartCount > 0 ? (
//                         <span className="flex items-center justify-center gap-2">
//                           <ShoppingCart className="h-4 w-4" />
//                           Add More ({localCartCount} in cart)
//                         </span>
//                       ) : (
//                         <span className="flex items-center justify-center gap-2">
//                           <ShoppingCart className="h-4 w-4" />
//                           Add to Cart - ₹{productPrice.toLocaleString()}
//                         </span>
//                       )}
//                     </Button>
                    
//                     {/* Quick Actions */}
//                     <div className="flex gap-2 mt-2">
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="flex-1 text-xs"
//                         onClick={handleToggleFavorite}
//                       >
//                         <Heart className={`h-3 w-3 mr-1 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
//                         {isFavorite ? "Saved" : "Save"}
//                       </Button>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="flex-1 text-xs"
//                         onClick={handleQuickView}
//                       >
//                         Quick View
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}
//       </div>
      
//       {/* Hover Overlay */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ShoppingCart, Heart, Star } from "lucide-react";
// import { toast } from "sonner";
// import axios from "axios";

// interface ProductCardProps {
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
//   onToggleFavorite?: (id: number) => void;
//   isFavorite?: boolean;
//   className?: string;
//   style?: React.CSSProperties;
// }

// // Axios instance create karte hain
// const api = axios.create({
//   // baseURL: "https://e46b4bafada4.ngrok-free.app",
//     baseURL:"https://merfume-backend-production-5068.up.railway.app",
//   headers: {
//     'Content-Type': 'application/json',
//     // 'ngrok-skip-browser-warning': '69420'
//   }
// });

// export default function ProductCard({
//   productId,
//   productName,
//   brand,
//   productPrice,
//   originalPrice,
//   productImageUrl,
//   productBackImageUrl,
//   rating,
//   reviewCount,
//   productDescription,
//   notes,
//   onToggleFavorite,
//   isFavorite = false,
//   className,
//   style,
// }: ProductCardProps) {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [isAdding, setIsAdding] = useState(false);
//   const [added, setAdded] = useState(false);

//   const getCartToken = () => {
//     if (typeof window === "undefined") return "";
    
//     let token = localStorage.getItem("cartToken");
//     if (!token) {
//       token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//       localStorage.setItem("cartToken", token);
//     }
//     return token;
//   };

//   const handleToggleFavorite = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     onToggleFavorite?.(productId);
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.stopPropagation();

//     if (isAdding) return;

//     setIsAdding(true);
//     try {
//       const cartToken = getCartToken();

//       // Axios se request bhej rahe hain
//       const response = await api.post("/api/cart/add", {
//         productId,
//         quantity: 1,
//       }, {
//         headers: {
//           "Cart-Token": cartToken,
//         },
//       });

//       const addedItem = {
//         productId,
//         productName,
//         brand,
//         productPrice,
//         quantity: 1,
//         productImageUrl,
//       };

//       const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      
//       const index = existingCart.findIndex((item: any) => item.productId === productId);
//       if (index > -1) {
//         existingCart[index].quantity += 1;
//       } else {
//         existingCart.push(addedItem);
//       }

//       localStorage.setItem("cart", JSON.stringify(existingCart));

//       setAdded(true);
//       toast.success("Added to cart successfully");

//       setTimeout(() => setAdded(false), 2000);
//     } catch (error) {
//       console.error("Error adding to cart:", error);
      
//       if (axios.isAxiosError(error)) {
//         if (error.response) {
//           // Server ne error response diya
//           toast.error(error.response.data.message || "Failed to add to cart");
//         } else if (error.request) {
//           // Request bheji gayi lekin response nahi aaya
//           toast.error("Network error. Please check your connection.");
//         } else {
//           // Request setup mein error
//           toast.error("An error occurred. Please try again.");
//         }
//       } else {
//         toast.error("Network error please refresh the page.");
//       }
//     } finally {
//       setIsAdding(false);
//     }
//   };

//   return (
//     <div 
//       className={`group relative w-full ${className}`} 
//       style={{ height: '28rem', ...style }}
//       onMouseEnter={() => productBackImageUrl && setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}
//     >
//       <div 
//         className={`relative w-full h-full transition-all duration-500 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}
//         style={{ 
//           transformStyle: 'preserve-3d',
//           transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
//         }}
//       >
//         {/* Front of Card */}
//          <div 
//           className="absolute inset-0 w-full h-full"
//           style={{ backfaceVisibility: 'hidden' }}
//         >
//           <Card className="h-full border border-border/50 hover:border-gold/50 transition overflow-hidden">
//             <CardContent className="p-0 h-full flex flex-col">
//               <div className="relative h-48 flex-shrink-0">
//                 <img 
//                   src={productImageUrl} 
//                   alt={productName} 
//                   className="w-full h-full object-cover" 
//                 />
//                 {onToggleFavorite && (
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background ${
//                       isFavorite ? "text-red-500" : "text-muted-foreground"
//                     }`}
//                     onClick={handleToggleFavorite}
//                   >
//                     <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
//                   </Button>
//                 )}
//                 {originalPrice && (
//                   <div className="absolute top-3 left-3 bg-gold text-black px-2 py-1 text-xs font-semibold rounded">
//                     SALE
//                   </div>
//                 )}
//               </div>
              
//               <div className="p-4 flex flex-col flex-1">
//                 <div className="flex items-center gap-1 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`h-3 w-3 ${
//                         i < Math.floor(rating)
//                           ? "text-gold fill-current"
//                           : "text-muted-foreground/30"
//                       }`}
//                     />
//                   ))}
//                   <span className="text-xs text-muted-foreground ml-1">
//                     ({reviewCount})
//                   </span>
//                 </div>
//                 <p className="text-sm text-muted-foreground mb-1">{brand}</p>
//                 <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
//                   {productName}
//                 </h3>
                
//                 {/* Description on Front Card */}
//                 <div className="mb-3">
//                   <p className="text-sm text-muted-foreground line-clamp-2">
//                     {productDescription}
//                   </p>
//                 </div>
                
//                 {/* Notes on Front Card */}
//                 <div className="mb-3">
//                   <p className="text-xs font-medium text-foreground mb-1">Notes:</p>
//                   <div className="flex flex-wrap gap-1">
//                     {notes.slice(0, 2).map((note, index) => (
//                       <span
//                         key={index}
//                         className="text-xs bg-accent/100 text-accent-foreground px-2 py-1 rounded"
//                       >
//                         {note}
//                       </span>
//                     ))}
//                     {notes.length > 2 && (
//                       <span className="text-xs bg-accent/100 text-accent-foreground px-2 py-1 rounded">
//                         +{notes.length - 2} more
//                       </span>
//                     )}
//                   </div>
//                 </div>
                
//                 <div className="mt-auto pt-3">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <span className="text-lg font-bold text-gold">₹{productPrice}</span>
//                       {originalPrice && (
//                         <span className="text-sm text-muted-foreground line-through">
//                           ₹{originalPrice}
//                         </span>
//                       )}
//                     </div>
//                     <Button
//                       size="sm"
//                       className="bg-gold hover:bg-gold-dark text-black min-w-[40px] h-9"
//                       onClick={handleAddToCart}
//                       disabled={isAdding || added}
//                     >
//                       {isAdding ? (
//                         <span className="text-xs">Adding...</span>
//                       ) : added ? (
//                         <span className="text-xs">Added</span>
//                       ) : (
//                         <ShoppingCart className="h-4 w-4" />
//                       )}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Back of Card */}
//         {productBackImageUrl && (
//           <div 
//             className="absolute inset-0 w-full h-full"
//             style={{ 
//               backfaceVisibility: 'hidden',
//               transform: 'rotateY(180deg)'
//             }}
//           >
//             <Card className="h-full border border-border/50 overflow-hidden">
//               <CardContent className="p-0 h-full flex flex-col">
//                 <div className="relative h-48 flex-shrink-0">
//                   <img
//                     src={productBackImageUrl}
//                     alt={`${productName} - Back view`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4 flex flex-col flex-1">
//                   <h3 className="font-semibold text-foreground mb-2">{productName}</h3>
//                   <div className="flex-1 overflow-hidden">
//                     <p className="text-sm text-muted-foreground mb-3 line-clamp-3 h-full">
//                       {productDescription}
//                     </p>
//                   </div>
//                   <div className="mb-3 mt-2">
//                     <p className="text-xs font-medium text-foreground mb-1">Notes:</p>
//                     <div className="flex flex-wrap gap-1">
//                       {notes.slice(0, 3).map((note, index) => (
//                         <span
//                           key={index}
//                           className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded"
//                         >
//                           {note}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="mt-2">
//                     <Button
//                       className="w-full bg-gold hover:bg-gold-dark text-black h-10 py-2"
//                       onClick={handleAddToCart}
//                       disabled={isAdding || added}
//                     >
//                       {isAdding ? (
//                         <span className="flex items-center justify-center">
//                           <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></span>
//                           Adding...
//                         </span>
//                       ) : added ? (
//                         "✓ Added to Cart"
//                       ) : (
//                         <span className="flex items-center justify-center gap-2">
//                           <ShoppingCart className="h-4 w-4" />
//                           Add to Cart
//                         </span>
//                       )}
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ShoppingCart, Heart, Star, Eye, Check, Zap } from "lucide-react";
// import { toast } from "sonner";
// import axios from "axios";
// import { motion } from "framer-motion";

// interface ProductCardProps {
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
//   onToggleFavorite?: (id: number) => void;
//   isFavorite?: boolean;
//   className?: string;
//   style?: React.CSSProperties;
//   stock?: number;
//   variant?: "grid" | "list";
// }

// const api = axios.create({
//   baseURL: "https://merfume-backend-production-5068.up.railway.app",
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// export default function ProductCard({
//   productId,
//   productName,
//   brand,
//   productPrice,
//   originalPrice,
//   productImageUrl,
//   productBackImageUrl,
//   rating,
//   reviewCount,
//   productDescription,
//   notes,
//   onToggleFavorite,
//   isFavorite = false,
//   className,
//   style,
//   stock = 10,
//   variant = "grid",
// }: ProductCardProps) {
//   const [isAdding, setIsAdding] = useState(false);
//   const [added, setAdded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [showBackImage, setShowBackImage] = useState(false);

//   const getCartToken = () => {
//     if (typeof window === "undefined") return "";
    
//     let token = localStorage.getItem("cartToken");
//     if (!token) {
//       token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//       localStorage.setItem("cartToken", token);
//     }
//     return token;
//   };

//   const handleToggleFavorite = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     onToggleFavorite?.(productId);
//   };

//   const handleEyeClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (productBackImageUrl) {
//       setShowBackImage(!showBackImage);
//     }
//   };

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (isAdding || added || stock === 0) return;

//     setIsAdding(true);
//     try {
//       const cartToken = getCartToken();

//       const response = await api.post("/api/cart/add", {
//         productId,
//         quantity: 1,
//       }, {
//         headers: {
//           "Cart-Token": cartToken,
//         },
//       });

//       const addedItem = {
//         productId,
//         productName,
//         brand,
//         productPrice,
//         quantity: 1,
//         productImageUrl,
//       };

//       const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      
//       const index = existingCart.findIndex((item: any) => item.productId === productId);
//       if (index > -1) {
//         existingCart[index].quantity += 1;
//       } else {
//         existingCart.push(addedItem);
//       }

//       localStorage.setItem("cart", JSON.stringify(existingCart));

//       setAdded(true);
//       toast.success("Added to cart successfully!", {
//         duration: 2000,
//         position: "top-right",
//       });

//       setTimeout(() => setAdded(false), 2000);
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       if (axios.isAxiosError(error)) {
//         toast.error(error.response?.data?.message || "Failed to add to cart");
//       } else {
//         toast.error("Network error. Please try again.");
//       }
//     } finally {
//       setIsAdding(false);
//     }
//   };

//   const discount = originalPrice 
//     ? Math.round(((originalPrice - productPrice) / originalPrice) * 100)
//     : 0;

//   // Grid View
//   if (variant === "grid") {
//     return (
//       <motion.div
//         className={`group relative ${className}`}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         whileHover={{ y: -4 }}
//         transition={{ duration: 0.3 }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => {
//           setIsHovered(false);
//           setShowBackImage(false);
//         }}
//       >
//         <Card className="h-full border border-border/40 hover:border-gold/30 bg-gradient-to-b from-background to-background/95 overflow-hidden transition-all duration-300 rounded-xl hover:shadow-lg">
//           {/* Image Section */}
//           <div className="relative aspect-square overflow-hidden">
//             <motion.div
//               animate={{ scale: isHovered ? 1.05 : 1 }}
//               transition={{ duration: 0.5 }}
//               className="relative h-full"
//             >
//               <img
//                 src={showBackImage && productBackImageUrl ? productBackImageUrl : productImageUrl}
//                 alt={productName}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             {/* Discount Badge */}
//             {originalPrice && discount > 0 && (
//               <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
//                 -{discount}%
//               </div>
//             )}

//             {/* Stock Badge */}
//             {stock < 5 && stock > 0 && (
//               <div className="absolute top-10 left-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
//                 Low Stock
//               </div>
//             )}
//             {stock === 0 && (
//               <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
//                 Out of Stock
//               </div>
//             )}

//             {/* Action Buttons */}
//             <div className="absolute top-3 right-3 flex flex-col gap-2">
//               <button
//                 onClick={handleToggleFavorite}
//                 className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110 active:scale-95"
//               >
//                 <Heart
//                   className={`h-4 w-4 transition-all ${
//                     isFavorite
//                       ? "text-red-500 fill-current animate-pulse"
//                       : "text-gray-600 group-hover:text-red-500"
//                   }`}
//                 />
//               </button>
              
//               {productBackImageUrl && (
//                 <button
//                   onClick={handleEyeClick}
//                   className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110 active:scale-95"
//                 >
//                   <Eye className={`h-4 w-4 ${showBackImage ? "text-gold" : "text-gray-600"}`} />
//                 </button>
//               )}
//             </div>

//             {/* Quick Add Overlay */}
//             {isHovered && stock > 0 && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="absolute inset-0 bg-black/30 flex items-center justify-center"
//               >
//                 <Button
//                   size="sm"
//                   className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black text-sm font-medium rounded-lg px-4 shadow-lg"
//                   onClick={handleAddToCart}
//                   disabled={isAdding || added}
//                 >
//                   {isAdding ? (
//                     <>
//                       <div className="h-3 w-3 border-2 border-black border-t-transparent rounded-full animate-spin mr-1.5"></div>
//                       Adding...
//                     </>
//                   ) : added ? (
//                     <>
//                       <Check className="h-3.5 w-3.5 mr-1.5" />
//                       Added
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
//                       Quick Add
//                     </>
//                   )}
//                 </Button>
//               </motion.div>
//             )}
//           </div>

//           {/* Content Section */}
//           <CardContent className="p-4 flex flex-col h-[240px]">
//             {/* Brand and Rating */}
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm font-medium text-gold bg-gold/10 px-2 py-1 rounded-full">
//                 {brand}
//               </span>
//               <div className="flex items-center gap-1">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`h-3 w-3 ${
//                         i < Math.floor(rating)
//                           ? "text-gold fill-current"
//                           : "text-muted-foreground/30"
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <span className="text-xs font-semibold ml-1">{rating.toFixed(1)}</span>
//                 <span className="text-xs text-muted-foreground">({reviewCount})</span>
//               </div>
//             </div>

//             {/* Product Name */}
//             <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 h-12">
//               {productName}
//             </h3>

//             {/* Description */}
//             <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
//               {productDescription}
//             </p>

//             {/* Notes */}
//             <div className="mb-4">
//               <div className="flex flex-wrap gap-1.5">
//                 {notes.slice(0, 2).map((note, index) => (
//                   <span
//                     key={index}
//                     className="text-xs bg-gradient-to-r from-accent/80 to-accent/60 text-accent-foreground px-2 py-1 rounded-full font-medium"
//                   >
//                     {note}
//                   </span>
//                 ))}
//                 {notes.length > 2 && (
//                   <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
//                     +{notes.length - 2}
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Price and CTA */}
//             <div className="mt-auto pt-3 border-t border-border/20">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//                 <div className="space-y-1">
//                   <div className="flex items-baseline gap-2 flex-wrap">
//                     <span className="text-xl font-bold text-gold">₹{productPrice.toLocaleString()}</span>
//                     {originalPrice && (
//                       <>
//                         <span className="text-sm text-muted-foreground line-through">
//                           ₹{originalPrice.toLocaleString()}
//                         </span>
//                         {discount > 0 && (
//                           <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full font-bold">
//                             Save {discount}%
//                           </span>
//                         )}
//                       </>
//                     )}
//                   </div>
//                   <p className="text-xs text-muted-foreground">
//                     Free shipping over ₹5000
//                   </p>
//                 </div>

//                 <Button
//                   size="sm"
//                   className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black font-semibold rounded-lg px-4 py-2 w-full sm:w-auto min-w-[110px]"
//                   onClick={handleAddToCart}
//                   disabled={isAdding || added || stock === 0}
//                 >
//                   {isAdding ? (
//                     <div className="flex items-center gap-1.5 justify-center">
//                       <div className="h-3 w-3 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//                       <span className="text-xs">Adding</span>
//                     </div>
//                   ) : added ? (
//                     <div className="flex items-center gap-1.5 justify-center">
//                       <Check className="h-3.5 w-3.5" />
//                       <span className="text-xs">Added</span>
//                     </div>
//                   ) : stock === 0 ? (
//                     "Out of Stock"
//                   ) : (
//                     <div className="flex items-center gap-1.5 justify-center">
//                       <ShoppingCart className="h-3.5 w-3.5" />
//                       <span className="text-xs">Add to Cart</span>
//                     </div>
//                   )}
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>
//     );
//   }

//   // List View - Mobile Optimized
//   return (
//     <motion.div
//       className={`group ${className}`}
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Card className="border border-border/40 hover:border-gold/30 bg-gradient-to-r from-background to-background/95 overflow-hidden transition-all duration-300 rounded-xl hover:shadow-lg">
//         {/* Mobile Layout */}
//         <div className="flex flex-col md:flex-row">
//           {/* Image Section */}
//           <div className="md:w-48 lg:w-56 relative h-48 md:h-auto md:min-h-[200px]">
//             <div className="relative h-full w-full">
//               <img
//                 src={showBackImage && productBackImageUrl ? productBackImageUrl : productImageUrl}
//                 alt={productName}
//                 className="w-full h-full object-cover"
//               />
              
//               {/* Discount Badge */}
//               {originalPrice && discount > 0 && (
//                 <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
//                   -{discount}%
//                 </div>
//               )}

//               {/* Action Buttons - Mobile */}
//               <div className="absolute top-3 right-3 flex gap-2">
//                 <button
//                   onClick={handleToggleFavorite}
//                   className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110"
//                 >
//                   <Heart
//                     className={`h-4 w-4 ${
//                       isFavorite
//                         ? "text-red-500 fill-current animate-pulse"
//                         : "text-gray-600 hover:text-red-500"
//                     }`}
//                   />
//                 </button>
                
//                 {productBackImageUrl && (
//                   <button
//                     onClick={handleEyeClick}
//                     className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110"
//                   >
//                     <Eye className={`h-4 w-4 ${showBackImage ? "text-gold" : "text-gray-600"}`} />
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Content Section */}
//           <CardContent className="flex-1 p-4 md:p-6">
//             <div className="h-full flex flex-col">
//               {/* Mobile: Compact Header */}
//               <div className="md:hidden mb-3">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm font-medium text-gold bg-gold/10 px-2 py-1 rounded-full">
//                     {brand}
//                   </span>
//                   <div className="flex items-center gap-1">
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className={`h-3 w-3 ${
//                             i < Math.floor(rating)
//                               ? "text-gold fill-current"
//                               : "text-muted-foreground/30"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-xs font-semibold ml-1">{rating.toFixed(1)}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Desktop: Full Header */}
//               <div className="hidden md:block mb-3">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
//                     {brand}
//                   </span>
//                   <div className="flex items-center gap-1">
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className={`h-3.5 w-3.5 ${
//                             i < Math.floor(rating)
//                               ? "text-gold fill-current"
//                               : "text-muted-foreground/30"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-sm font-semibold ml-1">{rating.toFixed(1)}</span>
//                     <span className="text-sm text-muted-foreground">({reviewCount})</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Product Name */}
//               <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 line-clamp-2">
//                 {productName}
//               </h3>

//               {/* Description - Hidden on mobile, shown on desktop */}
//               <p className="hidden md:block text-sm text-muted-foreground mb-3 line-clamp-2">
//                 {productDescription}
//               </p>

//               {/* Notes - Mobile: Only first note, Desktop: All notes */}
//               <div className="mb-3 md:mb-4">
//                 <div className="flex flex-wrap gap-1.5 md:gap-2">
//                   {notes.slice(0, window.innerWidth < 768 ? 1 : notes.length).map((note, index) => (
//                     <span
//                       key={index}
//                       className="text-xs bg-gradient-to-r from-accent/80 to-accent/60 text-accent-foreground px-2 md:px-3 py-1 md:py-1.5 rounded-full font-medium"
//                     >
//                       {note}
//                     </span>
//                   ))}
//                   {window.innerWidth < 768 && notes.length > 1 && (
//                     <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
//                       +{notes.length - 1}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Mobile Bottom Section */}
//               <div className="md:hidden mt-auto">
//                 <div className="space-y-3">
//                   {/* Price Section */}
//                   <div className="flex items-baseline gap-2">
//                     <span className="text-xl font-bold text-gold">₹{productPrice.toLocaleString()}</span>
//                     {originalPrice && (
//                       <>
//                         <span className="text-sm text-muted-foreground line-through">
//                           ₹{originalPrice.toLocaleString()}
//                         </span>
//                         {discount > 0 && (
//                           <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full font-bold">
//                             Save {discount}%
//                           </span>
//                         )}
//                       </>
//                     )}
//                   </div>

//                   {/* Stock Info */}
//                   {stock < 5 && stock > 0 && (
//                     <div className="inline-block bg-yellow-500/20 text-yellow-600 text-xs font-medium px-2 py-1 rounded-full">
//                       Only {stock} left
//                     </div>
//                   )}
//                   {stock === 0 && (
//                     <div className="inline-block bg-red-500/20 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
//                       Out of Stock
//                     </div>
//                   )}

//                   {/* CTA Button - Mobile */}
//                   <Button
//                     className="w-full bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black font-semibold rounded-lg py-3"
//                     onClick={handleAddToCart}
//                     disabled={isAdding || added || stock === 0}
//                   >
//                     {isAdding ? (
//                       <div className="flex items-center justify-center gap-2">
//                         <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//                         <span>Adding...</span>
//                       </div>
//                     ) : added ? (
//                       <div className="flex items-center justify-center gap-2">
//                         <Check className="h-4 w-4" />
//                         <span>Added</span>
//                       </div>
//                     ) : stock === 0 ? (
//                       "Out of Stock"
//                     ) : (
//                       <div className="flex items-center justify-center gap-2">
//                         <ShoppingCart className="h-4 w-4" />
//                         <span>Add to Cart</span>
//                       </div>
//                     )}
//                   </Button>
//                 </div>
//               </div>

//               {/* Desktop Bottom Section */}
//               <div className="hidden md:block mt-auto pt-4 border-t border-border/20">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                   <div className="space-y-2">
//                     <div className="flex items-baseline gap-3">
//                       <span className="text-2xl md:text-3xl font-bold text-gold">
//                         ₹{productPrice.toLocaleString()}
//                       </span>
//                       {originalPrice && (
//                         <>
//                           <span className="text-lg text-muted-foreground line-through">
//                             ₹{originalPrice.toLocaleString()}
//                           </span>
//                           {discount > 0 && (
//                             <span className="text-sm bg-green-500/20 text-green-600 px-3 py-1 rounded-full font-bold">
//                               Save {discount}%
//                             </span>
//                           )}
//                         </>
//                       )}
//                     </div>
                    
//                     <div className="flex items-center gap-2">
//                       <Zap className="h-4 w-4 text-green-500" />
//                       <p className="text-sm text-muted-foreground">
//                         Free shipping on orders over ₹5000
//                       </p>
//                     </div>

//                     {/* Stock Info */}
//                     {stock < 5 && stock > 0 && (
//                       <div className="inline-block bg-yellow-500/20 text-yellow-600 text-xs font-medium px-3 py-1 rounded-full">
//                         Only {stock} left in stock
//                       </div>
//                     )}
//                     {stock === 0 && (
//                       <div className="inline-block bg-red-500/20 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
//                         Out of Stock
//                       </div>
//                     )}
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <Button
//                       size="lg"
//                       className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black font-semibold rounded-lg px-6 py-3 min-w-[140px]"
//                       onClick={handleAddToCart}
//                       disabled={isAdding || added || stock === 0}
//                     >
//                       {isAdding ? (
//                         <div className="flex items-center gap-2">
//                           <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//                           <span>Adding...</span>
//                         </div>
//                       ) : added ? (
//                         <div className="flex items-center gap-2">
//                           <Check className="h-5 w-5" />
//                           <span>Added to Cart</span>
//                         </div>
//                       ) : stock === 0 ? (
//                         "Out of Stock"
//                       ) : (
//                         <div className="flex items-center gap-2">
//                           <ShoppingCart className="h-5 w-5" />
//                           <span>Add to Cart</span>
//                         </div>
//                       )}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </div>
//       </Card>
//     </motion.div>
//   );
// }


"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Star, Eye, Check, Zap } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { motion } from "framer-motion";

interface ProductCardProps {
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
  onToggleFavorite?: (id: number) => void;
  isFavorite?: boolean;
  className?: string;
  style?: React.CSSProperties;
  stock?: number;
  variant?: "grid" | "list";
}

const api = axios.create({
  baseURL: "https://merfume-backend-production-5068.up.railway.app",
  headers: {
    'Content-Type': 'application/json',
  }
});

export default function ProductCard({
  productId,
  productName,
  brand,
  productPrice,
  originalPrice,
  productImageUrl,
  productBackImageUrl,
  rating,
  reviewCount,
  productDescription,
  notes,
  onToggleFavorite,
  isFavorite = false,
  className,
  style,
  stock = 10,
  variant = "grid",
}: ProductCardProps) {
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showBackImage, setShowBackImage] = useState(false);

  const getCartToken = () => {
    if (typeof window === "undefined") return "";
    
    let token = localStorage.getItem("cartToken");
    if (!token) {
      token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem("cartToken", token);
    }
    return token;
  };

  const handleProductClick = () => {
    navigate(`/product/${productId}`);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite?.(productId);
  };

  const handleEyeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (productBackImageUrl) {
      setShowBackImage(!showBackImage);
    }
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAdding || added || stock === 0) return;

    setIsAdding(true);
    try {
      const cartToken = getCartToken();

      const response = await api.post("/api/cart/add", {
        productId,
        quantity: 1,
      }, {
        headers: {
          "Cart-Token": cartToken,
        },
      });

      const addedItem = {
        productId,
        productName,
        brand,
        productPrice,
        quantity: 1,
        productImageUrl,
      };

      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      
      const index = existingCart.findIndex((item: any) => item.productId === productId);
      if (index > -1) {
        existingCart[index].quantity += 1;
      } else {
        existingCart.push(addedItem);
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));

      setAdded(true);
      toast.success("Added to cart successfully!", {
        duration: 2000,
        position: "top-right",
      });

      setTimeout(() => setAdded(false), 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Failed to add to cart");
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setIsAdding(false);
    }
  };

  const discount = originalPrice 
    ? Math.round(((originalPrice - productPrice) / originalPrice) * 100)
    : 0;

  // Grid View
  if (variant === "grid") {
    return (
      <motion.div
        onClick={handleProductClick}
        className={`cursor-pointer group relative ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowBackImage(false);
        }}
      >
        <Card className="h-full border border-border/40 hover:border-gold/30 bg-gradient-to-b from-background to-background/95 overflow-hidden transition-all duration-300 rounded-xl hover:shadow-lg">
          {/* Image Section */}
          <div className="relative aspect-square overflow-hidden">
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-full"
            >
              <img
                src={showBackImage && productBackImageUrl ? productBackImageUrl : productImageUrl}
                alt={productName}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Discount Badge */}
            {originalPrice && discount > 0 && (
              <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                -{discount}%
              </div>
            )}

            {/* Stock Badge */}
            {stock < 5 && stock > 0 && (
              <div className="absolute top-10 left-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                Low Stock
              </div>
            )}
            {stock === 0 && (
              <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                Out of Stock
              </div>
            )}

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button
                onClick={handleToggleFavorite}
                className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110 active:scale-95 z-10"
              >
                <Heart
                  className={`h-4 w-4 transition-all ${
                    isFavorite
                      ? "text-red-500 fill-current animate-pulse"
                      : "text-gray-600 group-hover:text-red-500"
                  }`}
                />
              </button>
              
              {productBackImageUrl && (
                <button
                  onClick={handleEyeClick}
                  className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110 active:scale-95 z-10"
                >
                  <Eye className={`h-4 w-4 ${showBackImage ? "text-gold" : "text-gray-600"}`} />
                </button>
              )}
            </div>

            {/* Quick Add Overlay */}
            {isHovered && stock > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/30 flex items-center justify-center z-20"
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black text-sm font-medium rounded-lg px-4 shadow-lg"
                  onClick={handleAddToCart}
                  disabled={isAdding || added}
                >
                  {isAdding ? (
                    <>
                      <div className="h-3 w-3 border-2 border-black border-t-transparent rounded-full animate-spin mr-1.5"></div>
                      Adding...
                    </>
                  ) : added ? (
                    <>
                      <Check className="h-3.5 w-3.5 mr-1.5" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
                      Quick Add
                    </>
                  )}
                </Button>
              </motion.div>
            )}
          </div>

          {/* Content Section */}
          <CardContent className="p-4 flex flex-col h-[240px]">
            {/* Brand and Rating */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gold bg-gold/10 px-2 py-1 rounded-full">
                {brand}
              </span>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(rating)
                          ? "text-gold fill-current"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold ml-1">{rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">({reviewCount})</span>
              </div>
            </div>

            {/* Product Name */}
            <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 h-12 hover:text-gold transition-colors">
              {productName}
            </h3>

            {/* Description */}
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
              {productDescription}
            </p>

            {/* Notes */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1.5">
                {notes.slice(0, 2).map((note, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gradient-to-r from-accent/80 to-accent/60 text-accent-foreground px-2 py-1 rounded-full font-medium"
                  >
                    {note}
                  </span>
                ))}
                {notes.length > 2 && (
                  <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                    +{notes.length - 2}
                  </span>
                )}
              </div>
            </div>

            {/* Price and CTA */}
            <div className="mt-auto pt-3 border-t border-border/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xl font-bold text-gold">₹{productPrice.toLocaleString()}</span>
                    {originalPrice && (
                      <>
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{originalPrice.toLocaleString()}
                        </span>
                        {discount > 0 && (
                          <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full font-bold">
                            Save {discount}%
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Free shipping over ₹5000
                  </p>
                </div>

                <Button
                  size="sm"
                  className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black font-semibold rounded-lg px-4 py-2 w-full sm:w-auto min-w-[110px] z-10"
                  onClick={handleAddToCart}
                  disabled={isAdding || added || stock === 0}
                >
                  {isAdding ? (
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="h-3 w-3 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xs">Adding</span>
                    </div>
                  ) : added ? (
                    <div className="flex items-center gap-1.5 justify-center">
                      <Check className="h-3.5 w-3.5" />
                      <span className="text-xs">Added</span>
                    </div>
                  ) : stock === 0 ? (
                    "Out of Stock"
                  ) : (
                    <div className="flex items-center gap-1.5 justify-center">
                      <ShoppingCart className="h-3.5 w-3.5" />
                      <span className="text-xs">Add to Cart</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  // List View - Mobile Optimized
  return (
    <motion.div
      onClick={handleProductClick}
      className={`cursor-pointer group ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border border-border/40 hover:border-gold/30 bg-gradient-to-r from-background to-background/95 overflow-hidden transition-all duration-300 rounded-xl hover:shadow-lg">
        {/* Mobile Layout */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-48 lg:w-56 relative h-48 md:h-auto md:min-h-[200px]">
            <div className="relative h-full w-full">
              <img
                src={showBackImage && productBackImageUrl ? productBackImageUrl : productImageUrl}
                alt={productName}
                className="w-full h-full object-cover"
              />
              
              {/* Discount Badge */}
              {originalPrice && discount > 0 && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                  -{discount}%
                </div>
              )}

              {/* Action Buttons - Mobile */}
              <div className="absolute top-3 right-3 flex gap-2 z-10">
                <button
                  onClick={handleToggleFavorite}
                  className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isFavorite
                        ? "text-red-500 fill-current animate-pulse"
                        : "text-gray-600 hover:text-red-500"
                    }`}
                  />
                </button>
                
                {productBackImageUrl && (
                  <button
                    onClick={handleEyeClick}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110"
                  >
                    <Eye className={`h-4 w-4 ${showBackImage ? "text-gold" : "text-gray-600"}`} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <CardContent className="flex-1 p-4 md:p-6">
            <div className="h-full flex flex-col">
              {/* Mobile: Compact Header */}
              <div className="md:hidden mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gold bg-gold/10 px-2 py-1 rounded-full">
                    {brand}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(rating)
                              ? "text-gold fill-current"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold ml-1">{rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              {/* Desktop: Full Header */}
              <div className="hidden md:block mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {brand}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(rating)
                              ? "text-gold fill-current"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold ml-1">{rating.toFixed(1)}</span>
                    <span className="text-sm text-muted-foreground">({reviewCount})</span>
                  </div>
                </div>
              </div>

              {/* Product Name */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 line-clamp-2 hover:text-gold transition-colors">
                {productName}
              </h3>

              {/* Description - Hidden on mobile, shown on desktop */}
              <p className="hidden md:block text-sm text-muted-foreground mb-3 line-clamp-2">
                {productDescription}
              </p>

              {/* Notes */}
              <div className="mb-3 md:mb-4">
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {notes.slice(0, 3).map((note, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gradient-to-r from-accent/80 to-accent/60 text-accent-foreground px-2 md:px-3 py-1 md:py-1.5 rounded-full font-medium"
                    >
                      {note}
                    </span>
                  ))}
                  {notes.length > 3 && (
                    <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                      +{notes.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Mobile Bottom Section */}
              <div className="md:hidden mt-auto">
                <div className="space-y-3">
                  {/* Price Section */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-gold">₹{productPrice.toLocaleString()}</span>
                    {originalPrice && (
                      <>
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{originalPrice.toLocaleString()}
                        </span>
                        {discount > 0 && (
                          <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full font-bold">
                            Save {discount}%
                          </span>
                        )}
                      </>
                    )}
                  </div>

                  {/* Stock Info */}
                  {stock < 5 && stock > 0 && (
                    <div className="inline-block bg-yellow-500/20 text-yellow-600 text-xs font-medium px-2 py-1 rounded-full">
                      Only {stock} left
                    </div>
                  )}
                  {stock === 0 && (
                    <div className="inline-block bg-red-500/20 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
                      Out of Stock
                    </div>
                  )}

                  {/* CTA Button - Mobile */}
                  <Button
                    className="w-full bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black font-semibold rounded-lg py-3 z-10"
                    onClick={handleAddToCart}
                    disabled={isAdding || added || stock === 0}
                  >
                    {isAdding ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Adding...</span>
                      </div>
                    ) : added ? (
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-4 w-4" />
                        <span>Added</span>
                      </div>
                    ) : stock === 0 ? (
                      "Out of Stock"
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </div>
                    )}
                  </Button>
                </div>
              </div>

              {/* Desktop Bottom Section */}
              <div className="hidden md:block mt-auto pt-4 border-t border-border/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl md:text-3xl font-bold text-gold">
                        ₹{productPrice.toLocaleString()}
                      </span>
                      {originalPrice && (
                        <>
                          <span className="text-lg text-muted-foreground line-through">
                            ₹{originalPrice.toLocaleString()}
                          </span>
                          {discount > 0 && (
                            <span className="text-sm bg-green-500/20 text-green-600 px-3 py-1 rounded-full font-bold">
                              Save {discount}%
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-green-500" />
                      <p className="text-sm text-muted-foreground">
                        Free shipping on orders over ₹5000
                      </p>
                    </div>

                    {/* Stock Info */}
                    {stock < 5 && stock > 0 && (
                      <div className="inline-block bg-yellow-500/20 text-yellow-600 text-xs font-medium px-3 py-1 rounded-full">
                        Only {stock} left in stock
                      </div>
                    )}
                    {stock === 0 && (
                      <div className="inline-block bg-red-500/20 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
                        Out of Stock
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black font-semibold rounded-lg px-6 py-3 min-w-[140px] z-10"
                      onClick={handleAddToCart}
                      disabled={isAdding || added || stock === 0}
                    >
                      {isAdding ? (
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          <span>Adding...</span>
                        </div>
                      ) : added ? (
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5" />
                          <span>Added to Cart</span>
                        </div>
                      ) : stock === 0 ? (
                        "Out of Stock"
                      ) : (
                        <div className="flex items-center gap-2">
                          <ShoppingCart className="h-5 w-5" />
                          <span>Add to Cart</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}
