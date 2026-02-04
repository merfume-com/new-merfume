// import Navigation from "@/components/Navigation";

// export default function Cart() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-foreground mb-8">
//             Shopping Cart
//           </h1>
//           <div className="max-w-2xl mx-auto">
//             <p className="text-lg text-muted-foreground mb-6">
//               Your cart is currently empty. Browse our exquisite collection of
//               perfumes to find your perfect scent.
//             </p>
//             <div className="h-64 bg-accent rounded-lg flex items-center justify-center">
//               <p className="text-muted-foreground">
//                 Cart functionality coming soon
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

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
//                 Continue shopping our luxury fragrance collection to find your
//                 perfect scent and create lasting memories.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Shop</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="/store"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     All Perfumes
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/store?category=fresh"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Fresh
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/store?category=luxury"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Luxury
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/store?category=floral"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Floral
//                   </a>
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
//               © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// import { useCart } from "@/components/CartContext";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navigation from "@/components/Navigation";

// export default function Cart() {
//   const {
//     cart,
//     removeFromCart,
//     updateQuantity,
//     totalItems,
//     totalPrice,
//     checkout
//   } = useCart();

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
//           Shopping Cart
//         </h1>
        
//         {cart.length === 0 ? (
//           <div className="text-center">
//             <p className="text-lg text-muted-foreground mb-6">
//               Your cart is currently empty. Browse our exquisite collection of
//               perfumes to find your perfect scent.
//             </p>
//             <div className="h-64 bg-accent rounded-lg flex items-center justify-center mb-6">
//               <Link to="/store">
//                 <Button className="bg-gold hover:bg-gold-dark text-luxury-black">
//                   Continue Shopping
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2">
//               <div className="space-y-4">
//                 {cart.map((item) => (
//                   <Card key={item.id} className="border-border/50">
//                     <CardContent className="p-4 flex items-center">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-20 h-20 object-cover rounded mr-4"
//                       />
//                       <div className="flex-1">
//                         <h3 className="font-semibold">{item.name}</h3>
//                         <p className="text-sm text-muted-foreground">{item.brand}</p>
//                         <p className="text-gold font-bold">${item.price}</p>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Button
//                           variant="outline"
//                           size="icon"
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         >
//                           <Minus className="h-4 w-4" />
//                         </Button>
//                         <span>{item.quantity}</span>
//                         <Button
//                           variant="outline"
//                           size="icon"
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         >
//                           <Plus className="h-4 w-4" />
//                         </Button>
//                       </div>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() => removeFromCart(item.id)}
//                       >
//                         <Trash2 className="h-4 w-4 text-red-500" />
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <Card className="border-border/50">
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//                   <div className="space-y-4">
//                     <div className="flex justify-between">
//                       <span>Subtotal ({totalItems} items)</span>
//                       <span>${totalPrice.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Shipping</span>
//                       <span>FREE</span>
//                     </div>
//                     <div className="border-t pt-4 flex justify-between font-bold">
//                       <span>Total</span>
//                       <span className="text-gold">${totalPrice.toFixed(2)}</span>
//                     </div>
//                     <Button
//                       className="w-full bg-gold hover:bg-gold-dark text-luxury-black mt-6"
//                       onClick={checkout}
//                     >
//                       Checkout
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Footer - Keeping your original footer structure */}
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
//                 Continue shopping our luxury fragrance collection to find your
//                 perfect scent and create lasting memories.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Shop</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="/store"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     All Perfumes
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/store?category=fresh"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Fresh
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/store?category=luxury"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Luxury
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/store?category=floral"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Floral
//                   </a>
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
//               © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


//old and correct but not Integrated
// import { useCart } from "@/components/CartContext";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navigation from "@/components/Navigation";
// import { useState } from "react";
// import CheckoutDialog from "@/components/CheckoutDialog";
// import { Input } from "@/components/ui/input";

// export default function Cart() {
//   const {
//     cart,
//     removeFromCart,
//     updateQuantity,
//     totalItems,
//     totalPrice,
//     clearCart,
//   } = useCart();

//   const [checkoutOpen, setCheckoutOpen] = useState(false);
//   const [couponCode, setCouponCode] = useState("");
//   const [discount, setDiscount] = useState(0);

//   const applyCoupon = () => {
//     // Simple coupon logic - in a real app, you'd validate with backend
//     if (couponCode.toUpperCase() === "SAVE10") {
//       setDiscount(totalPrice * 0.1); // 10% discount
//     } else {
//       setDiscount(0);
//       alert("Invalid coupon code");
//     }
//   };

//   const finalPrice = totalPrice - discount;

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
//           Your Shopping Cart
//         </h1>
        
//         {cart.length === 0 ? (
//           <div className="text-center">
//             <div className="h-64 bg-accent/20 rounded-lg flex flex-col items-center justify-center mb-6">
//               <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
//               <p className="text-lg text-muted-foreground mb-6">
//                 Your cart is currently empty
//               </p>
//               <Link to="/store">
//                 <Button className="bg-gold hover:bg-gold-dark text-luxury-black">
//                   Continue Shopping
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Cart Items */}
//             <div className="lg:col-span-2 space-y-4">
//               {cart.map((item) => (
//                 <Card key={item.id} className="border-border/50 hover:shadow-md transition-shadow">
//                   <CardContent className="p-4 flex items-center gap-4">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-20 h-20 object-cover rounded-lg"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-semibold">{item.name}</h3>
//                       <p className="text-sm text-muted-foreground">{item.brand}</p>
//                       <p className="text-gold font-bold">${item.price.toFixed(2)}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         disabled={item.quantity <= 1}
//                         className="h-8 w-8"
//                       >
//                         <Minus className="h-3 w-3" />
//                       </Button>
//                       <span className="w-8 text-center">{item.quantity}</span>
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="h-8 w-8"
//                       >
//                         <Plus className="h-3 w-3" />
//                       </Button>
//                     </div>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => removeFromCart(item.id)}
//                       className="h-8 w-8 text-red-500 hover:bg-red-50"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}

//               {/* Clear Cart Button */}
//               <div className="flex justify-end mt-4">
//                 <Button
//                   variant="outline"
//                   onClick={clearCart}
//                   className="text-red-500 border-red-300 hover:bg-red-50"
//                 >
//                   <Trash2 className="h-4 w-4 mr-2" />
//                   Clear Cart
//                 </Button>
//               </div>
//             </div>

//             {/* Order Summary */}
//             <div className="space-y-4">
//               <Card className="border-border/50">
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//                   <div className="space-y-4">
//                     <div className="flex justify-between">
//                       <span>Subtotal ({totalItems} items)</span>
//                       <span>${totalPrice.toFixed(2)}</span>
//                     </div>

//                     {/* Coupon Code Field */}
//                     <div className="flex gap-2 pt-2">
//                       <Input
//                         placeholder="Coupon code"
//                         value={couponCode}
//                         onChange={(e) => setCouponCode(e.target.value)}
//                         className="flex-1"
//                       />
//                       <Button
//                         variant="outline"
//                         onClick={applyCoupon}
//                         disabled={!couponCode.trim()}
//                       >
//                         Apply
//                       </Button>
//                     </div>

//                     {discount > 0 && (
//                       <div className="flex justify-between text-green-600">
//                         <span>Discount</span>
//                         <span>-${discount.toFixed(2)}</span>
//                       </div>
//                     )}

//                     <div className="flex justify-between">
//                       <span>Shipping</span>
//                       <span>FREE</span>
//                     </div>

//                     <div className="border-t pt-4 flex justify-between font-bold">
//                       <span>Total</span>
//                       <span className="text-gold">${finalPrice.toFixed(2)}</span>
//                     </div>

//                     <Button
//                       className="w-full bg-gold hover:bg-gold-dark text-luxury-black mt-6 h-12 text-lg"
//                       onClick={() => setCheckoutOpen(true)}
//                     >
//                       Proceed to Checkout
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Continue Shopping */}
//               <Card className="border-border/50">
//                 <CardFooter className="p-6">
//                   <Link to="/store" className="w-full">
//                     <Button variant="outline" className="w-full">
//                       <ShoppingBag className="h-4 w-4 mr-2" />
//                       Continue Shopping
//                     </Button>
//                   </Link>
//                 </CardFooter>
//               </Card>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Checkout Dialog */}
//       <CheckoutDialog 
//         open={checkoutOpen} 
//         onClose={() => setCheckoutOpen(false)} 
//       />

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
//                 Continue shopping our luxury fragrance collection to find your
//                 perfect scent and create lasting memories.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Shop</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     to="/store"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     All Perfumes
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/store?category=fresh"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Fresh
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/store?category=luxury"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Luxury
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Support</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/shipping"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Shipping Info
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/returns"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Returns
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-cream/20 mt-12 pt-8 text-center">
//             <p className="text-cream/60">
//               © {new Date().getFullYear()} Merfume. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

//new code

// import { useCart } from "@/components/CartContext";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navigation from "@/components/Navigation";
// import { useState, useEffect } from "react";
// import CheckoutDialog from "@/components/CheckoutDialog";
// import { Input } from "@/components/ui/input";
// import { toast } from "sonner";

// export default function Cart() {
//   const {
//     cart,
//     totalItems,
//     totalPrice,
//     fetchCartItems,
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//   } = useCart();
  
//   const [checkoutOpen, setCheckoutOpen] = useState(false);
//   const [couponCode, setCouponCode] = useState("");
//   const [discount, setDiscount] = useState(0);

//   useEffect(() => {
//     fetchCartItems();
//   }, [fetchCartItems]);

//   const handleQuantityChange = async (itemId: number, newQuantity: number) => {
//     if (newQuantity < 1) {
//       await removeFromCart(itemId);
//     } else {
//       await updateQuantity(itemId, newQuantity);
//     }
//   };

//   const applyCoupon = () => {
//     if (couponCode.toUpperCase() === "SAVE10") {
//       setDiscount(totalPrice * 0.1);
//       toast.success("Coupon applied successfully!");
//     } else {
//       setDiscount(0);
//       toast.error("Invalid coupon code");
//     }
//   };

//   const finalPrice = totalPrice - discount;

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
//           Your Shopping Cart
//         </h1>
        
//         {cart.length === 0 ? (
//           <div className="text-center">
//             <div className="h-64 bg-accent/20 rounded-lg flex flex-col items-center justify-center mb-6">
//               <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
//               <p className="text-lg text-muted-foreground mb-6">
//                 Your cart is currently empty
//               </p>
//               <Link to="/store">
//                 <Button className="bg-gold hover:bg-gold-dark text-luxury-black">
//                   Continue Shopping
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Cart Items */}
//             <div className="lg:col-span-2 space-y-4">
//               {cart.map((item) => (
//   <Card key={item.cartId}>
//     <CardContent className="p-4 flex items-center gap-4">
//       {item.productImageUrl ? (
//         <img
//           src={item.productImageUrl}
//           alt={item.productName}
//           className="w-20 h-20 object-cover rounded-lg"
//         />
//       ) : (
//         <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
//           <ShoppingBag className="h-8 w-8 text-gray-400" />
//         </div>
//       )}
//                     <div className="flex-1">
//                       <h3 className="font-semibold">{item.productName}</h3>
//                       <p className="text-sm text-muted-foreground">{item.brand}</p>
//                       <p className="text-gold font-bold">₹{item.productPrice.toFixed(2)}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
//                         disabled={item.quantity <= 1}
//                         className="h-8 w-8"
//                       >
//                         <Minus className="h-3 w-3" />
//                       </Button>
//                       <span className="w-8 text-center">{item.quantity}</span>
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
//                         className="h-8 w-8"
//                       >
//                         <Plus className="h-3 w-3" />
//                       </Button>
//                     </div>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => removeFromCart(item.cartId)}
//                       className="h-8 w-8 text-red-500 hover:bg-red-50"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}

//               {/* Clear Cart Button */}
//               <div className="flex justify-end mt-4">
//                 <Button
//                   variant="outline"
//                   onClick={clearCart}
//                   className="text-red-500 border-red-300 hover:bg-red-50"
//                 >
//                   <Trash2 className="h-4 w-4 mr-2" />
//                   Clear Cart
//                 </Button>
//               </div>
//             </div>

//             {/* Order Summary */}
//             <div className="space-y-4">
//               <Card className="border-border/50">
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//                   <div className="space-y-4">
//                     <div className="flex justify-between">
//                       <span>Subtotal ({totalItems} items)</span>
//                       <span>₹{totalPrice.toFixed(2)}</span>
//                     </div>

//                     {/* Coupon Code Field */}
//                     <div className="flex gap-2 pt-2">
//                       <Input
//                         placeholder="Coupon code"
//                         value={couponCode}
//                         onChange={(e) => setCouponCode(e.target.value)}
//                         className="flex-1"
//                       />
//                       <Button
//                         variant="outline"
//                         onClick={applyCoupon}
//                         disabled={!couponCode.trim()}
//                       >
//                         Apply
//                       </Button>
//                     </div>

//                     {discount > 0 && (
//                       <div className="flex justify-between text-green-600">
//                         <span>Discount</span>
//                         <span>-₹{discount.toFixed(2)}</span>
//                       </div>
//                     )}

//                     <div className="flex justify-between">
//                       <span>Shipping</span>
//                       <span>FREE</span>
//                     </div>

//                     <div className="border-t pt-4 flex justify-between font-bold">
//                       <span>Total</span>
//                       <span className="text-gold">₹{finalPrice.toFixed(2)}</span>
//                     </div>

//                     <Button
//                       className="w-full bg-gold hover:bg-gold-dark text-luxury-black mt-6 h-12 text-lg"
//                       onClick={() => setCheckoutOpen(true)}
//                     >
//                       Proceed to Checkout
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Continue Shopping */}
//               <Card className="border-border/50">
//                 <CardFooter className="p-6">
//                   <Link to="/store" className="w-full">
//                     <Button variant="outline" className="w-full">
//                       <ShoppingBag className="h-4 w-4 mr-2" />
//                       Continue Shopping
//                     </Button>
//                   </Link>
//                 </CardFooter>
//               </Card>
//             </div>
//           </div>
//         )}
//       </div>

//       <CheckoutDialog 
//         open={checkoutOpen} 
//         onClose={() => setCheckoutOpen(false)}
//         cartItems={cart}
//         totalPrice={finalPrice}
//       />

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
//                 Continue shopping our luxury fragrance collection to find your
//                 perfect scent and create lasting memories.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Shop</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     to="/store"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     All Perfumes
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/store?category=fresh"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Fresh
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/store?category=luxury"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Luxury
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Support</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/shipping"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Shipping Info
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/returns"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Returns
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-cream/20 mt-12 pt-8 text-center">
//             <p className="text-cream/60">
//               © {new Date().getFullYear()} Merfume. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Trash2, Plus, Minus, ShoppingBag, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useState, useEffect, useCallback } from "react";
import CheckoutDialog from "@/components/CheckoutDialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

// Create axios instance for cart operations
const cartApi = axios.create({
  baseURL: "https://e46b4bafada4.ngrok-free.app",
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
    "Accept": "application/json",
  },
});

// Add retry logic for cart API calls
cartApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (!error.response && !originalRequest?._retry) {
      originalRequest._retry = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
      return cartApi(originalRequest);
    }
    
    return Promise.reject(error);
  }
);

export default function Cart() {
  const {
    cart,
    totalItems,
    totalPrice,
    fetchCartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    isLoading,
  } = useCart();
  
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [applyingCoupon, setApplyingCoupon] = useState(false);
  const [availableCoupons] = useState([
    { code: "SAVE10", discount: 10, description: "Get 10% off on your order" },
    { code: "WELCOME20", discount: 20, description: "Welcome discount 20% off" },
    { code: "FREESHIP", discount: 0, description: "Free shipping on orders above ₹500" },
  ]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const handleQuantityChange = async (itemId: number, newQuantity: number) => {
    try {
      if (newQuantity < 1) {
        await removeFromCart(itemId);
      } else {
        await updateQuantity(itemId, newQuantity);
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
      toast.error("Failed to update quantity. Please try again.");
    }
  };

  const applyCoupon = useCallback(async () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }

    setApplyingCoupon(true);
    
    try {
      // Simulate API call for coupon validation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const coupon = availableCoupons.find(c => c.code.toUpperCase() === couponCode.toUpperCase());
      
      if (coupon) {
        if (coupon.discount > 0) {
          const discountAmount = (totalPrice * coupon.discount) / 100;
          setDiscount(discountAmount);
          toast.success(`Coupon applied! You saved ₹${discountAmount.toFixed(2)}`);
        } else {
          toast.info(coupon.description);
        }
      } else {
        setDiscount(0);
        toast.error("Invalid coupon code");
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      toast.error("Failed to apply coupon. Please try again.");
    } finally {
      setApplyingCoupon(false);
    }
  }, [couponCode, totalPrice, availableCoupons]);

  const removeCoupon = () => {
    setDiscount(0);
    setCouponCode("");
    toast.info("Coupon removed");
  };

  const handleClearCart = async () => {
    if (cart.length === 0) return;
    
    if (!confirm("Are you sure you want to clear your cart?")) return;
    
    try {
      await clearCart();
      toast.success("Cart cleared successfully");
    } catch (error) {
      console.error("Error clearing cart:", error);
      toast.error("Failed to clear cart. Please try again.");
    }
  };

  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    setCheckoutOpen(true);
  };

  const finalPrice = Math.max(0, totalPrice - discount);
  const shipping = finalPrice > 500 ? 0 : 99;
  const grandTotal = finalPrice + shipping;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  if (isLoading && cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-6">
            <Skeleton className="h-12 w-64 mx-auto" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <Skeleton className="w-20 h-20 rounded-lg" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                        <Skeleton className="h-4 w-1/4" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-8 rounded" />
                        <Skeleton className="h-6 w-8" />
                        <Skeleton className="h-8 w-8 rounded" />
                      </div>
                      <Skeleton className="h-8 w-8 rounded" />
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <Skeleton className="h-6 w-32" />
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    ))}
                    <Skeleton className="h-12 w-full mt-4" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
          Your Shopping Cart
          {totalItems > 0 && (
            <span className="text-muted-foreground font-normal ml-2">
              ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </span>
          )}
        </h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-12 md:py-16">
            <div className="h-48 md:h-64 bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl flex flex-col items-center justify-center mb-8 p-8">
              <div className="relative mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xs font-bold text-white">0</span>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Looks like you haven't added any products to your cart yet.
                Start shopping to discover amazing fragrances!
              </p>
              <Link to="/store">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group">
                  <ShoppingBag className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  Start Shopping
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            {/* Featured Products Suggestion */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-6">You might also like</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <Skeleton className="w-full h-40 rounded-lg mb-3" />
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-3 w-1/2 mb-3" />
                      <Skeleton className="h-6 w-1/3" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Cart Items</h2>
                <span className="text-sm text-muted-foreground">
                  {totalItems} {totalItems === 1 ? 'product' : 'products'}
                </span>
              </div>
              
              <div className="space-y-4">
                {cart.map((item) => (
                  <Card key={item.cartId} className="hover:shadow-md transition-shadow overflow-hidden">
                    <CardContent className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="flex-shrink-0">
                        {item.productImageUrl ? (
                          <img
                            src={item.productImageUrl}
                            alt={item.productName}
                            className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg shadow-sm"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                            <ShoppingBag className="h-10 w-10 text-gray-400" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg truncate">{item.productName}</h3>
                            <p className="text-sm text-muted-foreground">{item.brand}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-primary">
                              {formatCurrency(item.productPrice)}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {item.quantity} × {formatCurrency(item.productPrice)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="h-9 w-9 rounded-full"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-12 text-center font-medium text-lg">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
                              className="h-9 w-9 rounded-full"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                              <p className="font-semibold text-lg">
                                {formatCurrency(item.productPrice * item.quantity)}
                              </p>
                              <p className="text-sm text-muted-foreground">Total</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(item.cartId)}
                              className="h-9 w-9 text-red-500 hover:text-red-600 hover:bg-red-50"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Cart Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mt-6 pt-6 border-t">
                <Link to="/store" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
                
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    onClick={handleClearCart}
                    className="text-red-500 border-red-300 hover:bg-red-50 hover:text-red-600 flex-1 sm:flex-none"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear Cart
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={fetchCartItems}
                    className="flex-1 sm:flex-none"
                  >
                    Refresh Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="space-y-6">
              <Card className="border-primary/10 shadow-lg sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Order Summary
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Subtotal */}
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">{formatCurrency(totalPrice)}</span>
                    </div>
                    
                    {/* Coupon Section */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Tag className="h-4 w-4" />
                          Coupon Code
                        </span>
                        {discount > 0 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={removeCoupon}
                            className="text-red-500 hover:text-red-600 h-auto p-0"
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-1"
                          disabled={applyingCoupon || discount > 0}
                          onKeyDown={(e) => e.key === 'Enter' && applyCoupon()}
                        />
                        <Button
                          variant={discount > 0 ? "default" : "outline"}
                          onClick={discount > 0 ? removeCoupon : applyCoupon}
                          disabled={applyingCoupon || (!couponCode.trim() && discount === 0)}
                          className="whitespace-nowrap"
                        >
                          {applyingCoupon ? (
                            <span className="flex items-center gap-2">
                              <div className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Applying...
                            </span>
                          ) : discount > 0 ? (
                            "Remove"
                          ) : (
                            "Apply"
                          )}
                        </Button>
                      </div>
                      
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600 bg-green-50 p-2 rounded">
                          <span className="font-medium">Discount Applied</span>
                          <span className="font-bold">-{formatCurrency(discount)}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Discount Display */}
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span className="font-bold">-{formatCurrency(discount)}</span>
                      </div>
                    )}
                    
                    {/* Shipping */}
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className={shipping === 0 ? "text-green-600 font-semibold" : ""}>
                        {shipping === 0 ? "FREE" : formatCurrency(shipping)}
                      </span>
                    </div>
                    
                    {/* Shipping Info */}
                    {totalPrice < 500 && shipping > 0 && (
                      <div className="text-sm text-muted-foreground bg-accent/10 p-3 rounded">
                        <p>Add {formatCurrency(500 - totalPrice)} more to get FREE shipping!</p>
                      </div>
                    )}
                    
                    {/* Grand Total */}
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total Amount</span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {formatCurrency(grandTotal)}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            including all taxes
                          </p>
                        </div>
                      </div>
                      
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-semibold mt-4"
                        onClick={handleProceedToCheckout}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                          </span>
                        ) : (
                          <>
                            Proceed to Checkout
                            <ArrowRight className="h-5 w-5 ml-2" />
                          </>
                        )}
                      </Button>
                      
                      {/* Secure Payment Info */}
                      <div className="text-center pt-4">
                        <p className="text-xs text-muted-foreground">
                          ✓ Secure payment ✓ 100% Safe checkout
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Available Coupons */}
              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    Available Coupons
                  </h4>
                  <div className="space-y-3">
                    {availableCoupons.map((coupon) => (
                      <div 
                        key={coupon.code}
                        className={`p-3 rounded border cursor-pointer transition-all hover:shadow-sm ${
                          couponCode.toUpperCase() === coupon.code ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                        onClick={() => {
                          if (couponCode.toUpperCase() !== coupon.code) {
                            setCouponCode(coupon.code);
                          }
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-medium">{coupon.code}</span>
                            {coupon.discount > 0 && (
                              <span className="ml-2 bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">
                                {coupon.discount}% OFF
                              </span>
                            )}
                          </div>
                          {couponCode.toUpperCase() === coupon.code && (
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {coupon.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <CheckoutDialog 
        open={checkoutOpen} 
        onClose={() => setCheckoutOpen(false)}
        cartItems={cart}
        totalPrice={grandTotal}
      />

      {/* Footer */}
      <footer className="bg-gradient-to-b from-background to-muted/20 border-t mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-foreground">Merfume</span>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Continue shopping our luxury fragrance collection to find your
                perfect scent and create lasting memories.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/store"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    All Perfumes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store?category=fresh"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Fresh
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store?category=luxury"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Luxury
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    to="/returns"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Merfume. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
