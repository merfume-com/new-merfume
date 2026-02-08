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

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI5fCvfQ4lprcXJpAj2oZ9MXh3gXy_Y5g",
  authDomain: "omni-gate.firebaseapp.com",
  projectId: "omni-gate",
  storageBucket: "omni-gate.appspot.com",
  messagingSenderId: "844931019461",
  appId: "1:844931019461:web:40a47cde5c4a9d3e3096f9",
  measurementId: "G-9T2X8EZ7V4"
};

// VAPID Key for web push
const VAPID_KEY = "BPdL5-FHVDleZ01nD2l71ZMrVjq0iZXN8bAztWGRl5tSsmbQKcQnnBf3DprzK-wZ3uTWQ2p7AlF-Qok6Qb4S6o8";

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

// Request permission and get FCM token WITHOUT service worker
export const requestNotificationPermission = async (): Promise<string | null> => {
  try {
    // Check browser support
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications');
      return null;
    }

    // Request permission
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      
      // Initialize Firebase
      const messagingInstance = await initializeFirebase();
      
      if (!messagingInstance) {
        console.log('Firebase messaging not available');
        return null;
      }

      try {
        // Try to get token WITHOUT service worker registration
        // This is for development/localhost
        const token = await getToken(messagingInstance, {
          vapidKey: VAPID_KEY,
          // Don't specify serviceWorkerRegistration for development
        });
        
        if (token) {
          console.log('FCM Token received successfully');
          return token;
        }
      } catch (tokenError: any) {
        console.warn('Failed to get FCM token:', tokenError.message);
        
        // Alternative approach for development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          console.log('Localhost detected - trying alternative approach');
          
          try {
            // Try with minimal configuration
            const altToken = await getToken(messagingInstance, {
              vapidKey: VAPID_KEY,
              serviceWorkerRegistration: null
            });
            
            if (altToken) {
              console.log('FCM Token received (alternative approach)');
              return altToken;
            }
          } catch (altError) {
            console.error('Alternative approach also failed:', altError);
          }
        }
      }
      
      console.log('No FCM token received');
      return null;
    } else {
      console.log('Notification permission denied or dismissed');
      return null;
    }
  } catch (error) {
    console.error('Error in requestNotificationPermission:', error);
    return null;
  }
};

// Listen for incoming messages
export const setupMessageListener = (callback: (payload: MessagePayload) => void) => {
  initializeFirebase().then(messagingInstance => {
    if (messagingInstance) {
      onMessage(messagingInstance, (payload: MessagePayload) => {
        console.log('Foreground message received:', payload);
        
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
      requireInteraction: true,
      data: notification.data
    };
    
    const notif = new Notification(notification.title || 'Merfume Store', options);
    
    notif.onclick = function(event: Event) {
      event.preventDefault();
      window.focus();
      
      if (notification.click_action) {
        window.open(notification.click_action, '_blank');
      }
      
      notif.close();
    };
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
    console.log('Device registration successful:', data);
    return data;
  } catch (error) {
    console.error('Error registering device token:', error);
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

// Get platform
export const getPlatform = (): string => {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (/android/.test(userAgent)) return 'ANDROID';
  if (/iphone|ipad|ipod/.test(userAgent)) return 'IOS';
  return 'WEB';
};

export default initializeFirebase;
