import express from "express";
import { urlencoded, json } from "body-parser";
import { Promise, connect } from "mongoose";
const app = express();

Promise = global.Promise;

// import router
import account from "./routes/account";

app.use(urlencoded({'extended': 'false'}));
app.use(json());
app.use('/account', account);


connect('mongodb://localhost:27017/chidori')
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(3001, () => {console.log("Magic happened at port 3001");});