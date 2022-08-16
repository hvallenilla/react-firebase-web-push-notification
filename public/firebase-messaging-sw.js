importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging-compat.js');


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
};

const app = firebase.initializeApp(firebaseConfig);  
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    console.log('Received message', payload);

    // previous to show noti
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png",
    }

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
})