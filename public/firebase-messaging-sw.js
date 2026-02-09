// // client/public/firebase-messaging-sw.js
// importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCKmpDP1qL5rTFLMJ2hjtKRd9cH49swQLs",
//   authDomain: "omni-gate.firebaseapp.com",
//   projectId: "omni-gate",
//   storageBucket: "omni-gate.firebasestorage.app",
//   messagingSenderId: "1047182095729",
//   appId: "1:1047182095729:web:a48c17846bb91859dd32d0"
// };

// console.log('🟢 Service Worker: Initializing Firebase...');
// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// console.log('🟢 Service Worker: Firebase initialized');

// // VAPID Key
// const VAPID_KEY = "BIk7yf4OpGO1aulrmXrEeerwjQ00Zt0hSqrvUeXs33oKoW3PDwv26ThMaVr_UPAxh4u36tnPuHe_gZ6Yl0POC7Q";

// // ✅ Firebase message handler
// messaging.onBackgroundMessage((payload) => {
//   console.log('🎯 [firebase-messaging-sw.js] Received background message:', payload);
  
//   const notificationTitle = payload.notification?.title || 'Merfume Store';
//   const notificationOptions = {
//     body: payload.notification?.body || 'You have a new notification',
//     icon: payload.notification?.icon || '/merfume-logo.png',
//     badge: '/badge.png',
//     tag: 'merfume-notification',
//     data: payload.data || {},
//     image: payload.notification?.image || payload.data?.imageUrl,
//     actions: [
//       {
//         action: 'view',
//         title: 'View'
//       },
//       {
//         action: 'close',
//         title: 'Close'
//       }
//     ],
//     requireInteraction: false,
//     silent: false,
//     timestamp: Date.now(),
//     vibrate: [200, 100, 200]
//   };

//   console.log('🎯 Showing notification with options:', notificationOptions);
  
//   return self.registration.showNotification(notificationTitle, notificationOptions)
//     .then(() => console.log('✅ Notification shown successfully'))
//     .catch(error => console.error('❌ Error showing notification:', error));
// });

// // ✅ Fallback for non-Firebase push
// self.addEventListener('push', function(event) {
//   console.log('📩 Service Worker: Push event received (non-Firebase)');
  
//   let data = {};
  
//   if (event.data) {
//     try {
//       data = event.data.json();
//       console.log('📩 Parsed push data:', data);
//     } catch (e) {
//       console.error('❌ Failed to parse push data:', e);
//       data = {
//         title: 'Merfume Store',
//         body: 'New notification from Merfume Store',
//         icon: '/logo.png'
//       };
//     }
//   }
  
//   const title = data.title || 'Merfume Store';
//   const options = {
//     body: data.body || 'You have a new notification',
//     icon: data.icon || '/merfume-logo.png',
//     badge: '/badge.png',
//     tag: 'merfume-notification',
//     data: data.data || {},
//     image: data.image || data.data?.imageUrl,
//     actions: data.actions || [
//       {
//         action: 'view',
//         title: 'View'
//       },
//       {
//         action: 'close',
//         title: 'Close'
//       }
//     ],
//     requireInteraction: false,
//     silent: false,
//     timestamp: Date.now(),
//     vibrate: [200, 100, 200]
//   };

//   console.log('📩 Showing notification from push event:', options);
  
//   event.waitUntil(
//     self.registration.showNotification(title, options)
//       .then(() => console.log('✅ Push notification shown successfully'))
//       .catch(error => console.error('❌ Error showing push notification:', error))
//   );
// });

// // ✅ Handle notification click
// self.addEventListener('notificationclick', function(event) {
//   console.log('👆 Service Worker: Notification click received:', event.notification.data);
  
//   event.notification.close();

//   const notificationData = event.notification.data || {};
  
//   // Send message to all clients
//   event.waitUntil(
//     self.clients.matchAll({ type: 'window', includeUncontrolled: true })
//     .then(function(clients) {
//       console.log('👆 Found clients:', clients.length);
      
//       clients.forEach(function(client) {
//         client.postMessage({
//           type: 'NOTIFICATION_CLICK',
//           payload: notificationData
//         });
//       });

//       // Handle click based on notification data
//       const urlToOpen = notificationData.deepLink || 
//                        (notificationData.action === 'VIEW_PRODUCT' && notificationData.productId 
//                          ? `/store?product=${notificationData.productId}` 
//                          : '/');

//       console.log('👆 Opening URL:', urlToOpen);
      
//       // Check if there's already a tab open with this URL
//       const matchingClient = clients.find(client => 
//         client.url.includes(urlToOpen) || 
//         (urlToOpen === '/' && client.url.includes(window.location.origin))
//       );

//       if (matchingClient) {
//         console.log('👆 Found existing client, focusing');
//         return matchingClient.focus();
//       } else {
//         console.log('👆 Opening new window');
//         return self.clients.openWindow(urlToOpen);
//       }
//     })
//   );
// });

// // ✅ Handle push subscription change
// self.addEventListener('pushsubscriptionchange', function(event) {
//   console.log('🔄 Service Worker: Push subscription changed');
  
//   event.waitUntil(
//     self.registration.pushManager.subscribe({
//       userVisibleOnly: true,
//       applicationServerKey: urlBase64ToUint8Array(VAPID_KEY)
//     }).then(function(subscription) {
//       console.log('🔄 New subscription:', subscription);
      
//       // Send new subscription to server
//       return fetch('https://merfume-backend-production-5068.up.railway.app/api/notifications/devices/update-subscription', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           subscription: subscription
//         })
//       });
//     })
//   );
// });

// // Helper function to convert VAPID key
// function urlBase64ToUint8Array(base64String) {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, '+')
//     .replace(/_/g, '/');

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }

// // Service worker installation
// self.addEventListener('install', function(event) {
//   console.log('⚙️ Service Worker: Installing...');
//   self.skipWaiting(); // Activate immediately
// });

// // Service worker activation
// self.addEventListener('activate', function(event) {
//   console.log('⚙️ Service Worker: Activating...');
//   event.waitUntil(
//     Promise.all([
//       self.clients.claim(), // Take control of all clients
//       // Clean up old caches
//       caches.keys().then(cacheNames => {
//         return Promise.all(
//           cacheNames.map(cacheName => {
//             return caches.delete(cacheName);
//           })
//         );
//       })
//     ])
//   );
// });



// public/firebase-messaging-sw.js
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
try {
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  console.log('🟢 Service Worker: Firebase initialized');

  // ✅ SNAPDEAL STYLE Notification Handler
  messaging.onBackgroundMessage((payload) => {
    console.log('🎯 [Service Worker] Received Snapdeal-style message:', payload);
    
    const notificationData = payload.data || {};
    const notificationStyle = notificationData.style || 'default';
    
    let notificationTitle, notificationOptions;
    
    if (notificationStyle === 'snapdeal_premium') {
      // Snapdeal Premium Style Notification
      notificationTitle = notificationData.brandName || 'Merfume Store';
      notificationOptions = createSnapdealStyleNotification(notificationData, payload);
    } else {
      // Default Style Notification
      notificationTitle = payload.notification?.title || 'Merfume Store';
      notificationOptions = createDefaultNotification(payload, notificationData);
    }
    
    console.log('🎯 Showing notification:', notificationTitle);
    
    return self.registration.showNotification(notificationTitle, notificationOptions)
      .then(() => console.log('✅ Notification shown successfully'))
      .catch(error => console.error('❌ Error showing notification:', error));
  });

  // Create Snapdeal style notification
  function createSnapdealStyleNotification(data, payload) {
    const notification = payload.notification || {};
    const currentPrice = data.currentPrice || '';
    const originalPrice = data.originalPrice || '';
    const discountPercent = data.discountPercent || '';
    const discountAmount = data.discountAmount || '';
    const rating = data.rating || '';
    const category = data.category || '';
    const brandName = data.brandName || '';
    const productName = data.productName || '';
    const imageUrl = data.imageUrl || notification.image;
    const brandLogoUrl = data.brandLogoUrl || '/merfume-logo.png';
    
    // Construct Snapdeal style body (Multi-line like Snapdeal)
    let bodyLines = [];
    
    // Line 1: Product name
    if (productName) bodyLines.push(productName);
    
    // Line 2: Pricing info
    let priceLine = currentPrice;
    if (originalPrice && discountPercent) {
      priceLine += `  ${originalPrice}  ${discountPercent}`;
      if (discountAmount && discountAmount !== '₹0') {
        priceLine += ` (Save ${discountAmount})`;
      }
    }
    bodyLines.push(priceLine);
    
    // Line 3: Rating or category
    if (rating && parseFloat(rating) > 0) {
      const stars = getStarsFromRating(parseFloat(rating));
      bodyLines.push(`${stars} ${rating}${category ? ' • ' + category : ''}`);
    } else if (category) {
      bodyLines.push(`🏷️ ${category}`);
    }
    
    const body = bodyLines.join('\n');
    
    const options = {
      body: body,
      icon: brandLogoUrl,
      tag: data.notificationId || 'snapdeal_style_notification',
      data: data,
      requireInteraction: data.showTimer === 'true' ? true : false,
      silent: false,
      timestamp: Date.now()
    };
    
    // Add badge if supported
    if ('badge' in Notification.prototype) {
      options.badge = '/badge.png';
    }
    
    // Add image if supported
    if (imageUrl && 'image' in Notification.prototype) {
      options.image = imageUrl;
    }
    
    // Add vibrate if supported
    if ('vibrate' in Notification.prototype) {
      options.vibrate = [200, 100, 200];
    }
    
    // Add actions if supported
    if ('actions' in Notification.prototype) {
      options.actions = [
        {
          action: 'view_product',
          title: 'View Product'
        },
        {
          action: 'shop_now',
          title: 'Shop Now'
        }
      ];
    }
    
    // Add custom color if available (store in data)
    if (data.notificationColor) {
      options.data = {
        ...options.data,
        customColor: data.notificationColor
      };
    }
    
    return options;
  }

  // Helper to create star rating
  function getStarsFromRating(rating) {
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
  }

  // Create default notification
  function createDefaultNotification(payload, data) {
    const notification = payload.notification || {};
    
    const options = {
      body: notification.body || 'New product available!',
      icon: notification.icon || '/merfume-logo.png',
      tag: 'merfume_notification',
      data: data || {},
      requireInteraction: false,
      silent: false,
      timestamp: Date.now()
    };
    
    // Add badge if supported
    if ('badge' in Notification.prototype) {
      options.badge = '/badge.png';
    }
    
    // Add vibrate if supported
    if ('vibrate' in Notification.prototype) {
      options.vibrate = [200, 100, 200];
    }
    
    // Add actions if supported
    if ('actions' in Notification.prototype) {
      options.actions = [
        {
          action: 'view',
          title: 'View'
        },
        {
          action: 'dismiss',
          title: 'Dismiss'
        }
      ];
    }
    
    return options;
  }

  // ✅ Handle notification click
  self.addEventListener('notificationclick', function(event) {
    console.log('👆 Service Worker: Notification click received');
    
    event.notification.close();
    const notificationData = event.notification.data || {};
    const action = event.action || 'view_product';
    
    // Send analytics about click
    sendNotificationClickAnalytics(notificationData, action);
    
    // Determine URL to open based on action
    let urlToOpen = '/';
    
    if (action === 'view_product' || action === 'shop_now' || action === 'view') {
      if (notificationData.deepLink) {
        urlToOpen = notificationData.deepLink;
      } else if (notificationData.productId) {
        urlToOpen = `/store?product=${notificationData.productId}`;
      } else if (notificationData.webLink) {
        urlToOpen = notificationData.webLink;
      }
    }
    
    console.log('👆 Opening URL:', urlToOpen, 'Action:', action);
    
    event.waitUntil(
      self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(function(clients) {
        // Check for existing tab
        for (const client of clients) {
          if (client.url.includes(urlToOpen) && 'focus' in client) {
            return client.focus();
          }
        }
        
        // Open new tab
        if (self.clients.openWindow) {
          return self.clients.openWindow(urlToOpen);
        }
      })
    );
  });

  // Send analytics about notification click
  function sendNotificationClickAnalytics(data, action) {
    if (!data.notificationId) return;
    
    const analyticsData = {
      notificationId: data.notificationId,
      productId: data.productId,
      type: data.type,
      action: action,
      timestamp: new Date().toISOString(),
      style: data.style || 'default'
    };
    
    // Send to analytics endpoint
    fetch('https://merfume-backend-production-5068.up.railway.app/api/analytics/notification-click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(analyticsData)
    }).catch(err => console.log('Analytics error:', err));
  }

  // ✅ Handle push subscription change
  self.addEventListener('pushsubscriptionchange', function(event) {
    console.log('🔄 Service Worker: Push subscription changed');
    
    if (!event.newSubscription) {
      event.waitUntil(
        self.registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array("BIk7yf4OpGO1aulrmXrEeerwjQ00Zt0hSqrvUeXs33oKoW3PDwv26ThMaVr_UPAxh4u36tnPuHe_gZ6Yl0POC7Q")
        }).then(function(subscription) {
          console.log('🔄 New subscription created');
          
          // Send to backend
          return fetch('https://merfume-backend-production-5068.up.railway.app/api/notifications/devices/update-subscription', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ subscription: subscription.toJSON() })
          });
        }).catch(err => console.error('Error subscribing:', err))
      );
    }
  });

} catch (error) {
  console.error('❌ Error in service worker:', error);
}

// Helper function to convert VAPID key
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Service worker lifecycle events
self.addEventListener('install', function(event) {
  console.log('⚙️ Service Worker: Installing...');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('⚙️ Service Worker: Activating...');
  event.waitUntil(self.clients.claim());
});
