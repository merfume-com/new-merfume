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


"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { toast } from "sonner";

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

      const API_BASE_URL = "https://5170dd6c9895.ngrok-free.app";
      const response = await fetch(`https://5170dd6c9895.ngrok-free.app/api/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cart-Token": cartToken,
          'ngrok-skip-browser-warning': '69420'
        },
        body: JSON.stringify({
          productId,
          quantity: 1,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error("Network error please refresh the page.");
      }

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
      toast.error(error instanceof Error ? error.message : "Network error please refresh the page.");
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
