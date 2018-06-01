const express = require('express');

const vapidKeys = {"publicKey":"BG9qwL2-IXztaALhqX1zM_ZVUFv5ys0YJfey9sm0V4tSnaiiS_7Mcyvcak_zQUWAuiHRPAABSCUWQ0IyAgXZZOU",
                "privateKey":"6eSMsZMAMUr7n32m02Fy-wtz3IbBYnY1pAVHqDd3c_A"};

const webpush = require('web-push');

const publicVapidKey = "BG9qwL2-IXztaALhqX1zM_ZVUFv5ys0YJfey9sm0V4tSnaiiS_7Mcyvcak_zQUWAuiHRPAABSCUWQ0IyAgXZZOU";
const privateVapidKey ="6eSMsZMAMUr7n32m02Fy-wtz3IbBYnY1pAVHqDd3c_A";

// Replace with your email
webpush.setVapidDetails('mailto:j.g.latem@gmail.com', publicVapidKey, privateVapidKey);

const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});


app.listen(5000,function(){
    console.log("escuchando el puerto 5000")
});