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



// import { createContext, useContext, ReactNode, useState, useEffect, useCallback } from 'react';
// import { toast } from 'sonner';

// interface CartItem {
//   cartId: number;
//   productId: number;
//   productName: string;
//   brand: string;
//   productPrice: number;
//   quantity: number;
//   productImageUrl: string;
// }

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

// interface Order {
//   id: string;
//   date: string;
//   items: CartItem[];
//   total: number;
//   paymentId: string;
//   userDetails: UserDetails;
// }

// interface CartContextType {
//   cart: CartItem[];
//   cartToken: string | null;
//   totalItems: number;
//   totalPrice: number;
//   fetchCartItems: () => Promise<void>;
//   removeFromCart: (cartId: number) => Promise<void>;
//   updateQuantity: (itemId: number, quantity: number) => Promise<void>;
//   clearCart: () => Promise<void>;
//   checkout: (userDetails: UserDetails) => Promise<void>;
//   currentOrder: Order | null;
// }

// const CartContext = createContext<CartContextType>({
//   cart: [],
//   cartToken: null,
//   totalItems: 0,
//   totalPrice: 0,
//   fetchCartItems: async () => {},
//   removeFromCart: async () => {},
//   updateQuantity: async () => {},
//   clearCart: async () => {},
//   checkout: async () => {},
//   currentOrder: null,
// });


// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [cartToken, setCartToken] = useState<string | null>(null);
//   const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

//   // Initialize cart token from localStorage or generate a new one
//   useEffect(() => {
//     const token = localStorage.getItem('cartToken') || generateCartToken();
//     setCartToken(token);
//     localStorage.setItem('cartToken', token);
//   }, []);

//   const generateCartToken = () => {
//     return 'cart-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//   };


//   const API_BASE_URL = "https://5170dd6c9895.ngrok-free.app";//${API_BASE_URL}

//   const fetchCartItems = useCallback(async () => {
//     if (!cartToken) return;

//     try {
//       const response = await fetch('https://5170dd6c9895.ngrok-free.app/api/cart/items', {
//         headers: {
//           'Content-Type': 'application/json',
//           'Cart-Token': cartToken,
//           'ngrok-skip-browser-warning': '69420'
//         },
//       });

//       if (!response.ok) throw new Error('Network error please refresh the page.');

//       const data = await response.json();
//       setCart(data);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//       toast.error('Network error please refresh the page.');
//     }
//   }, [cartToken]);

//   const removeFromCart = async (cartId: number) => {
//   if (!cartToken) return;

//   try {
//     const response = await fetch(`https://5170dd6c9895.ngrok-free.app/api/cart/remove/${cartId}`, {
//       method: 'DELETE',
//       headers: {
//         'Cart-Token': cartToken,
//         'ngrok-skip-browser-warning': '69420'
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Network error please refresh the page.');
//     }

//     await fetchCartItems();
//     toast.success('Item removed from cart');
//   } catch (error: any) {
//     console.error('Error removing from cart:', error);
//     toast.error(error.message || 'Network error please refresh the page.');
//   }
// };

//   const updateQuantity = async (itemId: number, quantity: number) => {
//     if (!cartToken) return;
//     if (quantity < 1) return;

//     try {
//       const response = await fetch(
//         `http://localhost:8080/api/cart/update/${itemId}?quantity=${quantity}`,
//         {
//           method: 'PUT',
//           headers: {
//             'Cart-Token': cartToken,
//             'ngrok-skip-browser-warning': '69420'
//           },
//         }
//       );

//       if (!response.ok) throw new Error('Network error please refresh the page.');

//       await fetchCartItems();
//       toast.success('Quantity updated');
//     } catch (error) {
//       console.error('Error updating quantity:', error);
//       toast.error('Network error please refresh the page.');
//     }
//   };

//   // Update clearCart
// const clearCart = async () => {
//   if (!cartToken) return;

//   try {
//     const response = await fetch('https://5170dd6c9895.ngrok-free.app/api/cart/clear', {
//       method: 'DELETE',
//       headers: {
//         'Cart-Token': cartToken,
//         'ngrok-skip-browser-warning': '69420'
//       },
//     });

//     if (!response.ok) throw new Error('Network error please refresh the page.');

//     await fetchCartItems();
//     toast.success('Cart cleared');
//   } catch (error) {
//     console.error('Error clearing cart:', error);
//     toast.error('Network error please refresh the page.');
//   }
// };

//   const checkout = async (userDetails: UserDetails) => {
//     if (!cartToken || cart.length === 0) return;

//     try {
//       // First create the order in your backend
//       const orderResponse = await fetch('https://5170dd6c9895.ngrok-free.app/api/orders/create', {// create nahi tha abhi likha hai
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Cart-Token': cartToken,
//           'ngrok-skip-browser-warning': '69420'
//         },
//         body: JSON.stringify({
//           userDetails,
//           items: cart,
//         }),
//       });

//   //     if (!orderResponse.ok) throw new Error('Failed to create order');

//   //     const orderData = await orderResponse.json();

//   //     // Then initiate payment
//   //     const options = {
//   //       key: 'rzp_test_E6f3s8PsZ5lTdu',
//   //       amount: totalPrice * 100,
//   //       currency: 'INR',
//   //       name: 'Your Store',
//   //       description: 'Order Payment',
//   //       order_id: orderData.id,
//   //       handler: async (response: any) => {
//   //         // Verify payment on your backend
//   //         const paymentResponse = await fetch('http://localhost:8080/api/payments/verify', {
//   //           method: 'POST',
//   //           headers: {
//   //             'Content-Type': 'application/json',
//   //           },
//   //           body: JSON.stringify({
//   //             razorpay_payment_id: response.razorpay_payment_id,
//   //             razorpay_order_id: response.razorpay_order_id,
//   //             razorpay_signature: response.razorpay_signature,
//   //           }),
//   //         });

//   //         if (!paymentResponse.ok) throw new Error('Payment verification failed');

//   //         const completedOrder: Order = {
//   //           id: orderData.id,
//   //           date: new Date().toISOString(),
//   //           items: cart,
//   //           total: totalPrice,
//   //           paymentId: response.razorpay_payment_id,
//   //           userDetails,
//   //         };

//   //         setCurrentOrder(completedOrder);
//   //         localStorage.setItem('currentOrder', JSON.stringify(completedOrder));
//   //         await clearCart();
//   //         window.location.href = '/success';
//   //       },
//   //       prefill: {
//   //         name: userDetails.name,
//   //         email: userDetails.email,
//   //         contact: userDetails.phone,
//   //       },
//   //       theme: {
//   //         color: '#3399cc',
//   //       },
//   //     };

//   //     const rzp = new (window as any).Razorpay(options);
//   //     rzp.open();
//     } catch (error) {
//       console.error('Checkout error:', error);
//       toast.error('Network error please refresh the page.');
//     }
//   };

//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cart.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         cartToken,
//         totalItems,
//         totalPrice,
//         fetchCartItems,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         checkout,
//         currentOrder,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);



import { createContext, useContext, ReactNode, useState, useEffect, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
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
  isLoading: boolean;
  error: string | null;
  fetchCartItems: () => Promise<void>;
  addToCart: (productId: number, quantity?: number) => Promise<void>;
  removeFromCart: (cartId: number) => Promise<void>;
  updateQuantity: (itemId: number, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  checkout: (userDetails: UserDetails) => Promise<void>;
  currentOrder: Order | null;
  retryFetch: () => void;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  cartToken: null,
  totalItems: 0,
  totalPrice: 0,
  isLoading: false,
  error: null,
  fetchCartItems: async () => {},
  addToCart: async () => {},
  removeFromCart: async () => {},
  updateQuantity: async () => {},
  clearCart: async () => {},
  checkout: async () => {},
  currentOrder: null,
  retryFetch: () => {},
});

// Create axios instance with configuration
const api = axios.create({
  baseURL: 'https://e46b4bafada4.ngrok-free.app',
  // timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
    'Accept': 'application/json',
  },
});

// Add request interceptor for logging and cache busting
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    
    // Add timestamp to prevent caching for GET requests
    if (config.method?.toLowerCase() === 'get') {
      if (config.url?.includes('?')) {
        config.url += `&_t=${Date.now()}`;
      } else {
        config.url += `?_t=${Date.now()}`;
      }
    }
    
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for retry logic and error handling
api.interceptors.response.use(
  (response) => {
    console.log(`Response received from: ${response.config.url}`, response.status);
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as any;
    
    // If it's a network/CORS error and we haven't retried yet
    if (!error.response && !originalRequest?._retry) {
      originalRequest._retry = true;
      console.log('Retrying request due to network error...');
      
      // Wait 1.5 seconds before retrying
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear timestamp for retry
      if (originalRequest.url) {
        originalRequest.url = originalRequest.url.split('?')[0];
      }
      
      return api(originalRequest);
    }
    
    // Log detailed error information
    if (error.response) {
      console.error('API Response Error:', {
        status: error.response.status,
        statusText: error.response.statusText,
        url: error.config?.url,
        data: error.response.data,
      });
    } else if (error.request) {
      console.error('Network Error:', error.message);
    } else {
      console.error('Request Setup Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartToken, setCartToken] = useState<string | null>(null);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  // Initialize cart token from localStorage or generate a new one
  useEffect(() => {
    const token = localStorage.getItem('cartToken') || generateCartToken();
    setCartToken(token);
    localStorage.setItem('cartToken', token);
  }, []);

  const generateCartToken = () => {
    return 'cart-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const retryFetch = () => {
    setRetryCount(prev => prev + 1);
  };

  const fetchCartItems = useCallback(async () => {
    if (!cartToken) return;

    setIsLoading(true);
    setError(null);

    try {
      console.log('Fetching cart items...');
      
      const response = await api.get('/api/cart/items', {
        headers: {
          'Cart-Token': cartToken,
        },
      });

      console.log('Cart items fetched:', response.data);
      setCart(response.data || []);
      
    } catch (error: any) {
      console.error('Error fetching cart items:', error);
      
      let errorMessage = 'Failed to load cart items. ';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage += 'Request timeout. Please check your connection.';
      } else if (error.message?.includes('Network Error')) {
        errorMessage += 'Network error. Please check your internet connection.';
      } else if (error.response?.status === 404) {
        errorMessage += 'Cart not found.';
      } else if (error.response?.status >= 500) {
        errorMessage += 'Server error. Please try again later.';
      } else {
        errorMessage += 'Please try again.';
      }
      
      setError(errorMessage);
      toast.error('Could not load cart items');
    } finally {
      setIsLoading(false);
    }
  }, [cartToken, retryCount]);

  // Add to cart function
  const addToCart = async (productId: number, quantity: number = 1) => {
    if (!cartToken) return;

    setIsLoading(true);
    
    try {
      console.log(`Adding product ${productId} to cart...`);
      
      const response = await api.post('/api/cart/add', {
        productId,
        quantity,
      }, {
        headers: {
          'Cart-Token': cartToken,
        },
      });

      if (response.data) {
        toast.success('Item added to cart');
        await fetchCartItems(); // Refresh cart items
      }
      
    } catch (error: any) {
      console.error('Error adding to cart:', error);
      
      let errorMessage = 'Failed to add item to cart. ';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage += 'Request timeout.';
      } else if (error.message?.includes('Network Error')) {
        errorMessage += 'Network error.';
      } else {
        errorMessage += 'Please try again.';
      }
      
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (cartId: number) => {
    if (!cartToken) return;

    setIsLoading(true);
    
    try {
      console.log(`Removing item ${cartId} from cart...`);
      
      const response = await api.delete(`/api/cart/remove/${cartId}`, {
        headers: {
          'Cart-Token': cartToken,
        },
      });

      if (response.status === 200 || response.status === 204) {
        toast.success('Item removed from cart');
        await fetchCartItems(); // Refresh cart items
      }
      
    } catch (error: any) {
      console.error('Error removing from cart:', error);
      
      let errorMessage = 'Failed to remove item. ';
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.code === 'ECONNABORTED') {
        errorMessage += 'Request timeout.';
      } else if (error.message?.includes('Network Error')) {
        errorMessage += 'Network error.';
      } else {
        errorMessage += 'Please try again.';
      }
      
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (itemId: number, quantity: number) => {
    if (!cartToken) return;
    if (quantity < 1) {
      await removeFromCart(itemId);
      return;
    }

    setIsLoading(true);
    
    try {
      console.log(`Updating quantity for item ${itemId} to ${quantity}...`);
      
      const response = await api.put(
        `/api/cart/update/${itemId}?quantity=${quantity}`,
        {},
        {
          headers: {
            'Cart-Token': cartToken,
          },
        }
      );

      if (response.status === 200) {
        toast.success('Quantity updated');
        await fetchCartItems(); // Refresh cart items
      }
      
    } catch (error: any) {
      console.error('Error updating quantity:', error);
      
      let errorMessage = 'Failed to update quantity. ';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage += 'Request timeout.';
      } else if (error.message?.includes('Network Error')) {
        errorMessage += 'Network error.';
      } else {
        errorMessage += 'Please try again.';
      }
      
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const clearCart = async () => {
    if (!cartToken) return;

    setIsLoading(true);
    
    try {
      console.log('Clearing cart...');
      
      const response = await api.delete('/api/cart/clear', {
        headers: {
          'Cart-Token': cartToken,
        },
      });

      if (response.status === 200 || response.status === 204) {
        toast.success('Cart cleared');
        setCart([]); // Clear local state immediately
      }
      
    } catch (error: any) {
      console.error('Error clearing cart:', error);
      
      let errorMessage = 'Failed to clear cart. ';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage += 'Request timeout.';
      } else if (error.message?.includes('Network Error')) {
        errorMessage += 'Network error.';
      } else {
        errorMessage += 'Please try again.';
      }
      
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const checkout = async (userDetails: UserDetails) => {
    if (!cartToken || cart.length === 0) {
      toast.error('Cart is empty');
      return;
    }

    setIsLoading(true);
    
    try {
      console.log('Processing checkout...');
      
      // First create the order in your backend
      const orderResponse = await api.post('/api/orders/create', {
        userDetails,
        items: cart,
      }, {
        headers: {
          'Cart-Token': cartToken,
        },
      });

      if (!orderResponse.data) {
        throw new Error('Failed to create order');
      }

      const orderData = orderResponse.data;
      console.log('Order created:', orderData);

      // TODO: Add Razorpay payment integration here
      // For now, just simulate successful checkout
      const completedOrder: Order = {
        id: orderData.id || `order-${Date.now()}`,
        date: new Date().toISOString(),
        items: cart,
        total: totalPrice,
        paymentId: `pay-${Date.now()}`,
        userDetails,
      };

      setCurrentOrder(completedOrder);
      localStorage.setItem('currentOrder', JSON.stringify(completedOrder));
      
      // Clear cart after successful order
      await clearCart();
      
      toast.success('Order placed successfully!');
      
      // Redirect to success page or show success message
      // window.location.href = '/success';
      
    } catch (error: any) {
      console.error('Checkout error:', error);
      
      let errorMessage = 'Failed to process checkout. ';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage += 'Request timeout.';
      } else if (error.message?.includes('Network Error')) {
        errorMessage += 'Network error.';
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else {
        errorMessage += 'Please try again.';
      }
      
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch cart items on mount and when cartToken or retryCount changes
  useEffect(() => {
    if (cartToken) {
      fetchCartItems();
    }
  }, [cartToken, fetchCartItems, retryCount]);

  // Load current order from localStorage on mount
  useEffect(() => {
    const savedOrder = localStorage.getItem('currentOrder');
    if (savedOrder) {
      try {
        setCurrentOrder(JSON.parse(savedOrder));
      } catch (error) {
        console.error('Error parsing saved order:', error);
        localStorage.removeItem('currentOrder');
      }
    }
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartToken,
        totalItems,
        totalPrice,
        isLoading,
        error,
        fetchCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        checkout,
        currentOrder,
        retryFetch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};
