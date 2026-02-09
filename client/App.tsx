// import "./global.css";
// import { Toaster } from "@/components/ui/toaster";
// import { createRoot } from "react-dom/client";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CartProvider } from "@/components/CartContext";
// import Home from "./pages/Home/page";
// import About from "./pages/About";
// import { TeamPage }  from "./pages/OurTeam";
// import Store from "./pages/Store";
// import CeoVision from "./pages/CeoVision";
// import Contact from "./pages/Contact";
// import Cart from "./pages/Cart";
// import NotFound from "./pages/NotFound";
// import Success from "./pages/Success";
// import AdminDashboard from "./pages/AdminDashboard";
// import CustomerDashboard from "./pages/CustomerDashboard";
// import OrderDetail from "./pages/OrderDetail";
// import AdminLogin from "./pages/AdminLogin";
// import ShippingPolicy from "./pages/ShippingPolicy";
// import TermsOfService from "./pages/TermsOfService";
// import RefundPolicy from "./pages/RefundPolicy";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import OrderTrackingPage from "./pages/OrderTrackingPage";

// const queryClient = new QueryClient();

// const App = () => (
//   <CartProvider>
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/our-team" element={<TeamPage />} />
//             <Route path="/store" element={<Store />} />
//             <Route path="/ceo-vision" element={<CeoVision />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/success" element={<Success />} />
//             <Route path="/adminsyed_musaib_aliposition=ceoemail=merfume.s@gmail.com" element={<AdminDashboard />} />
//            {/* <Route path="/customer-dashboard" element={<CustomerDashboard />} /> */}
//             <Route path="/track-order" element={<OrderTrackingPage />} />
//             <Route path="/admin/login" element={<AdminLogin />} />
//             <Route path="/admin/orders/:orderId" element={<OrderDetail />} />
//              <Route path="/shipping-policy" element={<ShippingPolicy />} />
//             <Route path="/terms-of-service" element={<TermsOfService />} />
//             <Route path="/refund-policy" element={<RefundPolicy />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   </CartProvider>
// );

// // createRoot(document.getElementById("root")!).render(<App />);
// export default App;


// import "./global.css";
// import { Toaster } from "@/components/ui/toaster";
// import { createRoot } from "react-dom/client";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CartProvider } from "@/components/CartContext";
// import { useEffect } from "react";
// import useFCMNotifications from "@/hooks/useFCMNotifications";
// import Home from "./pages/Home/page";
// import About from "./pages/About";
// import { TeamPage } from "./pages/OurTeam";
// import Store from "./pages/Store";
// import CeoVision from "./pages/CeoVision";
// import Contact from "./pages/Contact";
// import Cart from "./pages/Cart";
// import NotFound from "./pages/NotFound";
// import Success from "./pages/Success";
// import AdminDashboard from "./pages/AdminDashboard";
// import CustomerDashboard from "./pages/CustomerDashboard";
// import OrderDetail from "./pages/OrderDetail";
// import AdminLogin from "./pages/AdminLogin";
// import ShippingPolicy from "./pages/ShippingPolicy";
// import TermsOfService from "./pages/TermsOfService";
// import RefundPolicy from "./pages/RefundPolicy";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import OrderTrackingPage from "./pages/OrderTrackingPage";

// const queryClient = new QueryClient();

// // FCM Notification Handler Component
// const FCMNotificationHandler = () => {
//   const { setupMessageHandling } = useFCMNotifications();

//   useEffect(() => {
//     // Setup global notification handler
//     const handleNotificationClick = (payload: any) => {
//       console.log('Notification clicked:', payload);
      
//       // Handle notification actions
//       if (payload.data?.action === 'VIEW_PRODUCT' && payload.data?.productId) {
//         window.location.href = `/store?product=${payload.data.productId}`;
//       }
//     };

//     // Setup message handling with callback
//     setupMessageHandling((payload) => {
//       console.log('Message received in App:', payload);
      
//       // Handle notification actions
//       if (payload.data?.action === 'VIEW_PRODUCT' && payload.data?.productId) {
//         // You could use a router navigate here if you have access to router
//         console.log('Product notification received:', payload.data.productId);
//       }
//     });

//     // Add event listeners for notification clicks
//     if ('Notification' in window) {
//       // This will handle notifications created by the service worker
//       navigator.serviceWorker.addEventListener('message', (event) => {
//         if (event.data && event.data.type === 'NOTIFICATION_CLICK') {
//           handleNotificationClick(event.data.payload);
//         }
//       });
//     }

//     // Custom notification handler
//     const handleCustomNotification = () => {
//       if ('Notification' in window && Notification.permission === 'granted') {
//         // You can add custom notification logic here
//       }
//     };

//     return () => {
//       // Cleanup
//       if ('Notification' in window) {
//         navigator.serviceWorker.removeEventListener('message', () => {});
//       }
//     };
//   }, [setupMessageHandling]);

//   return null;
// };

// // Main App Component
// const App = () => {
//   return (
//     <CartProvider>
//       <QueryClientProvider client={queryClient}>
//         <TooltipProvider>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             {/* FCM Notification Handler */}
//             <FCMNotificationHandler />
            
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/our-team" element={<TeamPage />} />
//               <Route path="/store" element={<Store />} />
//               <Route path="/ceo-vision" element={<CeoVision />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/success" element={<Success />} />
//               <Route 
//                 path="/adminsyed_musaib_aliposition=ceoemail=merfume.s@gmail.com" 
//                 element={<AdminDashboard />} 
//               />
//               {/* <Route path="/customer-dashboard" element={<CustomerDashboard />} /> */}
//               <Route path="/track-order" element={<OrderTrackingPage />} />
//               <Route path="/admin/login" element={<AdminLogin />} />
//               <Route path="/admin/orders/:orderId" element={<OrderDetail />} />
//               <Route path="/shipping-policy" element={<ShippingPolicy />} />
//               <Route path="/terms-of-service" element={<TermsOfService />} />
//               <Route path="/refund-policy" element={<RefundPolicy />} />
//               <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </BrowserRouter>
//         </TooltipProvider>
//       </QueryClientProvider>
//     </CartProvider>
//   );
// };

// // If you're using createRoot (React 18+)
// // createRoot(document.getElementById("root")!).render(<App />);

// export default App;


import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/components/CartContext";
import { useEffect } from "react";
import useFCMNotifications from "@/hooks/useFCMNotifications";
import Home from "./pages/Home/page";
import About from "./pages/About";
import { TeamPage } from "./pages/OurTeam";
import Store from "./pages/Store";
import CeoVision from "./pages/CeoVision";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import OrderDetail from "./pages/OrderDetail";
import AdminLogin from "./pages/AdminLogin";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OrderTrackingPage from "./pages/OrderTrackingPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const queryClient = new QueryClient();

// FCM Notification Handler Component
const FCMNotificationHandler = () => {
  const { setupMessageHandling } = useFCMNotifications();

  useEffect(() => {
    // Setup message handling
    const messageHandler = (payload: any) => {
      console.log('Message received in App:', payload);
      
      // Handle notification actions
      if (payload.data?.action === 'VIEW_PRODUCT' && payload.data?.productId) {
        console.log('Product notification received:', payload.data.productId);
        // Navigate to product page when notification is clicked
        window.location.href = `/product/${payload.data.productId}`;
      }
    };

    setupMessageHandling(messageHandler);

    // Handle service worker messages for notification clicks
    const handleServiceWorkerMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'NOTIFICATION_CLICK') {
        console.log('Notification clicked via service worker:', event.data.payload);
        
        if (event.data.payload.productId) {
          window.location.href = `/product/${event.data.payload.productId}`;
        }
      }
    };

    // Add event listener for service worker messages
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.addEventListener('message', handleServiceWorkerMessage);
    }

    // Cleanup function
    return () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.removeEventListener('message', handleServiceWorkerMessage);
      }
    };
  }, [setupMessageHandling]);

  return null;
};

// Main App Component
const App = () => {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* FCM Notification Handler */}
            <FCMNotificationHandler />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-team" element={<TeamPage />} />
              <Route path="/store" element={<Store />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/ceo-vision" element={<CeoVision />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/success" element={<Success />} />
              <Route 
                path="/adminsyed_musaib_aliposition=ceoemail=merfume.s@gmail.com" 
                element={<AdminDashboard />} 
              />
              <Route path="/track-order" element={<OrderTrackingPage />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/orders/:orderId" element={<OrderDetail />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </CartProvider>
  );
};

export default App;



// // src/App.tsx
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { CartProvider } from '@/components/CartContext';
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Store from "./pages/Store";
// import CeoVision from "./pages/CeoVision";
// import Contact from "./pages/Contact";
// import Cart from "./pages/Cart";
// import NotFound from "./pages/NotFound";
// import Navigation from "@/components/Navigation";
// import "./global.css";

// const queryClient = new QueryClient();

// function App() {
//   useEffect(() => {
//     const loadRazorpay = () => {
//       return new Promise((resolve) => {
//         const script = document.createElement('script');
//         script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//         script.onload = () => resolve(true);
//         script.onerror = () => resolve(false);
//         document.body.appendChild(script);
//       });
//     };

//     loadRazorpay();
//   }, []);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <CartProvider>
//           <BrowserRouter>
//             <div className="min-h-screen bg-background">
//               <Navigation />
//               <Routes>
//                 <Route path="/" element={<Index />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/store" element={<Store />} />
//                 <Route path="/ceo-vision" element={<CeoVision />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//               <Toaster />
//               <Sonner />
//             </div>
//           </BrowserRouter>
//         </CartProvider>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }

// export default App;
