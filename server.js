import express from "express";
import { urlencoded, json } from "body-parser";
//import { Promise, connect } from "mongoose";

//const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;

// import router
import account from "./routes/account";
import productRoute from "./routes/productRoute";
import auctionRoute from "./routes/auctionRoute";
import bidRoute from "./routes/bidRoute";

app.use(urlencoded({'extended': 'false'}));
app.use(json());
app.use('/account', account);
app.use('/product', productRoute);
app.use('/auction', auctionRoute);
app.use('/bid', bidRoute);


mongoose.connect('mongodb://localhost:27017/chidori')
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log(err);
    });


// to run, in terminal, type: npm start
app.listen(3001, () => {console.log("Magic happened at port 3001");});