var admin = require("firebase-admin");

var serviceAccount = require("./sdk.json"); //add fire base project

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin