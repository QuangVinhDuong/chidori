import express, { Router } from "express";
import bodyParser from "body-parser";
const router = Router();
const app = express();

import AuctionSession from '../models/AuctionSession';
import Product from '../models/Product';

router.get('/getAuctionSession', (req, res, next) => {
    AuctionSession.aggregate([
        {
            $lookup: {
                   from: "product",
                   localField: "productID",
                   foreignField: "_id",
                   as: "p"
                 }
        },
        {
            $project: {
                sessionID: 1,
                bidTime: 1,
                currentPrice: 1,
                "p.productID": 1,
                "p.productName": 1,
                "p.productType": 1,
                "p.productImage": 1
            }
        }
    ], (err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    })
});

router.post('/insertAuctionSession', (req, res, next) => {
    const auctionSession = new AuctionSession();
    
    const arr = req.body
    //console.log(arr);    
    AuctionSession.insertMany(arr, (err, data) => {
        if (err) {
            return next(err);
        }

        return res.json({
            success: true,
            message: 'Insert Auction Session OK!'
        });
    });
});

export default router;