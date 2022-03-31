const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BJ9PhAbQ3OjBuk9BFZeNRUPlv_JGfdpmAVkWmFFzJmQ5FLDVVNuzOTdCrINH05xp2ExMPkc5jfVK9Jk77KHKpXE',
  privateKey: 'RBLAawlMUnjHlCCo9Oiuta1vOqq1FGxKZXxre1DZBiQ'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/cGBKihkJKW4:APA91bG2rts3aywvLmzB7h8XV3fpGGe5v9a2EwycQe1vnIC_uQaF3a4BRVOVZ4ksqk4rfHmdpDaYQdpxgzU1S7P2LnyPx_UOzc6hXkJsrXTi6Uz8Y8UsrtX7ed9onJkaDf6n7SAvXhLO",
  "expirationTime": null,
  "keys": {
    "p256dh": "BDMtO_u6xur4BtNe3DaBV6M43-mgT2hqJ8rp0fFLxmfVjGzvidyJPlq4TwWpKs0njDdo6_VJQA8_sqq_ORrDv2g",
    "auth": "xZxMGWXbEx8O4X7mjelKvg"
  }
}
webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
