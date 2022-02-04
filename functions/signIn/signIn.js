const functions = require("firebase-functions");

exports.signIn = functions.https.onRequest((request, response) => {
    response.send(request.headers["username"] + request.headers["password"]);
  });