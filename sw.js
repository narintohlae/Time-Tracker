// sw.js - Service Worker

self.addEventListener('install', (event) => {
    console.log('SW Installed');
});

self.addEventListener('notificationclick', (event) => {
    const notification = event.notification;
    // ดึง URL ที่ส่งมาจาก index.html
    const targetUrl = notification.data.url;

    event.waitUntil(
        clients.openWindow(targetUrl).then(windowClient => {
            if (windowClient) {
                windowClient.focus();
            }
        })
    );
    
    notification.close();
});