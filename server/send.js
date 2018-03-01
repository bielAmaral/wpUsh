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

subscription = {
	"endpoint":"https://fcm.googleapis.com/fcm/send/fJLc6xP6HIE:APA91bFnK_dv8fdBYSaGx5HnJ7PHc696DcBAfD-5XJ7Vke4INBVWGaGiexaeVBseWiq1opmRrLZ9Z_XxvfZUe3PyryARxUfNAlTtXeOxssszZBTlQdQ2qkvEIsmObsJigrJylTZO0_p2",
	"expirationTime":null,
	"keys":
		{"p256dh":"BGbqvhUQPyC-QSrm_pQ45Als58dKuehPn-mz1PGXzSvghowZJmEroBMIMAVzuc6QB2zxo032H2NSWgzboMhHFK8=",
		"auth":"SvXCMDcjgzkGWjFNNVtMOw=="}
	};

var payload = 
	{ message: 'It Works',
	  title: 'My Website'
	};

webpush.sendNotification(subscription, JSON.stringify(payload));