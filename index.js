const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var express = require('express');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyAL5N7od  LuG90e2qBw6jG_9KCccpyFU0Cs',
    authDomain: 'save-the-blahajs.firebaseapp.com',
    projectId: 'save-the-blahajs'
});

var db = firebase.firestore();
var app = express();
var path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/'));
});

app.use(express.static(__dirname + '/'));


function post(postText) {
    db.collection("posts").add({
            text: postText,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

app.listen(3000, function() {
    console.log('Listening on port 3000!')
});