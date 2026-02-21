// // components/ProductDialog.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { 
//   Dialog, 
//   DialogContent,
//   DialogClose 
// } from "@/components/ui/dialog";
// import { Heart, Star, Truck, Shield, RefreshCw, ShoppingCart, Check, Zap, X } from "lucide-react";
// import { toast } from "sonner";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";

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
//   stock: number;
// }

// interface ProductDialogProps {
//   productId: number | null;
//   open: boolean;
//   onClose: () => void;
// }

// const api = axios.create({
//   baseURL: "https://merfume-backend-production-5068.up.railway.app",
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// // Helper function to convert base64 to data URL
// const getImageUrl = (base64String?: string) => {
//   if (!base64String) return null;
  
//   // Check if it's already a URL
//   if (base64String.startsWith('http')) {
//     return base64String;
//   }
  
//   // Check if it's a base64 string
//   if (base64String.startsWith('data:image')) {
//     return base64String;
//   }
  
//   // If it's base64 without data URL prefix, add it
//   if (base64String.length > 100) { // Simple check for base64
//     return `data:image/jpeg;base64,${base64String}`;
//   }
  
//   return null;
// };

// export default function ProductDialog({ productId, open, onClose }: ProductDialogProps) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isAddingToCart, setIsAddingToCart] = useState(false);
//   const [addedToCart, setAddedToCart] = useState(false);
//   const [activeImage, setActiveImage] = useState<"front" | "back">("front");
//   const [quantity, setQuantity] = useState(1);

//   // Load product data when dialog opens
//   useEffect(() => {
//     const fetchProduct = async () => {
//       if (!productId) return;
      
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await api.get(`/api/products/${productId}`);
//         const productData = response.data;
        
//         // Convert base64 images to data URLs if needed
//         const processedProduct = {
//           ...productData,
//           productImageUrl: getImageUrl(productData.productImageUrl) || productData.productImageUrl,
//           productBackImageUrl: productData.productBackImageUrl 
//             ? getImageUrl(productData.productBackImageUrl) || productData.productBackImageUrl
//             : undefined
//         };
        
//         setProduct(processedProduct);
        
//         // Load favorites from localStorage
//         const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
//         setIsFavorite(favorites.includes(productId));
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setError("Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (open && productId) {
//       fetchProduct();
//       // Reset quantity when dialog opens
//       setQuantity(1);
//       setAddedToCart(false);
//     }
//   }, [open, productId]);

//   // Reset states when dialog closes
//   useEffect(() => {
//     if (!open) {
//       setProduct(null);
//       setLoading(true);
//       setError(null);
//       setIsAddingToCart(false);
//       setAddedToCart(false);
//       setQuantity(1);
//     }
//   }, [open]);

//   const handleToggleFavorite = () => {
//     if (typeof window === "undefined" || !productId) return;

//     const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
//     let newFavorites;

//     if (isFavorite) {
//       newFavorites = favorites.filter((favId: number) => favId !== productId);
//       toast.success("Removed from favorites");
//     } else {
//       newFavorites = [...favorites, productId];
//       toast.success("Added to favorites");
//     }

//     localStorage.setItem("merfume_favorites", JSON.stringify(newFavorites));
//     setIsFavorite(!isFavorite);
//   };

//   const getCartToken = () => {
//     if (typeof window === "undefined") return "";
    
//     let token = localStorage.getItem("cartToken");
//     if (!token) {
//       token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//       localStorage.setItem("cartToken", token);
//     }
//     return token;
//   };

//   const handleAddToCart = async () => {
//     if (!product || isAddingToCart || addedToCart || product.stock === 0) return;

//     setIsAddingToCart(true);
//     try {
//       const cartToken = getCartToken();

//       const response = await api.post("/api/cart/add", {
//         productId: product.productId,
//         quantity: quantity,
//       }, {
//         headers: {
//           "Cart-Token": cartToken,
//         },
//       });

//       // Update local cart storage
//       const addedItem = {
//         productId: product.productId,
//         productName: product.productName,
//         brand: product.brand,
//         productPrice: product.productPrice,
//         quantity: quantity,
//         productImageUrl: product.productImageUrl,
//       };

//       const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//       const index = existingCart.findIndex((item: any) => item.productId === product.productId);
      
//       if (index > -1) {
//         existingCart[index].quantity += quantity;
//       } else {
//         existingCart.push(addedItem);
//       }

//       localStorage.setItem("cart", JSON.stringify(existingCart));

//       setAddedToCart(true);
//       toast.success("Added to cart successfully!");

//       setTimeout(() => setAddedToCart(false), 2000);
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       if (axios.isAxiosError(error)) {
//         toast.error(error.response?.data?.message || "Failed to add to cart");
//       } else {
//         toast.error("Network error. Please try again.");
//       }
//     } finally {
//       setIsAddingToCart(false);
//     }
//   };

//   const incrementQuantity = () => {
//     if (product && quantity < product.stock) {
//       setQuantity(prev => prev + 1);
//     }
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(prev => prev - 1);
//     }
//   };

//   // Get current image URL based on active image state
//   const getCurrentImageUrl = () => {
//     if (!product) return "";
    
//     if (activeImage === "front") {
//       return product.productImageUrl;
//     }
    
//     if (activeImage === "back" && product.productBackImageUrl) {
//       return product.productBackImageUrl;
//     }
    
//     return product.productImageUrl;
//   };

//   const discount = product?.originalPrice 
//     ? Math.round(((product.originalPrice - product.productPrice) / product.originalPrice) * 100)
//     : 0;

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0 border-0 bg-transparent">
//         <div className="bg-gradient-to-b from-background to-background/95 rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
//           {/* Close Button */}
//           <div className="absolute right-4 top-4 z-50">
//             <DialogClose asChild>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-10 w-10 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white"
//               >
//                 <X className="h-5 w-5" />
//               </Button>
//             </DialogClose>
//           </div>

//           {loading ? (
//             // Loading Skeleton
//             <div className="animate-pulse p-6">
//               <div className="flex flex-col lg:flex-row gap-8">
//                 {/* Image skeleton */}
//                 <div className="lg:w-1/2">
//                   <div className="aspect-square bg-muted rounded-2xl"></div>
//                 </div>

//                 {/* Content skeleton */}
//                 <div className="lg:w-1/2 space-y-6">
//                   <div>
//                     <div className="h-6 w-32 bg-muted rounded-full mb-2"></div>
//                     <div className="h-10 w-3/4 bg-muted rounded mb-4"></div>
//                     <div className="h-6 w-48 bg-muted/50 rounded mb-2"></div>
//                     <div className="h-6 w-24 bg-muted/50 rounded"></div>
//                   </div>

//                   <div className="h-2 bg-muted/30 rounded"></div>

//                   <div>
//                     <div className="h-5 w-40 bg-muted/50 rounded mb-3"></div>
//                     <div className="flex flex-wrap gap-2">
//                       {[...Array(3)].map((_, i) => (
//                         <div key={i} className="h-8 w-20 bg-muted/30 rounded-full"></div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="h-2 bg-muted/30 rounded"></div>

//                   <div className="space-y-4">
//                     <div className="h-8 w-48 bg-muted/50 rounded"></div>
//                     <div className="flex items-center gap-4">
//                       <div className="h-12 w-12 bg-muted/30 rounded-lg"></div>
//                       <div className="h-12 w-48 bg-muted/50 rounded-lg"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : error || !product ? (
//             // Error State
//             <div className="p-12 text-center">
//               <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 p-8 rounded-3xl mb-6 max-w-md mx-auto">
//                 <Shield className="h-16 w-16 text-red-400 mx-auto" />
//               </div>
//               <h3 className="text-2xl font-bold text-foreground mb-3">
//                 Product Not Found
//               </h3>
//               <p className="text-muted-foreground mb-8 max-w-md mx-auto">
//                 {error || "The product you're looking for doesn't exist."}
//               </p>
//               <Button
//                 onClick={onClose}
//                 className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black px-6 py-3"
//               >
//                 Close
//               </Button>
//             </div>
//           ) : (
//             // Product Content
//             <div className="p-6 md:p-8">
//               <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
//                 {/* Images Section */}
//                 <div className="lg:w-1/2">
//                   <div className="sticky top-0">
//                     <div className="aspect-square bg-gradient-to-br from-background to-background/80 border-2 border-border/30 rounded-2xl overflow-hidden">
//                       <motion.img
//                         key={activeImage}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                         src={getCurrentImageUrl()}
//                         alt={product.productName}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           // Fallback for image loading errors
//                           e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3EProduct Image%3C/text%3E%3C/svg%3E";
//                         }}
//                       />
//                     </div>

//                     {/* Image Toggle and Discount */}
//                     <div className="flex items-center justify-between mt-4">
//                       {product.productBackImageUrl && (
//                         <div className="flex gap-2">
//                           <Button
//                             variant={activeImage === "front" ? "default" : "outline"}
//                             size="sm"
//                             onClick={() => setActiveImage("front")}
//                             className={activeImage === "front" 
//                               ? "bg-gradient-to-r from-gold to-gold/90 text-black" 
//                               : ""
//                             }
//                           >
//                             Front View
//                           </Button>
//                           <Button
//                             variant={activeImage === "back" ? "default" : "outline"}
//                             size="sm"
//                             onClick={() => setActiveImage("back")}
//                             className={activeImage === "back" 
//                               ? "bg-gradient-to-r from-gold to-gold/90 text-black" 
//                               : ""
//                             }
//                           >
//                             Back View
//                           </Button>
//                         </div>
//                       )}

//                       {discount > 0 && (
//                         <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white text-lg px-4 py-2">
//                           -{discount}% OFF
//                         </Badge>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Product Info Section */}
//                 <div className="lg:w-1/2">
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="space-y-6"
//                   >
//                     {/* Brand and Rating */}
//                     <div className="flex items-center justify-between">
//                       <Badge className="bg-gradient-to-r from-gold/20 to-gold/10 text-gold border border-gold/30 px-4 py-2 text-base">
//                         {product.brand}
//                       </Badge>
//                       <div className="flex items-center gap-2">
//                         <div className="flex">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className={`h-5 w-5 ${
//                                 i < Math.floor(product.rating)
//                                   ? "text-gold fill-current"
//                                   : "text-muted-foreground/30"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                         <span className="text-lg font-semibold">{product.rating.toFixed(1)}</span>
//                         <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
//                       </div>
//                     </div>

//                     {/* Product Name */}
//                     <h1 className="text-3xl md:text-4xl font-bold text-foreground">
//                       {product.productName}
//                     </h1>

//                     {/* Description */}
//                     <p className="text-lg text-muted-foreground leading-relaxed">
//                       {product.productDescription}
//                     </p>

//                     <Separator className="bg-border/30" />

//                     {/* Notes */}
//                     <div>
//                       <h3 className="text-lg font-semibold text-foreground mb-3">Fragrance Notes</h3>
//                       <div className="flex flex-wrap gap-2">
//                         {product.notes.map((note, index) => (
//                           <Badge
//                             key={index}
//                             variant="secondary"
//                             className="bg-gradient-to-r from-accent/80 to-accent/60 text-accent-foreground px-4 py-2 text-sm"
//                           >
//                             {note}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>

//                     <Separator className="bg-border/30" />

//                     {/* Price Section */}
//                     <div className="space-y-4">
//                       <div className="flex items-baseline gap-4">
//                         <span className="text-4xl md:text-5xl font-bold text-gold">
//                           ₹{product.productPrice.toLocaleString()}
//                         </span>
//                         {product.originalPrice && (
//                           <>
//                             <span className="text-2xl text-muted-foreground line-through">
//                               ₹{product.originalPrice.toLocaleString()}
//                             </span>
//                             {discount > 0 && (
//                               <Badge className="bg-green-500/20 text-green-600 text-base px-3 py-1.5">
//                                 Save {discount}%
//                               </Badge>
//                             )}
//                           </>
//                         )}
//                       </div>

//                       {/* Stock Status */}
//                       {product.stock > 0 ? (
//                         product.stock < 10 ? (
//                           <div className="flex items-center gap-2 text-yellow-600">
//                             <Zap className="h-4 w-4" />
//                             <span className="font-medium">Only {product.stock} left in stock</span>
//                           </div>
//                         ) : (
//                           <div className="flex items-center gap-2 text-green-600">
//                             <Check className="h-4 w-4" />
//                             <span className="font-medium">In Stock</span>
//                           </div>
//                         )
//                       ) : (
//                         <Badge variant="destructive" className="text-base px-3 py-1.5">
//                           Out of Stock
//                         </Badge>
//                       )}
//                     </div>

//                     {/* Quantity and Actions */}
//                     <div className="space-y-6 pt-4">
//                       {/* Quantity Selector */}
//                       <div className="flex items-center gap-4">
//                         <span className="text-lg font-medium">Quantity:</span>
//                         <div className="flex items-center border border-border/30 rounded-lg">
//                           <Button
//                             variant="ghost"
//                             size="icon"
//                             onClick={decrementQuantity}
//                             disabled={quantity <= 1}
//                             className="h-12 w-12 rounded-r-none hover:bg-accent/50"
//                           >
//                             −
//                           </Button>
//                           <div className="h-12 w-16 flex items-center justify-center text-lg font-semibold border-x border-border/30">
//                             {quantity}
//                           </div>
//                           <Button
//                             variant="ghost"
//                             size="icon"
//                             onClick={incrementQuantity}
//                             disabled={!product || quantity >= product.stock}
//                             className="h-12 w-12 rounded-l-none hover:bg-accent/50"
//                           >
//                             +
//                           </Button>
//                         </div>
//                       </div>

//                       {/* Action Buttons */}
//                       <div className="flex flex-col sm:flex-row gap-4">
//                         <Button
//                           size="lg"
//                           className="flex-1 bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black text-lg font-semibold py-6 rounded-xl"
//                           onClick={handleAddToCart}
//                           disabled={isAddingToCart || addedToCart || product.stock === 0}
//                         >
//                           {isAddingToCart ? (
//                             <>
//                               <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
//                               Adding...
//                             </>
//                           ) : addedToCart ? (
//                             <>
//                               <Check className="h-5 w-5 mr-2" />
//                               Added to Cart
//                             </>
//                           ) : product.stock === 0 ? (
//                             "Out of Stock"
//                           ) : (
//                             <>
//                               <ShoppingCart className="h-5 w-5 mr-2" />
//                               Add to Cart • ₹{(product.productPrice * quantity).toLocaleString()}
//                             </>
//                           )}
//                         </Button>

//                         <Button
//                           size="lg"
//                           variant="outline"
//                           className="flex-1 border-2 border-border/30 hover:border-red-300 hover:bg-red-50/10 hover:text-red-500 text-lg font-semibold py-6 rounded-xl"
//                           onClick={handleToggleFavorite}
//                         >
//                           <Heart
//                             className={`h-5 w-5 mr-2 ${
//                               isFavorite ? "text-red-500 fill-current animate-pulse" : ""
//                             }`}
//                           />
//                           {isFavorite ? "Remove Favorite" : "Add to Favorite"}
//                         </Button>
//                       </div>
//                     </div>

//                     {/* Features */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
//                       <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-background to-background/50 border border-border/20">
//                         <Truck className="h-6 w-6 text-gold" />
//                         <div>
//                           <h4 className="font-medium text-foreground">Free Shipping</h4>
//                           <p className="text-sm text-muted-foreground">Over ₹5000</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-background to-background/50 border border-border/20">
//                         <Shield className="h-6 w-6 text-gold" />
//                         <div>
//                           <h4 className="font-medium text-foreground">Authentic</h4>
//                           <p className="text-sm text-muted-foreground">100% Guaranteed</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-background to-background/50 border border-border/20">
//                         <RefreshCw className="h-6 w-6 text-gold" />
//                         <div>
//                           <h4 className="font-medium text-foreground">Easy Returns</h4>
//                           <p className="text-sm text-muted-foreground">30 Days Policy</p>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>

//               {/* Additional Info */}
//               <div className="mt-12 pt-8 border-t border-border/30">
//                 <h3 className="text-2xl font-bold text-foreground mb-6">Product Details</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-semibold text-foreground mb-2">Brand</h4>
//                       <p className="text-muted-foreground">{product.brand}</p>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-foreground mb-2">Category</h4>
//                       <Badge variant="outline" className="capitalize">
//                         {product.productCategory.replace("-", " ")}
//                       </Badge>
//                     </div>
//                   </div>
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-semibold text-foreground mb-2">Customer Reviews</h4>
//                       <div className="flex items-center gap-2">
//                         <div className="flex">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className={`h-5 w-5 ${
//                                 i < Math.floor(product.rating)
//                                   ? "text-gold fill-current"
//                                   : "text-muted-foreground/30"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                         <span className="text-lg font-semibold">{product.rating.toFixed(1)}</span>
//                         <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
//                       </div>
//                     </div>
//                     {/* <div>
//                       <h4 className="font-semibold text-foreground mb-2">Product ID</h4>
//                       <p className="text-muted-foreground font-mono">{product.productId}</p>
//                     </div> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }



// // components/ProductDialog.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { 
//   Dialog, 
//   DialogContent,
//   DialogClose 
// } from "@/components/ui/dialog";
// import { Heart, Star, Truck, Shield, RefreshCw, ShoppingCart, Check, X, ChevronLeft, ChevronRight, MessageSquare, Send } from "lucide-react";
// import { toast } from "sonner";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Textarea } from "@/components/ui/textarea";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card } from "@/components/ui/card";

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

// interface Review {
//   id: number;
//   userName: string;
//   userAvatar?: string;
//   rating: number;
//   comment: string;
//   date: string;
// }

// interface ProductDialogProps {
//   productId: number | null;
//   open: boolean;
//   onClose: () => void;
// }

// const api = axios.create({
//   baseURL: "https://merfume-backend-production-5068.up.railway.app",
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// // Mock reviews data - Replace with actual API data
// const mockReviews: Review[] = [
//   {
//     id: 1,
//     userName: "Alex Johnson",
//     rating: 5,
//     comment: "Amazing fragrance! Lasts all day and gets compliments everywhere I go.",
//     date: "2024-03-15"
//   },
//   {
//     id: 2,
//     userName: "Sophia Williams",
//     rating: 4,
//     comment: "Love the scent but wish it lasted a bit longer. Still worth the price!",
//     date: "2024-03-10"
//   },
//   {
//     id: 3,
//     userName: "Michael Chen",
//     rating: 5,
//     comment: "Perfect for both day and night wear. My new signature scent.",
//     date: "2024-03-05"
//   }
// ];

// // Helper function to convert base64 to data URL
// const getImageUrl = (base64String?: string) => {
//   if (!base64String) return null;
  
//   // Check if it's already a URL
//   if (base64String.startsWith('http')) {
//     return base64String;
//   }
  
//   // Check if it's a base64 string
//   if (base64String.startsWith('data:image')) {
//     return base64String;
//   }
  
//   // If it's base64 without data URL prefix, add it
//   if (base64String.length > 100) { // Simple check for base64
//     return `data:image/jpeg;base64,${base64String}`;
//   }
  
//   return null;
// };

// export default function ProductDialog({ productId, open, onClose }: ProductDialogProps) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isAddingToCart, setIsAddingToCart] = useState(false);
//   const [addedToCart, setAddedToCart] = useState(false);
//   const [activeImage, setActiveImage] = useState<"front" | "back">("front");
//   const [quantity, setQuantity] = useState(1);
//   const [reviews, setReviews] = useState<Review[]>(mockReviews);
//   const [newReview, setNewReview] = useState("");
//   const [newRating, setNewRating] = useState(5);
//   const [isSubmittingReview, setIsSubmittingReview] = useState(false);

//   // Load product data when dialog opens
//   useEffect(() => {
//     const fetchProduct = async () => {
//       if (!productId) return;
      
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await api.get(`/api/products/${productId}`);
//         const productData = response.data;
        
//         // Convert base64 images to data URLs if needed
//         const processedProduct = {
//           ...productData,
//           productImageUrl: getImageUrl(productData.productImageUrl) || productData.productImageUrl,
//           productBackImageUrl: productData.productBackImageUrl 
//             ? getImageUrl(productData.productBackImageUrl) || productData.productBackImageUrl
//             : undefined
//         };
        
//         setProduct(processedProduct);
        
//         // Load favorites from localStorage
//         const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
//         setIsFavorite(favorites.includes(productId));
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setError("Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (open && productId) {
//       fetchProduct();
//       // Reset quantity when dialog opens
//       setQuantity(1);
//       setAddedToCart(false);
//       setNewReview("");
//       setNewRating(5);
//     }
//   }, [open, productId]);

//   // Reset states when dialog closes
//   useEffect(() => {
//     if (!open) {
//       setProduct(null);
//       setLoading(true);
//       setError(null);
//       setIsAddingToCart(false);
//       setAddedToCart(false);
//       setQuantity(1);
//     }
//   }, [open]);

//   const handleToggleFavorite = () => {
//     if (typeof window === "undefined" || !productId) return;

//     const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
//     let newFavorites;

//     if (isFavorite) {
//       newFavorites = favorites.filter((favId: number) => favId !== productId);
//       toast.success("Removed from favorites");
//     } else {
//       newFavorites = [...favorites, productId];
//       toast.success("Added to favorites");
//     }

//     localStorage.setItem("merfume_favorites", JSON.stringify(newFavorites));
//     setIsFavorite(!isFavorite);
//   };

//   const getCartToken = () => {
//     if (typeof window === "undefined") return "";
    
//     let token = localStorage.getItem("cartToken");
//     if (!token) {
//       token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//       localStorage.setItem("cartToken", token);
//     }
//     return token;
//   };

//   const handleAddToCart = async () => {
//     if (!product || isAddingToCart || addedToCart) return;

//     setIsAddingToCart(true);
//     try {
//       const cartToken = getCartToken();

//       const response = await api.post("/api/cart/add", {
//         productId: product.productId,
//         quantity: quantity,
//       }, {
//         headers: {
//           "Cart-Token": cartToken,
//         },
//       });

//       // Update local cart storage
//       const addedItem = {
//         productId: product.productId,
//         productName: product.productName,
//         brand: product.brand,
//         productPrice: product.productPrice,
//         quantity: quantity,
//         productImageUrl: product.productImageUrl,
//       };

//       const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//       const index = existingCart.findIndex((item: any) => item.productId === product.productId);
      
//       if (index > -1) {
//         existingCart[index].quantity += quantity;
//       } else {
//         existingCart.push(addedItem);
//       }

//       localStorage.setItem("cart", JSON.stringify(existingCart));

//       setAddedToCart(true);
//       toast.success("Added to cart successfully!");

//       setTimeout(() => setAddedToCart(false), 2000);
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       if (axios.isAxiosError(error)) {
//         toast.error(error.response?.data?.message || "Failed to add to cart");
//       } else {
//         toast.error("Network error. Please try again.");
//       }
//     } finally {
//       setIsAddingToCart(false);
//     }
//   };

//   const incrementQuantity = () => {
//     setQuantity(prev => prev + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(prev => prev - 1);
//     }
//   };

//   const handleQuantityChange = (value: number) => {
//     if (value >= 1) {
//       setQuantity(value);
//     }
//   };

//   // Get current image URL based on active image state
//   const getCurrentImageUrl = () => {
//     if (!product) return "";
    
//     if (activeImage === "front") {
//       return product.productImageUrl;
//     }
    
//     if (activeImage === "back" && product.productBackImageUrl) {
//       return product.productBackImageUrl;
//     }
    
//     return product.productImageUrl;
//   };

//   const handleSubmitReview = async () => {
//     if (!newReview.trim() || !product) return;
    
//     setIsSubmittingReview(true);
    
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       const newReviewObj: Review = {
//         id: reviews.length + 1,
//         userName: "You",
//         rating: newRating,
//         comment: newReview,
//         date: new Date().toISOString().split('T')[0]
//       };
      
//       setReviews(prev => [newReviewObj, ...prev]);
//       setNewReview("");
//       setNewRating(5);
      
//       toast.success("Review submitted successfully!");
//     } catch (error) {
//       toast.error("Failed to submit review");
//     } finally {
//       setIsSubmittingReview(false);
//     }
//   };

//   const discount = product?.originalPrice 
//     ? Math.round(((product.originalPrice - product.productPrice) / product.originalPrice) * 100)
//     : 0;

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto p-0 border-0 bg-transparent">
//         <div className="bg-background rounded-3xl overflow-hidden border border-border shadow-2xl">
//           {/* Close Button */}
//           <div className="absolute right-6 top-6 z-50">
//             <DialogClose asChild>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent border border-border shadow-lg"
//               >
//                 <X className="h-5 w-5" />
//               </Button>
//             </DialogClose>
//           </div>

//           {loading ? (
//             // Loading Skeleton
//             <div className="animate-pulse p-8">
//               <div className="flex flex-col lg:flex-row gap-12">
//                 {/* Image skeleton */}
//                 <div className="lg:w-1/2">
//                   <div className="aspect-square bg-muted rounded-2xl"></div>
//                 </div>

//                 {/* Content skeleton */}
//                 <div className="lg:w-1/2 space-y-6">
//                   <div>
//                     <div className="h-6 w-32 bg-muted rounded-full mb-2"></div>
//                     <div className="h-10 w-3/4 bg-muted rounded mb-4"></div>
//                     <div className="h-6 w-48 bg-muted/50 rounded mb-2"></div>
//                     <div className="h-6 w-24 bg-muted/50 rounded"></div>
//                   </div>

//                   <div className="h-2 bg-muted/30 rounded"></div>

//                   <div>
//                     <div className="h-5 w-40 bg-muted/50 rounded mb-3"></div>
//                     <div className="flex flex-wrap gap-2">
//                       {[...Array(3)].map((_, i) => (
//                         <div key={i} className="h-8 w-20 bg-muted/30 rounded-full"></div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="h-2 bg-muted/30 rounded"></div>

//                   <div className="space-y-4">
//                     <div className="h-8 w-48 bg-muted/50 rounded"></div>
//                     <div className="flex items-center gap-4">
//                       <div className="h-12 w-12 bg-muted/30 rounded-lg"></div>
//                       <div className="h-12 w-48 bg-muted/50 rounded-lg"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : error || !product ? (
//             // Error State
//             <div className="p-12 text-center">
//               <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 p-8 rounded-3xl mb-6 max-w-md mx-auto">
//                 <Shield className="h-16 w-16 text-red-400 mx-auto" />
//               </div>
//               <h3 className="text-2xl font-bold text-foreground mb-3">
//                 Product Not Found
//               </h3>
//               <p className="text-muted-foreground mb-8 max-w-md mx-auto">
//                 {error || "The product you're looking for doesn't exist."}
//               </p>
//               <Button
//                 onClick={onClose}
//                 className="bg-primary text-primary-foreground px-8 py-3 h-12 text-lg"
//               >
//                 Close
//               </Button>
//             </div>
//           ) : (
//             // Product Content
//             <>
//               {/* Main Product Section */}
//               <div className="p-8">
//                 <div className="flex flex-col lg:flex-row gap-12">
//                   {/* Images Section */}
//                   <div className="lg:w-1/2 space-y-6">
//                     <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border">
//                       <motion.img
//                         key={activeImage}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                         src={getCurrentImageUrl()}
//                         alt={product.productName}
//                         className="w-full h-full object-contain p-8"
//                         onError={(e) => {
//                           // Fallback for image loading errors
//                           e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3EProduct Image%3C/text%3E%3C/svg%3E";
//                         }}
//                       />
                      
//                       {discount > 0 && (
//                         <div className="absolute top-4 right-4">
//                           <Badge className="bg-red-500 text-white text-lg px-4 py-2 shadow-lg">
//                             -{discount}%
//                           </Badge>
//                         </div>
//                       )}
//                     </div>

//                     {/* Image Toggle */}
//                     {product.productBackImageUrl && (
//                       <div className="flex justify-center gap-4">
//                         <Button
//                           variant={activeImage === "front" ? "default" : "outline"}
//                           size="lg"
//                           onClick={() => setActiveImage("front")}
//                           className="flex-1"
//                         >
//                           Front View
//                         </Button>
//                         <Button
//                           variant={activeImage === "back" ? "default" : "outline"}
//                           size="lg"
//                           onClick={() => setActiveImage("back")}
//                           className="flex-1"
//                         >
//                           Back View
//                         </Button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Product Info Section */}
//                   <div className="lg:w-1/2">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="space-y-8"
//                     >
//                       {/* Brand and Category */}
//                       <div className="space-y-2">
//                         <div className="flex items-center gap-3">
//                           <Badge variant="outline" className="px-4 py-1.5 text-base">
//                             {product.brand}
//                           </Badge>
//                           <Badge className="bg-primary/10 text-primary px-4 py-1.5 text-base">
//                             {product.productCategory.replace("-", " ")}
//                           </Badge>
//                         </div>
                        
//                         <h1 className="text-4xl font-bold text-foreground leading-tight">
//                           {product.productName}
//                         </h1>
                        
//                         {/* Rating */}
//                         <div className="flex items-center gap-3">
//                           <div className="flex items-center gap-1">
//                             {[...Array(5)].map((_, i) => (
//                               <Star
//                                 key={i}
//                                 className={`h-5 w-5 ${
//                                   i < Math.floor(product.rating)
//                                     ? "text-yellow-400 fill-current"
//                                     : "text-muted-foreground/30"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                           <span className="text-xl font-semibold">{product.rating.toFixed(1)}</span>
//                           <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
//                         </div>
//                       </div>

//                       <Separator />

//                       {/* Description */}
//                       <div>
//                         <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
//                         <p className="text-muted-foreground text-lg leading-relaxed">
//                           {product.productDescription}
//                         </p>
//                       </div>

//                       <Separator />

//                       {/* Fragrance Notes */}
//                       <div>
//                         <h3 className="text-lg font-semibold text-foreground mb-4">Fragrance Notes</h3>
//                         <div className="flex flex-wrap gap-3">
//                           {product.notes.map((note, index) => (
//                             <Badge
//                               key={index}
//                               variant="secondary"
//                               className="px-5 py-2 text-base bg-primary/5 hover:bg-primary/10 transition-colors"
//                             >
//                               {note}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>

//                       <Separator />

//                       {/* Price Section */}
//                       <div className="space-y-4">
//                         <div className="flex items-baseline gap-4">
//                           <span className="text-5xl font-bold text-primary">
//                             ₹{product.productPrice.toLocaleString()}
//                           </span>
//                           {product.originalPrice && (
//                             <>
//                               <span className="text-2xl text-muted-foreground line-through">
//                                 ₹{product.originalPrice.toLocaleString()}
//                               </span>
//                               {discount > 0 && (
//                                 <Badge className="bg-green-500/20 text-green-600 text-base px-4 py-2">
//                                   Save {discount}%
//                                 </Badge>
//                               )}
//                             </>
//                           )}
//                         </div>
//                       </div>

//                       {/* Quantity and Actions */}
//                       <div className="space-y-6 pt-4">
//                         {/* Quantity Selector */}
//                         <div className="space-y-4">
//                           <h3 className="text-lg font-semibold text-foreground">Quantity</h3>
//                           <div className="flex items-center gap-4">
//                             <div className="flex items-center border-2 border-border rounded-xl overflow-hidden">
//                               <Button
//                                 variant="ghost"
//                                 size="lg"
//                                 onClick={decrementQuantity}
//                                 disabled={quantity <= 1}
//                                 className="h-14 w-14 rounded-none hover:bg-accent/50"
//                               >
//                                 <ChevronLeft className="h-5 w-5" />
//                               </Button>
//                               <div className="h-14 w-20 flex items-center justify-center text-xl font-bold border-x-2 border-border">
//                                 {quantity}
//                               </div>
//                               <Button
//                                 variant="ghost"
//                                 size="lg"
//                                 onClick={incrementQuantity}
//                                 className="h-14 w-14 rounded-none hover:bg-accent/50"
//                               >
//                                 <ChevronRight className="h-5 w-5" />
//                               </Button>
//                             </div>
//                             <Button
//                               variant="outline"
//                               size="lg"
//                               onClick={() => handleQuantityChange(quantity + 1)}
//                               className="h-14 px-6 text-base"
//                             >
//                               +1
//                             </Button>
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-4">
//                           <Button
//                             size="lg"
//                             className="flex-1 bg-primary text-primary-foreground text-lg font-semibold py-7 rounded-xl hover:bg-primary/90"
//                             onClick={handleAddToCart}
//                             disabled={isAddingToCart || addedToCart}
//                           >
//                             {isAddingToCart ? (
//                               <>
//                                 <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-3"></div>
//                                 Adding...
//                               </>
//                             ) : addedToCart ? (
//                               <>
//                                 <Check className="h-5 w-5 mr-3" />
//                                 Added to Cart
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingCart className="h-5 w-5 mr-3" />
//                                 Add to Cart • ₹{(product.productPrice * quantity).toLocaleString()}
//                               </>
//                             )}
//                           </Button>

//                           <Button
//                             size="lg"
//                             variant="outline"
//                             className="flex-1 border-2 border-border hover:border-primary hover:bg-primary/5 text-lg font-semibold py-7 rounded-xl"
//                             onClick={handleToggleFavorite}
//                           >
//                             <Heart
//                               className={`h-5 w-5 mr-3 ${
//                                 isFavorite ? "text-red-500 fill-current" : ""
//                               }`}
//                             />
//                             {isFavorite ? "Saved" : "Save"}
//                           </Button>
//                         </div>
//                       </div>

//                       {/* Features */}
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
//                         <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
//                           <Truck className="h-6 w-6 text-primary" />
//                           <div>
//                             <h4 className="font-medium text-foreground">Free Shipping</h4>
//                             <p className="text-sm text-muted-foreground">On orders above ₹5000</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
//                           <Shield className="h-6 w-6 text-primary" />
//                           <div>
//                             <h4 className="font-medium text-foreground">100% Authentic</h4>
//                             <p className="text-sm text-muted-foreground">Guaranteed quality</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
//                           <RefreshCw className="h-6 w-6 text-primary" />
//                           <div>
//                             <h4 className="font-medium text-foreground">Easy Returns</h4>
//                             <p className="text-sm text-muted-foreground">30-day return policy</p>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>

//               {/* Reviews Section */}
//               <div className="border-t">
//                 <div className="p-8">
//                   <h2 className="text-3xl font-bold text-foreground mb-8">Customer Reviews</h2>
                  
//                   {/* Add Review Section */}
//                   <Card className="p-6 mb-8">
//                     <h3 className="text-xl font-semibold text-foreground mb-4">Add Your Review</h3>
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="font-medium text-foreground mb-2">Your Rating</h4>
//                         <div className="flex items-center gap-1">
//                           {[1, 2, 3, 4, 5].map((star) => (
//                             <Button
//                               key={star}
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => setNewRating(star)}
//                               className="h-10 w-10 p-0"
//                             >
//                               <Star
//                                 className={`h-6 w-6 ${
//                                   star <= newRating
//                                     ? "text-yellow-400 fill-current"
//                                     : "text-muted-foreground/30"
//                                 }`}
//                               />
//                             </Button>
//                           ))}
//                         </div>
//                       </div>
                      
//                       <div>
//                         <h4 className="font-medium text-foreground mb-2">Your Review</h4>
//                         <Textarea
//                           placeholder="Share your experience with this product..."
//                           value={newReview}
//                           onChange={(e) => setNewReview(e.target.value)}
//                           className="min-h-[120px] text-base"
//                         />
//                       </div>
                      
//                       <Button
//                         size="lg"
//                         onClick={handleSubmitReview}
//                         disabled={!newReview.trim() || isSubmittingReview}
//                         className="w-full sm:w-auto"
//                       >
//                         {isSubmittingReview ? (
//                           <>
//                             <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
//                             Submitting...
//                           </>
//                         ) : (
//                           <>
//                             <Send className="h-5 w-5 mr-2" />
//                             Submit Review
//                           </>
//                         )}
//                       </Button>
//                     </div>
//                   </Card>

//                   {/* Reviews List */}
//                   <div className="space-y-6">
//                     <div className="flex items-center justify-between">
//                       <h3 className="text-2xl font-semibold text-foreground">
//                         All Reviews ({reviews.length})
//                       </h3>
//                       <div className="flex items-center gap-2 text-lg">
//                         <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                         <span className="font-bold">{product.rating.toFixed(1)}</span>
//                         <span className="text-muted-foreground">out of 5</span>
//                       </div>
//                     </div>

//                     {reviews.map((review) => (
//                       <Card key={review.id} className="p-6">
//                         <div className="flex items-start justify-between mb-4">
//                           <div className="flex items-center gap-3">
//                             <Avatar className="h-12 w-12">
//                               <AvatarFallback className="bg-primary/10 text-primary">
//                                 {review.userName.charAt(0)}
//                               </AvatarFallback>
//                             </Avatar>
//                             <div>
//                               <h4 className="font-semibold text-foreground">{review.userName}</h4>
//                               <div className="flex items-center gap-2">
//                                 <div className="flex">
//                                   {[...Array(5)].map((_, i) => (
//                                     <Star
//                                       key={i}
//                                       className={`h-4 w-4 ${
//                                         i < review.rating
//                                           ? "text-yellow-400 fill-current"
//                                           : "text-muted-foreground/30"
//                                       }`}
//                                     />
//                                   ))}
//                                 </div>
//                                 <span className="text-muted-foreground text-sm">{review.date}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <p className="text-foreground">{review.comment}</p>
//                       </Card>
//                     ))}
//                   </div>

//                   {/* Product Details */}
//                   <div className="mt-12 pt-8 border-t">
//                     <h3 className="text-2xl font-bold text-foreground mb-6">Product Details</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                       <div className="space-y-6">
//                         <div>
//                           <h4 className="font-semibold text-foreground mb-2 text-lg">Brand</h4>
//                           <p className="text-muted-foreground text-lg">{product.brand}</p>
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-foreground mb-2 text-lg">Category</h4>
//                           <Badge variant="outline" className="text-lg px-4 py-2 capitalize">
//                             {product.productCategory.replace("-", " ")}
//                           </Badge>
//                         </div>
//                       </div>
//                       <div className="space-y-6">
//                         <div>
//                           <h4 className="font-semibold text-foreground mb-2 text-lg">Average Rating</h4>
//                           <div className="flex items-center gap-3">
//                             <div className="flex items-center gap-1">
//                               {[...Array(5)].map((_, i) => (
//                                 <Star
//                                   key={i}
//                                   className={`h-6 w-6 ${
//                                     i < Math.floor(product.rating)
//                                       ? "text-yellow-400 fill-current"
//                                       : "text-muted-foreground/30"
//                                   }`}
//                                 />
//                               ))}
//                             </div>
//                             <span className="text-2xl font-bold">{product.rating.toFixed(1)}</span>
//                             <span className="text-muted-foreground text-lg">
//                               ({product.reviewCount} reviews)
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }


// components/ProductDialog.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { 
//   Dialog, 
//   DialogContent,
//   DialogClose 
// } from "@/components/ui/dialog";
// import { Heart, Star, Truck, Shield, RefreshCw, ShoppingCart, Check, X, ChevronLeft, ChevronRight, MessageSquare, Send, User } from "lucide-react";
// import { toast } from "sonner";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Textarea } from "@/components/ui/textarea";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

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

// interface Review {
//   id: number;
//   userName: string;
//   rating: number;
//   comment: string;
//   date: string;
//   productId: number;
// }

// interface ProductDialogProps {
//   productId: number | null;
//   open: boolean;
//   onClose: () => void;
// }

// const api = axios.create({
//   baseURL: "https://merfume-backend-production-5068.up.railway.app",
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// // Helper function to convert base64 to data URL
// const getImageUrl = (base64String?: string) => {
//   if (!base64String) return null;
  
//   if (base64String.startsWith('http')) {
//     return base64String;
//   }
  
//   if (base64String.startsWith('data:image')) {
//     return base64String;
//   }
  
//   if (base64String.length > 100) {
//     return `data:image/jpeg;base64,${base64String}`;
//   }
  
//   return null;
// };

// export default function ProductDialog({ productId, open, onClose }: ProductDialogProps) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isAddingToCart, setIsAddingToCart] = useState(false);
//   const [addedToCart, setAddedToCart] = useState(false);
//   const [activeImage, setActiveImage] = useState<"front" | "back">("front");
//   const [quantity, setQuantity] = useState(1);
//   const [reviews, setReviews] = useState<Review[]>([]);
//   const [newReview, setNewReview] = useState("");
//   const [newRating, setNewRating] = useState(5);
//   const [userName, setUserName] = useState("");
//   const [isSubmittingReview, setIsSubmittingReview] = useState(false);

//   // Load user name from localStorage or set default
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedName = localStorage.getItem("userName") || "";
//       setUserName(savedName);
//     }
//   }, []);

//   // Load product data and reviews when dialog opens
//   useEffect(() => {
//     const fetchProductAndReviews = async () => {
//       if (!productId) return;
      
//       setLoading(true);
//       setError(null);
//       try {
//         // Fetch product
//         const productResponse = await api.get(`/api/products/${productId}`);
//         const productData = productResponse.data;
        
//         // Convert base64 images to data URLs if needed
//         const processedProduct = {
//           ...productData,
//           productImageUrl: getImageUrl(productData.productImageUrl) || productData.productImageUrl,
//           productBackImageUrl: productData.productBackImageUrl 
//             ? getImageUrl(productData.productBackImageUrl) || productData.productBackImageUrl
//             : undefined
//         };
        
//         setProduct(processedProduct);
        
//         // Fetch reviews for this product
//         try {
//           const reviewsResponse = await api.get(`/api/reviews/product/${productId}`);
//           setReviews(reviewsResponse.data);
//         } catch (reviewError) {
//           console.error("Error fetching reviews:", reviewError);
//           setReviews([]);
//         }
        
//         // Load favorites from localStorage
//         const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
//         setIsFavorite(favorites.includes(productId));
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setError("Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (open && productId) {
//       fetchProductAndReviews();
//       // Reset states when dialog opens
//       setQuantity(1);
//       setAddedToCart(false);
//       setNewReview("");
//       setNewRating(5);
//     }
//   }, [open, productId]);

//   // Reset states when dialog closes
//   useEffect(() => {
//     if (!open) {
//       setProduct(null);
//       setLoading(true);
//       setError(null);
//       setIsAddingToCart(false);
//       setAddedToCart(false);
//       setQuantity(1);
//       setReviews([]);
//     }
//   }, [open]);

//   const handleToggleFavorite = () => {
//     if (typeof window === "undefined" || !productId) return;

//     const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
//     let newFavorites;

//     if (isFavorite) {
//       newFavorites = favorites.filter((favId: number) => favId !== productId);
//       toast.success("Removed from favorites");
//     } else {
//       newFavorites = [...favorites, productId];
//       toast.success("Added to favorites");
//     }

//     localStorage.setItem("merfume_favorites", JSON.stringify(newFavorites));
//     setIsFavorite(!isFavorite);
//   };

//   const getCartToken = () => {
//     if (typeof window === "undefined") return "";
    
//     let token = localStorage.getItem("cartToken");
//     if (!token) {
//       token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//       localStorage.setItem("cartToken", token);
//     }
//     return token;
//   };

//   const handleAddToCart = async () => {
//     if (!product || isAddingToCart || addedToCart) return;

//     setIsAddingToCart(true);
//     try {
//       const cartToken = getCartToken();

//       const response = await api.post("/api/cart/add", {
//         productId: product.productId,
//         quantity: quantity,
//       }, {
//         headers: {
//           "Cart-Token": cartToken,
//         },
//       });

//       // Update local cart storage
//       const addedItem = {
//         productId: product.productId,
//         productName: product.productName,
//         brand: product.brand,
//         productPrice: product.productPrice,
//         quantity: quantity,
//         productImageUrl: product.productImageUrl,
//       };

//       const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//       const index = existingCart.findIndex((item: any) => item.productId === product.productId);
      
//       if (index > -1) {
//         existingCart[index].quantity += quantity;
//       } else {
//         existingCart.push(addedItem);
//       }

//       localStorage.setItem("cart", JSON.stringify(existingCart));

//       setAddedToCart(true);
//       toast.success("Added to cart successfully!");

//       setTimeout(() => setAddedToCart(false), 2000);
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       if (axios.isAxiosError(error)) {
//         toast.error(error.response?.data?.message || "Failed to add to cart");
//       } else {
//         toast.error("Network error. Please try again.");
//       }
//     } finally {
//       setIsAddingToCart(false);
//     }
//   };

//   const incrementQuantity = () => {
//     setQuantity(prev => prev + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(prev => prev - 1);
//     }
//   };

//   const handleQuantityChange = (value: number) => {
//     if (value >= 1) {
//       setQuantity(value);
//     }
//   };

//   // Get current image URL based on active image state
//   const getCurrentImageUrl = () => {
//     if (!product) return "";
    
//     if (activeImage === "front") {
//       return product.productImageUrl;
//     }
    
//     if (activeImage === "back" && product.productBackImageUrl) {
//       return product.productBackImageUrl;
//     }
    
//     return product.productImageUrl;
//   };

//   // Handle review submission
//   const handleSubmitReview = async () => {
//     if (!newReview.trim() || !product || !userName.trim()) {
//       toast.error("Please enter your name and review");
//       return;
//     }
    
//     if (userName.length < 2 || userName.length > 100) {
//       toast.error("Name must be between 2 and 100 characters");
//       return;
//     }
    
//     if (newReview.length < 10) {
//       toast.error("Review must be at least 10 characters");
//       return;
//     }
    
//     setIsSubmittingReview(true);
    
//     try {
//       // Save user name to localStorage
//       localStorage.setItem("userName", userName);
      
//       // Prepare review data
//       const reviewData = {
//         userName: userName,
//         rating: newRating,
//         comment: newReview,
//         productId: product.productId
//       };
      
//       // Submit review to backend API
//       const response = await api.post("/api/reviews/add", reviewData);
      
//       // Add new review to list
//       const newReviewObj: Review = {
//         id: response.data.id,
//         userName: response.data.userName,
//         rating: response.data.rating,
//         comment: response.data.comment,
//         date: response.data.date,
//         productId: response.data.productId
//       };
      
//       setReviews(prev => [newReviewObj, ...prev]);
      
//       // Update product rating and review count
//       if (product) {
//         const newTotalRating = (product.rating * product.reviewCount) + newRating;
//         const newReviewCount = product.reviewCount + 1;
//         const newAverageRating = Math.round((newTotalRating / newReviewCount) * 10) / 10;
        
//         setProduct({
//           ...product,
//           rating: newAverageRating,
//           reviewCount: newReviewCount
//         });
//       }
      
//       // Reset form
//       setNewReview("");
//       setNewRating(5);
      
//       toast.success("Review submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting review:", error);
//       if (axios.isAxiosError(error)) {
//         const errorMsg = error.response?.data?.message || "Failed to submit review";
//         toast.error(errorMsg);
//       } else {
//         toast.error("Network error. Please try again.");
//       }
//     } finally {
//       setIsSubmittingReview(false);
//     }
//   };

//   const discount = product?.originalPrice 
//     ? Math.round(((product.originalPrice - product.productPrice) / product.originalPrice) * 100)
//     : 0;

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto p-0 border-0 bg-transparent">
//         <div className="bg-background rounded-3xl overflow-hidden border border-border shadow-2xl">
//           {/* Close Button */}
//           <div className="absolute right-6 top-6 z-50">
//             <DialogClose asChild>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent border border-border shadow-lg"
//               >
//                 <X className="h-5 w-5" />
//               </Button>
//             </DialogClose>
//           </div>

//           {loading ? (
//             // Loading Skeleton
//             <div className="animate-pulse p-8">
//               <div className="flex flex-col lg:flex-row gap-12">
//                 {/* Image skeleton */}
//                 <div className="lg:w-1/2">
//                   <div className="aspect-square bg-muted rounded-2xl"></div>
//                 </div>

//                 {/* Content skeleton */}
//                 <div className="lg:w-1/2 space-y-6">
//                   <div>
//                     <div className="h-6 w-32 bg-muted rounded-full mb-2"></div>
//                     <div className="h-10 w-3/4 bg-muted rounded mb-4"></div>
//                     <div className="h-6 w-48 bg-muted/50 rounded mb-2"></div>
//                     <div className="h-6 w-24 bg-muted/50 rounded"></div>
//                   </div>

//                   <div className="h-2 bg-muted/30 rounded"></div>

//                   <div>
//                     <div className="h-5 w-40 bg-muted/50 rounded mb-3"></div>
//                     <div className="flex flex-wrap gap-2">
//                       {[...Array(3)].map((_, i) => (
//                         <div key={i} className="h-8 w-20 bg-muted/30 rounded-full"></div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="h-2 bg-muted/30 rounded"></div>

//                   <div className="space-y-4">
//                     <div className="h-8 w-48 bg-muted/50 rounded"></div>
//                     <div className="flex items-center gap-4">
//                       <div className="h-12 w-12 bg-muted/30 rounded-lg"></div>
//                       <div className="h-12 w-48 bg-muted/50 rounded-lg"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : error || !product ? (
//             // Error State
//             <div className="p-12 text-center">
//               <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 p-8 rounded-3xl mb-6 max-w-md mx-auto">
//                 <Shield className="h-16 w-16 text-red-400 mx-auto" />
//               </div>
//               <h3 className="text-2xl font-bold text-foreground mb-3">
//                 Product Not Found
//               </h3>
//               <p className="text-muted-foreground mb-8 max-w-md mx-auto">
//                 {error || "The product you're looking for doesn't exist."}
//               </p>
//               <Button
//                 onClick={onClose}
//                 className="bg-primary text-primary-foreground px-8 py-3 h-12 text-lg"
//               >
//                 Close
//               </Button>
//             </div>
//           ) : (
//             // Product Content
//             <>
//               {/* Main Product Section */}
//               <div className="p-8">
//                 <div className="flex flex-col lg:flex-row gap-12">
//                   {/* Images Section */}
//                   <div className="lg:w-1/2 space-y-6">
//                     <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border">
//                       <motion.img
//                         key={activeImage}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                         src={getCurrentImageUrl()}
//                         alt={product.productName}
//                         className="w-full h-full object-contain p-8"
//                         onError={(e) => {
//                           e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3EProduct Image%3C/text%3E%3C/svg%3E";
//                         }}
//                       />
                      
//                       {discount > 0 && (
//                         <div className="absolute top-4 right-4">
//                           <Badge className="bg-red-500 text-white text-lg px-4 py-2 shadow-lg">
//                             -{discount}%
//                           </Badge>
//                         </div>
//                       )}
//                     </div>

//                     {/* Image Toggle */}
//                     {product.productBackImageUrl && (
//                       <div className="flex justify-center gap-4">
//                         <Button
//                           variant={activeImage === "front" ? "default" : "outline"}
//                           size="lg"
//                           onClick={() => setActiveImage("front")}
//                           className="flex-1"
//                         >
//                           Front View
//                         </Button>
//                         <Button
//                           variant={activeImage === "back" ? "default" : "outline"}
//                           size="lg"
//                           onClick={() => setActiveImage("back")}
//                           className="flex-1"
//                         >
//                           Back View
//                         </Button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Product Info Section */}
//                   <div className="lg:w-1/2">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="space-y-8"
//                     >
//                       {/* Brand and Category */}
//                       <div className="space-y-2">
//                         <div className="flex items-center gap-3">
//                           <Badge variant="outline" className="px-4 py-1.5 text-base">
//                             {product.brand}
//                           </Badge>
//                           <Badge className="bg-primary/10 text-primary px-4 py-1.5 text-base">
//                             {product.productCategory.replace("-", " ")}
//                           </Badge>
//                         </div>
                        
//                         <h1 className="text-4xl font-bold text-foreground leading-tight">
//                           {product.productName}
//                         </h1>
                        
//                         {/* Rating */}
//                         <div className="flex items-center gap-3">
//                           <div className="flex items-center gap-1">
//                             {[...Array(5)].map((_, i) => (
//                               <Star
//                                 key={i}
//                                 className={`h-5 w-5 ${
//                                   i < Math.floor(product.rating)
//                                     ? "text-yellow-400 fill-current"
//                                     : "text-muted-foreground/30"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                           <span className="text-xl font-semibold">{product.rating.toFixed(1)}</span>
//                           <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
//                         </div>
//                       </div>

//                       <Separator />

//                       {/* Description */}
//                       <div>
//                         <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
//                         <p className="text-muted-foreground text-lg leading-relaxed">
//                           {product.productDescription}
//                         </p>
//                       </div>

//                       <Separator />

//                       {/* Fragrance Notes */}
//                       <div>
//                         <h3 className="text-lg font-semibold text-foreground mb-4">Fragrance Notes</h3>
//                         <div className="flex flex-wrap gap-3">
//                           {product.notes.map((note, index) => (
//                             <Badge
//                               key={index}
//                               variant="secondary"
//                               className="px-5 py-2 text-base bg-primary/5 hover:bg-primary/10 transition-colors"
//                             >
//                               {note}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>

//                       <Separator />

//                       {/* Price Section */}
//                       <div className="space-y-4">
//                         <div className="flex items-baseline gap-4">
//                           <span className="text-5xl font-bold text-primary">
//                             ₹{product.productPrice.toLocaleString()}
//                           </span>
//                           {product.originalPrice && (
//                             <>
//                               <span className="text-2xl text-muted-foreground line-through">
//                                 ₹{product.originalPrice.toLocaleString()}
//                               </span>
//                               {discount > 0 && (
//                                 <Badge className="bg-green-500/20 text-green-600 text-base px-4 py-2">
//                                   Save {discount}%
//                                 </Badge>
//                               )}
//                             </>
//                           )}
//                         </div>
//                       </div>

//                       {/* Quantity and Actions */}
//                       <div className="space-y-6 pt-4">
//                         {/* Quantity Selector */}
//                         <div className="space-y-4">
//                           <h3 className="text-lg font-semibold text-foreground">Quantity</h3>
//                           <div className="flex items-center gap-4">
//                             <div className="flex items-center border-2 border-border rounded-xl overflow-hidden">
//                               <Button
//                                 variant="ghost"
//                                 size="lg"
//                                 onClick={decrementQuantity}
//                                 disabled={quantity <= 1}
//                                 className="h-14 w-14 rounded-none hover:bg-accent/50"
//                               >
//                                 <ChevronLeft className="h-5 w-5" />
//                               </Button>
//                               <div className="h-14 w-20 flex items-center justify-center text-xl font-bold border-x-2 border-border">
//                                 {quantity}
//                               </div>
//                               <Button
//                                 variant="ghost"
//                                 size="lg"
//                                 onClick={incrementQuantity}
//                                 className="h-14 w-14 rounded-none hover:bg-accent/50"
//                               >
//                                 <ChevronRight className="h-5 w-5" />
//                               </Button>
//                             </div>
//                             <Button
//                               variant="outline"
//                               size="lg"
//                               onClick={() => handleQuantityChange(quantity + 1)}
//                               className="h-14 px-6 text-base"
//                             >
//                               +1
//                             </Button>
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-4">
//                           <Button
//                             size="lg"
//                             className="flex-1 bg-primary text-primary-foreground text-lg font-semibold py-7 rounded-xl hover:bg-primary/90"
//                             onClick={handleAddToCart}
//                             disabled={isAddingToCart || addedToCart}
//                           >
//                             {isAddingToCart ? (
//                               <>
//                                 <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-3"></div>
//                                 Adding...
//                               </>
//                             ) : addedToCart ? (
//                               <>
//                                 <Check className="h-5 w-5 mr-3" />
//                                 Added to Cart
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingCart className="h-5 w-5 mr-3" />
//                                 Add to Cart • ₹{(product.productPrice * quantity).toLocaleString()}
//                               </>
//                             )}
//                           </Button>

//                           <Button
//                             size="lg"
//                             variant="outline"
//                             className="flex-1 border-2 border-border hover:border-primary hover:bg-primary/5 text-lg font-semibold py-7 rounded-xl"
//                             onClick={handleToggleFavorite}
//                           >
//                             <Heart
//                               className={`h-5 w-5 mr-3 ${
//                                 isFavorite ? "text-red-500 fill-current" : ""
//                               }`}
//                             />
//                             {isFavorite ? "Saved" : "Save"}
//                           </Button>
//                         </div>
//                       </div>

//                       {/* Features */}
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
//                         <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
//                           <Truck className="h-6 w-6 text-primary" />
//                           <div>
//                             <h4 className="font-medium text-foreground">Free Shipping</h4>
//                             <p className="text-sm text-muted-foreground">On orders above ₹5000</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
//                           <Shield className="h-6 w-6 text-primary" />
//                           <div>
//                             <h4 className="font-medium text-foreground">100% Authentic</h4>
//                             <p className="text-sm text-muted-foreground">Guaranteed quality</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
//                           <RefreshCw className="h-6 w-6 text-primary" />
//                           <div>
//                             <h4 className="font-medium text-foreground">Easy Returns</h4>
//                             <p className="text-sm text-muted-foreground">30-day return policy</p>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>

//               {/* Reviews Section */}
//               <div className="border-t">
//                 <div className="p-8">
//                   <h2 className="text-3xl font-bold text-foreground mb-8">Customer Reviews</h2>
                  
//                   {/* Add Review Section */}
//                   <Card className="p-6 mb-8">
//                     <h3 className="text-xl font-semibold text-foreground mb-4">Add Your Review</h3>
//                     <div className="space-y-4">
//                       {/* User Name Input */}
//                       <div>
//                         <Label htmlFor="userName" className="font-medium text-foreground mb-2">
//                           Your Name
//                         </Label>
//                         <div className="flex items-center gap-3">
//                           <User className="h-4 w-4 text-muted-foreground" />
//                           <Input
//                             id="userName"
//                             placeholder="Enter your name"
//                             value={userName}
//                             onChange={(e) => setUserName(e.target.value)}
//                             className="flex-1"
//                             minLength={2}
//                             maxLength={100}
//                           />
//                         </div>
//                         <p className="text-sm text-muted-foreground mt-1">
//                           This name will be displayed with your review
//                         </p>
//                       </div>
                      
//                       {/* Rating Input */}
//                       <div>
//                         <h4 className="font-medium text-foreground mb-2">Your Rating</h4>
//                         <div className="flex items-center gap-1">
//                           {[1, 2, 3, 4, 5].map((star) => (
//                             <Button
//                               key={star}
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => setNewRating(star)}
//                               className="h-10 w-10 p-0 hover:scale-110 transition-transform"
//                             >
//                               <Star
//                                 className={`h-6 w-6 ${
//                                   star <= newRating
//                                     ? "text-yellow-400 fill-current"
//                                     : "text-muted-foreground/30"
//                                 }`}
//                               />
//                             </Button>
//                           ))}
//                           <span className="ml-2 font-medium text-foreground">
//                             {newRating} out of 5
//                           </span>
//                         </div>
//                       </div>
                      
//                       {/* Review Comment Input */}
//                       <div>
//                         <h4 className="font-medium text-foreground mb-2">Your Review</h4>
//                         <Textarea
//                           placeholder="Share your experience with this product... (Minimum 10 characters)"
//                           value={newReview}
//                           onChange={(e) => setNewReview(e.target.value)}
//                           className="min-h-[120px] text-base"
//                           minLength={10}
//                           maxLength={1000}
//                         />
//                         <div className="flex justify-between mt-1">
//                           <p className="text-sm text-muted-foreground">
//                             Minimum 10 characters required
//                           </p>
//                           <p className="text-sm text-muted-foreground">
//                             {newReview.length}/1000
//                           </p>
//                         </div>
//                       </div>
                      
//                       {/* Submit Button */}
//                       <Button
//                         size="lg"
//                         onClick={handleSubmitReview}
//                         disabled={!newReview.trim() || !userName.trim() || newReview.length < 10 || userName.length < 2 || isSubmittingReview}
//                         className="w-full sm:w-auto px-8"
//                       >
//                         {isSubmittingReview ? (
//                           <>
//                             <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
//                             Submitting...
//                           </>
//                         ) : (
//                           <>
//                             <Send className="h-5 w-5 mr-2" />
//                             Submit Review
//                           </>
//                         )}
//                       </Button>
//                     </div>
//                   </Card>

//                   {/* Reviews List */}
//                   <div className="space-y-6">
//                     <div className="flex items-center justify-between">
//                       <h3 className="text-2xl font-semibold text-foreground">
//                         All Reviews ({reviews.length})
//                       </h3>
//                       <div className="flex items-center gap-2 text-lg">
//                         <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                         <span className="font-bold">{product.rating.toFixed(1)}</span>
//                         <span className="text-muted-foreground">out of 5</span>
//                       </div>
//                     </div>

//                     {reviews.length === 0 ? (
//                       <Card className="p-8 text-center">
//                         <div className="flex flex-col items-center justify-center space-y-4">
//                           <MessageSquare className="h-12 w-12 text-muted-foreground/50" />
//                           <div>
//                             <h4 className="text-lg font-semibold text-foreground mb-2">
//                               No Reviews Yet
//                             </h4>
//                             <p className="text-muted-foreground">
//                               Be the first to share your experience with this product!
//                             </p>
//                           </div>
//                         </div>
//                       </Card>
//                     ) : (
//                       reviews.map((review) => (
//                         <Card key={review.id} className="p-6 hover:shadow-md transition-shadow">
//                           <div className="flex items-start justify-between mb-4">
//                             <div className="flex items-center gap-3">
//                               <Avatar className="h-12 w-12 border-2 border-primary/10">
//                                 <AvatarFallback className="bg-primary/10 text-primary font-semibold">
//                                   {review.userName.charAt(0).toUpperCase()}
//                                 </AvatarFallback>
//                               </Avatar>
//                               <div>
//                                 <h4 className="font-semibold text-foreground">{review.userName}</h4>
//                                 <div className="flex items-center gap-2">
//                                   <div className="flex">
//                                     {[...Array(5)].map((_, i) => (
//                                       <Star
//                                         key={i}
//                                         className={`h-4 w-4 ${
//                                           i < review.rating
//                                             ? "text-yellow-400 fill-current"
//                                             : "text-muted-foreground/30"
//                                         }`}
//                                       />
//                                     ))}
//                                   </div>
//                                   <span className="text-muted-foreground text-sm">{review.date}</span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <p className="text-foreground leading-relaxed">{review.comment}</p>
//                         </Card>
//                       ))
//                     )}
//                   </div>

//                   {/* Product Details */}
//                   <div className="mt-12 pt-8 border-t">
//                     <h3 className="text-2xl font-bold text-foreground mb-6">Product Details</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                       <div className="space-y-6">
//                         <div>
//                           <h4 className="font-semibold text-foreground mb-2 text-lg">Brand</h4>
//                           <p className="text-muted-foreground text-lg">{product.brand}</p>
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-foreground mb-2 text-lg">Category</h4>
//                           <Badge variant="outline" className="text-lg px-4 py-2 capitalize">
//                             {product.productCategory.replace("-", " ")}
//                           </Badge>
//                         </div>
//                       </div>
//                       <div className="space-y-6">
//                         <div>
//                           <h4 className="font-semibold text-foreground mb-2 text-lg">Average Rating</h4>
//                           <div className="flex items-center gap-3">
//                             <div className="flex items-center gap-1">
//                               {[...Array(5)].map((_, i) => (
//                                 <Star
//                                   key={i}
//                                   className={`h-6 w-6 ${
//                                     i < Math.floor(product.rating)
//                                       ? "text-yellow-400 fill-current"
//                                       : "text-muted-foreground/30"
//                                   }`}
//                                 />
//                               ))}
//                             </div>
//                             <span className="text-2xl font-bold">{product.rating.toFixed(1)}</span>
//                             <span className="text-muted-foreground text-lg">
//                               ({product.reviewCount} reviews)
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }


// components/ProductDialog.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { 
//   Dialog, 
//   DialogContent,
//   DialogClose 
// } from "@/components/ui/dialog";
// import { Heart, Star, Truck, Shield, RefreshCw, ShoppingCart, Check, X, ChevronLeft, ChevronRight, MessageSquare, Send, User } from "lucide-react";
// import { toast } from "sonner";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Textarea } from "@/components/ui/textarea";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

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
//   specifications?: Record<string, string>;
// }

// interface Review {
//   id: number;
//   userName: string;
//   rating: number;
//   comment: string;
//   date: string;
//   productId: number;
// }

// interface ProductDialogProps {
//   productId: number | null;
//   open: boolean;
//   onClose: () => void;
// }

// const api = axios.create({
//   baseURL: "https://merfume-backend-production-5068.up.railway.app",
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// // Helper function to convert base64 to data URL
// const getImageUrl = (base64String?: string) => {
//   if (!base64String) return null;
  
//   if (base64String.startsWith('http')) {
//     return base64String;
//   }
  
//   if (base64String.startsWith('data:image')) {
//     return base64String;
//   }
  
//   if (base64String.length > 100) {
//     return `data:image/jpeg;base64,${base64String}`;
//   }
  
//   return null;
// };

// // Parse product specifications from description
// const parseProductSpecifications = (description: string): { cleanDescription: string; specifications: Record<string, string> } => {
//   const specKeys = [
//     'Type Perfume',
//     'Best Usage', 
//     'Target Gender',
//     'Item Form',
//     'Item Volume'
//   ];

//   const specifications: Record<string, string> = {};
  
//   // Split the description into lines
//   const lines = description.split('\n');
  
//   // Find where specifications section starts
//   let specStartIndex = -1;
//   for (let i = 0; i < lines.length; i++) {
//     const line = lines[i].trim();
//     if (specKeys.some(key => line.startsWith(key) && line.includes(':'))) {
//       specStartIndex = i;
//       break;
//     }
//   }
  
//   // If specifications found, extract them
//   if (specStartIndex !== -1) {
//     // Get clean description (everything before specifications)
//     const cleanDescription = lines.slice(0, specStartIndex).join('\n').trim();
    
//     // Process each specification line
//     let currentKey: string | null = null;
//     let currentValue: string[] = [];
    
//     for (let i = specStartIndex; i < lines.length; i++) {
//       const line = lines[i].trim();
//       if (!line) continue;
      
//       // Check if this line starts with any of our keys
//       const matchedKey = specKeys.find(key => 
//         line.toLowerCase().startsWith(key.toLowerCase()) && line.includes(':')
//       );
      
//       if (matchedKey) {
//         // Save previous key-value if exists
//         if (currentKey && currentValue.length > 0) {
//           specifications[currentKey] = currentValue.join(' ').trim();
//         }
        
//         // Start new key-value
//         currentKey = matchedKey;
//         // Extract value after the colon
//         const valuePart = line.substring(line.indexOf(':') + 1).trim();
//         currentValue = valuePart ? [valuePart] : [];
//       } else if (currentKey && !specKeys.some(key => line.toLowerCase().startsWith(key.toLowerCase()))) {
//         // Continue building current value
//         currentValue.push(line);
//       }
//     }
    
//     // Save the last key-value
//     if (currentKey && currentValue.length > 0) {
//       specifications[currentKey] = currentValue.join(' ').trim();
//     }
    
//     // Clean up values
//     Object.keys(specifications).forEach(key => {
//       specifications[key] = specifications[key]
//         .replace(/\s+/g, ' ') // Replace multiple spaces with single space
//         .replace(/\s*,\s*/g, ', ') // Format commas
//         .replace(/\.$/, '') // Remove trailing period
//         .trim();
//     });
    
//     return { cleanDescription, specifications };
//   }
  
//   // If no specifications found, return original description
//   return { cleanDescription: description, specifications: {} };
// };

// // Specifications Display Component
// const SpecificationsDisplay = ({ specifications }: { specifications: Record<string, string> }) => {
//   if (!specifications || Object.keys(specifications).length === 0) return null;
  
//   // Map of display names for better formatting
//   const displayNames: Record<string, string> = {
//     'Type Perfume': 'Type Perfume',
//     'Best Usage': 'Best Usage',
//     'Target Gender': 'Target Gender',
//     'Item Form': 'Item Form',
//     'Item Volume': 'Item Volume'
//   };
  
//   return (
//     <div className="space-y-4">
//       <h3 className="text-lg font-semibold text-foreground mb-3">Product Specifications</h3>
//       <div className="grid grid-cols-1 gap-4">
//         {Object.entries(specifications).map(([key, value]) => (
//           <div key={key} className="flex items-start gap-4 p-4 rounded-xl bg-card border">
//             <div className="min-w-[120px] font-medium text-foreground">{displayNames[key] || key}:</div>
//             <div className="text-muted-foreground flex-1">
//               {value.split(',').map((item, index) => (
//                 <span key={index} className="inline-block">
//                   {item.trim()}
//                   {index < value.split(',').length - 1 && <span className="mx-2">•</span>}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default function ProductDialog({ productId, open, onClose }: ProductDialogProps) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isAddingToCart, setIsAddingToCart] = useState(false);
//   const [addedToCart, setAddedToCart] = useState(false);
//   const [activeImage, setActiveImage] = useState<"front" | "back">("front");
//   const [quantity, setQuantity] = useState(1);
//   const [reviews, setReviews] = useState<Review[]>([]);
//   const [newReview, setNewReview] = useState("");
//   const [newRating, setNewRating] = useState(5);
//   const [userName, setUserName] = useState("");
//   const [isSubmittingReview, setIsSubmittingReview] = useState(false);
//   const [cleanDescription, setCleanDescription] = useState("");

//   // Load user name from localStorage or set default
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedName = localStorage.getItem("userName") || "";
//       setUserName(savedName);
//     }
//   }, []);

//   // Load product data and reviews when dialog opens
//   useEffect(() => {
//     const fetchProductAndReviews = async () => {
//       if (!productId) return;
      
//       setLoading(true);
//       setError(null);
//       try {
//         // Fetch product
//         const productResponse = await api.get(`/api/products/${productId}`);
//         const productData = productResponse.data;
        
//         // Parse specifications from description
//         const { cleanDescription, specifications } = parseProductSpecifications(productData.productDescription);
        
//         // Convert base64 images to data URLs if needed
//         const processedProduct = {
//           ...productData,
//           productImageUrl: getImageUrl(productData.productImageUrl) || productData.productImageUrl,
//           productBackImageUrl: productData.productBackImageUrl 
//             ? getImageUrl(productData.productBackImageUrl) || productData.productBackImageUrl
//             : undefined,
//           specifications,
//           productDescription: cleanDescription // Update description to remove specs
//         };
        
//         setProduct(processedProduct);
//         setCleanDescription(cleanDescription);
        
//         // Fetch reviews for this product
//         try {
//           const reviewsResponse = await api.get(`/api/reviews/product/${productId}`);
//           setReviews(reviewsResponse.data);
//         } catch (reviewError) {
//           console.error("Error fetching reviews:", reviewError);
//           setReviews([]);
//         }
        
//         // Load favorites from localStorage
//         const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
//         setIsFavorite(favorites.includes(productId));
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setError("Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (open && productId) {
//       fetchProductAndReviews();
//       // Reset states when dialog opens
//       setQuantity(1);
//       setAddedToCart(false);
//       setNewReview("");
//       setNewRating(5);
//     }
//   }, [open, productId]);

//   // Reset states when dialog closes
//   useEffect(() => {
//     if (!open) {
//       setProduct(null);
//       setLoading(true);
//       setError(null);
//       setIsAddingToCart(false);
//       setAddedToCart(false);
//       setQuantity(1);
//       setReviews([]);
//       setCleanDescription("");
//     }
//   }, [open]);

//   const handleToggleFavorite = () => {
//     if (typeof window === "undefined" || !productId) return;

//     const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
//     let newFavorites;

//     if (isFavorite) {
//       newFavorites = favorites.filter((favId: number) => favId !== productId);
//       toast.success("Removed from favorites");
//     } else {
//       newFavorites = [...favorites, productId];
//       toast.success("Added to favorites");
//     }

//     localStorage.setItem("merfume_favorites", JSON.stringify(newFavorites));
//     setIsFavorite(!isFavorite);
//   };

//   const getCartToken = () => {
//     if (typeof window === "undefined") return "";
    
//     let token = localStorage.getItem("cartToken");
//     if (!token) {
//       token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//       localStorage.setItem("cartToken", token);
//     }
//     return token;
//   };

//   const handleAddToCart = async () => {
//     if (!product || isAddingToCart || addedToCart) return;

//     setIsAddingToCart(true);
//     try {
//       const cartToken = getCartToken();

//       const response = await api.post("/api/cart/add", {
//         productId: product.productId,
//         quantity: quantity,
//       }, {
//         headers: {
//           "Cart-Token": cartToken,
//         },
//       });

//       // Update local cart storage
//       const addedItem = {
//         productId: product.productId,
//         productName: product.productName,
//         brand: product.brand,
//         productPrice: product.productPrice,
//         quantity: quantity,
//         productImageUrl: product.productImageUrl,
//       };

//       const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//       const index = existingCart.findIndex((item: any) => item.productId === product.productId);
      
//       if (index > -1) {
//         existingCart[index].quantity += quantity;
//       } else {
//         existingCart.push(addedItem);
//       }

//       localStorage.setItem("cart", JSON.stringify(existingCart));

//       setAddedToCart(true);
//       toast.success("Added to cart successfully!");

//       setTimeout(() => setAddedToCart(false), 2000);
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       if (axios.isAxiosError(error)) {
//         toast.error(error.response?.data?.message || "Failed to add to cart");
//       } else {
//         toast.error("Network error. Please try again.");
//       }
//     } finally {
//       setIsAddingToCart(false);
//     }
//   };

//   const incrementQuantity = () => {
//     setQuantity(prev => prev + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(prev => prev - 1);
//     }
//   };

//   const handleQuantityChange = (value: number) => {
//     if (value >= 1) {
//       setQuantity(value);
//     }
//   };

//   // Get current image URL based on active image state
//   const getCurrentImageUrl = () => {
//     if (!product) return "";
    
//     if (activeImage === "front") {
//       return product.productImageUrl;
//     }
    
//     if (activeImage === "back" && product.productBackImageUrl) {
//       return product.productBackImageUrl;
//     }
    
//     return product.productImageUrl;
//   };

//   // Handle review submission
//   const handleSubmitReview = async () => {
//     if (!newReview.trim() || !product || !userName.trim()) {
//       toast.error("Please enter your name and review");
//       return;
//     }
    
//     if (userName.length < 2 || userName.length > 100) {
//       toast.error("Name must be between 2 and 100 characters");
//       return;
//     }
    
//     if (newReview.length < 10) {
//       toast.error("Review must be at least 10 characters");
//       return;
//     }
    
//     setIsSubmittingReview(true);
    
//     try {
//       // Save user name to localStorage
//       localStorage.setItem("userName", userName);
      
//       // Prepare review data
//       const reviewData = {
//         userName: userName,
//         rating: newRating,
//         comment: newReview,
//         productId: product.productId
//       };
      
//       // Submit review to backend API
//       const response = await api.post("/api/reviews/add", reviewData);
      
//       // Add new review to list
//       const newReviewObj: Review = {
//         id: response.data.id,
//         userName: response.data.userName,
//         rating: response.data.rating,
//         comment: response.data.comment,
//         date: response.data.date,
//         productId: response.data.productId
//       };
      
//       setReviews(prev => [newReviewObj, ...prev]);
      
//       // Update product rating and review count
//       if (product) {
//         const newTotalRating = (product.rating * product.reviewCount) + newRating;
//         const newReviewCount = product.reviewCount + 1;
//         const newAverageRating = Math.round((newTotalRating / newReviewCount) * 10) / 10;
        
//         setProduct({
//           ...product,
//           rating: newAverageRating,
//           reviewCount: newReviewCount
//         });
//       }
      
//       // Reset form
//       setNewReview("");
//       setNewRating(5);
      
//       toast.success("Review submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting review:", error);
//       if (axios.isAxiosError(error)) {
//         const errorMsg = error.response?.data?.message || "Failed to submit review";
//         toast.error(errorMsg);
//       } else {
//         toast.error("Network error. Please try again.");
//       }
//     } finally {
//       setIsSubmittingReview(false);
//     }
//   };

//   const discount = product?.originalPrice 
//     ? Math.round(((product.originalPrice - product.productPrice) / product.originalPrice) * 100)
//     : 0;

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto p-0 border-0 bg-transparent">
//         <div className="bg-background rounded-3xl overflow-hidden border border-border shadow-2xl">
//           {/* Close Button */}
//           <div className="absolute right-6 top-6 z-50">
//             <DialogClose asChild>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent border border-border shadow-lg"
//               >
//                 <X className="h-5 w-5" />
//               </Button>
//             </DialogClose>
//           </div>

//           {loading ? (
//             // Loading Skeleton
//             <div className="animate-pulse p-8">
//               <div className="flex flex-col lg:flex-row gap-12">
//                 {/* Image skeleton */}
//                 <div className="lg:w-1/2">
//                   <div className="aspect-square bg-muted rounded-2xl"></div>
//                 </div>

//                 {/* Content skeleton */}
//                 <div className="lg:w-1/2 space-y-6">
//                   <div>
//                     <div className="h-6 w-32 bg-muted rounded-full mb-2"></div>
//                     <div className="h-10 w-3/4 bg-muted rounded mb-4"></div>
//                     <div className="h-6 w-48 bg-muted/50 rounded mb-2"></div>
//                     <div className="h-6 w-24 bg-muted/50 rounded"></div>
//                   </div>

//                   <div className="h-2 bg-muted/30 rounded"></div>

//                   <div>
//                     <div className="h-5 w-40 bg-muted/50 rounded mb-3"></div>
//                     <div className="flex flex-wrap gap-2">
//                       {[...Array(3)].map((_, i) => (
//                         <div key={i} className="h-8 w-20 bg-muted/30 rounded-full"></div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="h-2 bg-muted/30 rounded"></div>

//                   <div className="space-y-4">
//                     <div className="h-8 w-48 bg-muted/50 rounded"></div>
//                     <div className="flex items-center gap-4">
//                       <div className="h-12 w-12 bg-muted/30 rounded-lg"></div>
//                       <div className="h-12 w-48 bg-muted/50 rounded-lg"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : error || !product ? (
//             // Error State
//             <div className="p-12 text-center">
//               <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 p-8 rounded-3xl mb-6 max-w-md mx-auto">
//                 <Shield className="h-16 w-16 text-red-400 mx-auto" />
//               </div>
//               <h3 className="text-2xl font-bold text-foreground mb-3">
//                 Product Not Found
//               </h3>
//               <p className="text-muted-foreground mb-8 max-w-md mx-auto">
//                 {error || "The product you're looking for doesn't exist."}
//               </p>
//               <Button
//                 onClick={onClose}
//                 className="bg-primary text-primary-foreground px-8 py-3 h-12 text-lg"
//               >
//                 Close
//               </Button>
//             </div>
//           ) : (
//             // Product Content
//             <>
//               {/* Main Product Section */}
//               <div className="p-8">
//                 <div className="flex flex-col lg:flex-row gap-12">
//                   {/* Images Section */}
//                   <div className="lg:w-1/2 space-y-6">
//                     <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border">
//                       <motion.img
//                         key={activeImage}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                         src={getCurrentImageUrl()}
//                         alt={product.productName}
//                         className="w-full h-full object-contain p-8"
//                         onError={(e) => {
//                           e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3EProduct Image%3C/text%3E%3C/svg%3E";
//                         }}
//                       />
                      
//                       {discount > 0 && (
//                         <div className="absolute top-4 right-4">
//                           <Badge className="bg-red-500 text-white text-lg px-4 py-2 shadow-lg">
//                             -{discount}%
//                           </Badge>
//                         </div>
//                       )}
//                     </div>

//                     {/* Image Toggle */}
//                     {product.productBackImageUrl && (
//                       <div className="flex justify-center gap-4">
//                         <Button
//                           variant={activeImage === "front" ? "default" : "outline"}
//                           size="lg"
//                           onClick={() => setActiveImage("front")}
//                           className="flex-1"
//                         >
//                           Front View
//                         </Button>
//                         <Button
//                           variant={activeImage === "back" ? "default" : "outline"}
//                           size="lg"
//                           onClick={() => setActiveImage("back")}
//                           className="flex-1"
//                         >
//                           Back View
//                         </Button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Product Info Section */}
//                   <div className="lg:w-1/2">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="space-y-8"
//                     >
//                       {/* Brand and Category */}
//                       <div className="space-y-2">
//                         <div className="flex items-center gap-3">
//                           <Badge variant="outline" className="px-4 py-1.5 text-base">
//                             {product.brand}
//                           </Badge>
//                           <Badge className="bg-primary/10 text-primary px-4 py-1.5 text-base">
//                             {product.productCategory.replace("-", " ")}
//                           </Badge>
//                         </div>
                        
//                         <h1 className="text-4xl font-bold text-foreground leading-tight">
//                           {product.productName}
//                         </h1>
                        
//                         {/* Rating */}
//                         <div className="flex items-center gap-3">
//                           <div className="flex items-center gap-1">
//                             {[...Array(5)].map((_, i) => (
//                               <Star
//                                 key={i}
//                                 className={`h-5 w-5 ${
//                                   i < Math.floor(product.rating)
//                                     ? "text-yellow-400 fill-current"
//                                     : "text-muted-foreground/30"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                           <span className="text-xl font-semibold">{product.rating.toFixed(1)}</span>
//                           <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
//                         </div>
//                       </div>

//                       <Separator />

//                       {/* Description - Now clean without specifications */}
//                       <div>
//                         <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
//                         <p className="text-muted-foreground text-lg leading-relaxed">
//                           {cleanDescription || product.productDescription}
//                         </p>
//                       </div>

//                       {/* Specifications Section - Display as separate fields */}
//                       {product.specifications && Object.keys(product.specifications).length > 0 && (
//                         <>
//                           <Separator />
//                           <SpecificationsDisplay specifications={product.specifications} />
//                         </>
//                       )}

//                       <Separator />

//                       {/* Fragrance Notes */}
//                       <div>
//                         <h3 className="text-lg font-semibold text-foreground mb-4">Fragrance Notes</h3>
//                         <div className="flex flex-wrap gap-3">
//                           {product.notes.map((note, index) => (
//                             <Badge
//                               key={index}
//                               variant="secondary"
//                               className="px-5 py-2 text-base bg-primary/5 hover:bg-primary/10 transition-colors"
//                             >
//                               {note}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>

//                       <Separator />

//                       {/* Price Section */}
//                       <div className="space-y-4">
//                         <div className="flex items-baseline gap-4">
//                           <span className="text-5xl font-bold text-primary">
//                             ₹{product.productPrice.toLocaleString()}
//                           </span>
//                           {product.originalPrice && (
//                             <>
//                               <span className="text-2xl text-muted-foreground line-through">
//                                 ₹{product.originalPrice.toLocaleString()}
//                               </span>
//                               {discount > 0 && (
//                                 <Badge className="bg-green-500/20 text-green-600 text-base px-4 py-2">
//                                   Save {discount}%
//                                 </Badge>
//                               )}
//                             </>
//                           )}
//                         </div>
//                       </div>

//                       {/* Quantity and Actions */}
//                       <div className="space-y-6 pt-4">
//                         {/* Quantity Selector */}
//                         <div className="space-y-4">
//                           <h3 className="text-lg font-semibold text-foreground">Quantity</h3>
//                           <div className="flex items-center gap-4">
//                             <div className="flex items-center border-2 border-border rounded-xl overflow-hidden">
//                               <Button
//                                 variant="ghost"
//                                 size="lg"
//                                 onClick={decrementQuantity}
//                                 disabled={quantity <= 1}
//                                 className="h-14 w-14 rounded-none hover:bg-accent/50"
//                               >
//                                 <ChevronLeft className="h-5 w-5" />
//                               </Button>
//                               <div className="h-14 w-20 flex items-center justify-center text-xl font-bold border-x-2 border-border">
//                                 {quantity}
//                               </div>
//                               <Button
//                                 variant="ghost"
//                                 size="lg"
//                                 onClick={incrementQuantity}
//                                 className="h-14 w-14 rounded-none hover:bg-accent/50"
//                               >
//                                 <ChevronRight className="h-5 w-5" />
//                               </Button>
//                             </div>
//                             <Button
//                               variant="outline"
//                               size="lg"
//                               onClick={() => handleQuantityChange(quantity + 1)}
//                               className="h-14 px-6 text-base"
//                             >
//                               +1
//                             </Button>
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-4">
//                           <Button
//                             size="lg"
//                             className="flex-1 bg-primary text-primary-foreground text-lg font-semibold py-7 rounded-xl hover:bg-primary/90"
//                             onClick={handleAddToCart}
//                             disabled={isAddingToCart || addedToCart}
//                           >
//                             {isAddingToCart ? (
//                               <>
//                                 <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-3"></div>
//                                 Adding...
//                               </>
//                             ) : addedToCart ? (
//                               <>
//                                 <Check className="h-5 w-5 mr-3" />
//                                 Added to Cart
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingCart className="h-5 w-5 mr-3" />
//                                 Add to Cart • ₹{(product.productPrice * quantity).toLocaleString()}
//                               </>
//                             )}
//                           </Button>

//                           <Button
//                             size="lg"
//                             variant="outline"
//                             className="flex-1 border-2 border-border hover:border-primary hover:bg-primary/5 text-lg font-semibold py-7 rounded-xl"
//                             onClick={handleToggleFavorite}
//                           >
//                             <Heart
//                               className={`h-5 w-5 mr-3 ${
//                                 isFavorite ? "text-red-500 fill-current" : ""
//                               }`}
//                             />
//                             {isFavorite ? "Saved" : "Save"}
//                           </Button>
//                         </div>
//                       </div>

//                       {/* Features */}
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
//                         <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
//                           <Truck className="h-6 w-6 text-primary" />
//                           <div>
//                             <h4 className="font-medium text-foreground">Free Shipping</h4>
//                             <p className="text-sm text-muted-foreground">On orders above ₹500</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
//                           <Shield className="h-6 w-6 text-primary" />
//                           <div>
//                             <h4 className="font-medium text-foreground">100% Authentic</h4>
//                             <p className="text-sm text-muted-foreground">Guaranteed quality</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
//                           <RefreshCw className="h-6 w-6 text-primary" />
//                           <div>
//                             <h4 className="font-medium text-foreground">Easy Returns</h4>
//                             <p className="text-sm text-muted-foreground">30-day return policy</p>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>

//               {/* Reviews Section */}
//               <div className="border-t">
//                 <div className="p-8">
//                   <h2 className="text-3xl font-bold text-foreground mb-8">Customer Reviews</h2>
                  
//                   {/* Add Review Section */}
//                   <Card className="p-6 mb-8">
//                     <h3 className="text-xl font-semibold text-foreground mb-4">Add Your Review</h3>
//                     <div className="space-y-4">
//                       {/* User Name Input */}
//                       <div>
//                         <Label htmlFor="userName" className="font-medium text-foreground mb-2">
//                           Your Name
//                         </Label>
//                         <div className="flex items-center gap-3">
//                           <User className="h-4 w-4 text-muted-foreground" />
//                           <Input
//                             id="userName"
//                             placeholder="Enter your name"
//                             value={userName}
//                             onChange={(e) => setUserName(e.target.value)}
//                             className="flex-1"
//                             minLength={2}
//                             maxLength={100}
//                           />
//                         </div>
//                         <p className="text-sm text-muted-foreground mt-1">
//                           This name will be displayed with your review
//                         </p>
//                       </div>
                      
//                       {/* Rating Input */}
//                       <div>
//                         <h4 className="font-medium text-foreground mb-2">Your Rating</h4>
//                         <div className="flex items-center gap-1">
//                           {[1, 2, 3, 4, 5].map((star) => (
//                             <Button
//                               key={star}
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => setNewRating(star)}
//                               className="h-10 w-10 p-0 hover:scale-110 transition-transform"
//                             >
//                               <Star
//                                 className={`h-6 w-6 ${
//                                   star <= newRating
//                                     ? "text-yellow-400 fill-current"
//                                     : "text-muted-foreground/30"
//                                 }`}
//                               />
//                             </Button>
//                           ))}
//                           <span className="ml-2 font-medium text-foreground">
//                             {newRating} out of 5
//                           </span>
//                         </div>
//                       </div>
                      
//                       {/* Review Comment Input */}
//                       <div>
//                         <h4 className="font-medium text-foreground mb-2">Your Review</h4>
//                         <Textarea
//                           placeholder="Share your experience with this product... (Minimum 10 characters)"
//                           value={newReview}
//                           onChange={(e) => setNewReview(e.target.value)}
//                           className="min-h-[120px] text-base"
//                           minLength={10}
//                           maxLength={1000}
//                         />
//                         <div className="flex justify-between mt-1">
//                           <p className="text-sm text-muted-foreground">
//                             Minimum 10 characters required
//                           </p>
//                           <p className="text-sm text-muted-foreground">
//                             {newReview.length}/1000
//                           </p>
//                         </div>
//                       </div>
                      
//                       {/* Submit Button */}
//                       <Button
//                         size="lg"
//                         onClick={handleSubmitReview}
//                         disabled={!newReview.trim() || !userName.trim() || newReview.length < 10 || userName.length < 2 || isSubmittingReview}
//                         className="w-full sm:w-auto px-8"
//                       >
//                         {isSubmittingReview ? (
//                           <>
//                             <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
//                             Submitting...
//                           </>
//                         ) : (
//                           <>
//                             <Send className="h-5 w-5 mr-2" />
//                             Submit Review
//                           </>
//                         )}
//                       </Button>
//                     </div>
//                   </Card>

//                   {/* Reviews List */}
//                   <div className="space-y-6">
//                     <div className="flex items-center justify-between">
//                       <h3 className="text-2xl font-semibold text-foreground">
//                         All Reviews ({reviews.length})
//                       </h3>
//                       <div className="flex items-center gap-2 text-lg">
//                         <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                         <span className="font-bold">{product.rating.toFixed(1)}</span>
//                         <span className="text-muted-foreground">out of 5</span>
//                       </div>
//                     </div>

//                     {reviews.length === 0 ? (
//                       <Card className="p-8 text-center">
//                         <div className="flex flex-col items-center justify-center space-y-4">
//                           <MessageSquare className="h-12 w-12 text-muted-foreground/50" />
//                           <div>
//                             <h4 className="text-lg font-semibold text-foreground mb-2">
//                               No Reviews Yet
//                             </h4>
//                             <p className="text-muted-foreground">
//                               Be the first to share your experience with this product!
//                             </p>
//                           </div>
//                         </div>
//                       </Card>
//                     ) : (
//                       reviews.map((review) => (
//                         <Card key={review.id} className="p-6 hover:shadow-md transition-shadow">
//                           <div className="flex items-start justify-between mb-4">
//                             <div className="flex items-center gap-3">
//                               <Avatar className="h-12 w-12 border-2 border-primary/10">
//                                 <AvatarFallback className="bg-primary/10 text-primary font-semibold">
//                                   {review.userName.charAt(0).toUpperCase()}
//                                 </AvatarFallback>
//                               </Avatar>
//                               <div>
//                                 <h4 className="font-semibold text-foreground">{review.userName}</h4>
//                                 <div className="flex items-center gap-2">
//                                   <div className="flex">
//                                     {[...Array(5)].map((_, i) => (
//                                       <Star
//                                         key={i}
//                                         className={`h-4 w-4 ${
//                                           i < review.rating
//                                             ? "text-yellow-400 fill-current"
//                                             : "text-muted-foreground/30"
//                                         }`}
//                                       />
//                                     ))}
//                                   </div>
//                                   <span className="text-muted-foreground text-sm">{review.date}</span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <p className="text-foreground leading-relaxed">{review.comment}</p>
//                         </Card>
//                       ))
//                     )}
//                   </div>

//                   {/* Product Details */}
//                   <div className="mt-12 pt-8 border-t">
//                     <h3 className="text-2xl font-bold text-foreground mb-6">Product Details</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                       <div className="space-y-6">
//                         <div>
//                           <h4 className="font-semibold text-foreground mb-2 text-lg">Brand</h4>
//                           <p className="text-muted-foreground text-lg">{product.brand}</p>
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-foreground mb-2 text-lg">Category</h4>
//                           <Badge variant="outline" className="text-lg px-4 py-2 capitalize">
//                             {product.productCategory.replace("-", " ")}
//                           </Badge>
//                         </div>
//                       </div>
//                       <div className="space-y-6">
//                         <div>
//                           <h4 className="font-semibold text-foreground mb-2 text-lg">Average Rating</h4>
//                           <div className="flex items-center gap-3">
//                             <div className="flex items-center gap-1">
//                               {[...Array(5)].map((_, i) => (
//                                 <Star
//                                   key={i}
//                                   className={`h-6 w-6 ${
//                                     i < Math.floor(product.rating)
//                                       ? "text-yellow-400 fill-current"
//                                       : "text-muted-foreground/30"
//                                   }`}
//                                 />
//                               ))}
//                             </div>
//                             <span className="text-2xl font-bold">{product.rating.toFixed(1)}</span>
//                             <span className="text-muted-foreground text-lg">
//                               ({product.reviewCount} reviews)
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }



// components/ProductDialog.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent,
  DialogClose 
} from "@/components/ui/dialog";
import { 
  Heart, 
  Star, 
  Truck, 
  Shield, 
  RefreshCw, 
  ShoppingCart, 
  Check, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  Send, 
  User,
  AlertCircle,
  Package,
  Clock
} from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  specifications?: Record<string, string>;
  // Stock fields
  stockQuantity?: number;
  lowStockThreshold?: number;
  trackInventory?: boolean;
  allowBackorders?: boolean;
  inStock?: boolean;
  isLowStock?: boolean;
  isOutOfStock?: boolean;
}

interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  productId: number;
}

interface ProductDialogProps {
  productId: number | null;
  open: boolean;
  onClose: () => void;
}

const api = axios.create({
  baseURL: "https://merfume-backend-production-5068.up.railway.app",
  headers: {
    'Content-Type': 'application/json',
  }
});

// Helper function to convert base64 to data URL
const getImageUrl = (base64String?: string) => {
  if (!base64String) return null;
  
  if (base64String.startsWith('http')) {
    return base64String;
  }
  
  if (base64String.startsWith('data:image')) {
    return base64String;
  }
  
  if (base64String.length > 100) {
    return `data:image/jpeg;base64,${base64String}`;
  }
  
  return null;
};

// Parse product specifications from description
const parseProductSpecifications = (description: string): { cleanDescription: string; specifications: Record<string, string> } => {
  const specKeys = [
    'Type Perfume',
    'Best Usage', 
    'Target Gender',
    'Item Form',
    'Item Volume'
  ];

  const specifications: Record<string, string> = {};
  
  // Split the description into lines
  const lines = description.split('\n');
  
  // Find where specifications section starts
  let specStartIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (specKeys.some(key => line.startsWith(key) && line.includes(':'))) {
      specStartIndex = i;
      break;
    }
  }
  
  // If specifications found, extract them
  if (specStartIndex !== -1) {
    // Get clean description (everything before specifications)
    const cleanDescription = lines.slice(0, specStartIndex).join('\n').trim();
    
    // Process each specification line
    let currentKey: string | null = null;
    let currentValue: string[] = [];
    
    for (let i = specStartIndex; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Check if this line starts with any of our keys
      const matchedKey = specKeys.find(key => 
        line.toLowerCase().startsWith(key.toLowerCase()) && line.includes(':')
      );
      
      if (matchedKey) {
        // Save previous key-value if exists
        if (currentKey && currentValue.length > 0) {
          specifications[currentKey] = currentValue.join(' ').trim();
        }
        
        // Start new key-value
        currentKey = matchedKey;
        // Extract value after the colon
        const valuePart = line.substring(line.indexOf(':') + 1).trim();
        currentValue = valuePart ? [valuePart] : [];
      } else if (currentKey && !specKeys.some(key => line.toLowerCase().startsWith(key.toLowerCase()))) {
        // Continue building current value
        currentValue.push(line);
      }
    }
    
    // Save the last key-value
    if (currentKey && currentValue.length > 0) {
      specifications[currentKey] = currentValue.join(' ').trim();
    }
    
    // Clean up values
    Object.keys(specifications).forEach(key => {
      specifications[key] = specifications[key]
        .replace(/\s+/g, ' ')
        .replace(/\s*,\s*/g, ', ')
        .replace(/\.$/, '')
        .trim();
    });
    
    return { cleanDescription, specifications };
  }
  
  // If no specifications found, return original description
  return { cleanDescription: description, specifications: {} };
};

// Specifications Display Component
const SpecificationsDisplay = ({ specifications }: { specifications: Record<string, string> }) => {
  if (!specifications || Object.keys(specifications).length === 0) return null;
  
  const displayNames: Record<string, string> = {
    'Type Perfume': 'Type Perfume',
    'Best Usage': 'Best Usage',
    'Target Gender': 'Target Gender',
    'Item Form': 'Item Form',
    'Item Volume': 'Item Volume'
  };
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground mb-3">Product Specifications</h3>
      <div className="grid grid-cols-1 gap-4">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="flex items-start gap-4 p-4 rounded-xl bg-card border">
            <div className="min-w-[120px] font-medium text-foreground">{displayNames[key] || key}:</div>
            <div className="text-muted-foreground flex-1">
              {value.split(',').map((item, index) => (
                <span key={index} className="inline-block">
                  {item.trim()}
                  {index < value.split(',').length - 1 && <span className="mx-2">•</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ProductDialog({ productId, open, onClose }: ProductDialogProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeImage, setActiveImage] = useState<"front" | "back">("front");
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [userName, setUserName] = useState("");
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [cleanDescription, setCleanDescription] = useState("");

  // Load user name from localStorage or set default
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedName = localStorage.getItem("userName") || "";
      setUserName(savedName);
    }
  }, []);

  // Load product data and reviews when dialog opens
  useEffect(() => {
    const fetchProductAndReviews = async () => {
      if (!productId) return;
      
      setLoading(true);
      setError(null);
      try {
        // Fetch product
        const productResponse = await api.get(`/api/products/${productId}`);
        const productData = productResponse.data;
        
        // Parse specifications from description
        const { cleanDescription, specifications } = parseProductSpecifications(productData.productDescription);
        
        // Convert base64 images to data URLs if needed
        const processedProduct = {
          ...productData,
          productImageUrl: getImageUrl(productData.productImageUrl) || productData.productImageUrl,
          productBackImageUrl: productData.productBackImageUrl 
            ? getImageUrl(productData.productBackImageUrl) || productData.productBackImageUrl
            : undefined,
          specifications,
          productDescription: cleanDescription,
          // Ensure stock fields are present with defaults
          stockQuantity: productData.stockQuantity || 0,
          lowStockThreshold: productData.lowStockThreshold || 5,
          trackInventory: productData.trackInventory !== false,
          allowBackorders: productData.allowBackorders || false,
          inStock: productData.inStock !== undefined ? productData.inStock : (productData.stockQuantity > 0),
          isLowStock: productData.isLowStock || false,
          isOutOfStock: productData.isOutOfStock !== undefined ? productData.isOutOfStock : (productData.stockQuantity <= 0)
        };
        
        setProduct(processedProduct);
        setCleanDescription(cleanDescription);
        
        // Fetch reviews for this product
        try {
          const reviewsResponse = await api.get(`/api/reviews/product/${productId}`);
          setReviews(reviewsResponse.data);
        } catch (reviewError) {
          console.error("Error fetching reviews:", reviewError);
          setReviews([]);
        }
        
        // Load favorites from localStorage
        const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
        setIsFavorite(favorites.includes(productId));
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    if (open && productId) {
      fetchProductAndReviews();
      // Reset states when dialog opens
      setQuantity(1);
      setAddedToCart(false);
      setNewReview("");
      setNewRating(5);
    }
  }, [open, productId]);

  // Reset states when dialog closes
  useEffect(() => {
    if (!open) {
      setProduct(null);
      setLoading(true);
      setError(null);
      setIsAddingToCart(false);
      setAddedToCart(false);
      setQuantity(1);
      setReviews([]);
      setCleanDescription("");
    }
  }, [open]);

  const handleToggleFavorite = () => {
    if (typeof window === "undefined" || !productId) return;

    const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter((favId: number) => favId !== productId);
      toast.success("Removed from favorites");
    } else {
      newFavorites = [...favorites, productId];
      toast.success("Added to favorites");
    }

    localStorage.setItem("merfume_favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const getCartToken = () => {
    if (typeof window === "undefined") return "";
    
    let token = localStorage.getItem("cartToken");
    if (!token) {
      token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem("cartToken", token);
    }
    return token;
  };

  const handleAddToCart = async () => {
    if (!product || isAddingToCart || addedToCart || product.isOutOfStock) return;

    setIsAddingToCart(true);
    try {
      const cartToken = getCartToken();

      const response = await api.post("/api/cart/add", {
        productId: product.productId,
        quantity: quantity,
      }, {
        headers: {
          "Cart-Token": cartToken,
        },
      });

      // Update local cart storage
      const addedItem = {
        productId: product.productId,
        productName: product.productName,
        brand: product.brand,
        productPrice: product.productPrice,
        quantity: quantity,
        productImageUrl: product.productImageUrl,
      };

      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const index = existingCart.findIndex((item: any) => item.productId === product.productId);
      
      if (index > -1) {
        existingCart[index].quantity += quantity;
      } else {
        existingCart.push(addedItem);
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));

      setAddedToCart(true);
      toast.success(`Added ${quantity} item${quantity > 1 ? 's' : ''} to cart successfully!`);

      setTimeout(() => setAddedToCart(false), 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Failed to add to cart";
        toast.error(errorMessage);
        
        // If error is about stock, refresh product data
        if (errorMessage.toLowerCase().includes('stock') || errorMessage.toLowerCase().includes('available')) {
          try {
            const refreshResponse = await api.get(`/api/products/${productId}`);
            const refreshedProduct = refreshResponse.data;
            setProduct(prev => ({
              ...prev!,
              stockQuantity: refreshedProduct.stockQuantity,
              inStock: refreshedProduct.inStock,
              isOutOfStock: refreshedProduct.isOutOfStock,
              isLowStock: refreshedProduct.isLowStock
            }));
          } catch (refreshError) {
            console.error("Error refreshing product:", refreshError);
          }
        }
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setIsAddingToCart(false);
    }
  };

  const incrementQuantity = () => {
    if (product && !product.isOutOfStock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && product && !product.isOutOfStock) {
      setQuantity(value);
    }
  };

  // Get current image URL based on active image state
  const getCurrentImageUrl = () => {
    if (!product) return "";
    
    if (activeImage === "front") {
      return product.productImageUrl;
    }
    
    if (activeImage === "back" && product.productBackImageUrl) {
      return product.productBackImageUrl;
    }
    
    return product.productImageUrl;
  };

  // Handle review submission
  const handleSubmitReview = async () => {
    if (!newReview.trim() || !product || !userName.trim()) {
      toast.error("Please enter your name and review");
      return;
    }
    
    if (userName.length < 2 || userName.length > 100) {
      toast.error("Name must be between 2 and 100 characters");
      return;
    }
    
    if (newReview.length < 10) {
      toast.error("Review must be at least 10 characters");
      return;
    }
    
    setIsSubmittingReview(true);
    
    try {
      // Save user name to localStorage
      localStorage.setItem("userName", userName);
      
      // Prepare review data
      const reviewData = {
        userName: userName,
        rating: newRating,
        comment: newReview,
        productId: product.productId
      };
      
      // Submit review to backend API
      const response = await api.post("/api/reviews/add", reviewData);
      
      // Add new review to list
      const newReviewObj: Review = {
        id: response.data.id || Date.now(),
        userName: response.data.userName || userName,
        rating: response.data.rating || newRating,
        comment: response.data.comment || newReview,
        date: response.data.date || new Date().toISOString().split('T')[0],
        productId: response.data.productId || product.productId
      };
      
      setReviews(prev => [newReviewObj, ...prev]);
      
      // Update product rating and review count
      if (product) {
        const newTotalRating = (product.rating * product.reviewCount) + newRating;
        const newReviewCount = product.reviewCount + 1;
        const newAverageRating = Math.round((newTotalRating / newReviewCount) * 10) / 10;
        
        setProduct({
          ...product,
          rating: newAverageRating,
          reviewCount: newReviewCount
        });
      }
      
      // Reset form
      setNewReview("");
      setNewRating(5);
      
      toast.success("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response?.data?.message || "Failed to submit review";
        toast.error(errorMsg);
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setIsSubmittingReview(false);
    }
  };

  const discount = product?.originalPrice 
    ? Math.round(((product.originalPrice - product.productPrice) / product.originalPrice) * 100)
    : 0;

  const maxQuantity = product?.trackInventory && !product?.allowBackorders 
    ? Math.min(10, product?.stockQuantity || 10)
    : 10;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto p-0 border-0 bg-transparent">
        <div className="bg-background rounded-3xl overflow-hidden border border-border shadow-2xl">
          {/* Close Button */}
          <div className="absolute right-6 top-6 z-50">
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent border border-border shadow-lg"
              >
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>
          </div>

          {loading ? (
            // Loading Skeleton
            <div className="animate-pulse p-8">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Image skeleton */}
                <div className="lg:w-1/2">
                  <div className="aspect-square bg-muted rounded-2xl"></div>
                </div>

                {/* Content skeleton */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <div className="h-6 w-32 bg-muted rounded-full mb-2"></div>
                    <div className="h-10 w-3/4 bg-muted rounded mb-4"></div>
                    <div className="h-6 w-48 bg-muted/50 rounded mb-2"></div>
                    <div className="h-6 w-24 bg-muted/50 rounded"></div>
                  </div>

                  <div className="h-2 bg-muted/30 rounded"></div>

                  <div>
                    <div className="h-5 w-40 bg-muted/50 rounded mb-3"></div>
                    <div className="flex flex-wrap gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-8 w-20 bg-muted/30 rounded-full"></div>
                      ))}
                    </div>
                  </div>

                  <div className="h-2 bg-muted/30 rounded"></div>

                  <div className="space-y-4">
                    <div className="h-8 w-48 bg-muted/50 rounded"></div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-muted/30 rounded-lg"></div>
                      <div className="h-12 w-48 bg-muted/50 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : error || !product ? (
            // Error State
            <div className="p-12 text-center">
              <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 p-8 rounded-3xl mb-6 max-w-md mx-auto">
                <Shield className="h-16 w-16 text-red-400 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Product Not Found
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                {error || "The product you're looking for doesn't exist."}
              </p>
              <Button
                onClick={onClose}
                className="bg-primary text-primary-foreground px-8 py-3 h-12 text-lg"
              >
                Close
              </Button>
            </div>
          ) : (
            // Product Content
            <>
              {/* Main Product Section */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-12">
                  {/* Images Section */}
                  <div className="lg:w-1/2 space-y-6">
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border">
                      <motion.img
                        key={activeImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={getCurrentImageUrl()}
                        alt={product.productName}
                        className="w-full h-full object-contain p-8"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3EProduct Image%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      
                      {discount > 0 && !product.isOutOfStock && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-red-500 text-white text-lg px-4 py-2 shadow-lg">
                            -{discount}%
                          </Badge>
                        </div>
                      )}

                      {/* Stock Status Badge */}
                      <div className="absolute top-4 left-4">
                        {product.isOutOfStock ? (
                          <Badge className="bg-red-600 text-white text-lg px-4 py-2 shadow-lg flex items-center gap-2">
                            <AlertCircle className="h-5 w-5" />
                            Out of Stock
                          </Badge>
                        ) : product.isLowStock && product.stockQuantity ? (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge className="bg-yellow-500 text-white text-lg px-4 py-2 shadow-lg flex items-center gap-2 cursor-help">
                                  <Package className="h-5 w-5" />
                                  Only {product.stockQuantity} left
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Hurry! Only {product.stockQuantity} items in stock</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ) : product.trackInventory && product.stockQuantity ? (
                          <Badge className="bg-green-600 text-white text-lg px-4 py-2 shadow-lg flex items-center gap-2">
                            <Package className="h-5 w-5" />
                            In Stock ({product.stockQuantity})
                          </Badge>
                        ) : null}
                      </div>
                    </div>

                    {/* Image Toggle */}
                    {product.productBackImageUrl && (
                      <div className="flex justify-center gap-4">
                        <Button
                          variant={activeImage === "front" ? "default" : "outline"}
                          size="lg"
                          onClick={() => setActiveImage("front")}
                          className="flex-1"
                        >
                          Front View
                        </Button>
                        <Button
                          variant={activeImage === "back" ? "default" : "outline"}
                          size="lg"
                          onClick={() => setActiveImage("back")}
                          className="flex-1"
                        >
                          Back View
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Product Info Section */}
                  <div className="lg:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-8"
                    >
                      {/* Brand and Category */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="px-4 py-1.5 text-base">
                            {product.brand}
                          </Badge>
                          <Badge className="bg-primary/10 text-primary px-4 py-1.5 text-base">
                            {product.productCategory.replace("-", " ")}
                          </Badge>
                        </div>
                        
                        <h1 className="text-4xl font-bold text-foreground leading-tight">
                          {product.productName}
                        </h1>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < Math.floor(product.rating)
                                    ? product.isOutOfStock ? "text-gray-400" : "text-yellow-400 fill-current"
                                    : "text-muted-foreground/30"
                                }`}
                              />
                            ))}
                          </div>
                          <span className={`text-xl font-semibold ${product.isOutOfStock ? 'text-gray-400' : ''}`}>
                            {product.rating.toFixed(1)}
                          </span>
                          <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                        </div>
                      </div>

                      <Separator />

                      {/* Stock Status Detailed */}
                      {product.trackInventory && (
                        <div className="bg-card p-4 rounded-xl border">
                          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Package className="h-5 w-5" />
                            Stock Information
                          </h3>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Availability:</span>
                              {product.isOutOfStock ? (
                                <span className="text-red-600 font-semibold flex items-center gap-1">
                                  <AlertCircle className="h-4 w-4" />
                                  Out of Stock
                                </span>
                              ) : product.isLowStock ? (
                                <span className="text-yellow-600 font-semibold">
                                  Low Stock - Only {product.stockQuantity} left
                                </span>
                              ) : (
                                <span className="text-green-600 font-semibold">
                                  In Stock ({product.stockQuantity} available)
                                </span>
                              )}
                            </div>
                            {product.allowBackorders && product.isOutOfStock && (
                              <div className="text-sm text-muted-foreground flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                Backorders allowed - Will ship when available
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {cleanDescription || product.productDescription}
                        </p>
                      </div>

                      {/* Specifications Section */}
                      {product.specifications && Object.keys(product.specifications).length > 0 && (
                        <>
                          <Separator />
                          <SpecificationsDisplay specifications={product.specifications} />
                        </>
                      )}

                      <Separator />

                      {/* Fragrance Notes */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Fragrance Notes</h3>
                        <div className="flex flex-wrap gap-3">
                          {product.notes.map((note, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className={`px-5 py-2 text-base ${
                                product.isOutOfStock 
                                  ? 'bg-gray-200 dark:bg-gray-800 text-gray-500' 
                                  : 'bg-primary/5 hover:bg-primary/10'
                              } transition-colors`}
                            >
                              {note}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Price Section */}
                      <div className="space-y-4">
                        <div className="flex items-baseline gap-4">
                          <span className={`text-5xl font-bold ${product.isOutOfStock ? 'text-gray-400' : 'text-primary'}`}>
                            ₹{product.productPrice.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <>
                              <span className="text-2xl text-muted-foreground line-through">
                                ₹{product.originalPrice.toLocaleString()}
                              </span>
                              {discount > 0 && !product.isOutOfStock && (
                                <Badge className="bg-green-500/20 text-green-600 text-base px-4 py-2">
                                  Save {discount}%
                                </Badge>
                              )}
                            </>
                          )}
                        </div>
                      </div>

                      {/* Quantity and Actions */}
                      <div className="space-y-6 pt-4">
                        {/* Quantity Selector - Only show if in stock */}
                        {!product.isOutOfStock && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-foreground">Quantity</h3>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center border-2 border-border rounded-xl overflow-hidden">
                                <Button
                                  variant="ghost"
                                  size="lg"
                                  onClick={decrementQuantity}
                                  disabled={quantity <= 1}
                                  className="h-14 w-14 rounded-none hover:bg-accent/50"
                                >
                                  <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <div className="h-14 w-20 flex items-center justify-center text-xl font-bold border-x-2 border-border">
                                  {quantity}
                                </div>
                                <Button
                                  variant="ghost"
                                  size="lg"
                                  onClick={incrementQuantity}
                                  disabled={product.trackInventory && !product.allowBackorders && quantity >= (product.stockQuantity || 0)}
                                  className="h-14 w-14 rounded-none hover:bg-accent/50"
                                >
                                  <ChevronRight className="h-5 w-5" />
                                </Button>
                              </div>
                              {product.trackInventory && !product.allowBackorders && (
                                <span className="text-sm text-muted-foreground">
                                  Max: {maxQuantity}
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            size="lg"
                            className={`flex-1 ${
                              product.isOutOfStock
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-primary text-primary-foreground hover:bg-primary/90'
                            } text-lg font-semibold py-7 rounded-xl`}
                            onClick={handleAddToCart}
                            disabled={isAddingToCart || addedToCart || product.isOutOfStock}
                          >
                            {isAddingToCart ? (
                              <>
                                <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-3"></div>
                                Adding...
                              </>
                            ) : addedToCart ? (
                              <>
                                <Check className="h-5 w-5 mr-3" />
                                Added to Cart
                              </>
                            ) : product.isOutOfStock ? (
                              <>
                                <AlertCircle className="h-5 w-5 mr-3" />
                                Out of Stock
                              </>
                            ) : (
                              <>
                                <ShoppingCart className="h-5 w-5 mr-3" />
                                Add to Cart • ₹{(product.productPrice * quantity).toLocaleString()}
                              </>
                            )}
                          </Button>

                          <Button
                            size="lg"
                            variant="outline"
                            className="flex-1 border-2 border-border hover:border-primary hover:bg-primary/5 text-lg font-semibold py-7 rounded-xl"
                            onClick={handleToggleFavorite}
                          >
                            <Heart
                              className={`h-5 w-5 mr-3 ${
                                isFavorite ? "text-red-500 fill-current" : ""
                              }`}
                            />
                            {isFavorite ? "Saved" : "Save"}
                          </Button>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
                          <Truck className="h-6 w-6 text-primary" />
                          <div>
                            <h4 className="font-medium text-foreground">Free Shipping</h4>
                            <p className="text-sm text-muted-foreground">On orders above ₹500</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
                          <Shield className="h-6 w-6 text-primary" />
                          <div>
                            <h4 className="font-medium text-foreground">100% Authentic</h4>
                            <p className="text-sm text-muted-foreground">Guaranteed quality</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-card border">
                          <RefreshCw className="h-6 w-6 text-primary" />
                          <div>
                            <h4 className="font-medium text-foreground">Easy Returns</h4>
                            <p className="text-sm text-muted-foreground">30-day return policy</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="border-t">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Customer Reviews</h2>
                  
                  {/* Add Review Section */}
                  <Card className="p-6 mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Add Your Review</h3>
                    <div className="space-y-4">
                      {/* User Name Input */}
                      <div>
                        <Label htmlFor="userName" className="font-medium text-foreground mb-2">
                          Your Name
                        </Label>
                        <div className="flex items-center gap-3">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <Input
                            id="userName"
                            placeholder="Enter your name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="flex-1"
                            minLength={2}
                            maxLength={100}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          This name will be displayed with your review
                        </p>
                      </div>
                      
                      {/* Rating Input */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Your Rating</h4>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Button
                              key={star}
                              variant="ghost"
                              size="sm"
                              onClick={() => setNewRating(star)}
                              className="h-10 w-10 p-0 hover:scale-110 transition-transform"
                            >
                              <Star
                                className={`h-6 w-6 ${
                                  star <= newRating
                                    ? "text-yellow-400 fill-current"
                                    : "text-muted-foreground/30"
                                }`}
                              />
                            </Button>
                          ))}
                          <span className="ml-2 font-medium text-foreground">
                            {newRating} out of 5
                          </span>
                        </div>
                      </div>
                      
                      {/* Review Comment Input */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Your Review</h4>
                        <Textarea
                          placeholder="Share your experience with this product... (Minimum 10 characters)"
                          value={newReview}
                          onChange={(e) => setNewReview(e.target.value)}
                          className="min-h-[120px] text-base"
                          minLength={10}
                          maxLength={1000}
                        />
                        <div className="flex justify-between mt-1">
                          <p className="text-sm text-muted-foreground">
                            Minimum 10 characters required
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {newReview.length}/1000
                          </p>
                        </div>
                      </div>
                      
                      {/* Submit Button */}
                      <Button
                        size="lg"
                        onClick={handleSubmitReview}
                        disabled={!newReview.trim() || !userName.trim() || newReview.length < 10 || userName.length < 2 || isSubmittingReview}
                        className="w-full sm:w-auto px-8"
                      >
                        {isSubmittingReview ? (
                          <>
                            <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Submit Review
                          </>
                        )}
                      </Button>
                    </div>
                  </Card>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold text-foreground">
                        All Reviews ({reviews.length})
                      </h3>
                      <div className="flex items-center gap-2 text-lg">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="font-bold">{product.rating.toFixed(1)}</span>
                        <span className="text-muted-foreground">out of 5</span>
                      </div>
                    </div>

                    {reviews.length === 0 ? (
                      <Card className="p-8 text-center">
                        <div className="flex flex-col items-center justify-center space-y-4">
                          <MessageSquare className="h-12 w-12 text-muted-foreground/50" />
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">
                              No Reviews Yet
                            </h4>
                            <p className="text-muted-foreground">
                              Be the first to share your experience with this product!
                            </p>
                          </div>
                        </div>
                      </Card>
                    ) : (
                      reviews.map((review) => (
                        <Card key={review.id} className="p-6 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-12 w-12 border-2 border-primary/10">
                                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                                  {review.userName.charAt(0).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-semibold text-foreground">{review.userName}</h4>
                                <div className="flex items-center gap-2">
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < review.rating
                                            ? "text-yellow-400 fill-current"
                                            : "text-muted-foreground/30"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-muted-foreground text-sm">{review.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-foreground leading-relaxed">{review.comment}</p>
                        </Card>
                      ))
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="mt-12 pt-8 border-t">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Product Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-lg">Brand</h4>
                          <p className="text-muted-foreground text-lg">{product.brand}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-lg">Category</h4>
                          <Badge variant="outline" className="text-lg px-4 py-2 capitalize">
                            {product.productCategory.replace("-", " ")}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-lg">Average Rating</h4>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-6 w-6 ${
                                    i < Math.floor(product.rating)
                                      ? "text-yellow-400 fill-current"
                                      : "text-muted-foreground/30"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-2xl font-bold">{product.rating.toFixed(1)}</span>
                            <span className="text-muted-foreground text-lg">
                              ({product.reviewCount} reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
