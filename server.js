const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;

// import router
const account = require('./routes/account');

app.use(bodyParser.urlencoded({'extended': 'false'}));
app.use(bodyParser.json());
app.use('/account', account);


mongoose.connect('mongodb://localhost:27017/chidori')
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log(err);
    });
    
app.listen(3001, () => {console.log("Magic happened at port 3001");});