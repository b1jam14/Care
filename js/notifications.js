import { getToken } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-messaging.js";

export function initNotifications(messaging) {
    const btn = document.getElementById("notificationBtn");
    const tokenEl = document.getElementById("token");

    if (!btn) return;

    btn.addEventListener("click", async () => {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") return;

        const registration = await navigator.serviceWorker.register("./firebase-messaging-sw.js");

        const token = await getToken(messaging, {
            vapidKey: "BNVaU-yEJWK5gp6p1km6mZMc95l769Vji6j4GS7tVId7Q6ZCmYCGS0_brkDpgBI9hc4GIrO4pkgQIK_-ySgFAGg",
            serviceWorkerRegistration: registration
        });

        tokenEl.textContent = token;
    });
}