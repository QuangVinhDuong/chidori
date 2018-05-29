const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/login", function(req, res) {
    var user = req.body.user;
    var pass = req.body.pass;
    if (user == "user1" && pass == "123") {
        res.send("OK");
    } else {
        res.send("");
    }
});

app.listen(3001, function(){console.log("Magic happened at port 3001");});