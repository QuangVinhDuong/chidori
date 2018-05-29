const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// use mongoose with native Node Promise
mongoose.Promise = global.Promise;

// create connection to mongodb
mongoose.connect('mongodb://localhost:27017/chidori')
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log(err);
    })

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));



app.post("/api/login", (req, res) => {
    var user = req.body.user;
    var pass = req.body.pass;
    if (user == "user1" && pass == "123") {
        res.send("OK");
    } else {
        res.send("");
    }
});

app.listen(3001, () => {console.log("Magic happened at port 3001");});