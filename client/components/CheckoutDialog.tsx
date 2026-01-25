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


import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react"; // useRef जोड़ें
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";

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

export default function CheckoutDialog({ 
  open, 
  onClose,
  cartItems,
  totalPrice
}: CheckoutDialogProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { clearCart } = useCart();
  const razorpayLoaded = useRef(false); // Razorpay स्क्रिप्ट लोडिंग को ट्रैक करने के लिए

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

  // Razorpay स्क्रिप्ट को पहले से ही लोड करें
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

  const loadRazorpayScript = async () => {
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

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        razorpayLoaded.current = true;
        resolve(true);
      };
      script.onerror = () => {
        console.error('Razorpay script failed to load');
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsProcessing(true);

    try {
      // Razorpay स्क्रिप्ट लोड करें
      const razorpayLoadedSuccess = await loadRazorpayScript();
      if (!razorpayLoadedSuccess) {
        throw new Error("Payment system is temporarily unavailable");
      }

      const payload = {
        orderNumber: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        orderToken: `TOKEN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        orderDate: new Date().toISOString(),
        status: "PENDING",
        total: totalPrice,
        userDetails: form,
        payment: {
          method: "RAZORPAY",
          status: "PENDING",
          amount: totalPrice,
          currency: "INR"
        },
        items: cartItems.map(item => ({
          cartId: item.cartId,
          productId: item.productId,
          productName: item.productName,
          quantity: item.quantity,
          priceAtPurchase: item.productPrice
        }))
      };

      console.log('Sending order payload:', payload);

      const API_BASE_URL = "https://5170dd6c9895.ngrok-free.app";
      
      // Request options में timeout और retry logic जोड़ें
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 सेकंड timeout

      try {
        const response = await fetch(`${API_BASE_URL}/api/orders/create`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          let errorMessage = "Network error please refresh the page.";
          
          try {
            const errorData = await response.json();
            console.error('Server error response:', errorData);
            errorMessage = errorData.message || errorMessage;
            
            // 429 error के लिए विशेष संदेश
            if (response.status === 429) {
              errorMessage = "Too many requests. Please wait a moment and try again.";
            }
            
            // 500 error के लिए विशेष संदेश
            if (response.status === 500) {
              errorMessage = "Server error. Our team has been notified. Please try again in a few minutes.";
            }
          } catch (e) {
            console.error('Error parsing error response:', e);
          }
          
          throw new Error(errorMessage);
        }

        const orderData = await response.json();
        console.log('Order created successfully:', orderData);

        // यदि order database में create हो गया है लेकिन Razorpay order नहीं बना
        if (!orderData.razorpayOrderId) {
          // केवल order create करें और success पेज पर redirect करें
          const orderDetails = {
            id: orderData.orderId,
            orderNumber: orderData.orderNumber,
            date: new Date().toISOString(),
            items: cartItems.map(item => ({
              productId: item.productId,
              productName: item.productName,
              brand: item.brand,
              productPrice: item.productPrice,
              quantity: item.quantity,
              productImageUrl: item.productImageUrl
            })),
            total: totalPrice,
            paymentId: null,
            userDetails: form,
            status: "PENDING_PAYMENT"
          };

          localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
          clearCart();
          onClose();
          window.location.href = "/success?order=" + orderData.orderId;
          return;
        }

        // Razorpay payment options
        const options = {
          key: "rzp_test_RyebKpVLGH54Xb",
          amount: Math.round(totalPrice * 100), // रुपये को पैसे में बदलें
          currency: "INR",
          name: "Your Store",
          description: `Order #${orderData.orderNumber}`,
          order_id: orderData.razorpayOrderId,
          handler: (response: any) => {
            console.log('Payment successful:', response);
            
            const orderDetails = {
              id: orderData.orderId,
              orderNumber: orderData.orderNumber,
              date: new Date().toISOString(),
              items: cartItems.map(item => ({
                productId: item.productId,
                productName: item.productName,
                brand: item.brand,
                productPrice: item.productPrice,
                quantity: item.quantity,
                productImageUrl: item.productImageUrl
              })),
              total: totalPrice,
              paymentId: response.razorpay_payment_id,
              userDetails: form,
              status: "PAID"
            };

            localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
            clearCart();
            onClose();
            window.location.href = "/success?payment_id=" + response.razorpay_payment_id + "&order_id=" + orderData.orderId;
          },
          prefill: {
            name: form.name,
            email: form.email,
            contact: form.phone
          },
          notes: {
            address: form.address,
            order_id: orderData.orderId
          },
          theme: {
            color: "#3399cc"
          },
          modal: {
            ondismiss: () => {
              toast.info("Payment cancelled. Your order has been saved.");
              // Payment cancel होने पर भी order details save करें
              const orderDetails = {
                id: orderData.orderId,
                orderNumber: orderData.orderNumber,
                date: new Date().toISOString(),
                items: cartItems.map(item => ({
                  productId: item.productId,
                  productName: item.productName,
                  brand: item.brand,
                  productPrice: item.productPrice,
                  quantity: item.quantity,
                  productImageUrl: item.productImageUrl
                })),
                total: totalPrice,
                paymentId: null,
                userDetails: form,
                status: "PAYMENT_PENDING"
              };
              localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
            }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', (response: any) => {
          console.error('Payment failed:', response.error);
          toast.error(`Payment failed: ${response.error.description}`);
          
          // Payment fail होने पर भी order details save करें
          const orderDetails = {
            id: orderData.orderId,
            orderNumber: orderData.orderNumber,
            date: new Date().toISOString(),
            items: cartItems.map(item => ({
              productId: item.productId,
              productName: item.productName,
              brand: item.brand,
              productPrice: item.productPrice,
              quantity: item.quantity,
              productImageUrl: item.productImageUrl
            })),
            total: totalPrice,
            paymentId: null,
            userDetails: form,
            status: "PAYMENT_FAILED"
          };
          localStorage.setItem("currentOrder", JSON.stringify(orderDetails));
        });
        
        rzp.open();
        
      } catch (fetchError: any) {
        if (fetchError.name === 'AbortError') {
          throw new Error("Request timeout. Please check your internet connection and try again.");
        }
        throw fetchError;
      }

    } catch (err: any) {
      console.error('Checkout error:', err);
      
      // User-friendly error messages
      let errorMessage = "Network error please refresh the page.";
      
      if (err.message.includes("timeout")) {
        errorMessage = "Request timeout. Please check your internet connection.";
      } else if (err.message.includes("Too many requests")) {
        errorMessage = "Too many requests. Please wait a moment and try again.";
      } else if (err.message.includes("Server error")) {
        errorMessage = "Server error. Our team has been notified.";
      } else if (err.message.includes("temporarily unavailable")) {
        errorMessage = "Payment system is temporarily unavailable. Please try again later.";
      }
      
      toast.error(errorMessage);
      
      // Error को कंसोल में लॉग करें
      if (process.env.NODE_ENV === 'development') {
        console.error('Full error details:', err);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Complete Your Order</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="Full Name*"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <Input
              name="email"
              placeholder="Email*"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <Input
              name="phone"
              placeholder="Phone Number*"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Input
              name="address"
              placeholder="Full Address*"
              value={form.address}
              onChange={handleChange}
              className={errors.address ? "border-red-500" : ""}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                name="pincode"
                placeholder="Pincode*"
                value={form.pincode}
                onChange={handleChange}
                className={errors.pincode ? "border-red-500" : ""}
              />
              {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
            </div>
            <div>
              <Input
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
            />
            <Input
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
            />
          </div>

          <div className="pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Order Total:</span>
              <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
            </div>
            <Button 
              className="w-full mt-2" 
              onClick={handleSubmit}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Proceed to Payment"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
