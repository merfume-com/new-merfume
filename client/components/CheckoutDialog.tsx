// import { useCart } from "@/components/CartContext";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// interface UserDetails {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
//   pincode: string;
//   city: string;
//   state: string;
//   country: string;
// }

// export default function CheckoutDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
//   const { checkout, totalPrice } = useCart();
//   const [isProcessing, setIsProcessing] = useState(false);

//   const [form, setForm] = useState<UserDetails>({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     pincode: "",
//     city: "",
//     state: "",
//     country: "India"
//   });

//   const [errors, setErrors] = useState<Partial<UserDetails>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//     // Clear error when user types
//     if (errors[name as keyof UserDetails]) {
//       setErrors(prev => ({ ...prev, [name]: undefined }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: Partial<UserDetails> = {};

//     if (!form.name.trim()) newErrors.name = "Name is required";
//     if (!form.phone.trim()) {
//       newErrors.phone = "Phone is required";
//     } else if (!/^\d{10}$/.test(form.phone)) {
//       newErrors.phone = "Invalid 10-digit phone number";
//     }
//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!form.address.trim()) newErrors.address = "Address is required";
//     if (!form.pincode.trim()) {
//       newErrors.pincode = "Pincode is required";
//     } else if (!/^\d{6}$/.test(form.pincode)) {
//       newErrors.pincode = "Invalid 6-digit pincode";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;

//     setIsProcessing(true);
//     try {
//       await checkout(form);
//       onClose();
//     } catch (error) {
//       console.error("Checkout failed:", error);
//       alert("Payment failed. Please try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle className="text-center">Complete Your Order</DialogTitle>
//         </DialogHeader>

//         <div className="space-y-4">
//           <div>
//             <Input
//               name="name"
//               placeholder="Full Name*"
//               value={form.name}
//               onChange={handleChange}
//               className={errors.name ? "border-red-500" : ""}
//             />
//             {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <Input
//               name="email"
//               placeholder="Email*"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               className={errors.email ? "border-red-500" : ""}
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <Input
//               name="phone"
//               placeholder="Phone Number*"
//               type="tel"
//               value={form.phone}
//               onChange={handleChange}
//               className={errors.phone ? "border-red-500" : ""}
//             />
//             {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//           </div>

//           <div>
//             <Input
//               name="address"
//               placeholder="Full Address*"
//               value={form.address}
//               onChange={handleChange}
//               className={errors.address ? "border-red-500" : ""}
//             />
//             {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <Input
//                 name="pincode"
//                 placeholder="Pincode*"
//                 value={form.pincode}
//                 onChange={handleChange}
//                 className={errors.pincode ? "border-red-500" : ""}
//               />
//               {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
//             </div>
//             <div>
//               <Input
//                 name="city"
//                 placeholder="City"
//                 value={form.city}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <Input
//               name="state"
//               placeholder="State"
//               value={form.state}
//               onChange={handleChange}
//             />
//             <Input
//               name="country"
//               placeholder="Country"
//               value={form.country}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="pt-4">
//             <div className="flex justify-between items-center mb-2">
//               <span className="font-medium">Order Total:</span>
//               <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
//             </div>
//             <Button 
//               className="w-full mt-2" 
//               onClick={handleSubmit}
//               disabled={isProcessing}
//             >
//               {isProcessing ? "Processing..." : "Proceed to Payment"}
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }


// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { useCart } from "@/components/CartContext";

// interface UserDetails {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
//   pincode: string;
//   city: string;
//   state: string;
//   country: string;
// }

// interface CartItem {
//   cartId: number;
//   productId: number;
//   productName: string;
//   brand: string;
//   productPrice: number;
//   quantity: number;
//   productImageUrl: string;
// }

// interface CheckoutDialogProps {
//   open: boolean;
//   onClose: () => void;
//   cartItems: CartItem[];
//   totalPrice: number;
// }

// export default function CheckoutDialog({ 
//   open, 
//   onClose,
//   cartItems,
//   totalPrice
// }: CheckoutDialogProps) {
//   const [isProcessing, setIsProcessing] = useState(false);
//   const { checkout } = useCart();

//   const [form, setForm] = useState<UserDetails>({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     pincode: "",
//     city: "",
//     state: "",
//     country: "India"
//   });

//   const [errors, setErrors] = useState<Partial<UserDetails>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//     if (errors[name as keyof UserDetails]) {
//       setErrors(prev => ({ ...prev, [name]: undefined }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: Partial<UserDetails> = {};
//     if (!form.name.trim()) newErrors.name = "Name is required";
//     if (!form.phone.trim()) {
//       newErrors.phone = "Phone is required";
//     } else if (!/^\d{10}$/.test(form.phone)) {
//       newErrors.phone = "Invalid 10-digit phone number";
//     }
//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!form.address.trim()) newErrors.address = "Address is required";
//     if (!form.pincode.trim()) {
//       newErrors.pincode = "Pincode is required";
//     } else if (!/^\d{6}$/.test(form.pincode)) {
//       newErrors.pincode = "Invalid 6-digit pincode";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;

//     setIsProcessing(true);
//     try {
//       await checkout(form);
//       onClose();
//     } catch (error) {
//       console.error("Checkout failed:", error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle className="text-center">Complete Your Order</DialogTitle>
//         </DialogHeader>

//         <div className="space-y-4">
//           <div>
//             <Input
//               name="name"
//               placeholder="Full Name*"
//               value={form.name}
//               onChange={handleChange}
//               className={errors.name ? "border-red-500" : ""}
//             />
//             {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <Input
//               name="email"
//               placeholder="Email*"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               className={errors.email ? "border-red-500" : ""}
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <Input
//               name="phone"
//               placeholder="Phone Number*"
//               type="tel"
//               value={form.phone}
//               onChange={handleChange}
//               className={errors.phone ? "border-red-500" : ""}
//             />
//             {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//           </div>

//           <div>
//             <Input
//               name="address"
//               placeholder="Full Address*"
//               value={form.address}
//               onChange={handleChange}
//               className={errors.address ? "border-red-500" : ""}
//             />
//             {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <Input
//                 name="pincode"
//                 placeholder="Pincode*"
//                 value={form.pincode}
//                 onChange={handleChange}
//                 className={errors.pincode ? "border-red-500" : ""}
//               />
//               {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
//             </div>
//             <div>
//               <Input
//                 name="city"
//                 placeholder="City"
//                 value={form.city}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <Input
//               name="state"
//               placeholder="State"
//               value={form.state}
//               onChange={handleChange}
//             />
//             <Input
//               name="country"
//               placeholder="Country"
//               value={form.country}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="pt-4">
//             <div className="flex justify-between items-center mb-2">
//               <span className="font-medium">Order Total:</span>
//               <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
//             </div>
//             <Button 
//               className="w-full mt-2" 
//               onClick={handleSubmit}
//               disabled={isProcessing}
//             >
//               {isProcessing ? "Processing..." : "Proceed to Payment"}
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }


// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect, useRef } from "react"; // useRef जोड़ें
// import { useCart } from "@/components/CartContext";
// import { toast } from "sonner";

// interface UserDetails {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
//   pincode: string;
//   city: string;
//   state: string;
//   country: string;
// }

// interface CartItem {
//   cartId: number;
//   productId: number;
//   productName: string;
//   brand: string;
//   productPrice: number;
//   quantity: number;
//   productImageUrl: string;
// }

// interface CheckoutDialogProps {
//   open: boolean;
//   onClose: () => void;
//   cartItems: CartItem[];
//   totalPrice: number;
// }

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export default function CheckoutDialog({ 
//   open, 
//   onClose,
//   cartItems,
//   totalPrice
// }: CheckoutDialogProps) {
//   const [isProcessing, setIsProcessing] = useState(false);
//   const { clearCart } = useCart();
//   const razorpayLoaded = useRef(false); // Razorpay स्क्रिप्ट लोडिंग को ट्रैक करने के लिए

//   const [form, setForm] = useState<UserDetails>({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     pincode: "",
//     city: "",
//     state: "",
//     country: "India"
//   });

//   const [errors, setErrors] = useState<Partial<UserDetails>>({});

//   // Razorpay स्क्रिप्ट को पहले से ही लोड करें
//   useEffect(() => {
//     if (open && !razorpayLoaded.current) {
//       loadRazorpayScript();
//     }
//   }, [open]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//     if (errors[name as keyof UserDetails]) {
//       setErrors(prev => ({ ...prev, [name]: undefined }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: Partial<UserDetails> = {};
//     if (!form.name.trim()) newErrors.name = "Name is required";
//     if (!form.phone.trim()) {
//       newErrors.phone = "Phone is required";
//     } else if (!/^\d{10}$/.test(form.phone)) {
//       newErrors.phone = "Invalid 10-digit phone number";
//     }
//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!form.address.trim()) newErrors.address = "Address is required";
//     if (!form.pincode.trim()) {
//       newErrors.pincode = "Pincode is required";
//     } else if (!/^\d{6}$/.test(form.pincode)) {
//       newErrors.pincode = "Invalid 6-digit pincode";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const loadRazorpayScript = async () => {
//     return new Promise((resolve) => {
//       if (razorpayLoaded.current) {
//         resolve(true);
//         return;
//       }

//       if (window.Razorpay) {
//         razorpayLoaded.current = true;
//         resolve(true);
//         return;
//       }

//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => {
//         razorpayLoaded.current = true;
//         resolve(true);
//       };
//       script.onerror = () => {
//         console.error('Razorpay script failed to load');
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;
//     setIsProcessing(true);

//     try {
//       // Razorpay स्क्रिप्ट लोड करें
//       const razorpayLoadedSuccess = await loadRazorpayScript();
//       if (!razorpayLoadedSuccess) {
//         throw new Error("Payment system is temporarily unavailable");
//       }

//       const payload = {
//         orderNumber: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
//         orderToken: `TOKEN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
//         orderDate: new Date().toISOString(),
//         status: "PENDING",
//         total: totalPrice,
//         userDetails: form,
//         payment: {
//           method: "RAZORPAY",
//           status: "PENDING",
//           amount: totalPrice,
//           currency: "INR"
//         },
//         items: cartItems.map(item => ({
//           cartId: item.cartId,
//           productId: item.productId,
//           productName: item.productName,
//           quantity: item.quantity,
//           priceAtPurchase: item.productPrice
//         }))
//       };

//       console.log('Sending order payload:', payload);

//       const API_BASE_URL = "https://6a3dfa7e05c5.ngrok-free.app";
      
//       // Request options में timeout और retry logic जोड़ें
//       const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 सेकंड timeout

//       try {
//         const response = await fetch(`${API_BASE_URL}/api/orders/create`, {
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json',
//             'ngrok-skip-browser-warning': '69420',
//             'Accept': 'application/json'
//           },
//           body: JSON.stringify(payload),
//           signal: controller.signal
//         });

//         clearTimeout(timeoutId);

//         if (!response.ok) {
//           let errorMessage = "Network error please refresh the page.";
          
//           try {
//             const errorData = await response.json();
//             console.error('Server error response:', errorData);
//             errorMessage = errorData.message || errorMessage;
            
//             // 429 error के लिए विशेष संदेश
//             if (response.status === 429) {
//               errorMessage = "Too many requests. Please wait a moment and try again.";
//             }
            
//             // 500 error के लिए विशेष संदेश
//             if (response.status === 500) {
//               errorMessage = "Server error. Our team has been notified. Please try again in a few minutes.";
//             }
//           } catch (e) {
//             console.error('Error parsing error response:', e);
//           }
          
//           throw new Error(errorMessage);
//         }

//         const orderData = await response.json();
//         console.log('Order created successfully:', orderData);

//         // यदि order database में create हो गया है लेकिन Razorpay order नहीं बना
//         if (!orderData.razorpayOrderId) {
//           // केवल order create करें और success पेज पर redirect करें
//           const orderDetails = {
//             id: orderData.orderId,
//             orderNumber: orderData.orderNumber,
//             date: new Date().toISOString(),
//             items: cartItems.map(item => ({
//               productId: item.productId,
//               productName: item.productName,
//               brand: item.brand,
//               productPrice: item.productPrice,
//               quantity: item.quantity,
//               productImageUrl: item.productImageUrl
//             })),
//             total: totalPrice,
//             paymentId: null,
//             userDetails: form,
//             status: "PENDING_PAYMENT"
//           };

//           localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
//           clearCart();
//           onClose();
//           window.location.href = "/success?order=" + orderData.orderId;
//           return;
//         }

//         // Razorpay payment options
//         const options = {
//           key: "rzp_test_RyebKpVLGH54Xb",
//           amount: Math.round(totalPrice * 100), // रुपये को पैसे में बदलें
//           currency: "INR",
//           name: "MERFUME",
//           description: `Order #${orderData.orderNumber}`,
//           order_id: orderData.razorpayOrderId,
//           handler: (response: any) => {
//             console.log('Payment successful:', response);
            
//             const orderDetails = {
//               id: orderData.orderId,
//               orderNumber: orderData.orderNumber,
//               date: new Date().toISOString(),
//               items: cartItems.map(item => ({
//                 productId: item.productId,
//                 productName: item.productName,
//                 brand: item.brand,
//                 productPrice: item.productPrice,
//                 quantity: item.quantity,
//                 productImageUrl: item.productImageUrl
//               })),
//               total: totalPrice,
//               paymentId: response.razorpay_payment_id,
//               userDetails: form,
//               status: "PAID"
//             };

//             localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
//             clearCart();
//             onClose();
//             window.location.href = "/success?payment_id=" + response.razorpay_payment_id + "&order_id=" + orderData.orderId;
//           },
//           prefill: {
//             name: form.name,
//             email: form.email,
//             contact: form.phone
//           },
//           notes: {
//             address: form.address,
//             order_id: orderData.orderId
//           },
//           theme: {
//             color: "#3399cc"
//           },
//           modal: {
//             ondismiss: () => {
//               toast.info("Payment cancelled. Your order has been saved.");
//               // Payment cancel होने पर भी order details save करें
//               const orderDetails = {
//                 id: orderData.orderId,
//                 orderNumber: orderData.orderNumber,
//                 date: new Date().toISOString(),
//                 items: cartItems.map(item => ({
//                   productId: item.productId,
//                   productName: item.productName,
//                   brand: item.brand,
//                   productPrice: item.productPrice,
//                   quantity: item.quantity,
//                   productImageUrl: item.productImageUrl
//                 })),
//                 total: totalPrice,
//                 paymentId: null,
//                 userDetails: form,
//                 status: "PAYMENT_PENDING"
//               };
//               localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
//             }
//           }
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.on('payment.failed', (response: any) => {
//           console.error('Payment failed:', response.error);
//           toast.error(`Payment failed: ${response.error.description}`);
          
//           // Payment fail होने पर भी order details save करें
//           const orderDetails = {
//             id: orderData.orderId,
//             orderNumber: orderData.orderNumber,
//             date: new Date().toISOString(),
//             items: cartItems.map(item => ({
//               productId: item.productId,
//               productName: item.productName,
//               brand: item.brand,
//               productPrice: item.productPrice,
//               quantity: item.quantity,
//               productImageUrl: item.productImageUrl
//             })),
//             total: totalPrice,
//             paymentId: null,
//             userDetails: form,
//             status: "PAYMENT_FAILED"
//           };
//           localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
//         });
        
//         rzp.open();
        
//       } catch (fetchError: any) {
//         if (fetchError.name === 'AbortError') {
//           throw new Error("Request timeout. Please check your internet connection and try again.");
//         }
//         throw fetchError;
//       }

//     } catch (err: any) {
//       console.error('Checkout error:', err);
      
//       // User-friendly error messages
//       let errorMessage = "Network error please refresh the page.";
      
//       if (err.message.includes("timeout")) {
//         errorMessage = "Request timeout. Please check your internet connection.";
//       } else if (err.message.includes("Too many requests")) {
//         errorMessage = "Too many requests. Please wait a moment and try again.";
//       } else if (err.message.includes("Server error")) {
//         errorMessage = "Server error. Our team has been notified.";
//       } else if (err.message.includes("temporarily unavailable")) {
//         errorMessage = "Payment system is temporarily unavailable. Please try again later.";
//       }
      
//       toast.error(errorMessage);
      
//       // Error को कंसोल में लॉग करें
//       if (process.env.NODE_ENV === 'development') {
//         console.error('Full error details:', err);
//       }
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle className="text-center">Complete Your Order</DialogTitle>
//         </DialogHeader>

//         <div className="space-y-4">
//           <div>
//             <Input
//               name="name"
//               placeholder="Full Name*"
//               value={form.name}
//               onChange={handleChange}
//               className={errors.name ? "border-red-500" : ""}
//             />
//             {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <Input
//               name="email"
//               placeholder="Email*"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               className={errors.email ? "border-red-500" : ""}
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <Input
//               name="phone"
//               placeholder="Phone Number*"
//               type="tel"
//               value={form.phone}
//               onChange={handleChange}
//               className={errors.phone ? "border-red-500" : ""}
//             />
//             {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//           </div>

//           <div>
//             <Input
//               name="address"
//               placeholder="Full Address*"
//               value={form.address}
//               onChange={handleChange}
//               className={errors.address ? "border-red-500" : ""}
//             />
//             {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <Input
//                 name="pincode"
//                 placeholder="Pincode*"
//                 value={form.pincode}
//                 onChange={handleChange}
//                 className={errors.pincode ? "border-red-500" : ""}
//               />
//               {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
//             </div>
//             <div>
//               <Input
//                 name="city"
//                 placeholder="City"
//                 value={form.city}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <Input
//               name="state"
//               placeholder="State"
//               value={form.state}
//               onChange={handleChange}
//             />
//             <Input
//               name="country"
//               placeholder="Country"
//               value={form.country}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="pt-4">
//             <div className="flex justify-between items-center mb-2">
//               <span className="font-medium">Order Total:</span>
//               <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
//             </div>
//             <Button 
//               className="w-full mt-2" 
//               onClick={handleSubmit}
//               disabled={isProcessing}
//             >
//               {isProcessing ? "Processing..." : "Proceed to Payment"}
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }


// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect, useRef } from "react";
// import { useCart } from "@/components/CartContext";
// import { toast } from "sonner";
// import axios, { AxiosError, CancelTokenSource } from 'axios';

// interface UserDetails {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
//   pincode: string;
//   city: string;
//   state: string;
//   country: string;
// }

// interface CartItem {
//   cartId: number;
//   productId: number;
//   productName: string;
//   brand: string;
//   productPrice: number;
//   quantity: number;
//   productImageUrl: string;
// }

// interface CheckoutDialogProps {
//   open: boolean;
//   onClose: () => void;
//   cartItems: CartItem[];
//   totalPrice: number;
// }

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// // Create axios instance with configuration
// const api = axios.create({
//   baseURL: 'https://6a3dfa7e05c5.ngrok-free.app',
//   // timeout: 30000, // 30 seconds timeout
//   headers: {
//     'Content-Type': 'application/json',
//     'ngrok-skip-browser-warning': '69420',
//     'Accept': 'application/json',
//   },
// });

// // Add request interceptor
// api.interceptors.request.use(
//   (config) => {
//     console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
//     return config;
//   },
//   (error) => {
//     console.error('Request interceptor error:', error);
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor with retry logic
// api.interceptors.response.use(
//   (response) => {
//     console.log(`Response received: ${response.status}`, response.config.url);
//     return response;
//   },
//   async (error: AxiosError) => {
//     const originalRequest = error.config as any;
    
//     // Retry on network errors (status 0) and not already retried
//     if (!error.response && !originalRequest?._retry) {
//       originalRequest._retry = true;
//       console.log('Retrying request due to network error...');
      
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       return api(originalRequest);
//     }
    
//     // Enhanced error logging
//     if (error.response) {
//       console.error('API Error Details:', {
//         status: error.response.status,
//         statusText: error.response.statusText,
//         url: error.config?.url,
//         method: error.config?.method,
//         data: error.response.data,
//       });
//     } else if (error.request) {
//       console.error('Network Error - No response received:', error.message);
//     } else {
//       console.error('Request Setup Error:', error.message);
//     }
    
//     return Promise.reject(error);
//   }
// );

// export default function CheckoutDialog({ 
//   open, 
//   onClose,
//   cartItems,
//   totalPrice
// }: CheckoutDialogProps) {
//   const [isProcessing, setIsProcessing] = useState(false);
//   const { clearCart } = useCart();
//   const razorpayLoaded = useRef(false);
//   const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);

//   const [form, setForm] = useState<UserDetails>({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     pincode: "",
//     city: "",
//     state: "",
//     country: "India"
//   });

//   const [errors, setErrors] = useState<Partial<UserDetails>>({});

//   // Cleanup function
//   useEffect(() => {
//     return () => {
//       // Cancel any pending requests when component unmounts
//       if (cancelTokenSourceRef.current) {
//         cancelTokenSourceRef.current.cancel('Component unmounted');
//       }
//     };
//   }, []);

//   // Preload Razorpay script when dialog opens
//   useEffect(() => {
//     if (open && !razorpayLoaded.current) {
//       loadRazorpayScript();
//     }
//   }, [open]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//     if (errors[name as keyof UserDetails]) {
//       setErrors(prev => ({ ...prev, [name]: undefined }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: Partial<UserDetails> = {};
    
//     if (!form.name.trim()) newErrors.name = "Name is required";
    
//     if (!form.phone.trim()) {
//       newErrors.phone = "Phone is required";
//     } else if (!/^\d{10}$/.test(form.phone)) {
//       newErrors.phone = "Invalid 10-digit phone number";
//     }
    
//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       newErrors.email = "Invalid email format";
//     }
    
//     if (!form.address.trim()) newErrors.address = "Address is required";
    
//     if (!form.pincode.trim()) {
//       newErrors.pincode = "Pincode is required";
//     } else if (!/^\d{6}$/.test(form.pincode)) {
//       newErrors.pincode = "Invalid 6-digit pincode";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const loadRazorpayScript = async (): Promise<boolean> => {
//     return new Promise((resolve) => {
//       if (razorpayLoaded.current) {
//         resolve(true);
//         return;
//       }

//       if (window.Razorpay) {
//         razorpayLoaded.current = true;
//         resolve(true);
//         return;
//       }

//       // Check if script is already loading
//       const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
//       if (existingScript) {
//         existingScript.addEventListener('load', () => {
//           razorpayLoaded.current = true;
//           resolve(true);
//         });
//         existingScript.addEventListener('error', () => {
//           resolve(false);
//         });
//         return;
//       }

//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.async = true;
      
//       script.onload = () => {
//         razorpayLoaded.current = true;
//         console.log('Razorpay script loaded successfully');
//         resolve(true);
//       };
      
//       script.onerror = () => {
//         console.error('Razorpay script failed to load');
//         resolve(false);
//       };
      
//       document.body.appendChild(script);
//     });
//   };

//   const createOrderWithAxios = async (payload: any) => {
//     // Create cancel token for this request
//     const source = axios.CancelToken.source();
//     cancelTokenSourceRef.current = source;

//     try {
//       const response = await api.post('/api/orders/create', payload, {
//         cancelToken: source.token,
//       });
      
//       cancelTokenSourceRef.current = null;
//       return response.data;
      
//     } catch (error: any) {
//       cancelTokenSourceRef.current = null;
      
//       if (axios.isCancel(error)) {
//         throw new Error('Request cancelled');
//       }
      
//       throw error;
//     }
//   };

//   const getErrorMessage = (error: any): string => {
//     if (axios.isCancel(error)) {
//       return 'Request was cancelled';
//     }
    
//     if (error.code === 'ECONNABORTED') {
//       return 'Request timeout. Please check your internet connection.';
//     }
    
//     if (error.message?.includes('Network Error')) {
//       return 'Network error. Please check your internet connection.';
//     }
    
//     if (error.response) {
//       switch (error.response.status) {
//         case 400:
//           return error.response.data?.message || 'Invalid request. Please check your information.';
//         case 401:
//           return 'Authentication required.';
//         case 403:
//           return 'Access denied.';
//         case 404:
//           return 'API endpoint not found.';
//         case 429:
//           return 'Too many requests. Please wait a moment.';
//         case 500:
//           return 'Server error. Our team has been notified.';
//         case 502:
//         case 503:
//         case 504:
//           return 'Service temporarily unavailable. Please try again later.';
//         default:
//           return error.response.data?.message || `Server error (${error.response.status}).`;
//       }
//     }
    
//     return 'An unexpected error occurred. Please try again.';
//   };

//   // इस function में change करें:
// const handleSubmit = async () => {
//   if (!validateForm()) {
//     toast.error('Please fill all required fields correctly');
//     return;
//   }

//   if (cartItems.length === 0) {
//     toast.error('Your cart is empty');
//     return;
//   }

//   setIsProcessing(true);

//   try {
//     // Step 1: Create order in backend
//     const orderPayload = {
//       orderNumber: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
//       total: totalPrice,
//       userDetails: form,
//       items: cartItems.map(item => ({
//         productId: item.productId,
//         productName: item.productName,
//         quantity: item.quantity,
//         price: item.productPrice,
//         imageUrl: item.productImageUrl
//       })),
//       status: "PENDING"
//     };

//     console.log('Creating order:', orderPayload);
    
//     // Create order in backend
//     const orderResponse = await api.post('/api/orders/create', orderPayload);
//     const { orderId, razorpayOrderId } = orderResponse.data;
    
//     console.log('Order created:', { orderId, razorpayOrderId });

//     // Step 2: Load Razorpay script
//     const razorpayLoadedSuccess = await loadRazorpayScript();
//     if (!razorpayLoadedSuccess) {
//       throw new Error("Payment system is temporarily unavailable");
//     }

//     // Step 3: Initialize Razorpay payment
//     const razorpayOptions = {
//       key: "rzp_test_RyebKpVLGH54Xb",
//       amount: Math.round(totalPrice * 100), // Convert to paise
//       currency: "INR",
//       name: "Merfume",
//       description: `Order #${orderPayload.orderNumber}`,
//       order_id: razorpayOrderId,
//       handler: async (response: any) => {
//         console.log('Payment successful:', response);
        
//         try {
//           // Verify payment on backend using query parameters
//           const queryParams = new URLSearchParams({
//             razorpayPaymentId: response.razorpay_payment_id,
//             razorpayOrderId: response.razorpay_order_id,
//             razorpaySignature: response.razorpay_signature
//           }).toString();
          
//           const verificationResponse = await api.post(
//             `/api/payments/verify?${queryParams}`
//           );

//           if (verificationResponse.data && verificationResponse.data.message) {
//             // Update order status to PAID
//             await api.patch(`/api/orders/${orderId}/status`, {
//               status: "PAID",
//               paymentId: response.razorpay_payment_id
//             });

//             // Save order details locally
//             const orderDetails = {
//               id: orderId,
//               orderNumber: orderPayload.orderNumber,
//               date: new Date().toISOString(),
//               items: cartItems,
//               total: totalPrice,
//               paymentId: response.razorpay_payment_id,
//               userDetails: form,
//               status: "PAID"
//             };

//             localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
//             await clearCart();
//             onClose();
            
//             // Redirect to success page
//             window.location.href = `/success?payment_id=${response.razorpay_payment_id}&order_id=${orderId}`;
//           } else {
//             toast.error('Payment verification failed');
//             setIsProcessing(false);
//           }
//         } catch (verifyError: any) {
//           console.error('Payment verification error:', verifyError);
//           const errorMessage = getErrorMessage(verifyError);
//           toast.error(`Payment verification failed: ${errorMessage}`);
//           setIsProcessing(false);
//         }
//       },
//       prefill: {
//         name: form.name,
//         email: form.email,
//         contact: form.phone
//       },
//       notes: {
//         address: form.address,
//         order_id: orderId
//       },
//       theme: {
//         color: "#f59e0b" // Gold color
//       },
//       modal: {
//         ondismiss: () => {
//           console.log('Payment modal dismissed');
//           toast.info("Payment cancelled. Your order has been saved.");
          
//           // Save order as pending payment
//           const orderDetails = {
//             id: orderId,
//             orderNumber: orderPayload.orderNumber,
//             date: new Date().toISOString(),
//             items: cartItems,
//             total: totalPrice,
//             paymentId: null,
//             userDetails: form,
//             status: "PAYMENT_PENDING"
//           };
          
//           localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
//           setIsProcessing(false);
//         }
//       }
//     };

//     // Handle payment failures
//     const rzp = new window.Razorpay(razorpayOptions);
    
//     rzp.on('payment.failed', (response: any) => {
//       console.error('Payment failed:', response.error);
      
//       // Update order status to PAYMENT_FAILED
//       api.patch(`/api/orders/${orderId}/status`, {
//         status: "PAYMENT_FAILED",
//         error: response.error
//       }).catch(err => console.error('Failed to update order status:', err));
      
//       // Save order locally
//       const orderDetails = {
//         id: orderId,
//         orderNumber: orderPayload.orderNumber,
//         date: new Date().toISOString(),
//         items: cartItems,
//         total: totalPrice,
//         paymentId: null,
//         userDetails: form,
//         status: "PAYMENT_FAILED",
//         error: response.error
//       };
      
//       localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
//       toast.error(`Payment failed: ${response.error.description}`);
//       setIsProcessing(false);
//     });
    
//     rzp.open();
    
//   } catch (error: any) {
//     console.error('Checkout error:', error);
    
//     const errorMessage = getErrorMessage(error);
//     toast.error(errorMessage);
    
//     // Save partial order on certain errors
//     if (!axios.isCancel(error) && error.response?.status !== 400) {
//       const fallbackOrder = {
//         id: `temp-${Date.now()}`,
//         orderNumber: `ORD-${Date.now()}`,
//         date: new Date().toISOString(),
//         items: cartItems,
//         total: totalPrice,
//         paymentId: null,
//         userDetails: form,
//         status: "ERROR",
//         error: error.message
//       };
      
//       localStorage.setItem("currentOrder", JSON.stringify(fallbackOrder));
//     }
    
//   } finally {
//     setIsProcessing(false);
//   }
// };

//   const handleCancel = () => {
//     // Cancel any pending requests
//     if (cancelTokenSourceRef.current) {
//       cancelTokenSourceRef.current.cancel('User cancelled checkout');
//     }
//     onClose();
//   };

//   return (
//     <Dialog open={open} onOpenChange={handleCancel}>
//       <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="text-center text-xl font-semibold">
//             Complete Your Order
//           </DialogTitle>
//         </DialogHeader>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Full Name *</label>
//             <Input
//               name="name"
//               placeholder="John Doe"
//               value={form.name}
//               onChange={handleChange}
//               className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
//               disabled={isProcessing}
//             />
//             {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Email *</label>
//             <Input
//               name="email"
//               placeholder="john@example.com"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
//               disabled={isProcessing}
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Phone Number *</label>
//             <Input
//               name="phone"
//               placeholder="9876543210"
//               type="tel"
//               value={form.phone}
//               onChange={handleChange}
//               className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
//               disabled={isProcessing}
//             />
//             {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Full Address *</label>
//             <Input
//               name="address"
//               placeholder="123 Main St, Apartment 4B"
//               value={form.address}
//               onChange={handleChange}
//               className={errors.address ? "border-red-500 focus-visible:ring-red-500" : ""}
//               disabled={isProcessing}
//             />
//             {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Pincode *</label>
//               <Input
//                 name="pincode"
//                 placeholder="110001"
//                 value={form.pincode}
//                 onChange={handleChange}
//                 className={errors.pincode ? "border-red-500 focus-visible:ring-red-500" : ""}
//                 disabled={isProcessing}
//               />
//               {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">City</label>
//               <Input
//                 name="city"
//                 placeholder="New Delhi"
//                 value={form.city}
//                 onChange={handleChange}
//                 disabled={isProcessing}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">State</label>
//               <Input
//                 name="state"
//                 placeholder="Delhi"
//                 value={form.state}
//                 onChange={handleChange}
//                 disabled={isProcessing}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Country</label>
//               <Input
//                 name="country"
//                 value={form.country}
//                 onChange={handleChange}
//                 disabled={isProcessing}
//               />
//             </div>
//           </div>

//           <div className="pt-4 border-t">
//             <div className="space-y-2 mb-4">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Subtotal</span>
//                 <span>₹{totalPrice.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Shipping</span>
//                 <span className="text-green-600">FREE</span>
//               </div>
//               <div className="flex justify-between text-lg font-bold">
//                 <span>Total</span>
//                 <span>₹{totalPrice.toFixed(2)}</span>
//               </div>
//             </div>
            
//             <Button 
//               className="w-full h-12 text-lg"
//               onClick={handleSubmit}
//               disabled={isProcessing}
//             >
//               {isProcessing ? (
//                 <div className="flex items-center justify-center gap-2">
//                   <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
//                   Processing...
//                 </div>
//               ) : (
//                 `Pay ₹${totalPrice.toFixed(2)}`
//               )}
//             </Button>
            
//             {isProcessing && (
//               <p className="text-center text-sm text-gray-500 mt-2">
//                 Please don't close this window while processing...
//               </p>
//             )}
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }


import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";
import axios, { AxiosError, CancelTokenSource } from 'axios';

interface UserDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  country: string;
}

interface CartItem {
  cartId: number;
  productId: number;
  productName: string;
  brand: string;
  productPrice: number;
  quantity: number;
  productImageUrl: string;
}

interface CheckoutDialogProps {
  open: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalPrice: number;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

// Create axios instance with configuration
const api = axios.create({
  // baseURL: 'https://e46b4bafada4.ngrok-free.app',
      baseURL:"https://merfume-backend-production-5068.up.railway.app",
  headers: {
    'Content-Type': 'application/json',
    // 'ngrok-skip-browser-warning': '69420',
    'Accept': 'application/json',
  },
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor with retry logic
api.interceptors.response.use(
  (response) => {
    console.log(`Response received: ${response.status}`, response.config.url);
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as any;
    
    // Retry on network errors (status 0) and not already retried
    if (!error.response && !originalRequest?._retry) {
      originalRequest._retry = true;
      console.log('Retrying request due to network error...');
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      return api(originalRequest);
    }
    
    // Enhanced error logging
    if (error.response) {
      console.error('API Error Details:', {
        status: error.response.status,
        statusText: error.response.statusText,
        url: error.config?.url,
        method: error.config?.method,
        data: error.response.data,
      });
    } else if (error.request) {
      console.error('Network Error - No response received:', error.message);
    } else {
      console.error('Request Setup Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default function CheckoutDialog({ 
  open, 
  onClose,
  cartItems,
  totalPrice
}: CheckoutDialogProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { clearCart } = useCart();
  const razorpayLoaded = useRef(false);
  const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);

  const [form, setForm] = useState<UserDetails>({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "India"
  });

  const [errors, setErrors] = useState<Partial<UserDetails>>({});

  // Cleanup function
  useEffect(() => {
    return () => {
      // Cancel any pending requests when component unmounts
      if (cancelTokenSourceRef.current) {
        cancelTokenSourceRef.current.cancel('Component unmounted');
      }
    };
  }, []);

  // Preload Razorpay script when dialog opens
  useEffect(() => {
    if (open && !razorpayLoaded.current) {
      loadRazorpayScript();
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof UserDetails]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<UserDetails> = {};
    
    if (!form.name.trim()) newErrors.name = "Name is required";
    
    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Invalid 10-digit phone number";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!form.address.trim()) newErrors.address = "Address is required";
    
    if (!form.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(form.pincode)) {
      newErrors.pincode = "Invalid 6-digit pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loadRazorpayScript = async (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (razorpayLoaded.current) {
        resolve(true);
        return;
      }

      if (window.Razorpay) {
        razorpayLoaded.current = true;
        resolve(true);
        return;
      }

      // Check if script is already loading
      const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => {
          razorpayLoaded.current = true;
          resolve(true);
        });
        existingScript.addEventListener('error', () => {
          resolve(false);
        });
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      
      script.onload = () => {
        razorpayLoaded.current = true;
        console.log('Razorpay script loaded successfully');
        resolve(true);
      };
      
      script.onerror = () => {
        console.error('Razorpay script failed to load');
        resolve(false);
      };
      
      document.body.appendChild(script);
    });
  };

  const getErrorMessage = (error: any): string => {
    if (axios.isCancel(error)) {
      return 'Request was cancelled';
    }
    
    if (error.code === 'ECONNABORTED') {
      return 'Request timeout. Please check your internet connection.';
    }
    
    if (error.message?.includes('Network Error')) {
      return 'Network error. Please check your internet connection.';
    }
    
    if (error.response) {
      switch (error.response.status) {
        case 400:
          return error.response.data?.message || 'Invalid request. Please check your information.';
        case 401:
          return 'Authentication required.';
        case 403:
          return 'Access denied.';
        case 404:
          return 'API endpoint not found.';
        case 429:
          return 'Too many requests. Please wait a moment.';
        case 500:
          return 'Server error. Our team has been notified.';
        case 502:
        case 503:
        case 504:
          return 'Service temporarily unavailable. Please try again later.';
        default:
          return error.response.data?.message || `Server error (${error.response.status}).`;
      }
    }
    
    return 'An unexpected error occurred. Please try again.';
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error('Please fill all required fields correctly');
      return;
    }

    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setIsProcessing(true);

    try {
      // Step 1: Create order in backend
      const orderPayload = {
        orderNumber: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        total: totalPrice,
        userDetails: form,
        items: cartItems.map(item => ({
          productId: item.productId,
          productName: item.productName,
          quantity: item.quantity,
          price: item.productPrice,
          imageUrl: item.productImageUrl
        })),
        status: "PENDING"
      };

      console.log('Creating order:', orderPayload);
      
      // Create order in backend
      const orderResponse = await api.post('/api/orders/create', orderPayload);
      const { orderId, razorpayOrderId } = orderResponse.data;
      
      console.log('Order created:', { orderId, razorpayOrderId });

      // Step 2: Load Razorpay script
      const razorpayLoadedSuccess = await loadRazorpayScript();
      if (!razorpayLoadedSuccess) {
        throw new Error("Payment system is temporarily unavailable");
      }

      // Step 3: Initialize Razorpay payment
      const razorpayOptions = {
        key: "rzp_test_RyebKpVLGH54Xb",
        amount: Math.round(totalPrice * 100), // Convert to paise
        currency: "INR",
        name: "Merfume",
        description: `Order #${orderPayload.orderNumber}`,
        order_id: razorpayOrderId,
        handler: async (response: any) => {
          console.log('Payment successful:', response);
          
          try {
            // IMPORTANT FIX: Parameter names must match backend @RequestParam names
            // Backend expects: razorpayPaymentId, razorpayOrderId, razorpaySignature
            // Make sure the case matches exactly
            
            // Method 1: Using query parameters with exact names
            const verificationResponse = await api.post(
              `/api/payments/verify?razorpayPaymentId=${response.razorpay_payment_id}` +
              `&razorpayOrderId=${response.razorpay_order_id}` +
              `&razorpaySignature=${response.razorpay_signature}`
            );

            console.log('Verification response:', verificationResponse.data);
            
            if (verificationResponse.data && verificationResponse.data.message) {
              // Option 1: If you have an endpoint to update order status
              try {
                // Try updating order status - remove if endpoint doesn't exist
                await api.patch(`/api/orders/${orderId}/status`, {
                  status: "PAID",
                  paymentId: response.razorpay_payment_id
                }).catch(err => {
                  console.log('Order status update optional - endpoint may not exist:', err.message);
                  // Continue anyway since payment is verified
                });
              } catch (statusError) {
                console.log('Order status update is optional');
              }

              // Save order details locally
              const orderDetails = {
                id: orderId,
                orderNumber: orderPayload.orderNumber,
                date: new Date().toISOString(),
                items: cartItems,
                total: totalPrice,
                paymentId: response.razorpay_payment_id,
                userDetails: form,
                status: "PAID"
              };

              localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
              await clearCart();
              onClose();
              
              // Redirect to success page
              window.location.href = `/success?payment_id=${response.razorpay_payment_id}&order_id=${orderId}`;
            } else {
              toast.error('Payment verification failed');
              setIsProcessing(false);
            }
          } catch (verifyError: any) {
            console.error('Payment verification error:', verifyError);
            
            // More specific error handling
            if (verifyError.response?.status === 400) {
              toast.error('Payment verification failed. Invalid signature.');
            } else {
              const errorMessage = getErrorMessage(verifyError);
              toast.error(`Payment verification failed: ${errorMessage}`);
            }
            
            setIsProcessing(false);
          }
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone
        },
        notes: {
          address: form.address,
          order_id: orderId
        },
        theme: {
          color: "#f59e0b"
        },
        modal: {
          ondismiss: () => {
            console.log('Payment modal dismissed');
            toast.info("Payment cancelled. Your order has been saved.");
            
            // Save order as pending payment
            const orderDetails = {
              id: orderId,
              orderNumber: orderPayload.orderNumber,
              date: new Date().toISOString(),
              items: cartItems,
              total: totalPrice,
              paymentId: null,
              userDetails: form,
              status: "PAYMENT_PENDING"
            };
            
            localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
            setIsProcessing(false);
          }
        }
      };

      // Handle payment failures
      const rzp = new window.Razorpay(razorpayOptions);
      
      rzp.on('payment.failed', (response: any) => {
        console.error('Payment failed:', response.error);
        
        // Optional: Update order status to PAYMENT_FAILED
        api.patch(`/api/orders/${orderId}/status`, {
          status: "PAYMENT_FAILED",
          error: response.error
        }).catch(err => console.log('Order status update optional:', err.message));
        
        // Save order locally
        const orderDetails = {
          id: orderId,
          orderNumber: orderPayload.orderNumber,
          date: new Date().toISOString(),
          items: cartItems,
          total: totalPrice,
          paymentId: null,
          userDetails: form,
          status: "PAYMENT_FAILED",
          error: response.error
        };
        
        localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
        toast.error(`Payment failed: ${response.error.description}`);
        setIsProcessing(false);
      });
      
      rzp.open();
      
    } catch (error: any) {
      console.error('Checkout error:', error);
      
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
      
      // Save partial order on certain errors
      if (!axios.isCancel(error) && error.response?.status !== 400) {
        const fallbackOrder = {
          id: `temp-${Date.now()}`,
          orderNumber: `ORD-${Date.now()}`,
          date: new Date().toISOString(),
          items: cartItems,
          total: totalPrice,
          paymentId: null,
          userDetails: form,
          status: "ERROR",
          error: error.message
        };
        
        localStorage.setItem("currentOrder", JSON.stringify(fallbackOrder));
      }
      
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    // Cancel any pending requests
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel('User cancelled checkout');
    }
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleCancel}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Complete Your Order
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name *</label>
            <Input
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
              disabled={isProcessing}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <Input
              name="email"
              placeholder="john@example.com"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
              disabled={isProcessing}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number *</label>
            <Input
              name="phone"
              placeholder="9876543210"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
              disabled={isProcessing}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Full Address *</label>
            <Input
              name="address"
              placeholder="123 Main St, Apartment 4B"
              value={form.address}
              onChange={handleChange}
              className={errors.address ? "border-red-500 focus-visible:ring-red-500" : ""}
              disabled={isProcessing}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Pincode *</label>
              <Input
                name="pincode"
                placeholder="110001"
                value={form.pincode}
                onChange={handleChange}
                className={errors.pincode ? "border-red-500 focus-visible:ring-red-500" : ""}
                disabled={isProcessing}
              />
              {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <Input
                name="city"
                placeholder="New Delhi"
                value={form.city}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <Input
                name="state"
                placeholder="Delhi"
                value={form.state}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <Input
                name="country"
                value={form.country}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              className="w-full h-12 text-lg"
              onClick={handleSubmit}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Processing...
                </div>
              ) : (
                `Pay ₹${totalPrice.toFixed(2)}`
              )}
            </Button>
            
            {isProcessing && (
              <p className="text-center text-sm text-gray-500 mt-2">
                Please don't close this window while processing...
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}



// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect, useRef } from "react";
// import { useCart } from "@/components/CartContext";
// import { toast } from "sonner";
// import axios, { AxiosError, CancelTokenSource } from 'axios';

// interface UserDetails {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
//   pincode: string;
//   city: string;
//   state: string;
//   country: string;
// }

// interface CartItem {
//   cartId: number;
//   productId: number;
//   productName: string;
//   brand: string;
//   productPrice: number;
//   quantity: number;
//   productImageUrl: string;
// }

// interface CheckoutDialogProps {
//   open: boolean;
//   onClose: () => void;
//   cartItems: CartItem[];
//   totalPrice: number;
// }

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// // Create axios instance with configuration
// const api = axios.create({
//   baseURL: 'https://6a3dfa7e05c5.ngrok-free.app',
//   // timeout: 30000, // 30 seconds timeout
//   headers: {
//     'Content-Type': 'application/json',
//     'ngrok-skip-browser-warning': '69420',
//     'Accept': 'application/json',
//   },
// });

// // Add request interceptor
// api.interceptors.request.use(
//   (config) => {
//     console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
//     return config;
//   },
//   (error) => {
//     console.error('Request interceptor error:', error);
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor with retry logic
// api.interceptors.response.use(
//   (response) => {
//     console.log(`Response received: ${response.status}`, response.config.url);
//     return response;
//   },
//   async (error: AxiosError) => {
//     const originalRequest = error.config as any;
    
//     // Retry on network errors (status 0) and not already retried
//     if (!error.response && !originalRequest?._retry) {
//       originalRequest._retry = true;
//       console.log('Retrying request due to network error...');
      
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       return api(originalRequest);
//     }
    
//     // Enhanced error logging
//     if (error.response) {
//       console.error('API Error Details:', {
//         status: error.response.status,
//         statusText: error.response.statusText,
//         url: error.config?.url,
//         method: error.config?.method,
//         data: error.response.data,
//       });
//     } else if (error.request) {
//       console.error('Network Error - No response received:', error.message);
//     } else {
//       console.error('Request Setup Error:', error.message);
//     }
    
//     return Promise.reject(error);
//   }
// );

// export default function CheckoutDialog({ 
//   open, 
//   onClose,
//   cartItems,
//   totalPrice
// }: CheckoutDialogProps) {
//   const [isProcessing, setIsProcessing] = useState(false);
//   const { clearCart } = useCart();
//   const razorpayLoaded = useRef(false);
//   const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);

//   const [form, setForm] = useState<UserDetails>({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     pincode: "",
//     city: "",
//     state: "",
//     country: "India"
//   });

//   const [errors, setErrors] = useState<Partial<UserDetails>>({});

//   // Cleanup function
//   useEffect(() => {
//     return () => {
//       // Cancel any pending requests when component unmounts
//       if (cancelTokenSourceRef.current) {
//         cancelTokenSourceRef.current.cancel('Component unmounted');
//       }
//     };
//   }, []);

//   // Preload Razorpay script when dialog opens
//   useEffect(() => {
//     if (open && !razorpayLoaded.current) {
//       loadRazorpayScript();
//     }
//   }, [open]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//     if (errors[name as keyof UserDetails]) {
//       setErrors(prev => ({ ...prev, [name]: undefined }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: Partial<UserDetails> = {};
    
//     if (!form.name.trim()) newErrors.name = "Name is required";
    
//     if (!form.phone.trim()) {
//       newErrors.phone = "Phone is required";
//     } else if (!/^\d{10}$/.test(form.phone)) {
//       newErrors.phone = "Invalid 10-digit phone number";
//     }
    
//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       newErrors.email = "Invalid email format";
//     }
    
//     if (!form.address.trim()) newErrors.address = "Address is required";
    
//     if (!form.pincode.trim()) {
//       newErrors.pincode = "Pincode is required";
//     } else if (!/^\d{6}$/.test(form.pincode)) {
//       newErrors.pincode = "Invalid 6-digit pincode";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const loadRazorpayScript = async (): Promise<boolean> => {
//     return new Promise((resolve) => {
//       if (razorpayLoaded.current) {
//         resolve(true);
//         return;
//       }

//       if (window.Razorpay) {
//         razorpayLoaded.current = true;
//         resolve(true);
//         return;
//       }

//       // Check if script is already loading
//       const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
//       if (existingScript) {
//         existingScript.addEventListener('load', () => {
//           razorpayLoaded.current = true;
//           resolve(true);
//         });
//         existingScript.addEventListener('error', () => {
//           resolve(false);
//         });
//         return;
//       }

//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.async = true;
      
//       script.onload = () => {
//         razorpayLoaded.current = true;
//         console.log('Razorpay script loaded successfully');
//         resolve(true);
//       };
      
//       script.onerror = () => {
//         console.error('Razorpay script failed to load');
//         resolve(false);
//       };
      
//       document.body.appendChild(script);
//     });
//   };

//   const createOrderWithAxios = async (payload: any) => {
//     // Create cancel token for this request
//     const source = axios.CancelToken.source();
//     cancelTokenSourceRef.current = source;

//     try {
//       const response = await api.post('/api/orders/create', payload, {
//         cancelToken: source.token,
//       });
      
//       cancelTokenSourceRef.current = null;
//       return response.data;
      
//     } catch (error: any) {
//       cancelTokenSourceRef.current = null;
      
//       if (axios.isCancel(error)) {
//         throw new Error('Request cancelled');
//       }
      
//       throw error;
//     }
//   };

//   const getErrorMessage = (error: any): string => {
//     if (axios.isCancel(error)) {
//       return 'Request was cancelled';
//     }
    
//     if (error.code === 'ECONNABORTED') {
//       return 'Request timeout. Please check your internet connection.';
//     }
    
//     if (error.message?.includes('Network Error')) {
//       return 'Network error. Please check your internet connection.';
//     }
    
//     if (error.response) {
//       switch (error.response.status) {
//         case 400:
//           return error.response.data?.message || 'Invalid request. Please check your information.';
//         case 401:
//           return 'Authentication required.';
//         case 403:
//           return 'Access denied.';
//         case 404:
//           return 'API endpoint not found.';
//         case 429:
//           return 'Too many requests. Please wait a moment.';
//         case 500:
//           return 'Server error. Our team has been notified.';
//         case 502:
//         case 503:
//         case 504:
//           return 'Service temporarily unavailable. Please try again later.';
//         default:
//           return error.response.data?.message || `Server error (${error.response.status}).`;
//       }
//     }
    
//     return 'An unexpected error occurred. Please try again.';
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) {
//       toast.error('Please fill all required fields correctly');
//       return;
//     }

//     if (cartItems.length === 0) {
//       toast.error('Your cart is empty');
//       return;
//     }

//     setIsProcessing(true);

//     try {
//       // Load Razorpay script
//       const razorpayLoadedSuccess = await loadRazorpayScript();
//       if (!razorpayLoadedSuccess) {
//         throw new Error("Payment system is temporarily unavailable");
//       }

//       // Prepare order payload
//       const payload = {
//         orderNumber: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
//         orderToken: `TOKEN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
//         orderDate: new Date().toISOString(),
//         status: "PENDING",
//         total: totalPrice,
//         userDetails: form,
//         payment: {
//           method: "RAZORPAY",
//           status: "PENDING",
//           amount: totalPrice,
//           currency: "INR"
//         },
//         items: cartItems.map(item => ({
//           cartId: item.cartId,
//           productId: item.productId,
//           productName: item.productName,
//           quantity: item.quantity,
//           priceAtPurchase: item.productPrice
//         }))
//       };

//       console.log('Creating order with payload:', payload);

//       // Create order using axios
//       const orderData = await createOrderWithAxios(payload);
//       console.log('Order created successfully:', orderData);

//       // If no Razorpay order ID, save order and redirect
//       if (!orderData.razorpayOrderId) {
//         const orderDetails = {
//           id: orderData.orderId,
//           orderNumber: orderData.orderNumber,
//           date: new Date().toISOString(),
//           items: cartItems.map(item => ({
//             productId: item.productId,
//             productName: item.productName,
//             brand: item.brand,
//             productPrice: item.productPrice,
//             quantity: item.quantity,
//             productImageUrl: item.productImageUrl
//           })),
//           total: totalPrice,
//           paymentId: null,
//           userDetails: form,
//           status: "PENDING_PAYMENT"
//         };

//         localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
//         clearCart();
//         onClose();
//         window.location.href = `/success?order=${orderData.orderId}`;
//         return;
//       }

//       // Initialize Razorpay payment
//       const razorpayOptions = {
//         key: process.env.RAZORPAY_KEY || "rzp_test_RyebKpVLGH54Xb",
//         amount: Math.round(totalPrice * 100),
//         currency: "INR",
//         name: "Your Store",
//         description: `Order #${orderData.orderNumber}`,
//         order_id: orderData.razorpayOrderId,
//         handler: async (response: any) => {
//           console.log('Payment successful:', response);
          
//           try {
//             // Verify payment on backend
//             const verificationResponse = await api.post('/api/payments/verify', {
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             if (verificationResponse.data.success) {
//               // Save order details
//               const orderDetails = {
//                 id: orderData.orderId,
//                 orderNumber: orderData.orderNumber,
//                 date: new Date().toISOString(),
//                 items: cartItems.map(item => ({
//                   productId: item.productId,
//                   productName: item.productName,
//                   brand: item.brand,
//                   productPrice: item.productPrice,
//                   quantity: item.quantity,
//                   productImageUrl: item.productImageUrl
//                 })),
//                 total: totalPrice,
//                 paymentId: response.razorpay_payment_id,
//                 userDetails: form,
//                 status: "PAID"
//               };

//               localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
//               await clearCart();
//               onClose();
//               window.location.href = `/success?payment_id=${response.razorpay_payment_id}&order_id=${orderData.orderId}`;
//             } else {
//               toast.error('Payment verification failed');
//             }
//           } catch (verifyError) {
//             console.error('Payment verification error:', verifyError);
//             toast.error('Payment verification failed');
//           }
//         },
//         prefill: {
//           name: form.name,
//           email: form.email,
//           contact: form.phone
//         },
//         notes: {
//           address: form.address,
//           order_id: orderData.orderId
//         },
//         theme: {
//           color: "#3399cc"
//         },
//         modal: {
//           ondismiss: () => {
//             console.log('Payment modal dismissed');
//             toast.info("Payment cancelled. Your order has been saved.");
            
//             // Save order as pending payment
//             const orderDetails = {
//               id: orderData.orderId,
//               orderNumber: orderData.orderNumber,
//               date: new Date().toISOString(),
//               items: cartItems.map(item => ({
//                 productId: item.productId,
//                 productName: item.productName,
//                 brand: item.brand,
//                 productPrice: item.productPrice,
//                 quantity: item.quantity,
//                 productImageUrl: item.productImageUrl
//               })),
//               total: totalPrice,
//               paymentId: null,
//               userDetails: form,
//               status: "PAYMENT_PENDING"
//             };
            
//             localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
//             setIsProcessing(false);
//           }
//         },
//         retry: {
//           enabled: true,
//           max_count: 3
//         }
//       };

//       // Handle payment failures
//       const rzp = new window.Razorpay(razorpayOptions);
      
//       rzp.on('payment.failed', (response: any) => {
//         console.error('Payment failed:', response.error);
        
//         const orderDetails = {
//           id: orderData.orderId,
//           orderNumber: orderData.orderNumber,
//           date: new Date().toISOString(),
//           items: cartItems.map(item => ({
//             productId: item.productId,
//             productName: item.productName,
//             brand: item.brand,
//             productPrice: item.productPrice,
//             quantity: item.quantity,
//             productImageUrl: item.productImageUrl
//           })),
//           total: totalPrice,
//           paymentId: null,
//           userDetails: form,
//           status: "PAYMENT_FAILED",
//           error: response.error
//         };
        
//         localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
//         toast.error(`Payment failed: ${response.error.description}`);
//         setIsProcessing(false);
//       });
      
//       rzp.open();
      
//     } catch (error: any) {
//       console.error('Checkout error:', error);
      
//       const errorMessage = getErrorMessage(error);
//       toast.error(errorMessage);
      
//       // Save partial order on certain errors
//       if (!axios.isCancel(error) && error.response?.status !== 400) {
//         const fallbackOrder = {
//           id: `temp-${Date.now()}`,
//           orderNumber: `ORD-${Date.now()}`,
//           date: new Date().toISOString(),
//           items: cartItems,
//           total: totalPrice,
//           paymentId: null,
//           userDetails: form,
//           status: "ERROR",
//           error: error.message
//         };
        
//         localStorage.setItem("currentOrder", JSON.stringify(fallbackOrder));
//       }
      
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const handleCancel = () => {
//     // Cancel any pending requests
//     if (cancelTokenSourceRef.current) {
//       cancelTokenSourceRef.current.cancel('User cancelled checkout');
//     }
//     onClose();
//   };

//   return (
//     <Dialog open={open} onOpenChange={handleCancel}>
//       <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="text-center text-xl font-semibold">
//             Complete Your Order
//           </DialogTitle>
//         </DialogHeader>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Full Name *</label>
//             <Input
//               name="name"
//               placeholder="John Doe"
//               value={form.name}
//               onChange={handleChange}
//               className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
//               disabled={isProcessing}
//             />
//             {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Email *</label>
//             <Input
//               name="email"
//               placeholder="john@example.com"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
//               disabled={isProcessing}
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Phone Number *</label>
//             <Input
//               name="phone"
//               placeholder="9876543210"
//               type="tel"
//               value={form.phone}
//               onChange={handleChange}
//               className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
//               disabled={isProcessing}
//             />
//             {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Full Address *</label>
//             <Input
//               name="address"
//               placeholder="123 Main St, Apartment 4B"
//               value={form.address}
//               onChange={handleChange}
//               className={errors.address ? "border-red-500 focus-visible:ring-red-500" : ""}
//               disabled={isProcessing}
//             />
//             {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Pincode *</label>
//               <Input
//                 name="pincode"
//                 placeholder="110001"
//                 value={form.pincode}
//                 onChange={handleChange}
//                 className={errors.pincode ? "border-red-500 focus-visible:ring-red-500" : ""}
//                 disabled={isProcessing}
//               />
//               {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">City</label>
//               <Input
//                 name="city"
//                 placeholder="New Delhi"
//                 value={form.city}
//                 onChange={handleChange}
//                 disabled={isProcessing}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">State</label>
//               <Input
//                 name="state"
//                 placeholder="Delhi"
//                 value={form.state}
//                 onChange={handleChange}
//                 disabled={isProcessing}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Country</label>
//               <Input
//                 name="country"
//                 value={form.country}
//                 onChange={handleChange}
//                 disabled={isProcessing}
//               />
//             </div>
//           </div>

//           <div className="pt-4 border-t">
//             <div className="space-y-2 mb-4">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Subtotal</span>
//                 <span>₹{totalPrice.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Shipping</span>
//                 <span className="text-green-600">FREE</span>
//               </div>
//               <div className="flex justify-between text-lg font-bold">
//                 <span>Total</span>
//                 <span>₹{totalPrice.toFixed(2)}</span>
//               </div>
//             </div>
            
//             <Button 
//               className="w-full h-12 text-lg"
//               onClick={handleSubmit}
//               disabled={isProcessing}
//             >
//               {isProcessing ? (
//                 <div className="flex items-center justify-center gap-2">
//                   <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
//                   Processing...
//                 </div>
//               ) : (
//                 `Pay ₹${totalPrice.toFixed(2)}`
//               )}
//             </Button>
            
//             {isProcessing && (
//               <p className="text-center text-sm text-gray-500 mt-2">
//                 Please don't close this window while processing...
//               </p>
//             )}
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }
