importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging-compat.js');


const firebaseConfig = {
    apiKey: "AIzaSyAGW5sFSv7AZqAo4ALV0UNVxlN_i6XqE5A",
    authDomain: "gpx-grower-app.firebaseapp.com",
    projectId: "gpx-grower-app",
    storageBucket: "gpx-grower-app.appspot.com",
    messagingSenderId: "406228877549",
    appId: "1:406228877549:web:a3a8f840bfa4664b1e4ce4",
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