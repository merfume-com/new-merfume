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

  // ✅ IMPROVED NOTIFICATION HANDLER
  messaging.onBackgroundMessage((payload) => {
    console.log('🎯 [Service Worker] Received message:', payload);
    
    // Extract data from payload
    const data = payload.data || {};
    const notification = payload.notification || {};
    
    console.log('📦 Data received:', data);
    console.log('📦 Notification received:', notification);
    
    // Check what type of data we have
    if (data.style === 'snapdeal_premium' || 
        data.notificationType === 'snapdeal' || 
        data.productId || 
        data.price) {
      // This is a Snapdeal-style notification
      console.log('🎯 Creating Snapdeal-style notification');
      return showSnapdealNotification(data, notification);
    } else if (notification.title || notification.body) {
      // This is a regular notification (fallback)
      console.log('🎯 Creating regular notification');
      return showRegularNotification(notification, data);
    } else {
      // Default notification if nothing else works
      console.log('🎯 Creating default notification');
      return showDefaultNotification();
    }
  });

  // ✅ SNAPDEAL STYLE NOTIFICATION FUNCTION
  function showSnapdealNotification(data, notification) {
    // Extract all possible data fields
    const brandName = data.brandName || notification.title || 'Merfume Store';
    const productName = data.productName || data.product_name || data.title || notification.body || 'New Product';
    const price = data.price || data.currentPrice || '';
    const originalPrice = data.originalPrice || data.oldPrice || '';
    const discountPercent = data.discountPercent || data.discount || '';
    const discountAmount = data.discountAmount || data.saveAmount || '';
    const rating = data.rating || '';
    const category = data.category || data.productCategory || '';
    const imageUrl = data.imageUrl || data.image || notification.image || '/product-placeholder.png';
    const brandLogoUrl = data.brandLogoUrl || data.icon || notification.icon || '/merfume-logo.png';
    const productId = data.productId || '';
    const deepLink = data.deepLink || data.url || `/store?product=${productId}`;
    const showTimer = data.showTimer === 'true' || data.showTimer === true;
    const timerText = data.timerText || 'Hurry! Offer ends soon';
    
    // 🔥 CRITICAL: Construct RICH notification body like Snapdeal
    let bodyLines = [];
    
    // Line 1: Product Name (bold/large)
    if (productName) {
      bodyLines.push(`📦 ${productName}`);
    }
    
    // Line 2: Price information
    let priceLine = '';
    if (price) {
      priceLine += `💰 ${price}`;
    }
    if (originalPrice) {
      priceLine += `   ~~${originalPrice}~~`;
    }
    if (discountPercent) {
      priceLine += `   🔥 ${discountPercent} OFF`;
    }
    if (priceLine) {
      bodyLines.push(priceLine);
    }
    
    // Line 3: Additional details
    let detailsLine = '';
    if (rating && parseFloat(rating) > 0) {
      const stars = getStarsFromRating(parseFloat(rating));
      detailsLine += `${stars} ${rating}`;
    }
    if (category) {
      if (detailsLine) detailsLine += ' • ';
      detailsLine += `🏷️ ${category}`;
    }
    if (discountAmount && discountAmount !== '₹0' && discountAmount !== '0') {
      if (detailsLine) detailsLine += ' • ';
      detailsLine += `💸 Save ${discountAmount}`;
    }
    if (detailsLine) {
      bodyLines.push(detailsLine);
    }
    
    // Join all lines with newlines
    const body = bodyLines.join('\n');
    
    console.log('📝 Notification Body:', body);
    
    // Create notification options
    const options = {
      body: body,
      icon: brandLogoUrl,
      badge: '/badge.png',
      tag: productId || 'snapdeal_' + Date.now(),
      data: {
        ...data,
        style: 'snapdeal_premium',
        deepLink: deepLink,
        productId: productId,
        click_action: deepLink,
        notificationColor: data.notificationColor || '#FF6B35'
      },
      requireInteraction: showTimer,
      silent: false,
      timestamp: Date.now(),
      vibrate: [200, 100, 200]
    };
    
    // Add image if supported
    if (imageUrl && 'image' in Notification.prototype) {
      options.image = imageUrl;
      console.log('🖼️ Adding image to notification:', imageUrl);
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
    
    // Show notification
    console.log('🎯 Showing Snapdeal-style notification:', brandName);
    return self.registration.showNotification(brandName, options)
      .then(() => {
        console.log('✅ Snapdeal notification shown successfully');
        return true;
      })
      .catch(error => {
        console.error('❌ Error showing Snapdeal notification:', error);
        // Fallback to regular notification
        return showRegularNotification({
          title: brandName,
          body: productName
        }, data);
      });
  }

  // ✅ REGULAR NOTIFICATION FUNCTION
  function showRegularNotification(notification, data) {
    const title = notification.title || 'Merfume Store';
    const body = notification.body || 'Check out our latest products!';
    const icon = notification.icon || '/merfume-logo.png';
    const image = notification.image || '/product-placeholder.png';
    
    const options = {
      body: body,
      icon: icon,
      badge: '/badge.png',
      tag: 'merfume_' + Date.now(),
      data: data,
      silent: false,
      timestamp: Date.now(),
      vibrate: [200, 100, 200]
    };
    
    if (image && 'image' in Notification.prototype) {
      options.image = image;
    }
    
    if ('actions' in Notification.prototype) {
      options.actions = [
        {
          action: 'view',
          title: 'View'
        }
      ];
    }
    
    return self.registration.showNotification(title, options);
  }

  // ✅ DEFAULT NOTIFICATION FUNCTION
  function showDefaultNotification() {
    const options = {
      body: '🛍️ New products available! Shop now for exclusive deals.',
      icon: '/merfume-logo.png',
      badge: '/badge.png',
      tag: 'default_' + Date.now(),
      data: { style: 'default' },
      silent: false,
      timestamp: Date.now(),
      vibrate: [200, 100, 200]
    };
    
    return self.registration.showNotification('Merfume Store', options);
  }

  // ✅ STAR RATING HELPER
  function getStarsFromRating(rating) {
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
  }

  // ✅ NOTIFICATION CLICK HANDLER
  self.addEventListener('notificationclick', function(event) {
    console.log('👆 Notification clicked:', event.notification);
    
    event.notification.close();
    
    const notificationData = event.notification.data || {};
    const action = event.action || 'view_product';
    
    let urlToOpen = '/';
    
    if (action === 'view_product' || action === 'shop_now' || action === 'view') {
      if (notificationData.deepLink) {
        urlToOpen = notificationData.deepLink;
      } else if (notificationData.productId) {
        urlToOpen = `/store?product=${notificationData.productId}`;
      } else if (notificationData.webLink) {
        urlToOpen = notificationData.webLink;
      } else if (notificationData.click_action) {
        urlToOpen = notificationData.click_action;
      } else if (notificationData.url) {
        urlToOpen = notificationData.url;
      }
    }
    
    console.log('👆 Opening URL:', urlToOpen);
    
    event.waitUntil(
      self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(function(windowClients) {
        // Try to focus existing tab
        for (const client of windowClients) {
          if (client.url.includes(urlToOpen) && 'focus' in client) {
            return client.focus();
          }
        }
        
        // Open new tab if no existing tab found
        if (self.clients.openWindow) {
          return self.clients.openWindow(urlToOpen);
        }
      })
    );
  });

  // Handle push subscription changes
  self.addEventListener('pushsubscriptionchange', function(event) {
    console.log('🔄 Push subscription changed');
    
    event.waitUntil(
      self.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array("BIk7yf4OpGO1aulrmXrEeerwjQ00Zt0hSqrvUeXs33oKoW3PDwv26ThMaVr_UPAxh4u36tnPuHe_gZ6Yl0POC7Q")
      }).then(function(subscription) {
        console.log('🔄 New subscription created');
        
        return fetch('https://merfume-backend-production-5068.up.railway.app/api/notifications/devices/update-subscription', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ subscription: subscription.toJSON() })
        });
      }).catch(err => console.error('Error subscribing:', err))
    );
  });

} catch (error) {
  console.error('❌ Error in service worker:', error);
}

// Helper function for VAPID key
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

// Service worker lifecycle
self.addEventListener('install', function(event) {
  console.log('⚙️ Service Worker: Installing...');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('⚙️ Service Worker: Activating...');
  event.waitUntil(self.clients.claim());
});
