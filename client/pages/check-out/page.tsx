// // /client/pages/success.tsx
// "use client";

// import { useCart } from "@/components/CartContext";
// import { Button } from "@/components/ui/button";
// import { Download, ShoppingBag } from "lucide-react";
// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// export default function Success() {
//   const { currentOrder, clearCart } = useCart();

//   const navigate = useNavigate();
//   navigate('/');

//  useEffect(() => {
//     if (!currentOrder) {
//       navigate("/");
//     }
//   }, [currentOrder, navigate]);

//   if (!currentOrder) return null;

//   const downloadReceipt = () => {
//   const input = document.getElementById("receipt");
//   if (input) {
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");

//       const pageWidth = pdf.internal.pageSize.getWidth();
//       const pageHeight = pdf.internal.pageSize.getHeight();

//       const canvasWidth = canvas.width;
//       const canvasHeight = canvas.height;

//       const imgProps = {
//         width: pageWidth,
//         height: (canvasHeight * pageWidth) / canvasWidth,
//       };

//       pdf.addImage(imgData, "PNG", 0, 0, imgProps.width, imgProps.height);
//       pdf.save(`merfume-order-${currentOrder.id}.pdf`);
//     });
//   }
// };

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-12">
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
//           <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
//           <p className="text-muted-foreground">
//             Thank you for your purchase. Your order #{currentOrder.id} has been confirmed.
//           </p>
//         </div>

//         <div id="receipt" className="bg-white p-8 rounded-lg shadow-lg mb-8">
//           {/* Receipt content same as before */}
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button
//             className="bg-gold hover:bg-gold-dark text-luxury-black"
//             onClick={downloadReceipt}
//           >
//             <Download className="h-4 w-4 mr-2" />
//             Download Receipt
//           </Button>
//           <Link to="/store">
//             <Button variant="outline">
//               <ShoppingBag className="h-4 w-4 mr-2" />
//               Continue Shopping
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


// success.tsx
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Download, ShoppingBag } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// interface OrderItem {
//   id: string;
//   name: string;
//   brand: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// interface Order {
//   id: string;
//   date: string;
//   items: OrderItem[];
//   total: number;
//   paymentId: string;
// }

// export default function Success() {
//   const [order, setOrder] = useState<Order | null>(null);
//   const navigate = useNavigate();

//   // In your Success.tsx component
// useEffect(() => {
//   const savedOrder = localStorage.getItem("currentOrder");

//   if (savedOrder) {
//     try {
//       const parsedOrder: Order = JSON.parse(savedOrder);
//       setOrder(parsedOrder);

//       // ✅ Save for admin
//       localStorage.setItem(`order_${parsedOrder.id}`, savedOrder);

//       // ✅ Send to backend
//       fetch("http://localhost:8081/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(parsedOrder),
//       })
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error("Backend response was not OK");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           console.log("✅ Order successfully sent to backend", data);
//         })
//         .catch((err) => {
//           console.error("❌ Failed to send order to backend", err);
//         });

//       localStorage.removeItem("cart");
//       localStorage.removeItem("currentOrder");
//     } catch (error) {
//       console.error("Failed to parse order", error);
//       navigate("/store");
//     }
//   } else {
//     navigate("/store");
//   }
// }, [navigate]);


//   const downloadReceipt = () => {
//     const input = document.getElementById("receipt");
//     if (input) {
//       html2canvas(input).then((canvas) => {
//         const imgData = canvas.toDataURL("image/png");
//         const pdf = new jsPDF("p", "mm", "a4");
//         const pageWidth = pdf.internal.pageSize.getWidth();
//         const canvasWidth = canvas.width;
//         const canvasHeight = canvas.height;
//         const imgHeight = (canvasHeight * pageWidth) / canvasWidth;

//         pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
//         pdf.save(`receipt_${order?.id}.pdf`);
//       });
//     }
//   };

//   if (!order) return null;

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-12">
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
//           <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
//           <p className="text-muted-foreground">
//             Thank you for your purchase. Your order #{order.id} has been confirmed.
//           </p>
//         </div>

//         {/* Receipt */}
//         <div id="receipt" className="bg-white p-8 rounded-lg shadow-lg mb-8">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <h2 className="text-xl font-bold text-foreground">Merfume</h2>
//               <p className="text-muted-foreground">Order #{order.id}</p>
//               <p className="text-sm text-muted-foreground">Payment ID: {order.paymentId}</p>
//             </div>
//             <div className="text-right">
//               <p className="text-muted-foreground">{new Date(order.date).toLocaleDateString()}</p>
//               <p className="text-muted-foreground">{new Date(order.date).toLocaleTimeString()}</p>
//             </div>
//           </div>

//           <div className="border-t border-b border-gray-200 py-4 my-4">
//             {order.items.map((item) => (
//               <div key={item.id} className="flex justify-between mb-3">
//                 <div>
//                   <p className="font-medium text-foreground">{item.name}</p>
//                   <p className="text-sm text-muted-foreground">{item.brand}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-foreground">${item.price.toFixed(2)}</p>
//                   <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-right mt-6">
//             <div className="flex justify-between max-w-xs ml-auto mb-2">
//               <span className="text-muted-foreground">Subtotal:</span>
//               <span className="font-medium">${order.total.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between max-w-xs ml-auto mb-2">
//               <span className="text-muted-foreground">Shipping:</span>
//               <span className="font-medium">FREE</span>
//             </div>
//             <div className="flex justify-between max-w-xs ml-auto text-lg font-bold mt-4">
//               <span>Total:</span>
//               <span className="text-gold">${order.total.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button
//             className="bg-gold hover:bg-gold-dark text-luxury-black"
//             onClick={downloadReceipt}
//           >
//             <Download className="h-4 w-4 mr-2" />
//             Download Receipt
//           </Button>
//           <Link to="/store">
//             <Button variant="outline">
//               <ShoppingBag className="h-4 w-4 mr-2" />
//               Continue Shopping
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Download, ShoppingBag } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// interface OrderItem {
//   id: string;
//   name: string;
//   brand: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// interface Order {
//   id: string;
//   date: string;
//   items: OrderItem[];
//   total: number;
//   paymentId: string;
// }

// export default function Success() {
//   const [order, setOrder] = useState<Order | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedOrder = localStorage.getItem("currentOrder");

//     if (savedOrder) {
//       try {
//         const parsedOrder: Order = JSON.parse(savedOrder);
//         setOrder(parsedOrder);

//         // Send to backend
//         fetch("https://5170dd6c9895.ngrok-free.app/api/send-orders", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: savedOrder,
//         })
//           .then((res) => res.json())
//           .then((res) => console.log("Order sent:", res))
//           .catch((err) => console.error("Send order failed", err));

//         localStorage.setItem(`order_${parsedOrder.id}`, savedOrder);
//         localStorage.removeItem("cart");
//         localStorage.removeItem("currentOrder");
//       } catch (error) {
//         console.error("Failed to parse order", error);
//         navigate("/store");
//       }
//     } else {
//       navigate("/store");
//     }
//   }, [navigate]);

//   const downloadReceipt = () => {
//     const input = document.getElementById("receipt");
//     if (input && order) {
//       html2canvas(input).then((canvas) => {
//         const imgData = canvas.toDataURL("image/png");
//         const pdf = new jsPDF("p", "mm", "a4");
//         const pageWidth = pdf.internal.pageSize.getWidth();
//         const imgHeight = (canvas.height * pageWidth) / canvas.width;
//         pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
//         pdf.save(`receipt_${order.id}.pdf`);
//       });
//     }
//   };

//   if (!order) return null;

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="max-w-4xl mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
//           <h1 className="text-3xl font-bold">Order Confirmed!</h1>
//           <p>Order #{order.id} confirmed successfully.</p>
//         </div>

//         <div id="receipt" className="bg-white p-6 rounded-lg shadow-lg mb-8">
//           <div className="flex justify-between">
//             <div>
//               <h2 className="text-xl font-bold">Merfume</h2>
//               <p>Order #{order.id}</p>
//               <p>Payment ID: {order.paymentId}</p>
//             </div>
//             <div className="text-right">
//               <p>{new Date(order.date).toLocaleDateString()}</p>
//               <p>{new Date(order.date).toLocaleTimeString()}</p>
//             </div>
//           </div>

//           <div className="border-t border-b py-4 my-4">
//             {order.items.map((item) => (
//               <div key={item.id} className="flex justify-between mb-2">
//                 <div>
//                   <p>{item.name}</p>
//                   <p className="text-sm text-gray-500">{item.brand}</p>
//                 </div>
//                 <div className="text-right">
//                   <p>₹{item.price.toFixed(2)}</p>
//                   <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-right mt-6">
//             <p>Subtotal: ₹{order.total.toFixed(2)}</p>
//             <p>Shipping: ₹0.00</p>
//             <p className="font-bold">Total: ₹{order.total.toFixed(2)}</p>
//           </div>
//         </div>

//         <div className="flex gap-4 justify-center">
//           <Button onClick={downloadReceipt} className="bg-gold text-black">
//             <Download className="h-4 w-4 mr-2" /> Download Receipt
//           </Button>
//           <Link to="/store">
//             <Button variant="outline">
//               <ShoppingBag className="h-4 w-4 mr-2" />
//               Continue Shopping
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ShoppingBag, CheckCircle, Truck, Package, Clock, Phone, Mail, Home } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import { toast } from "sonner";

interface OrderItem {
  productId: number;
  productName: string;
  brand: string;
  productPrice: number;
  quantity: number;
  productImageUrl: string;
}

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

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: OrderItem[];
  total: number;
  paymentId: string | null;
  userDetails: UserDetails;
  status: "PENDING" | "PAID" | "PAYMENT_PENDING" | "PAYMENT_FAILED" | "PROCESSING" | "SHIPPED" | "DELIVERED";
  paymentMethod?: string;
  shippingMethod?: string;
  estimatedDelivery?: string;
}

// Create axios instance
const api = axios.create({
  baseURL: "https://6a3dfa7e05c5.ngrok-free.app",
  // timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
    "Accept": "application/json",
  },
});

// Add retry interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (!error.response && !originalRequest?._retry) {
      originalRequest._retry = true;
      await new Promise(resolve => setTimeout(resolve, 1500));
      return api(originalRequest);
    }
    
    return Promise.reject(error);
  }
);

export default function Success() {
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [orderStatus, setOrderStatus] = useState<Order["status"]>("PENDING");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const orderId = searchParams.get("order");
  const paymentId = searchParams.get("payment_id");

  const saveOrderToBackend = async (orderData: Order) => {
    if (isSending) return;
    
    setIsSending(true);
    
    try {
      console.log("Sending order to backend:", orderData);
      
      const response = await api.post("/api/orders/save", {
        ...orderData,
        timestamp: new Date().toISOString(),
        source: "web-checkout",
      });
      
      console.log("Order saved to backend:", response.data);
      
      // Update order status if payment was successful
      if (paymentId) {
        const updateResponse = await api.patch(`/api/orders/${orderData.id}/status`, {
          status: "PAID",
          paymentId: paymentId,
          paymentConfirmedAt: new Date().toISOString(),
        });
        
        setOrderStatus("PAID");
        console.log("Order status updated:", updateResponse.data);
      }
      
      return response.data;
      
    } catch (error: any) {
      console.error("Failed to save order to backend:", error);
      
      // Show user-friendly error message
      let errorMessage = "Failed to save order details. ";
      
      if (error.code === "ECONNABORTED") {
        errorMessage += "Request timeout. Your order is saved locally.";
      } else if (error.message?.includes("Network Error")) {
        errorMessage += "Network error. Your order is saved locally.";
      } else if (error.response?.status === 409) {
        errorMessage = "Order already exists in our system.";
      } else {
        errorMessage += "Please contact support with your order number.";
      }
      
      toast.warning(errorMessage, {
        duration: 5000,
      });
      
      // Save order locally as backup
      localStorage.setItem(`order_${orderData.id}_local`, JSON.stringify({
        ...orderData,
        savedAt: new Date().toISOString(),
        backendError: error.message,
      }));
      
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    const loadOrder = async () => {
      setIsLoading(true);
      
      try {
        // First check URL parameters
        if (orderId) {
          // Try to fetch order from backend
          try {
            const response = await api.get(`/api/orders/${orderId}`);
            if (response.data) {
              setOrder(response.data);
              setOrderStatus(response.data.status || "PROCESSING");
              setIsLoading(false);
              return;
            }
          } catch (fetchError) {
            console.log("Order not found in backend, checking localStorage...");
          }
        }
        
        // Check localStorage for current order
        const savedOrder = localStorage.getItem("currentOrder");
        
        if (savedOrder) {
          try {
            const parsedOrder: Order = JSON.parse(savedOrder);
            
            // Update with URL parameters if available
            if (paymentId) {
              parsedOrder.paymentId = paymentId;
              parsedOrder.status = "PAID";
            }
            
            if (orderId && !parsedOrder.id.startsWith("temp-")) {
              parsedOrder.id = orderId;
            }
            
            setOrder(parsedOrder);
            setOrderStatus(parsedOrder.status || "PROCESSING");
            
            // Save order to backend
            await saveOrderToBackend(parsedOrder);
            
            // Save to order history
            localStorage.setItem(`order_${parsedOrder.id}`, JSON.stringify(parsedOrder));
            
            // Clear current order and cart
            setTimeout(() => {
              localStorage.removeItem("currentOrder");
              localStorage.removeItem("cart");
            }, 1000);
            
          } catch (parseError) {
            console.error("Failed to parse order:", parseError);
            toast.error("Invalid order data. Please contact support.");
            navigate("/store");
          }
        } else if (orderId) {
          // Try to load from order history
          const orderFromHistory = localStorage.getItem(`order_${orderId}`);
          
          if (orderFromHistory) {
            const parsedOrder: Order = JSON.parse(orderFromHistory);
            setOrder(parsedOrder);
            setOrderStatus(parsedOrder.status || "PROCESSING");
          } else {
            toast.error("Order not found. Please check your order history.");
            navigate("/store");
          }
        } else {
          toast.error("No order found. Please return to store.");
          navigate("/store");
        }
        
      } catch (error) {
        console.error("Error loading order:", error);
        toast.error("An error occurred while loading your order.");
        navigate("/store");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadOrder();
  }, [orderId, paymentId, navigate]);

  const downloadReceipt = async () => {
    if (!order || isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      const input = document.getElementById("receipt");
      
      if (!input) {
        throw new Error("Receipt element not found");
      }
      
      toast.info("Generating receipt...", { duration: 2000 });
      
      const canvas = await html2canvas(input, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * pageWidth) / canvas.width;
      
      // Add receipt content
      pdf.setFontSize(20);
      pdf.setTextColor(33, 150, 243);
      pdf.text("MERFUME", pageWidth / 2, 15, { align: "center" });
      
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0);
      pdf.text("Order Receipt", pageWidth / 2, 25, { align: "center" });
      
      // Add receipt image
      pdf.addImage(imgData, "PNG", 10, 35, pageWidth - 20, imgHeight * 0.8);
      
      // Add footer
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text("Thank you for your purchase!", pageWidth / 2, pdf.internal.pageSize.getHeight() - 15, { align: "center" });
      pdf.text("For any queries, contact: support@merfume.com", pageWidth / 2, pdf.internal.pageSize.getHeight() - 10, { align: "center" });
      
      // Save the PDF
      pdf.save(`Merfume_Receipt_${order.orderNumber || order.id}.pdf`);
      
      toast.success("Receipt downloaded successfully!", { duration: 3000 });
      
    } catch (error) {
      console.error("Error downloading receipt:", error);
      toast.error("Failed to download receipt. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "PAID":
      case "DELIVERED":
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case "SHIPPED":
        return <Truck className="h-6 w-6 text-blue-500" />;
      case "PROCESSING":
        return <Package className="h-6 w-6 text-yellow-500" />;
      case "PENDING":
      case "PAYMENT_PENDING":
        return <Clock className="h-6 w-6 text-orange-500" />;
      case "PAYMENT_FAILED":
        return <Clock className="h-6 w-6 text-red-500" />;
      default:
        return <CheckCircle className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "PAID":
        return "Payment Successful";
      case "PROCESSING":
        return "Order Processing";
      case "SHIPPED":
        return "Order Shipped";
      case "DELIVERED":
        return "Delivered";
      case "PENDING":
        return "Order Pending";
      case "PAYMENT_PENDING":
        return "Payment Pending";
      case "PAYMENT_FAILED":
        return "Payment Failed";
      default:
        return "Order Confirmed";
    }
  };

  const getStatusDescription = (status: Order["status"]) => {
    switch (status) {
      case "PAID":
        return "Your payment was successful and your order is being processed.";
      case "PROCESSING":
        return "We're preparing your order for shipment.";
      case "SHIPPED":
        return "Your order has been shipped. Tracking details will be sent to your email.";
      case "DELIVERED":
        return "Your order has been delivered. Enjoy your purchase!";
      case "PENDING":
        return "Your order is being processed.";
      case "PAYMENT_PENDING":
        return "Your order is confirmed but payment is pending.";
      case "PAYMENT_FAILED":
        return "Payment failed. Please contact support to complete your order.";
      default:
        return "Your order has been confirmed.";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold">Loading your order...</h2>
          <p className="text-muted-foreground mt-2">Please wait while we process your order details.</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return null;
  }

  const subtotal = order.items.reduce((sum, item) => sum + (item.productPrice * item.quantity), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-green-100">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold mb-3">Thank You for Your Order!</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your order has been received and is being processed. We've sent a confirmation email to{" "}
            <span className="font-medium text-foreground">{order.userDetails.email}</span>
          </p>
        </div>

        {/* Order Status Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-green-100">
          <div className="flex items-center gap-4 mb-4">
            {getStatusIcon(orderStatus)}
            <div className="flex-1">
              <h3 className="text-xl font-bold">{getStatusText(orderStatus)}</h3>
              <p className="text-muted-foreground">{getStatusDescription(orderStatus)}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                #{order.orderNumber || order.id.substring(0, 8)}
              </div>
              <div className="text-sm text-muted-foreground">Order Number</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {order.items.reduce((sum, item) => sum + item.quantity, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Items</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                ₹{total.toFixed(2)}
              </div>
              <div className="text-sm text-muted-foreground">Total Amount</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Receipt */}
          <div className="lg:col-span-2 space-y-8">
            {/* Receipt Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8" id="receipt">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b">
                <div>
                  <h2 className="text-2xl font-bold text-primary">MERFUME</h2>
                  <p className="text-muted-foreground">Luxury Fragrances Store</p>
                  <p className="text-sm text-muted-foreground mt-2">support@merfume.com</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <h3 className="text-xl font-bold">INVOICE</h3>
                  <p className="text-muted-foreground">#{order.orderNumber || order.id}</p>
                  <p className="text-sm text-muted-foreground mt-1">{formatDate(order.date)}</p>
                </div>
              </div>

              {/* Customer Details */}
              <div className="mb-8">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Customer Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">{order.userDetails.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Phone className="h-3 w-3" />
                      {order.userDetails.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Mail className="h-3 w-3" />
                      {order.userDetails.email}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">{order.userDetails.address}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {order.userDetails.city}, {order.userDetails.state} - {order.userDetails.pincode}
                    </p>
                    <p className="text-sm text-muted-foreground">{order.userDetails.country}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Order Details</h4>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center border-b pb-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 border">
                        <img
                          src={item.productImageUrl}
                          alt={item.productName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium">{item.productName}</h5>
                        <p className="text-sm text-muted-foreground">{item.brand}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm">Qty: {item.quantity}</span>
                          <span className="text-sm">Size: 100ml</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{(item.productPrice * item.quantity).toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">₹{item.productPrice.toFixed(2)} each</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Summary */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Payment Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (GST)</span>
                    <span>₹0.00</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              {order.paymentId && (
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Payment Information</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm">Payment ID: {order.paymentId}</p>
                      <p className="text-xs text-muted-foreground">Paid via Razorpay</p>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      PAID
                    </div>
                  </div>
                </div>
              )}

              {/* Footer Note */}
              <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
                <p>Thank you for shopping with MERFUME!</p>
                <p className="mt-1">For any queries, contact us at support@merfume.com or call +91-9876543210</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={downloadReceipt}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Generating...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Download Receipt
                  </span>
                )}
              </Button>
              
              <Link to="/store" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full px-8 py-6 text-lg border-2 hover:bg-primary hover:text-white transition-all"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Continue Shopping
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Order Progress & Help */}
          <div className="space-y-8">
            {/* Order Progress */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-semibold mb-6 text-lg">Order Progress</h4>
              <div className="space-y-6">
                {["ORDER_CONFIRMED", "PROCESSING", "SHIPPED", "DELIVERED"].map((step, index) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index === 0 ? "bg-green-100 text-green-600" : "bg-muted text-muted-foreground"
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">
                        {step.replace("_", " ")}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {index === 0 ? "Order confirmed and payment received" :
                         index === 1 ? "Preparing your order for shipment" :
                         index === 2 ? "Package is on its way to you" :
                         "Your order has been delivered"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="font-semibold mb-4 text-primary">Need Help?</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-sm">Track Your Order</p>
                  <p className="text-sm text-muted-foreground">
                    You'll receive tracking information via email once your order ships.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-sm">Contact Support</p>
                  <p className="text-sm text-muted-foreground">
                    Email: support@merfume.com
                    <br />
                    Phone: +91-9876543210
                  </p>
                </div>
                <div>
                  <p className="font-medium text-sm">Return Policy</p>
                  <p className="text-sm text-muted-foreground">
                    30-day return policy. Items must be unopened and in original packaging.
                  </p>
                </div>
              </div>
            </div>

            {/* Estimated Delivery */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Estimated Delivery
              </h4>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold text-primary">3-5 Business Days</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Delivery times may vary based on your location.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 pt-8 border-t text-sm text-muted-foreground">
          <p>
            A confirmation email has been sent to {order.userDetails.email}. 
            Please check your spam folder if you don't see it in your inbox.
          </p>
        </div>
      </div>
    </div>
  );
}
