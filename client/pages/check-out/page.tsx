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


import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface OrderItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  paymentId: string;
}

export default function Success() {
  const [order, setOrder] = useState<Order | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = localStorage.getItem("currentOrder");

    if (savedOrder) {
      try {
        const parsedOrder: Order = JSON.parse(savedOrder);
        setOrder(parsedOrder);

        // Send to backend
        fetch("https://5170dd6c9895.ngrok-free.app/api/send-orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: savedOrder,
        })
          .then((res) => res.json())
          .then((res) => console.log("Order sent:", res))
          .catch((err) => console.error("Send order failed", err));

        localStorage.setItem(`order_${parsedOrder.id}`, savedOrder);
        localStorage.removeItem("cart");
        localStorage.removeItem("currentOrder");
      } catch (error) {
        console.error("Failed to parse order", error);
        navigate("/store");
      }
    } else {
      navigate("/store");
    }
  }, [navigate]);

  const downloadReceipt = () => {
    const input = document.getElementById("receipt");
    if (input && order) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * pageWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
        pdf.save(`receipt_${order.id}.pdf`);
      });
    }
  };

  if (!order) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">Order Confirmed!</h1>
          <p>Order #{order.id} confirmed successfully.</p>
        </div>

        <div id="receipt" className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold">Merfume</h2>
              <p>Order #{order.id}</p>
              <p>Payment ID: {order.paymentId}</p>
            </div>
            <div className="text-right">
              <p>{new Date(order.date).toLocaleDateString()}</p>
              <p>{new Date(order.date).toLocaleTimeString()}</p>
            </div>
          </div>

          <div className="border-t border-b py-4 my-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-500">{item.brand}</p>
                </div>
                <div className="text-right">
                  <p>₹{item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right mt-6">
            <p>Subtotal: ₹{order.total.toFixed(2)}</p>
            <p>Shipping: ₹0.00</p>
            <p className="font-bold">Total: ₹{order.total.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button onClick={downloadReceipt} className="bg-gold text-black">
            <Download className="h-4 w-4 mr-2" /> Download Receipt
          </Button>
          <Link to="/store">
            <Button variant="outline">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

