// import { initializeApp, FirebaseApp } from "firebase/app";
// import { 
//   getMessaging, 
//   getToken, 
//   onMessage, 
//   Messaging,
//   MessagePayload,
//   isSupported
// } from "firebase/messaging";

// interface DeviceRegistrationData {
//   deviceId: string;
//   token: string;
//   platform: string;
//   deviceName: string | null;
//   deviceModel: string | null;
//   browserName: string;
//   browserVersion: string;
//   userAgent: string;
//   ipAddress?: string;
// }

// export type { MessagePayload };

// // ✅ CORRECT Firebase Configuration (from your Firebase Console)
// const firebaseConfig = {
//   apiKey: "AIzaSyCKmpDP1qL5rTFLMJ2hjtKRd9cH49swQLs", // New API key
//   authDomain: "omni-gate.firebaseapp.com",
//   projectId: "omni-gate",
//   storageBucket: "omni-gate.firebasestorage.app", // Updated storage bucket
//   messagingSenderId: "1047182095729", // New sender ID
//   appId: "1:1047182095729:web:a48c17846bb91859dd32d0", // New app ID
//   measurementId: "G-2G65ZMSETC" // New measurement ID
// };

// // ✅ CORRECT VAPID Key (from Cloud Messaging tab)
// const VAPID_KEY = "BIk7yf4OpGO1aulrmXrEeerwjQ00Zt0hSqrvUeXs33oKoW3PDwv26ThMaVr_UPAxh4u36tnPuHe_gZ6Yl0POC7Q";

// let messaging: Messaging | null = null;
// let app: FirebaseApp | null = null;

// // Initialize Firebase
// const initializeFirebase = async (): Promise<Messaging | null> => {
//   try {
//     // Check if Firebase Messaging is supported
//     const isFirebaseSupported = await isSupported();
    
//     if (!isFirebaseSupported) {
//       console.warn('Firebase Messaging is not supported in this browser');
//       return null;
//     }

//     if (!app) {
//       app = initializeApp(firebaseConfig);
//     }

//     if (!messaging) {
//       messaging = getMessaging(app);
//     }

//     return messaging;
//   } catch (error) {
//     console.error('Error initializing Firebase:', error);
//     return null;
//   }
// };

// // ✅ FIXED: Service Worker Registration Helper
// const getServiceWorkerRegistration = async (): Promise<ServiceWorkerRegistration | null> => {
//   try {
//     // Check if service workers are supported
//     if (!('serviceWorker' in navigator)) {
//       console.warn('Service workers are not supported in this browser');
//       return null;
//     }

//     // Try to get existing registration first
//     let registration = await navigator.serviceWorker.getRegistration('/firebase-messaging-sw.js');
    
//     if (!registration) {
//       // Register new service worker
//       console.log('Registering service worker...');
//       registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
//         scope: '/',
//         // Update via all active tabs immediately
//         updateViaCache: 'none'
//       });
      
//       console.log('Service worker registered successfully');
      
//       // Wait for service worker to be ready
//       await navigator.serviceWorker.ready;
//       console.log('Service worker is ready');
//     } else {
//       console.log('Service worker already registered');
      
//       // Check if service worker is active
//       if (registration.active) {
//         console.log('Service worker is active');
//       } else {
//         console.log('Waiting for service worker to activate...');
//         await navigator.serviceWorker.ready;
//       }
//     }
    
//     return registration;
    
//   } catch (error) {
//     console.error('Error registering service worker:', error);
//     return null;
//   }
// };

// // ✅ FIXED: Request permission and get FCM token
// export const requestNotificationPermission = async (): Promise<string | null> => {
//   try {
//     // Check browser support
//     if (!('Notification' in window)) {
//       console.log('This browser does not support notifications');
//       return null;
//     }

//     // Check permission status first
//     if (Notification.permission === 'denied') {
//       console.log('Notification permission previously denied');
//       return null;
//     }

//     // If already granted, proceed directly
//     if (Notification.permission === 'granted') {
//       console.log('Notification permission already granted');
//     } else {
//       // Request permission
//       const permission = await Notification.requestPermission();
      
//       if (permission !== 'granted') {
//         console.log('Notification permission denied or dismissed');
//         return null;
//       }
//       console.log('Notification permission granted.');
//     }

//     // Initialize Firebase
//     const messagingInstance = await initializeFirebase();
    
//     if (!messagingInstance) {
//       console.log('Firebase messaging not available');
//       return null;
//     }

//     try {
//       // Get service worker registration
//       const serviceWorkerRegistration = await getServiceWorkerRegistration();
      
//       if (!serviceWorkerRegistration) {
//         console.warn('Service worker registration failed');
//         return null;
//       }

//       // Get token with VAPID key and service worker
//       const token = await getToken(messagingInstance, {
//         vapidKey: VAPID_KEY,
//         serviceWorkerRegistration: serviceWorkerRegistration
//       });
      
//       if (token) {
//         console.log('✅ FCM Token received successfully:', token.substring(0, 20) + '...');
//         return token;
//       }
      
//     } catch (tokenError: any) {
//       console.warn('Failed to get FCM token with service worker:', tokenError.message);
      
//       // Fallback: Try without service worker registration
//       try {
//         console.log('Trying fallback token retrieval...');
//         const fallbackToken = await getToken(messagingInstance, {
//           vapidKey: VAPID_KEY
//           // No serviceWorkerRegistration parameter
//         });
        
//         if (fallbackToken) {
//           console.log('✅ FCM Token received (fallback):', fallbackToken.substring(0, 20) + '...');
//           return fallbackToken;
//         }
//       } catch (fallbackError: any) {
//         console.error('Fallback also failed:', fallbackError.message);
        
//         // Last resort: Try with minimal configuration
//         try {
//           const minimalToken = await getToken(messagingInstance);
//           if (minimalToken) {
//             console.log('✅ FCM Token received (minimal):', minimalToken.substring(0, 20) + '...');
//             return minimalToken;
//           }
//         } catch (minimalError) {
//           console.error('Minimal approach failed:', minimalError);
//         }
//       }
//     }
    
//     console.log('No FCM token received');
//     return null;
    
//   } catch (error) {
//     console.error('Error in requestNotificationPermission:', error);
//     return null;
//   }
// };

// // ✅ FIXED: Listen for incoming messages
// export const setupMessageListener = (callback: (payload: MessagePayload) => void) => {
//   initializeFirebase().then(messagingInstance => {
//     if (messagingInstance) {
//       onMessage(messagingInstance, (payload: MessagePayload) => {
//         console.log('📩 Foreground message received:', payload);
        
//         if (callback && typeof callback === 'function') {
//           callback(payload);
//         }
        
//         // Show notification in foreground
//         if (payload.notification) {
//           showNotification(payload.notification);
//         }
//       });
//     }
//   });
// };

// // Show browser notification
// const showNotification = (notification: any): void => {
//   if ('Notification' in window && Notification.permission === 'granted') {
//     const options: NotificationOptions = {
//       body: notification.body,
//       icon: notification.icon || '/logo.png',
//       badge: '/badge.png',
//       tag: 'merfume-notification',
//       requireInteraction: false, // Changed to false for better UX
//       data: notification.data,
//       silent: false,
//       vibrate: [200, 100, 200]
//     };
    
//     const notif = new Notification(notification.title || 'Merfume Store', options);
    
//     notif.onclick = function(event: Event) {
//       event.preventDefault();
      
//       if (notification.data && notification.data.deepLink) {
//         window.open(notification.data.deepLink, '_blank');
//       } else if (notification.click_action) {
//         window.open(notification.click_action, '_blank');
//       } else {
//         window.focus();
//       }
      
//       notif.close();
//     };
    
//     // Auto close after 10 seconds
//     setTimeout(() => {
//       notif.close();
//     }, 10000);
//   }
// };

// // ✅ ADDED: Subscribe to topic function
// export const subscribeToTopic = async (token: string, topic: string): Promise<boolean> => {
//   try {
//     const response = await fetch(`https://merfume-backend-production-5068.up.railway.app/api/notifications/topics/subscribe?token=${encodeURIComponent(token)}&topic=${encodeURIComponent(topic)}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });
    
//     if (response.ok) {
//       const data = await response.json();
//       console.log(`✅ Subscribed to topic ${topic}:`, data.message);
//       return true;
//     } else {
//       const errorText = await response.text();
//       console.error('❌ Failed to subscribe to topic:', errorText);
//       return false;
//     }
//   } catch (error) {
//     console.error('❌ Error subscribing to topic:', error);
//     return false;
//   }
// };

// // Register device token with backend
// export const registerDeviceToken = async (
//   deviceId: string, 
//   fcmToken: string, 
//   platform: string
// ): Promise<any> => {
//   try {
//     const deviceData: DeviceRegistrationData = {
//       deviceId: deviceId,
//       token: fcmToken,
//       platform: platform,
//       deviceName: navigator.platform,
//       deviceModel: navigator.userAgent,
//       browserName: getBrowserName(),
//       browserVersion: getBrowserVersion(),
//       userAgent: navigator.userAgent
//     };

//     const response = await fetch('https://merfume-backend-production-5068.up.railway.app/api/notifications/devices/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(deviceData)
//     });
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const data = await response.json();
//     console.log('✅ Device registration successful:', data);
//     return data;
//   } catch (error) {
//     console.error('❌ Error registering device token:', error);
//     throw error;
//   }
// };

// // Helper functions
// const getBrowserName = (): string => {
//   const userAgent = navigator.userAgent;
//   if (userAgent.includes("Chrome") && !userAgent.includes("Edge")) return "Chrome";
//   if (userAgent.includes("Firefox")) return "Firefox";
//   if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) return "Safari";
//   if (userAgent.includes("Edge")) return "Edge";
//   if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
//   return "Unknown";
// };

// const getBrowserVersion = (): string => {
//   const userAgent = navigator.userAgent;
//   const browser = getBrowserName();
  
//   const versionMatch = userAgent.match(new RegExp(`${browser}/(\\d+)`, 'i'));
//   return versionMatch ? versionMatch[1] : 'Unknown';
// };

// // Check if notifications are supported
// export const isNotificationSupported = (): boolean => {
//   return 'Notification' in window;
// };

// // Check if service workers are supported
// export const isServiceWorkerSupported = (): boolean => {
//   return 'serviceWorker' in navigator;
// };

// // Get platform
// export const getPlatform = (): string => {
//   const userAgent = navigator.userAgent.toLowerCase();
  
//   if (/android/.test(userAgent)) return 'ANDROID';
//   if (/iphone|ipad|ipod/.test(userAgent)) return 'IOS';
//   return 'WEB';
// };

// // ✅ ADDED: Get current push subscription
// export const getCurrentSubscription = async (): Promise<PushSubscription | null> => {
//   try {
//     if (!isServiceWorkerSupported()) return null;
    
//     const registration = await navigator.serviceWorker.ready;
//     const subscription = await registration.pushManager.getSubscription();
//     return subscription;
//   } catch (error) {
//     console.error('Error getting subscription:', error);
//     return null;
//   }
// };

// export default initializeFirebase;



// src/services/firebaseService.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { 
  getMessaging, 
  getToken, 
  onMessage, 
  Messaging,
  MessagePayload,
  isSupported
} from "firebase/messaging";

interface DeviceRegistrationData {
  deviceId: string;
  token: string;
  platform: string;
  deviceName: string | null;
  deviceModel: string | null;
  browserName: string;
  browserVersion: string;
  userAgent: string;
  ipAddress?: string;
}

export interface SnapdealNotificationData {
  type: string;
  productId: string;
  productName: string;
  brandName: string;
  price: string;
  originalPrice?: string;
  discountPercent?: string;
  discountAmount?: string;
  rating?: string;
  category?: string;
  imageUrl?: string;
  brandLogoUrl?: string;
  notificationColor?: string;
  showTimer?: boolean;
  timerText?: string;
  showRating?: boolean;
  showCategoryTag?: boolean;
  deepLink?: string;
  webLink?: string;
  style?: string;
}

// ✅ FIXED: Create a custom MessagePayload type that allows boolean in data
export interface CustomMessagePayload extends Omit<MessagePayload, 'data'> {
  data?: { [key: string]: string | boolean | number };
}

export type { MessagePayload };

// Define NotificationAction interface
interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
}

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKmpDP1qL5rTFLMJ2hjtKRd9cH49swQLs",
  authDomain: "omni-gate.firebaseapp.com",
  projectId: "omni-gate",
  storageBucket: "omni-gate.firebasestorage.app",
  messagingSenderId: "1047182095729",
  appId: "1:1047182095729:web:a48c17846bb91859dd32d0",
  measurementId: "G-2G65ZMSETC"
};

// VAPID Key
const VAPID_KEY = "BIk7yf4OpGO1aulrmXrEeerwjQ00Zt0hSqrvUeXs33oKoW3PDwv26ThMaVr_UPAxh4u36tnPuHe_gZ6Yl0POC7Q";

let messaging: Messaging | null = null;
let app: FirebaseApp | null = null;

// Initialize Firebase
const initializeFirebase = async (): Promise<Messaging | null> => {
  try {
    // Check if Firebase Messaging is supported
    const isFirebaseSupported = await isSupported();
    
    if (!isFirebaseSupported) {
      console.warn('Firebase Messaging is not supported in this browser');
      return null;
    }

    if (!app) {
      app = initializeApp(firebaseConfig);
    }

    if (!messaging) {
      messaging = getMessaging(app);
    }

    return messaging;
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    return null;
  }
};

// Service Worker Registration Helper
const getServiceWorkerRegistration = async (): Promise<ServiceWorkerRegistration | null> => {
  try {
    // Check if service workers are supported
    if (!('serviceWorker' in navigator)) {
      console.warn('Service workers are not supported in this browser');
      return null;
    }

    // Try to get existing registration first
    let registration = await navigator.serviceWorker.getRegistration('/firebase-messaging-sw.js');
    
    if (!registration) {
      // Register new service worker
      console.log('Registering service worker...');
      registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
        scope: '/',
        updateViaCache: 'none'
      });
      
      console.log('Service worker registered successfully');
      
      // Wait for service worker to be ready
      await navigator.serviceWorker.ready;
      console.log('Service worker is ready');
    } else {
      console.log('Service worker already registered');
      
      // Check if service worker is active
      if (registration.active) {
        console.log('Service worker is active');
      } else {
        console.log('Waiting for service worker to activate...');
        await navigator.serviceWorker.ready;
      }
    }
    
    return registration;
    
  } catch (error) {
    console.error('Error registering service worker:', error);
    return null;
  }
};

// Request permission and get FCM token
export const requestNotificationPermission = async (): Promise<string | null> => {
  try {
    // Check browser support
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications');
      return null;
    }

    // Check permission status first
    if (Notification.permission === 'denied') {
      console.log('Notification permission previously denied');
      return null;
    }

    // If already granted, proceed directly
    if (Notification.permission === 'granted') {
      console.log('Notification permission already granted');
    } else {
      // Request permission
      const permission = await Notification.requestPermission();
      
      if (permission !== 'granted') {
        console.log('Notification permission denied or dismissed');
        return null;
      }
      console.log('Notification permission granted.');
    }

    // Initialize Firebase
    const messagingInstance = await initializeFirebase();
    
    if (!messagingInstance) {
      console.log('Firebase messaging not available');
      return null;
    }

    try {
      // Get service worker registration
      const serviceWorkerRegistration = await getServiceWorkerRegistration();
      
      if (!serviceWorkerRegistration) {
        console.warn('Service worker registration failed');
        return null;
      }

      // Get token with VAPID key and service worker
      const token = await getToken(messagingInstance, {
        vapidKey: VAPID_KEY,
        serviceWorkerRegistration: serviceWorkerRegistration
      });
      
      if (token) {
        console.log('✅ FCM Token received successfully:', token.substring(0, 20) + '...');
        return token;
      }
      
    } catch (tokenError: any) {
      console.warn('Failed to get FCM token with service worker:', tokenError.message);
      
      // Fallback: Try without service worker registration
      try {
        console.log('Trying fallback token retrieval...');
        const fallbackToken = await getToken(messagingInstance, {
          vapidKey: VAPID_KEY
        });
        
        if (fallbackToken) {
          console.log('✅ FCM Token received (fallback):', fallbackToken.substring(0, 20) + '...');
          return fallbackToken;
        }
      } catch (fallbackError: any) {
        console.error('Fallback also failed:', fallbackError.message);
        
        // Last resort: Try with minimal configuration
        try {
          const minimalToken = await getToken(messagingInstance);
          if (minimalToken) {
            console.log('✅ FCM Token received (minimal):', minimalToken.substring(0, 20) + '...');
            return minimalToken;
          }
        } catch (minimalError) {
          console.error('Minimal approach failed:', minimalError);
        }
      }
    }
    
    console.log('No FCM token received');
    return null;
    
  } catch (error) {
    console.error('Error in requestNotificationPermission:', error);
    return null;
  }
};

// Custom NotificationOptions interface with extended properties
interface ExtendedNotificationOptions {
  body?: string;
  icon?: string;
  image?: string;
  badge?: string;
  tag?: string;
  data?: any;
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  vibrate?: number[];
  actions?: NotificationAction[];
}

// ✅ FIXED: Helper function to convert string to boolean safely
export const toBoolean = (value: any): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true' || value === '1';
  }
  if (typeof value === 'number') {
    return value !== 0;
  }
  return Boolean(value);
};

// ✅ FIXED: Helper to convert boolean to string for Firebase data
const boolToString = (value: boolean | undefined): string => {
  return value ? 'true' : 'false';
};

// ✅ FIXED: Listen for incoming messages
export const setupMessageListener = (callback: (payload: CustomMessagePayload) => void) => {
  initializeFirebase().then(messagingInstance => {
    if (messagingInstance) {
      onMessage(messagingInstance, (payload: MessagePayload) => {
        console.log('📩 Foreground message received:', payload);
        
        const data = payload.data || {};
        const notification = payload.notification || {};
        
        // Log all data for debugging
        console.log('📦 Full data object:', data);
        console.log('📦 Full notification object:', notification);
        
        // ✅ CRITICAL FIX: Check if it's a Snapdeal-style notification
        const isSnapdealStyle = 
          data.style === 'snapdeal_premium' || 
          data.notificationType === 'snapdeal' ||
          data.productId ||
          data.price ||
          data.productName;
        
        if (isSnapdealStyle) {
          console.log('🎯 Processing as Snapdeal-style notification');
          
          // Transform data to SnapdealNotificationData with proper type conversion
          const snapdealData: SnapdealNotificationData = {
            type: data.type || 'product_notification',
            productId: data.productId || '',
            productName: data.productName || data.product_name || notification.body || 'New Product',
            brandName: data.brandName || notification.title || 'Merfume Store',
            price: data.price || data.currentPrice || '',
            originalPrice: data.originalPrice || data.oldPrice,
            discountPercent: data.discountPercent || data.discount,
            discountAmount: data.discountAmount || data.saveAmount,
            rating: data.rating,
            category: data.category || data.productCategory,
            imageUrl: data.imageUrl || data.image || notification.image,
            brandLogoUrl: data.brandLogoUrl || data.icon || notification.icon,
            notificationColor: data.notificationColor || '#FF6B35',
            showTimer: toBoolean(data.showTimer), // ✅ FIXED: Convert to boolean
            timerText: data.timerText || 'Hurry! Offer ends soon',
            showRating: toBoolean(data.showRating), // ✅ FIXED: Convert to boolean
            showCategoryTag: toBoolean(data.showCategoryTag), // ✅ FIXED: Convert to boolean
            deepLink: data.deepLink || data.url || `/store?product=${data.productId}`,
            webLink: data.webLink,
            style: 'snapdeal_premium'
          };

          console.log('🎯 Transformed Snapdeal data:', snapdealData);
          
          // Show Snapdeal-style notification
          showSnapdealStyleNotification(snapdealData);
          
          // Also trigger the custom React component
          if (callback) {
            // Convert snapdealData back to string-only format for Firebase compatibility
            const stringData: { [key: string]: string } = {
              ...data,
              type: snapdealData.type,
              productId: snapdealData.productId,
              productName: snapdealData.productName,
              brandName: snapdealData.brandName,
              price: snapdealData.price,
              style: 'snapdeal_premium'
            };
            
            // Add optional fields as strings
            if (snapdealData.originalPrice) stringData.originalPrice = snapdealData.originalPrice;
            if (snapdealData.discountPercent) stringData.discountPercent = snapdealData.discountPercent;
            if (snapdealData.discountAmount) stringData.discountAmount = snapdealData.discountAmount;
            if (snapdealData.rating) stringData.rating = snapdealData.rating;
            if (snapdealData.category) stringData.category = snapdealData.category;
            if (snapdealData.imageUrl) stringData.imageUrl = snapdealData.imageUrl;
            if (snapdealData.brandLogoUrl) stringData.brandLogoUrl = snapdealData.brandLogoUrl;
            if (snapdealData.notificationColor) stringData.notificationColor = snapdealData.notificationColor;
            if (snapdealData.timerText) stringData.timerText = snapdealData.timerText;
            if (snapdealData.deepLink) stringData.deepLink = snapdealData.deepLink;
            if (snapdealData.webLink) stringData.webLink = snapdealData.webLink;
            
            // Convert boolean fields to strings
            stringData.showTimer = boolToString(snapdealData.showTimer);
            stringData.showRating = boolToString(snapdealData.showRating);
            stringData.showCategoryTag = boolToString(snapdealData.showCategoryTag);
            
            callback({
              ...payload,
              data: stringData
            } as CustomMessagePayload);
          }
          
        } else if (notification.title || notification.body) {
          // Regular notification
          console.log('🎯 Processing as regular notification');
          showNotification(notification);
          
          if (callback) {
            callback(payload as CustomMessagePayload);
          }
        } else {
          // Default fallback - show a rich notification
          console.log('🎯 No proper data, showing default notification');
          showDefaultNotification();
          
          if (callback) {
            callback(payload as CustomMessagePayload);
          }
        }
      });
    }
  });
};

// ✅ IMPROVED: Show Snapdeal style notification
export const showSnapdealStyleNotification = (data: any): void => {
  if ('Notification' in window && Notification.permission === 'granted') {
    const snapdealData = data as SnapdealNotificationData;
    
    console.log('🎯 Creating foreground Snapdeal notification:', snapdealData);
    
    // Ensure we have proper data
    const notificationData = {
      style: 'snapdeal_premium',
      ...snapdealData,
      deepLink: snapdealData.deepLink || `/store?product=${snapdealData.productId}`,
      notificationColor: snapdealData.notificationColor || '#FF6B35'
    };
    
    // ✅ Construct RICH notification body like Snapdeal
    let bodyLines = [];
    
    // Line 1: Product Name (bold/large)
    if (snapdealData.productName) {
      bodyLines.push(`📦 ${snapdealData.productName}`);
    }
    
    // Line 2: Price information
    let priceLine = '';
    if (snapdealData.price) {
      priceLine += `💰 ${snapdealData.price}`;
    }
    if (snapdealData.originalPrice) {
      priceLine += `   ~~${snapdealData.originalPrice}~~`;
    }
    if (snapdealData.discountPercent) {
      priceLine += `   🔥 ${snapdealData.discountPercent} OFF`;
    }
    if (priceLine) {
      bodyLines.push(priceLine);
    }
    
    // Line 3: Additional details
    let detailsLine = '';
    if (snapdealData.rating && parseFloat(snapdealData.rating) > 0) {
      const stars = getStarsFromRating(parseFloat(snapdealData.rating));
      detailsLine += `${stars} ${snapdealData.rating}`;
    }
    if (snapdealData.category) {
      if (detailsLine) detailsLine += ' • ';
      detailsLine += `🏷️ ${snapdealData.category}`;
    }
    if (snapdealData.discountAmount && snapdealData.discountAmount !== '₹0' && snapdealData.discountAmount !== '0') {
      if (detailsLine) detailsLine += ' • ';
      detailsLine += `💸 Save ${snapdealData.discountAmount}`;
    }
    if (detailsLine) {
      bodyLines.push(detailsLine);
    }
    
    const body = bodyLines.join('\n');
    const title = snapdealData.brandName || 'Merfume Store';
    
    console.log('📝 Notification Body:', body);
    
    // Create rich notification options
    const options: any = {
      body: body,
      icon: snapdealData.brandLogoUrl || '/merfume-logo.png',
      tag: snapdealData.productId || 'snapdeal_' + Date.now(),
      data: notificationData,
      requireInteraction: snapdealData.showTimer || false,
      silent: false,
      timestamp: Date.now()
    };
    
    // Add badge if supported
    if ('badge' in Notification.prototype) {
      options.badge = '/badge.png';
    }
    
    // Add image if supported
    if (snapdealData.imageUrl && 'image' in Notification.prototype) {
      options.image = snapdealData.imageUrl;
      console.log('🖼️ Adding image to notification:', snapdealData.imageUrl);
    }
    
    // Add vibrate if supported
    if ('vibrate' in Notification.prototype && navigator.vibrate) {
      options.vibrate = [200, 100, 200];
    }
    
    // Add actions if supported
    if ('actions' in Notification.prototype) {
      options.actions = [
        {
          action: 'view_product',
          title: '👁️ View'
        },
        {
          action: 'shop_now',
          title: '🛒 Shop Now'
        }
      ];
    }
    
    // Create notification
    try {
      const notification = new Notification(title, options);
      
      notification.onclick = (event) => {
        event.preventDefault();
        if (notificationData.deepLink) {
          window.location.href = notificationData.deepLink;
        }
        notification.close();
      };
      
      console.log('✅ Foreground Snapdeal notification shown');
    } catch (error) {
      console.error('❌ Error creating notification:', error);
      // Fallback to simpler notification
      const fallbackOptions = {
        body: snapdealData.productName || 'Check out our latest products!',
        icon: snapdealData.brandLogoUrl || '/merfume-logo.png',
        tag: 'fallback_' + Date.now()
      };
      
      const fallbackNotification = new Notification(title, fallbackOptions);
      fallbackNotification.onclick = () => {
        if (notificationData.deepLink) {
          window.location.href = notificationData.deepLink;
        }
        fallbackNotification.close();
      };
    }
  } else {
    console.warn('⚠️ Notifications not permitted or not supported');
  }
};

// ✅ NEW: Show default notification
const showDefaultNotification = (): void => {
  if ('Notification' in window && Notification.permission === 'granted') {
    const title = 'Merfume Store';
    const body = '🛍️ New products available! Shop now for exclusive deals.';
    
    const options: any = {
      body: body,
      icon: '/merfume-logo.png',
      badge: '/badge.png',
      tag: 'default_' + Date.now(),
      data: { style: 'default' },
      silent: false,
      timestamp: Date.now()
    };
    
    if ('vibrate' in Notification.prototype && navigator.vibrate) {
      options.vibrate = [200, 100, 200];
    }
    
    const notification = new Notification(title, options);
    
    notification.onclick = (event) => {
      event.preventDefault();
      window.location.href = '/store';
      notification.close();
    };
  }
};

// Helper to create star rating
const getStarsFromRating = (rating: number): string => {
  if (!rating || isNaN(rating) || rating < 0) return '★★★★★';
  
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  
  if (hasHalfStar) {
    stars += '⯨';
  }
  
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars += '☆';
  }
  
  return stars;
};

// Show regular browser notification
const showNotification = (notification: any): void => {
  if ('Notification' in window && Notification.permission === 'granted') {
    const title = notification.title || 'Merfume Store';
    const body = notification.body || 'Check out our latest products!';
    
    const options: any = {
      body: body,
      icon: notification.icon || '/merfume-logo.png',
      tag: 'merfume-notification',
      requireInteraction: false,
      silent: false,
      data: notification.data || {}
    };
    
    // Add badge if supported
    if ('badge' in Notification.prototype) {
      options.badge = '/badge.png';
    }
    
    // Add vibrate if supported
    if ('vibrate' in Notification.prototype && navigator.vibrate) {
      options.vibrate = [200, 100, 200];
    }
    
    // Add image if supported
    if (notification.image && 'image' in Notification.prototype) {
      options.image = notification.image;
    }
    
    const notif = new Notification(title, options);
    
    notif.onclick = function(event: Event) {
      event.preventDefault();
      window.focus();
      notif.close();
    };
  }
};

// ✅ NEW: Send test notification
export const sendTestNotification = async (): Promise<boolean> => {
  try {
    const testData = {
      style: 'snapdeal_premium',
      notificationType: 'snapdeal',
      type: 'product_alert',
      productId: 'test_perfume_123',
      productName: 'Luxury Eau de Parfum - Premium Collection',
      brandName: 'Merfume Store',
      price: '₹1,299',
      originalPrice: '₹2,499',
      discountPercent: '48% OFF',
      discountAmount: '₹1,200',
      rating: '4.5',
      category: 'Premium Fragrances',
      imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
      brandLogoUrl: '/merfume-logo.png',
      notificationColor: '#FF6B35',
      showTimer: true,
      timerText: 'Hurry! Limited time offer',
      showRating: true,
      showCategoryTag: true,
      deepLink: '/store?product=test_perfume_123'
    };
    
    // Get current FCM token
    const token = await requestNotificationPermission();
    
    if (!token) {
      console.error('❌ No FCM token available');
      return false;
    }
    
    // Send test notification to backend
    const response = await fetch('https://merfume-backend-production-5068.up.railway.app/api/notifications/send-test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
        notification: testData
      })
    });
    
    if (response.ok) {
      console.log('✅ Test notification sent successfully');
      return true;
    } else {
      console.error('❌ Failed to send test notification');
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending test notification:', error);
    return false;
  }
};

// ✅ NEW: Check if backend sends proper data
export const checkBackendNotification = async (): Promise<any> => {
  try {
    const response = await fetch('https://merfume-backend-production-5068.up.railway.app/api/notifications/sample', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Backend sample notification:', data);
      return data;
    } else {
      console.error('❌ Failed to get sample from backend');
      return null;
    }
  } catch (error) {
    console.error('❌ Error checking backend:', error);
    return null;
  }
};

// Subscribe to topic
export const subscribeToTopic = async (token: string, topic: string): Promise<boolean> => {
  try {
    const response = await fetch(`https://merfume-backend-production-5068.up.railway.app/api/notifications/topics/subscribe?token=${encodeURIComponent(token)}&topic=${encodeURIComponent(topic)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log(`✅ Subscribed to topic ${topic}:`, data.message);
      return true;
    } else {
      const errorText = await response.text();
      console.error('❌ Failed to subscribe to topic:', errorText);
      return false;
    }
  } catch (error) {
    console.error('❌ Error subscribing to topic:', error);
    return false;
  }
};

// Register device token with backend
export const registerDeviceToken = async (
  deviceId: string, 
  fcmToken: string, 
  platform: string
): Promise<any> => {
  try {
    const deviceData: DeviceRegistrationData = {
      deviceId: deviceId,
      token: fcmToken,
      platform: platform,
      deviceName: navigator.platform,
      deviceModel: navigator.userAgent,
      browserName: getBrowserName(),
      browserVersion: getBrowserVersion(),
      userAgent: navigator.userAgent
    };

    const response = await fetch('https://merfume-backend-production-5068.up.railway.app/api/notifications/devices/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deviceData)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Device registration successful:', data);
    return data;
  } catch (error) {
    console.error('❌ Error registering device token:', error);
    throw error;
  }
};

// Helper functions
const getBrowserName = (): string => {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Chrome") && !userAgent.includes("Edge")) return "Chrome";
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) return "Safari";
  if (userAgent.includes("Edge")) return "Edge";
  if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
  return "Unknown";
};

const getBrowserVersion = (): string => {
  const userAgent = navigator.userAgent;
  const browser = getBrowserName();
  
  const versionMatch = userAgent.match(new RegExp(`${browser}/(\\d+)`, 'i'));
  return versionMatch ? versionMatch[1] : 'Unknown';
};

// Check if notifications are supported
export const isNotificationSupported = (): boolean => {
  return 'Notification' in window;
};

// Check if service workers are supported
export const isServiceWorkerSupported = (): boolean => {
  return 'serviceWorker' in navigator;
};

// Get platform
export const getPlatform = (): string => {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (/android/.test(userAgent)) return 'ANDROID';
  if (/iphone|ipad|ipod/.test(userAgent)) return 'IOS';
  return 'WEB';
};

// Get current push subscription with proper type casting
export const getCurrentSubscription = async (): Promise<PushSubscription | null> => {
  try {
    if (!isServiceWorkerSupported()) return null;
    
    const registration = await navigator.serviceWorker.ready;
    
    // TypeScript ke liye type assertion use karein
    // ServiceWorkerRegistration type mein pushManager property available nahi hai
    // Hum type assertion use karte hain
    const registrationWithPush = registration as ServiceWorkerRegistration & {
      pushManager?: PushManager;
    };
    
    if (!registrationWithPush.pushManager) {
      console.warn('pushManager not supported in this browser');
      return null;
    }
    
    const subscription = await registrationWithPush.pushManager.getSubscription();
    return subscription;
  } catch (error) {
    console.error('Error getting subscription:', error);
    return null;
  }
};

// Check if browser supports specific notification features
export const supportsNotificationImage = (): boolean => {
  return 'image' in Notification.prototype;
};

export const supportsNotificationVibrate = (): boolean => {
  return 'vibrate' in Notification.prototype;
};

export const supportsNotificationActions = (): boolean => {
  return 'actions' in Notification.prototype;
};

export const supportsNotificationBadge = (): boolean => {
  return 'badge' in Notification.prototype;
};

// ✅ NEW: Debug function to log all notification data
export const debugNotification = (payload: MessagePayload): void => {
  console.log('🔍 DEBUG Notification Payload:');
  console.log('📦 Full payload:', payload);
  console.log('📦 Data object:', payload.data);
  console.log('📦 Notification object:', payload.notification);
  
  if (payload.data) {
    console.log('🔑 Data keys:', Object.keys(payload.data));
    Object.entries(payload.data).forEach(([key, value]) => {
      console.log(`  ${key}:`, value);
    });
  }
};

export default initializeFirebase;
