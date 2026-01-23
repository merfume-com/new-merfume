// import "./global.css";

// import { Toaster } from "@/components/ui/toaster";
// import { createRoot } from "react-dom/client";
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

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/store" element={<Store />} />
//           <Route path="/ceo-vision" element={<CeoVision />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/cart" element={<Cart />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// createRoot(document.getElementById("root")!).render(<App />);


import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/components/CartContext";
import Home from "./pages/Home/page";
import About from "./pages/About";
import { TeamPage }  from "./pages/OurTeam";
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

const queryClient = new QueryClient();

const App = () => (
  <CartProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-team" element={<TeamPage />} />
            <Route path="/store" element={<Store />} />
            <Route path="/ceo-vision" element={<CeoVision />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/orders/:orderId" element={<OrderDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </CartProvider>
);

// createRoot(document.getElementById("root")!).render(<App />);
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
