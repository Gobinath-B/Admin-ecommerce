var admin = require("firebase-admin");

var serviceAccount = require("./data-hari-671e6-firebase-adminsdk-hpppk-622dec44f4.json"); //add fire base project

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin