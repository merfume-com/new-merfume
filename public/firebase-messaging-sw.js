// client/public/firebase-messaging-sw.js
// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// ✅ CORRECT Firebase Configuration (same as frontend)
const firebaseConfig = {
  apiKey: "AIzaSyCKmpDP1qL5rTFLMJ2hjtKRd9cH49swQLs",
  authDomain: "omni-gate.firebaseapp.com",
  projectId: "omni-gate",
  storageBucket: "omni-gate.firebasestorage.app",
  messagingSenderId: "1047182095729",
  appId: "1:1047182095729:web:a48c17846bb91859dd32d0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ✅ CORRECT VAPID Key
const VAPID_KEY = "BIk7yf4OpGO1aulrmXrEeerwjQ00Zt0hSqrvUeXs33oKoW3PDwv26ThMaVr_UPAxh4u36tnPuHe_gZ6Yl0POC7Q";

// Firebase message handler
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message', payload);
  
  const notificationTitle = payload.notification?.title || 'Merfume Store';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new notification',
    icon: payload.notification?.icon || '/logo.png',
    badge: '/badge.png',
    tag: 'merfume-notification',
    data: payload.data || {},
    actions: [
      {
        action: 'view',
        title: 'View'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Listen for push events (fallback)
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  
  let data = {};
  
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      console.error('Failed to parse push data:', e);
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
    data: data.data || {}
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');
  
  event.notification.close();

  const notificationData = event.notification.data || {};
  
  // Send message to all clients
  event.waitUntil(
    self.clients.matchAll().then(function(clients) {
      clients.forEach(function(client) {
        client.postMessage({
          type: 'NOTIFICATION_CLICK',
          payload: notificationData
        });
      });
    })
  );

  // Handle click based on notification data
  if (notificationData.action === 'VIEW_PRODUCT' && notificationData.productId) {
    event.waitUntil(
      clients.openWindow(`/store?product=${notificationData.productId}`)
    );
  } else if (notificationData.deepLink) {
    event.waitUntil(
      clients.openWindow(notificationData.deepLink)
    );
  } else {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Handle push subscription change
self.addEventListener('pushsubscriptionchange', function(event) {
  console.log('[Service Worker] Push subscription changed.');
  
  event.waitUntil(
    self.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_KEY)
    }).then(function(subscription) {
      console.log('New subscription:', subscription);
      
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
  console.log('[Service Worker] Installing...');
  self.skipWaiting(); // Activate immediately
});

// Service worker activation
self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating...');
  event.waitUntil(clients.claim()); // Take control of all clients
});
