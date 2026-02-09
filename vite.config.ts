// import { defineConfig, Plugin } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { createServer } from "./server";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//     allowedHosts: ['.vercel.app'],
//   },
//   build: {
//     outDir: "dist/spa",
//   },
//   plugins: [react(), expressPlugin()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./client"),
//       "@shared": path.resolve(__dirname, "./shared"),
//     },
//   },
// }));

// function expressPlugin(): Plugin {
//   return {
//     name: "express-plugin",
//     apply: "serve", // Only apply during development (serve mode)
//     configureServer(server) {
//       const app = createServer();

//       // Add Express app as middleware to Vite dev server
//       server.middlewares.use(app);
//     },
//   };
// }


// // vite.config.ts
// import { defineConfig, Plugin } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { createServer } from "./server";

// export default defineConfig(({ mode }) => ({
//   root: path.resolve(__dirname, "client"), // 👈 set Vite root to /client
//   build: {
//     outDir: path.resolve(__dirname, "dist"), // 👈 build will go to /dist
//     emptyOutDir: true,
//   },
//   server: {
//     host: "::",
//     port: 8080,
//     allowedHosts: ['https://merfume-three.vercel.app/'],
//   },
//   plugins: [react(), expressPlugin()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "client"),
//       "@shared": path.resolve(__dirname, "shared"),
//     },
//   },
// }));

// function expressPlugin(): Plugin {
//   return {
//     name: "express-plugin",
//     apply: "serve",
//     configureServer(server) {
//       const app = createServer();
//       server.middlewares.use(app);
//     },
//   };
// }

// import { defineConfig, Plugin } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { createServer } from "./server";
// export default defineConfig({
//   root: 'client', // 👈 tells Vite that your app starts in /client
//   build: {
//     outDir: '../dist', // 👈 build goes outside of /client
//     emptyOutDir: true,
//   },
//   server: {
//     port: 8081, // 👈 change dev server port to 8080
//   },
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './client'),
//       // '@shared': path.resolve(__dirname, './shared'),
//     },
//   },
// });


// // vite.config.ts
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import fs from "fs";

// export default defineConfig({
//   root: 'client',
//   build: {
//     outDir: '../dist',
//     emptyOutDir: true,
//     // Assets configuration
//     assetsInlineLimit: 4096, // 4kb
//     rollupOptions: {
//       output: {
//         // Service worker ko alag se copy karega
//         assetFileNames: (assetInfo) => {
//           if (assetInfo.name === 'firebase-messaging-sw.js') {
//             return '[name][extname]'; // Root mein copy hoga
//           }
//           return 'assets/[name]-[hash][extname]';
//         }
//       }
//     }
//   },
//   server: {
//     port: 8081,
//   },
//   plugins: [
//     react(),
//     // Custom plugin to handle service worker
//     {
//       name: 'copy-service-worker',
//       closeBundle() {
//         // Copy service worker from public to dist
//         const sourcePath = path.resolve(__dirname, 'client/public/firebase-messaging-sw.js');
//         const destPath = path.resolve(__dirname, 'dist/firebase-messaging-sw.js');
        
//         if (fs.existsSync(sourcePath)) {
//           fs.copyFileSync(sourcePath, destPath);
//           console.log('✅ Service worker copied to dist/');
//         } else {
//           console.warn('⚠️ Service worker not found at:', sourcePath);
          
//           // Create a basic service worker if missing
//           const basicSW = `
// // Basic service worker for Firebase
// self.addEventListener('install', (event) => {
//   self.skipWaiting();
//   console.log('Service Worker installed');
// });

// self.addEventListener('activate', (event) => {
//   event.waitUntil(clients.claim());
//   console.log('Service Worker activated');
// });

// self.addEventListener('push', (event) => {
//   const data = event.data?.json() || {};
//   event.waitUntil(
//     self.registration.showNotification(
//       data.title || 'Merfume Store',
//       {
//         body: data.body || 'New notification',
//         icon: '/logo.png',
//         badge: '/badge.png'
//       }
//     )
//   );
// });
//           `;
          
//           fs.writeFileSync(destPath, basicSW);
//           console.log('✅ Created basic service worker');
//         }
//       }
//     }
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './client'),
//     },
//   },
//   publicDir: path.resolve(__dirname, './client/public'),
// });



// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  root: 'client',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'client/index.html'),
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  },
  server: {
    port: 8081,
  },
  plugins: [
    react(),
    // Remove the custom copy-service-worker plugin and use VitePWA instead
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['firebase-messaging-sw.js', 'logo.png', 'badge.png'],
      manifest: false, // We're using our own manifest
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/firebase\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'firebase-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client'),
    },
  },
  publicDir: path.resolve(__dirname, './client/public'),
});
