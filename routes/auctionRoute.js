import express, { Router } from "express";
import bodyParser from "body-parser";
const router = Router();
const app = express();

import AuctionSession from '../models/AuctionSession';

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