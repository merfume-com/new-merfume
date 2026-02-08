import { useEffect, useState, useCallback } from 'react';
import { 
  requestNotificationPermission, 
  setupMessageListener,
  registerDeviceToken,
  getPlatform,
  isNotificationSupported
} from '../services/firebaseService';
import { MessagePayload } from 'firebase/messaging';

interface UseFCMNotificationsReturn {
  token: string | null;
  deviceId: string | null;
  isInitialized: boolean;
  isSupported: boolean;
  initializeFCM: () => Promise<void>;
  setupMessageHandling: (callback?: (payload: MessagePayload) => void) => void;
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

      // Get device ID
      const currentDeviceId = getOrCreateDeviceId();
      setDeviceId(currentDeviceId);

      // Get platform
      const platform = getPlatform();

      console.log('Initializing FCM...');
      
      // Request permission and get token
      const fcmToken = await requestNotificationPermission();
      
      if (fcmToken) {
        setToken(fcmToken);
        
        try {
          // Register token with backend
          await registerDeviceToken(currentDeviceId, fcmToken, platform);
          console.log('FCM initialized and registered successfully');
        } catch (registerError) {
          console.warn('Error registering device token:', registerError);
          // Continue even if registration fails
        }
      } else {
        console.log('No FCM token received (user may have denied permission)');
      }
      
      setIsInitialized(true);
    } catch (error) {
      console.error('Error initializing FCM:', error);
      setIsInitialized(true);
    }
  }, []);

  // Setup message listener
  const setupMessageHandling = useCallback((callback?: (payload: MessagePayload) => void) => {
    setupMessageListener((payload) => {
      console.log('Message received in app:', payload);
      
      if (callback && typeof callback === 'function') {
        callback(payload);
      }
    });
  }, []);

  useEffect(() => {
    // Initialize on component mount
    initializeFCM();
    
    // Cleanup
    return () => {
      // Any cleanup needed
    };
  }, [initializeFCM]);

  return {
    token,
    deviceId,
    isInitialized,
    isSupported,
    initializeFCM,
    setupMessageHandling
  };
};

export default useFCMNotifications;
