// // context/CartContext.tsx
// import { createContext, useContext, useState, ReactNode, useMemo, useEffect } from "react";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
//   brand: string;
// }

// interface Order {
//   id: string;
//   items: CartItem[];
//   total: number;
//   date: string;
//   paymentId: string;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   clearCart: () => void;
//   totalItems: number;
//   totalPrice: number;
//   checkout: () => Promise<void>;
//   currentOrder: Order | null;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) throw new Error("useCart must be used within CartProvider");
//   return context;
// };

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

//   // Load cart from localStorage on initial render
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
    
//     const savedOrder = localStorage.getItem('currentOrder');
//     if (savedOrder) {
//       setCurrentOrder(JSON.parse(savedOrder));
//     }
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   // Save order to localStorage whenever it changes
//   useEffect(() => {
//     if (currentOrder) {
//       localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
//     }
//   }, [currentOrder]);

//   const totalItems = useMemo(() => 
//     cart.reduce((total, item) => total + item.quantity, 0), 
//     [cart]
//   );

//   const totalPrice = useMemo(() =>
//     cart.reduce((total, item) => total + (item.price * item.quantity), 0),
//     [cart]
//   );

//   const addToCart = (item: CartItem) => {
//     setCart((prev) => {
//       const existing = prev.find((i) => i.id === item.id);
//       if (existing) {
//         return prev.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity <= 0) {
//       removeFromCart(id);
//       return;
//     }

//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem('cart');
//   };

//   const checkout = async () => {
//     try {
//       const options = {
//         key: 'rzp_test_E6f3s8PsZ5lTdu',
//         amount: totalPrice * 100, // in paise
//         currency: 'INR',
//         name: 'Merfume',
//         description: 'Luxury Fragrances',
//         handler: function(response: any) {
//           // Create order record
//           const order: Order = {
//             id: `order_${Date.now()}`,
//             items: cart,
//             total: totalPrice,
//             date: new Date().toISOString(),
//             paymentId: response.razorpay_payment_id
//           };

//           setCurrentOrder(order);
//           clearCart();
//         },
//         prefill: {
//           name: 'Customer Name',
//           email: 'customer@example.com',
//           contact: '9999999999'
//         },
//         theme: {
//           color: '#D4AF37'
//         }
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error('Checkout error:', error);
//       alert('Checkout failed. Please try again.');
//     }
//   };

//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//     totalItems,
//     totalPrice,
//     checkout,
//     currentOrder
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// import { createContext, useContext, useState, ReactNode, useMemo, useEffect } from "react";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
//   brand: string;
// }

// interface Order {
//   id: string;
//   items: CartItem[];
//   total: number;
//   date: string;
//   paymentId: string;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   clearCart: () => void;
//   totalItems: number;
//   totalPrice: number;
//   checkout: () => Promise<void>;
//   currentOrder: Order | null;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) throw new Error("useCart must be used within CartProvider");
//   return context;
// };

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
    
//     const savedOrder = localStorage.getItem('currentOrder');
//     if (savedOrder) {
//       setCurrentOrder(JSON.parse(savedOrder));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   useEffect(() => {
//     if (currentOrder) {
//       localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
//     }
//   }, [currentOrder]);

//   const totalItems = useMemo(() => 
//     cart.reduce((total, item) => total + item.quantity, 0), 
//     [cart]
//   );

//   const totalPrice = useMemo(() =>
//     cart.reduce((total, item) => total + (item.price * item.quantity), 0),
//     [cart]
//   );

//   const addToCart = (item: CartItem) => {
//     setCart((prev) => {
//       const existing = prev.find((i) => i.id === item.id);
//       if (existing) {
//         return prev.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity <= 0) {
//       removeFromCart(id);
//       return;
//     }

//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem('cart');
//   };

//  // In your CartContext
// const checkout = async () => {
//   try {
//     const options = {
//       key: 'rzp_test_E6f3s8PsZ5lTdu',
//       amount: totalPrice * 100,
//       currency: 'INR',
//       name: 'Merfume',
//       description: 'Luxury Fragrances',
//       handler: function(response: any) {
//         const order: Order = {
//           id: `order_${Date.now()}`,
//           items: cart,
//           total: totalPrice,
//           date: new Date().toISOString(),
//           paymentId: response.razorpay_payment_id
//         };
//         setCurrentOrder(order);
//         clearCart();
//         // Redirect to success page after payment
//         window.location.href = '/success'; // or use navigate if you prefer
//       },
//       prefill: {
//         name: 'Customer Name',
//         email: 'customer@example.com',
//         contact: '+917489635061'
//       },
//       theme: {
//         color: '#D4AF37'
//       }
//     };

//     const rzp = new (window as any).Razorpay(options);
//     rzp.open();
//   } catch (error) {
//     console.error('Checkout error:', error);
//     alert('Checkout failed. Please try again.');
//   }
// };

//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//     totalItems,
//     totalPrice,
//     checkout,
//     currentOrder
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// }

import { createContext, useContext, ReactNode, useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

interface CartItem {
  cartId: number;
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
  date: string;
  items: CartItem[];
  total: number;
  paymentId: string;
  userDetails: UserDetails;
}

interface CartContextType {
  cart: CartItem[];
  cartToken: string | null;
  totalItems: number;
  totalPrice: number;
  fetchCartItems: () => Promise<void>;
  removeFromCart: (cartId: number) => Promise<void>;
  updateQuantity: (itemId: number, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  checkout: (userDetails: UserDetails) => Promise<void>;
  currentOrder: Order | null;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  cartToken: null,
  totalItems: 0,
  totalPrice: 0,
  fetchCartItems: async () => {},
  removeFromCart: async () => {},
  updateQuantity: async () => {},
  clearCart: async () => {},
  checkout: async () => {},
  currentOrder: null,
});


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartToken, setCartToken] = useState<string | null>(null);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  // Initialize cart token from localStorage or generate a new one
  useEffect(() => {
    const token = localStorage.getItem('cartToken') || generateCartToken();
    setCartToken(token);
    localStorage.setItem('cartToken', token);
  }, []);

  const generateCartToken = () => {
    return 'cart-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };


  const API_BASE_URL = "https://5170dd6c9895.ngrok-free.app";//${API_BASE_URL}

  const fetchCartItems = useCallback(async () => {
    if (!cartToken) return;

    try {
      const response = await fetch('https://5170dd6c9895.ngrok-free.app/api/cart/items', {
        headers: {
          'Content-Type': 'application/json',
          'Cart-Token': cartToken,
          'ngrok-skip-browser-warning': '69420'
        },
      });

      if (!response.ok) throw new Error('Network error please refresh the page.');

      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      toast.error('Network error please refresh the page.');
    }
  }, [cartToken]);

  const removeFromCart = async (cartId: number) => {
  if (!cartToken) return;

  try {
    const response = await fetch(`https://5170dd6c9895.ngrok-free.app/api/cart/remove/${cartId}`, {
      method: 'DELETE',
      headers: {
        'Cart-Token': cartToken,
        'ngrok-skip-browser-warning': '69420'
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Network error please refresh the page.');
    }

    await fetchCartItems();
    toast.success('Item removed from cart');
  } catch (error: any) {
    console.error('Error removing from cart:', error);
    toast.error(error.message || 'Network error please refresh the page.');
  }
};

  const updateQuantity = async (itemId: number, quantity: number) => {
    if (!cartToken) return;
    if (quantity < 1) return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/cart/update/${itemId}?quantity=${quantity}`,
        {
          method: 'PUT',
          headers: {
            'Cart-Token': cartToken,
            'ngrok-skip-browser-warning': '69420'
          },
        }
      );

      if (!response.ok) throw new Error('Network error please refresh the page.');

      await fetchCartItems();
      toast.success('Quantity updated');
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast.error('Network error please refresh the page.');
    }
  };

  // Update clearCart
const clearCart = async () => {
  if (!cartToken) return;

  try {
    const response = await fetch('https://5170dd6c9895.ngrok-free.app/api/cart/clear', {
      method: 'DELETE',
      headers: {
        'Cart-Token': cartToken,
        'ngrok-skip-browser-warning': '69420'
      },
    });

    if (!response.ok) throw new Error('Network error please refresh the page.');

    await fetchCartItems();
    toast.success('Cart cleared');
  } catch (error) {
    console.error('Error clearing cart:', error);
    toast.error('Network error please refresh the page.');
  }
};

  const checkout = async (userDetails: UserDetails) => {
    if (!cartToken || cart.length === 0) return;

    try {
      // First create the order in your backend
      const orderResponse = await fetch('https://5170dd6c9895.ngrok-free.app/api/orders/create', {// create nahi tha abhi likha hai
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cart-Token': cartToken,
          'ngrok-skip-browser-warning': '69420'
        },
        body: JSON.stringify({
          userDetails,
          items: cart,
        }),
      });

  //     if (!orderResponse.ok) throw new Error('Failed to create order');

  //     const orderData = await orderResponse.json();

  //     // Then initiate payment
  //     const options = {
  //       key: 'rzp_test_E6f3s8PsZ5lTdu',
  //       amount: totalPrice * 100,
  //       currency: 'INR',
  //       name: 'Your Store',
  //       description: 'Order Payment',
  //       order_id: orderData.id,
  //       handler: async (response: any) => {
  //         // Verify payment on your backend
  //         const paymentResponse = await fetch('http://localhost:8080/api/payments/verify', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             razorpay_payment_id: response.razorpay_payment_id,
  //             razorpay_order_id: response.razorpay_order_id,
  //             razorpay_signature: response.razorpay_signature,
  //           }),
  //         });

  //         if (!paymentResponse.ok) throw new Error('Payment verification failed');

  //         const completedOrder: Order = {
  //           id: orderData.id,
  //           date: new Date().toISOString(),
  //           items: cart,
  //           total: totalPrice,
  //           paymentId: response.razorpay_payment_id,
  //           userDetails,
  //         };

  //         setCurrentOrder(completedOrder);
  //         localStorage.setItem('currentOrder', JSON.stringify(completedOrder));
  //         await clearCart();
  //         window.location.href = '/success';
  //       },
  //       prefill: {
  //         name: userDetails.name,
  //         email: userDetails.email,
  //         contact: userDetails.phone,
  //       },
  //       theme: {
  //         color: '#3399cc',
  //       },
  //     };

  //     const rzp = new (window as any).Razorpay(options);
  //     rzp.open();
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Network error please refresh the page.');
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartToken,
        totalItems,
        totalPrice,
        fetchCartItems,
        removeFromCart,
        updateQuantity,
        clearCart,
        checkout,
        currentOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
