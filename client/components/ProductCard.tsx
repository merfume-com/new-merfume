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
