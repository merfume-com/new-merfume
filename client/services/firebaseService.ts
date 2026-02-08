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

export type { MessagePayload };

// ✅ CORRECT Firebase Configuration (from your Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCKmpDP1qL5rTFLMJ2hjtKRd9cH49swQLs", // New API key
  authDomain: "omni-gate.firebaseapp.com",
  projectId: "omni-gate",
  storageBucket: "omni-gate.firebasestorage.app", // Updated storage bucket
  messagingSenderId: "1047182095729", // New sender ID
  appId: "1:1047182095729:web:a48c17846bb91859dd32d0", // New app ID
  measurementId: "G-2G65ZMSETC" // New measurement ID
};

// ✅ CORRECT VAPID Key (from Cloud Messaging tab)
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

// ✅ FIXED: Service Worker Registration Helper
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
        // Update via all active tabs immediately
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

// ✅ FIXED: Request permission and get FCM token
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
          // No serviceWorkerRegistration parameter
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

// ✅ FIXED: Listen for incoming messages
export const setupMessageListener = (callback: (payload: MessagePayload) => void) => {
  initializeFirebase().then(messagingInstance => {
    if (messagingInstance) {
      onMessage(messagingInstance, (payload: MessagePayload) => {
        console.log('📩 Foreground message received:', payload);
        
        if (callback && typeof callback === 'function') {
          callback(payload);
        }
        
        // Show notification in foreground
        if (payload.notification) {
          showNotification(payload.notification);
        }
      });
    }
  });
};

// Show browser notification
const showNotification = (notification: any): void => {
  if ('Notification' in window && Notification.permission === 'granted') {
    const options: NotificationOptions = {
      body: notification.body,
      icon: notification.icon || '/logo.png',
      badge: '/badge.png',
      tag: 'merfume-notification',
      requireInteraction: false, // Changed to false for better UX
      data: notification.data,
      silent: false,
      vibrate: [200, 100, 200]
    };
    
    const notif = new Notification(notification.title || 'Merfume Store', options);
    
    notif.onclick = function(event: Event) {
      event.preventDefault();
      
      if (notification.data && notification.data.deepLink) {
        window.open(notification.data.deepLink, '_blank');
      } else if (notification.click_action) {
        window.open(notification.click_action, '_blank');
      } else {
        window.focus();
      }
      
      notif.close();
    };
    
    // Auto close after 10 seconds
    setTimeout(() => {
      notif.close();
    }, 10000);
  }
};

// ✅ ADDED: Subscribe to topic function
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

// ✅ ADDED: Get current push subscription
export const getCurrentSubscription = async (): Promise<PushSubscription | null> => {
  try {
    if (!isServiceWorkerSupported()) return null;
    
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    return subscription;
  } catch (error) {
    console.error('Error getting subscription:', error);
    return null;
  }
};

export default initializeFirebase;
