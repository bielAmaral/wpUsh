const webpush = require('web-push');

const vapidKeys = {
  publicKey:
'BIzwHJzJXHkqjncpDVSZGbwbbIvoHT6LH4Z6oIpFwiZyArDPeHMuuQzWo_ncBWzidBhAvI_mh7QWrSndRnaneCE',
  privateKey: 'L4NtEgeRS0gVnvK-qJ6ovvz5LE2onltGdJy1dLhXD7I'
};

webpush.setVapidDetails(
  'mailto:fiach.reid@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

subscription = 
	{"endpoint":"https://fcm.googleapis.com/fcm/send/d55oc6XWjN0:APA91bFyrnBiGAmNC1gC8chVMv9VlvWfbGaGUFVtAfBeTZMhEZecPH44HGXLtxLaQe9sscfJmH0CJvELTcVTvDgmmz1C_fmzfLYVFtcvg37pUYaKwfRoRMw5IGQT8QhFJ7SJ8D1I-udU","expirationTime":null,"keys":{"p256dh":"BBg_z-O0fDj_Ca-jccBK4oVtGrtK-g1I_a94O2Y6L5xJKmcttRlZVmZXw5D6sbVC-1aXQgvoZntHCFWctEgyWDU","auth":"6Lqy9AZCFFX_Z9IvLN45GQ"}};


var payload = 
	{ message: 'It Works',
	  title: 'My Website'
	};

webpush.sendNotification(subscription, JSON.stringify(payload));