// import { useEffect, useState, useCallback } from 'react';
// import { 
//   requestNotificationPermission, 
//   setupMessageListener,
//   registerDeviceToken,
//   getPlatform,
//   isNotificationSupported,
//   subscribeToTopic,
//   isServiceWorkerSupported
// } from '../services/firebaseService';
// import { MessagePayload } from 'firebase/messaging';

// interface UseFCMNotificationsReturn {
//   token: string | null;
//   deviceId: string | null;
//   isInitialized: boolean;
//   isSupported: boolean;
//   initializeFCM: () => Promise<void>;
//   setupMessageHandling: (callback?: (payload: MessagePayload) => void) => void;
//   sendTestNotification: () => Promise<void>;
// }

// // Generate or get device ID
// const getOrCreateDeviceId = (): string => {
//   let deviceId = localStorage.getItem('merfume_device_id');
  
//   if (!deviceId) {
//     deviceId = 'web_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
//     localStorage.setItem('merfume_device_id', deviceId);
//   }
  
//   return deviceId;
// };

// export const useFCMNotifications = (): UseFCMNotificationsReturn => {
//   const [token, setToken] = useState<string | null>(null);
//   const [deviceId, setDeviceId] = useState<string | null>(null);
//   const [isInitialized, setIsInitialized] = useState<boolean>(false);
//   const [isSupported, setIsSupported] = useState<boolean>(true);

//   // ✅ ADDED: Send test notification
//   const sendTestNotification = useCallback(async (): Promise<void> => {
//     try {
//       if (!token) {
//         alert('No FCM token available. Please enable notifications first.');
//         return;
//       }
      
//       const response = await fetch('https://merfume-backend-production-5068.up.railway.app/api/notifications/test/send-test', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
      
//       const data = await response.json();
//       console.log('Test notification response:', data);
//       alert(`Test notification sent: ${data.message}`);
//     } catch (error) {
//       console.error('Error sending test notification:', error);
//       alert('Error sending test notification');
//     }
//   }, [token]);

//   // Initialize FCM
//   const initializeFCM = useCallback(async (): Promise<void> => {
//     try {
//       // Check if notifications are supported
//       const supported = isNotificationSupported();
//       setIsSupported(supported);
      
//       if (!supported) {
//         console.log('This browser does not support notifications');
//         setIsInitialized(true);
//         return;
//       }

//       // Check service worker support
//       if (!isServiceWorkerSupported()) {
//         console.warn('Service workers not supported - push notifications may not work');
//       }

//       // Get device ID
//       const currentDeviceId = getOrCreateDeviceId();
//       setDeviceId(currentDeviceId);

//       // Get platform
//       const platform = getPlatform();

//       console.log('🔄 Initializing FCM...');
      
//       // Request permission and get token
//       const fcmToken = await requestNotificationPermission();
      
//       if (fcmToken) {
//         setToken(fcmToken);
        
//         try {
//           // Register token with backend
//           await registerDeviceToken(currentDeviceId, fcmToken, platform);
//           console.log('✅ FCM initialized and registered successfully');
          
//           // ✅ AUTO-SUBSCRIBE to new-product topic
//           try {
//             const subscribed = await subscribeToTopic(fcmToken, 'new-product');
//             if (subscribed) {
//               console.log('✅ Auto-subscribed to new-product topic');
              
//               // Also subscribe to announcements topic
//               await subscribeToTopic(fcmToken, 'announcements');
//               console.log('✅ Auto-subscribed to announcements topic');
//             }
//           } catch (subscriptionError) {
//             console.warn('⚠️ Could not auto-subscribe to topic:', subscriptionError);
//           }
          
//         } catch (registerError) {
//           console.warn('Error registering device token:', registerError);
//           // Continue even if registration fails
//         }
//       } else {
//         console.log('No FCM token received (user may have denied permission)');
//       }
      
//       setIsInitialized(true);
//       console.log('✅ FCM initialization complete');
      
//     } catch (error) {
//       console.error('❌ Error initializing FCM:', error);
//       setIsInitialized(true);
//     }
//   }, []);

//   // Setup message listener
//   const setupMessageHandling = useCallback((callback?: (payload: MessagePayload) => void) => {
//     setupMessageListener((payload) => {
//       console.log('📩 Message received in app:', payload);
      
//       if (callback && typeof callback === 'function') {
//         callback(payload);
//       }
//     });
//   }, []);

//   useEffect(() => {
//     // Initialize on component mount
//     initializeFCM();
    
//     // Cleanup
//     return () => {
//       // Any cleanup needed
//     };
//   }, [initializeFCM]);

//   return {
//     token,
//     deviceId,
//     isInitialized,
//     isSupported,
//     initializeFCM,
//     setupMessageHandling,
//     sendTestNotification // ✅ Added
//   };
// };

// export default useFCMNotifications;



// src/hooks/useFCMNotifications.tsx
import { useEffect, useState, useCallback } from 'react';
import { 
  requestNotificationPermission, 
  setupMessageListener,
  registerDeviceToken,
  getPlatform,
  isNotificationSupported,
  subscribeToTopic,
  isServiceWorkerSupported,
  SnapdealNotificationData
} from '../services/firebaseService';
import { MessagePayload } from 'firebase/messaging';

interface UseFCMNotificationsReturn {
  token: string | null;
  deviceId: string | null;
  isInitialized: boolean;
  isSupported: boolean;
  initializeFCM: () => Promise<void>;
  setupMessageHandling: (callback?: (payload: MessagePayload) => void) => void;
  sendTestNotification: () => Promise<void>;
  activeNotification: SnapdealNotificationData | null;
  clearNotification: () => void;
}

// Generate or get device ID
const getOrCreateDeviceId = (): string => {
  let deviceId = localStorage.getItem('merfume_device_id');
  
  if (!deviceId) {
    deviceId = 'web_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('merfume_device_id', deviceId);
  }
  
  return deviceId;
};

export const useFCMNotifications = (): UseFCMNotificationsReturn => {
  const [token, setToken] = useState<string | null>(null);
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [activeNotification, setActiveNotification] = useState<SnapdealNotificationData | null>(null);

  // Send test notification
  const sendTestNotification = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch('https://merfume-backend-production-5068.up.railway.app/api/notifications/test/send-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      const data = await response.json();
      console.log('Test notification response:', data);
      alert(`Test notification sent: ${data.message}`);
    } catch (error) {
      console.error('Error sending test notification:', error);
      alert('Error sending test notification');
    }
  }, []);

  // Initialize FCM
  const initializeFCM = useCallback(async (): Promise<void> => {
    try {
      // Check if notifications are supported
      const supported = isNotificationSupported();
      setIsSupported(supported);
      
      if (!supported) {
        console.log('This browser does not support notifications');
        setIsInitialized(true);
        return;
      }

      // Check service worker support
      if (!isServiceWorkerSupported()) {
        console.warn('Service workers not supported - push notifications may not work');
      }

      // Get device ID
      const currentDeviceId = getOrCreateDeviceId();
      setDeviceId(currentDeviceId);

      // Get platform
      const platform = getPlatform();

      console.log('🔄 Initializing FCM...');
      
      // Request permission and get token
      const fcmToken = await requestNotificationPermission();
      
      if (fcmToken) {
        setToken(fcmToken);
        
        try {
          // Register token with backend
          await registerDeviceToken(currentDeviceId, fcmToken, platform);
          console.log('✅ FCM initialized and registered successfully');
          
          // ✅ AUTO-SUBSCRIBE to new-product topic
          try {
            const subscribed = await subscribeToTopic(fcmToken, 'new-products');
            if (subscribed) {
              console.log('✅ Auto-subscribed to new-products topic');
              
              // Also subscribe to announcements topic
              await subscribeToTopic(fcmToken, 'announcements');
              console.log('✅ Auto-subscribed to announcements topic');
            }
          } catch (subscriptionError) {
            console.warn('⚠️ Could not auto-subscribe to topic:', subscriptionError);
          }
          
        } catch (registerError) {
          console.warn('Error registering device token:', registerError);
          // Continue even if registration fails
        }
      } else {
        console.log('No FCM token received (user may have denied permission)');
      }
      
      setIsInitialized(true);
      console.log('✅ FCM initialization complete');
      
    } catch (error) {
      console.error('❌ Error initializing FCM:', error);
      setIsInitialized(true);
    }
  }, []);

  // Setup message listener
  const setupMessageHandling = useCallback((callback?: (payload: MessagePayload) => void) => {
    setupMessageListener((payload) => {
      console.log('📩 Message received in app:', payload);
      
      const data = payload.data || {};
      
      // Handle Snapdeal style notifications
      if (data.style === 'snapdeal_premium') {
        const snapdealData: SnapdealNotificationData = {
          type: data.type || '',
          productId: data.productId || '',
          productName: data.productName || '',
          brandName: data.brandName || '',
          price: data.price || '',
          originalPrice: data.originalPrice,
          discountPercent: data.discountPercent,
          discountAmount: data.discountAmount,
          rating: data.rating,
          category: data.category,
          imageUrl: data.imageUrl,
          brandLogoUrl: data.brandLogoUrl,
          notificationColor: data.notificationColor,
          showTimer: data.showTimer === 'true',
          timerText: data.timerText,
          showRating: data.showRating === 'true',
          showCategoryTag: data.showCategoryTag === 'true',
          deepLink: data.deepLink,
          webLink: data.webLink,
          style: data.style
        };
        
        // Set active notification for UI display
        setActiveNotification(snapdealData);
        
        // Auto clear notification after 8 seconds
        setTimeout(() => {
          setActiveNotification(null);
        }, 8000);
      }
      
      if (callback && typeof callback === 'function') {
        callback(payload);
      }
    });
  }, []);

  // Clear active notification
  const clearNotification = useCallback(() => {
    setActiveNotification(null);
  }, []);

  useEffect(() => {
    // Initialize on component mount
    initializeFCM();
    
    // Cleanup
    return () => {
      setActiveNotification(null);
    };
  }, [initializeFCM]);

  return {
    token,
    deviceId,
    isInitialized,
    isSupported,
    initializeFCM,
    setupMessageHandling,
    sendTestNotification,
    activeNotification,
    clearNotification
  };
};

export default useFCMNotifications;
