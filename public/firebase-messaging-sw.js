// client/public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKmpDP1qL5rTFLMJ2hjtKRd9cH49swQLs",
  authDomain: "omni-gate.firebaseapp.com",
  projectId: "omni-gate",
  storageBucket: "omni-gate.firebasestorage.app",
  messagingSenderId: "1047182095729",
  appId: "1:1047182095729:web:a48c17846bb91859dd32d0"
};

console.log('🟢 Service Worker: Initializing Firebase...');
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

console.log('🟢 Service Worker: Firebase initialized');

// VAPID Key
const VAPID_KEY = "BIk7yf4OpGO1aulrmXrEeerwjQ00Zt0hSqrvUeXs33oKoW3PDwv26ThMaVr_UPAxh4u36tnPuHe_gZ6Yl0POC7Q";

// ✅ Firebase message handler
messaging.onBackgroundMessage((payload) => {
  console.log('🎯 [firebase-messaging-sw.js] Received background message:', payload);
  
  const notificationTitle = payload.notification?.title || 'Merfume Store';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new notification',
    icon: payload.notification?.icon || '/logo.png',
    badge: '/badge.png',
    tag: 'merfume-notification',
    data: payload.data || {},
    image: payload.notification?.image || payload.data?.imageUrl,
    actions: [
      {
        action: 'view',
        title: 'View'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ],
    requireInteraction: false,
    silent: false,
    timestamp: Date.now(),
    vibrate: [200, 100, 200]
  };

  console.log('🎯 Showing notification with options:', notificationOptions);
  
  return self.registration.showNotification(notificationTitle, notificationOptions)
    .then(() => console.log('✅ Notification shown successfully'))
    .catch(error => console.error('❌ Error showing notification:', error));
});

// ✅ Fallback for non-Firebase push
self.addEventListener('push', function(event) {
  console.log('📩 Service Worker: Push event received (non-Firebase)');
  
  let data = {};
  
  if (event.data) {
    try {
      data = event.data.json();
      console.log('📩 Parsed push data:', data);
    } catch (e) {
      console.error('❌ Failed to parse push data:', e);
      data = {
        title: 'Merfume Store',
        body: 'New notification from Merfume Store',
        icon: '/logo.png'
      };
    }
  }
  
  const title = data.title || 'Merfume Store';
  const options = {
    body: data.body || 'You have a new notification',
    icon: data.icon || '/logo.png',
    badge: '/badge.png',
    tag: 'merfume-notification',
    data: data.data || {},
    image: data.image || data.data?.imageUrl,
    actions: data.actions || [
      {
        action: 'view',
        title: 'View'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ],
    requireInteraction: false,
    silent: false,
    timestamp: Date.now(),
    vibrate: [200, 100, 200]
  };

  console.log('📩 Showing notification from push event:', options);
  
  event.waitUntil(
    self.registration.showNotification(title, options)
      .then(() => console.log('✅ Push notification shown successfully'))
      .catch(error => console.error('❌ Error showing push notification:', error))
  );
});

// ✅ Handle notification click
self.addEventListener('notificationclick', function(event) {
  console.log('👆 Service Worker: Notification click received:', event.notification.data);
  
  event.notification.close();

  const notificationData = event.notification.data || {};
  
  // Send message to all clients
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true })
    .then(function(clients) {
      console.log('👆 Found clients:', clients.length);
      
      clients.forEach(function(client) {
        client.postMessage({
          type: 'NOTIFICATION_CLICK',
          payload: notificationData
        });
      });

      // Handle click based on notification data
      const urlToOpen = notificationData.deepLink || 
                       (notificationData.action === 'VIEW_PRODUCT' && notificationData.productId 
                         ? `/store?product=${notificationData.productId}` 
                         : '/');

      console.log('👆 Opening URL:', urlToOpen);
      
      // Check if there's already a tab open with this URL
      const matchingClient = clients.find(client => 
        client.url.includes(urlToOpen) || 
        (urlToOpen === '/' && client.url.includes(window.location.origin))
      );

      if (matchingClient) {
        console.log('👆 Found existing client, focusing');
        return matchingClient.focus();
      } else {
        console.log('👆 Opening new window');
        return self.clients.openWindow(urlToOpen);
      }
    })
  );
});

// ✅ Handle push subscription change
self.addEventListener('pushsubscriptionchange', function(event) {
  console.log('🔄 Service Worker: Push subscription changed');
  
  event.waitUntil(
    self.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_KEY)
    }).then(function(subscription) {
      console.log('🔄 New subscription:', subscription);
      
      // Send new subscription to server
      return fetch('https://merfume-backend-production-5068.up.railway.app/api/notifications/devices/update-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscription: subscription
        })
      });
    })
  );
});

// Helper function to convert VAPID key
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Service worker installation
self.addEventListener('install', function(event) {
  console.log('⚙️ Service Worker: Installing...');
  self.skipWaiting(); // Activate immediately
});

// Service worker activation
self.addEventListener('activate', function(event) {
  console.log('⚙️ Service Worker: Activating...');
  event.waitUntil(
    Promise.all([
      self.clients.claim(), // Take control of all clients
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            return caches.delete(cacheName);
          })
        );
      })
    ])
  );
});
