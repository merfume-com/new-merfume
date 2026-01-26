// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ShoppingCart, Heart, Star } from "lucide-react";

// interface ProductCardProps {
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
//   onAddToCart?: (id: string) => void;
//   onToggleFavorite?: (id: string) => void;
//   isFavorite?: boolean;
// }

// export default function ProductCard({
//   id,
//   name,
//   brand,
//   price,
//   originalPrice,
//   image,
//   backImage,
//   rating,
//   reviewCount,
//   description,
//   notes,
//   onAddToCart,
//   onToggleFavorite,
//   isFavorite = false,
// }: ProductCardProps) {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleAddToCart = () => {
//     onAddToCart?.(id);
//   };

//   const handleToggleFavorite = () => {
//     onToggleFavorite?.(id);
//   };

//   return (
//     <div className="group perspective-1000 h-96">
//       <div
//         className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
//           isFlipped ? "rotate-y-180" : ""
//         }`}
//         onMouseEnter={() => backImage && setIsFlipped(true)}
//         onMouseLeave={() => setIsFlipped(false)}
//       >
//         {/* Front of card */}
//         <Card className="absolute inset-0 backface-hidden border-border/50 hover:border-gold/50 transition-colors overflow-hidden">
//           <CardContent className="p-0 h-full flex flex-col">
//             <div className="relative flex-1">
//               <img
//                 src={image}
//                 alt={name}
//                 className="w-full h-48 object-cover"
//               />
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background ${
//                   isFavorite ? "text-red-500" : "text-muted-foreground"
//                 }`}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleToggleFavorite();
//                 }}
//               >
//                 <Heart
//                   className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`}
//                 />
//               </Button>
//               {originalPrice && (
//                 <div className="absolute top-3 left-3 bg-gold text-luxury-black px-2 py-1 text-xs font-semibold rounded">
//                   SALE
//                 </div>
//               )}
//             </div>
//             <div className="p-4 flex-shrink-0">
//               <div className="flex items-center gap-1 mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className={`h-3 w-3 ${
//                       i < Math.floor(rating)
//                         ? "text-gold fill-current"
//                         : "text-muted-foreground/30"
//                     }`}
//                   />
//                 ))}
//                 <span className="text-xs text-muted-foreground ml-1">
//                   ({reviewCount})
//                 </span>
//               </div>
//               <p className="text-sm text-muted-foreground mb-1">{brand}</p>
//               <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
//                 {name}
//               </h3>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg font-bold text-gold">${price}</span>
//                   {originalPrice && (
//                     <span className="text-sm text-muted-foreground line-through">
//                       ${originalPrice}
//                     </span>
//                   )}
//                 </div>
//                 <Button
//                   size="sm"
//                   className="bg-gold hover:bg-gold-dark text-luxury-black"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleAddToCart();
//                   }}
//                 >
//                   <ShoppingCart className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Back of card */}
//         {backImage && (
//           <Card className="absolute inset-0 backface-hidden rotate-y-180 border-border/50 overflow-hidden">
//             <CardContent className="p-0 h-full flex flex-col">
//               <div className="relative flex-1">
//                 <img
//                   src={backImage}
//                   alt={`${name} - Back view`}
//                   className="w-full h-48 object-cover"
//                 />
//               </div>
//               <div className="p-4 flex-shrink-0">
//                 <h3 className="font-semibold text-foreground mb-2">{name}</h3>
//                 <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
//                   {description}
//                 </p>
//                 <div className="mb-3">
//                   <p className="text-xs font-medium text-foreground mb-1">
//                     Notes:
//                   </p>
//                   <div className="flex flex-wrap gap-1">
//                     {notes.slice(0, 3).map((note, index) => (
//                       <span
//                         key={index}
//                         className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded"
//                       >
//                         {note}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <Button
//                   className="w-full bg-gold hover:bg-gold-dark text-luxury-black"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleAddToCart();
//                   }}
//                 >
//                   Add to Cart - ${price}
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         )}
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
//   e.stopPropagation();

//   if (isAdding) return;

//   setIsAdding(true);
//   try {
//     const cartToken = getCartToken();

//     const API_BASE_URL = "https://5170dd6c9895.ngrok-free.app";//${API_BASE_URL}
//     const response = await fetch(`https://5170dd6c9895.ngrok-free.app/api/cart/add`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Cart-Token": cartToken,
//         'ngrok-skip-browser-warning': '69420'
//       },
//       body: JSON.stringify({
//         productId,
//         quantity: 1,
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error("Network error please refresh the page.");
//     }

//     const addedItem = {
//       productId,
//       productName,
//       brand,
//       productPrice,
//       quantity: 1,
//       productImageUrl,
//     };

//     // ✅ Save to localStorage.cart[]
//     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
//     const index = existingCart.findIndex((item: any) => item.productId === productId);
//     if (index > -1) {
//       // If already exists, increase quantity
//       existingCart[index].quantity += 1;
//     } else {
//       existingCart.push(addedItem);
//     }

//     localStorage.setItem("cart", JSON.stringify(existingCart));

//     setAdded(true);
//     toast.success("Added to cart successfully");

//     setTimeout(() => setAdded(false), 2000);
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     toast.error(error instanceof Error ? error.message : "Network error please refresh the page.");
//   } finally {
//     setIsAdding(false);
//   }
// };


//   return (
//     <div className={`group perspective-1000 h-96 ${className}`} style={style}>
//       <div
//         className={`relative w-full h-full transition-all duration-700 transform-style-preserve-3d ${
//           isFlipped ? "rotate-y-180" : ""
//         }`}
//         onMouseEnter={() => productBackImageUrl && setIsFlipped(true)}
//         onMouseLeave={() => setIsFlipped(false)}
//       >
//         {/* Front of Card */}
//         <Card className="absolute inset-0 backface-hidden border border-border/50 hover:border-gold/50 transition overflow-hidden h-full">
//           <CardContent className="p-0 h-full flex flex-col">
//             <div className="relative flex-1">
//               <img 
//                 src={productImageUrl} 
//                 alt={productName} 
//                 className="w-full h-48 object-cover" 
//               />
//               {onToggleFavorite && (
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background ${
//                     isFavorite ? "text-red-500" : "text-muted-foreground"
//                   }`}
//                   onClick={handleToggleFavorite}
//                 >
//                   <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
//                 </Button>
//               )}
//               {originalPrice && (
//                 <div className="absolute top-3 left-3 bg-gold text-black px-2 py-1 text-xs font-semibold rounded">
//                   SALE
//                 </div>
//               )}
//             </div>
//             <div className="p-4">
//               <div className="flex items-center gap-1 mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className={`h-3 w-3 ${
//                       i < Math.floor(rating)
//                         ? "text-gold fill-current"
//                         : "text-muted-foreground/30"
//                     }`}
//                   />
//                 ))}
//                 <span className="text-xs text-muted-foreground ml-1">
//                   ({reviewCount})
//                 </span>
//               </div>
//               <p className="text-sm text-muted-foreground mb-1">{brand}</p>
//               <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
//                 {productName}
//               </h3>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg font-bold text-gold">₹{productPrice}</span>
//                   {originalPrice && (
//                     <span className="text-sm text-muted-foreground line-through">
//                       ₹{originalPrice}
//                     </span>
//                   )}
//                 </div>
//                 <Button
//                   size="sm"
//                   className="bg-gold hover:bg-gold-dark text-black"
//                   onClick={handleAddToCart}
//                   disabled={isAdding || added}
//                 >
//                   {isAdding ? "Adding..." : added ? "Added" : <ShoppingCart className="h-4 w-4" />}
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Back of Card */}
//         {productBackImageUrl && (
//           <Card className="absolute inset-0 backface-hidden rotate-y-180 border border-border/50 overflow-hidden h-full">
//             <CardContent className="p-0 h-full flex flex-col">
//               <div className="relative flex-1">
//                 <img
//                   src={productBackImageUrl}
//                   alt={`${productName} - Back view`}
//                   className="w-full h-48 object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold text-foreground mb-2">{productName}</h3>
//                 <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
//                   {productDescription}
//                 </p>
//                 <div className="mb-3">
//                   <p className="text-xs font-medium text-foreground mb-1">Notes:</p>
//                   <div className="flex flex-wrap gap-1">
//                     {notes.slice(0, 3).map((note, index) => (
//                       <span
//                         key={index}
//                         className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded"
//                       >
//                         {note}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <Button
//                   className="w-full mt-auto"
//                   onClick={handleAddToCart}
//                   disabled={isAdding || added}
//                 >
//                   {isAdding ? "Adding..." : added ? "Added to Cart" : "Add to Cart"}
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         )}
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


"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

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
}

// Axios instance create karte hain
const api = axios.create({
  baseURL: "https://6a3dfa7e05c5.ngrok-free.app",
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420'
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
}: ProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const getCartToken = () => {
    if (typeof window === "undefined") return "";
    
    let token = localStorage.getItem("cartToken");
    if (!token) {
      token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem("cartToken", token);
    }
    return token;
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite?.(productId);
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isAdding) return;

    setIsAdding(true);
    try {
      const cartToken = getCartToken();

      // Axios se request bhej rahe hain
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
      toast.success("Added to cart successfully");

      setTimeout(() => setAdded(false), 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
      
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server ne error response diya
          toast.error(error.response.data.message || "Failed to add to cart");
        } else if (error.request) {
          // Request bheji gayi lekin response nahi aaya
          toast.error("Network error. Please check your connection.");
        } else {
          // Request setup mein error
          toast.error("An error occurred. Please try again.");
        }
      } else {
        toast.error("Network error please refresh the page.");
      }
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div 
      className={`group relative w-full ${className}`} 
      style={{ height: '28rem', ...style }}
      onMouseEnter={() => productBackImageUrl && setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-all duration-500 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front of Card */}
         <div 
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Card className="h-full border border-border/50 hover:border-gold/50 transition overflow-hidden">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="relative h-48 flex-shrink-0">
                <img 
                  src={productImageUrl} 
                  alt={productName} 
                  className="w-full h-full object-cover" 
                />
                {onToggleFavorite && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background ${
                      isFavorite ? "text-red-500" : "text-muted-foreground"
                    }`}
                    onClick={handleToggleFavorite}
                  >
                    <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                )}
                {originalPrice && (
                  <div className="absolute top-3 left-3 bg-gold text-black px-2 py-1 text-xs font-semibold rounded">
                    SALE
                  </div>
                )}
              </div>
              
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-2">
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
                  <span className="text-xs text-muted-foreground ml-1">
                    ({reviewCount})
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{brand}</p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {productName}
                </h3>
                
                {/* Description on Front Card */}
                <div className="mb-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {productDescription}
                  </p>
                </div>
                
                {/* Notes on Front Card */}
                <div className="mb-3">
                  <p className="text-xs font-medium text-foreground mb-1">Notes:</p>
                  <div className="flex flex-wrap gap-1">
                    {notes.slice(0, 2).map((note, index) => (
                      <span
                        key={index}
                        className="text-xs bg-accent/100 text-accent-foreground px-2 py-1 rounded"
                      >
                        {note}
                      </span>
                    ))}
                    {notes.length > 2 && (
                      <span className="text-xs bg-accent/100 text-accent-foreground px-2 py-1 rounded">
                        +{notes.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mt-auto pt-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gold">₹{productPrice}</span>
                      {originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{originalPrice}
                        </span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-gold hover:bg-gold-dark text-black min-w-[40px] h-9"
                      onClick={handleAddToCart}
                      disabled={isAdding || added}
                    >
                      {isAdding ? (
                        <span className="text-xs">Adding...</span>
                      ) : added ? (
                        <span className="text-xs">Added</span>
                      ) : (
                        <ShoppingCart className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back of Card */}
        {productBackImageUrl && (
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <Card className="h-full border border-border/50 overflow-hidden">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative h-48 flex-shrink-0">
                  <img
                    src={productBackImageUrl}
                    alt={`${productName} - Back view`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{productName}</h3>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3 h-full">
                      {productDescription}
                    </p>
                  </div>
                  <div className="mb-3 mt-2">
                    <p className="text-xs font-medium text-foreground mb-1">Notes:</p>
                    <div className="flex flex-wrap gap-1">
                      {notes.slice(0, 3).map((note, index) => (
                        <span
                          key={index}
                          className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2">
                    <Button
                      className="w-full bg-gold hover:bg-gold-dark text-black h-10 py-2"
                      onClick={handleAddToCart}
                      disabled={isAdding || added}
                    >
                      {isAdding ? (
                        <span className="flex items-center justify-center">
                          <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></span>
                          Adding...
                        </span>
                      ) : added ? (
                        "✓ Added to Cart"
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <ShoppingCart className="h-4 w-4" />
                          Add to Cart
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
