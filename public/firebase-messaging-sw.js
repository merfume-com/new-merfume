// client/public/firebase-messaging-sw.js
// Simple service worker for Firebase notifications

// Listen for push events
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
    data: data.data || {},
    actions: data.actions || [
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
      applicationServerKey: urlBase64ToUint8Array('BPdL5-FHVDleZ01nD2l71ZMrVjq0iZXN8bAztWGRl5tSsmbQKcQnnBf3DprzK-wZ3uTWQ2p7AlF-Qok6Qb4S6o8')
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
