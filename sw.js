// ติดตั้ง Service Worker พื้นฐาน
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});

// เมื่อผู้ใช้กดที่กล่องข้อความแจ้งเตือน
self.addEventListener('notificationclick', (event) => {
    event.notification.close(); // ปิดกล่องข้อความ
    // สั่งให้เปิดหน้าเว็บขึ้นมาถ้าแอปถูกซ่อนอยู่
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then( windowClients => {
            if (windowClients.length > 0) {
                windowClients[0].focus();
            } else {
                clients.openWindow('/');
            }
        })
    );
});