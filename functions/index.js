"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//# sourceMappingURL=index.js.map
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
	  service: 'Gmail',
	  auth: {
	    user: gmailEmail,
	    pass: gmailPassword,
	  },
	});

const APP_NAME = 'SV Corp';

exports.sendContactMessage = functions.admin.database.ref('/messages/{pushKey}').onWrite(event => {
  const snapshot = event.data;

  console.log(snapshot);
// Only send email for new messages.
  if (snapshot.previous.val() || !snapshot.val().name) {
    return;
  }

  const val = snapshot.val();

  const mailOptions = {
    to: 'svdigitalusa@gmail.com',
    subject: `Information Request`,
    html: val.html
  };

  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('Mail sent to: svdigitalusa@gmail.com');
  });
});
