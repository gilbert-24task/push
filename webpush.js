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
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
