import express, { Router } from "express";
import bodyParser from "body-parser";
const router = Router();
const app = express();

import AuctionSession from '../models/AuctionSession';


router.put('/updateAuctionSession/:sessionID/:bidValue', (req, res, next) => {
    AuctionSession.findOne(
        {
            sessionID: req.params.sessionID
        },
        {
            "bidTime": 1,
            "currentPrice": 1
        },
        (err, result) => {
            if (err) {
                return next(err);
            } else {
                //
                if (result) {
                    const time = result.bidTime;
                    const str = time.split(":");
                    var h = Number(str[0]), m = Number(str[1]), s = Number(str[2]);

                    s = s + 10;

                    if (s > 59) {
                        s = s - 60;
                        m++;
                    }
                    if (m > 59) {
                        m = m - 60;
                        h++;
                    }

                    if (s < 10) {
                        s = '0' + s;
                    }
                    if (m < 10) {
                        m = '0' + m;
                    }
                    if (h < 10) {
                        h = '0' + h;
                    }

                    const finalTime = h+':'+m+':'+s;

                    AuctionSession.findOneAndUpdate(
                        {
                            sessionID: req.params.sessionID
                        },
                        {
                            bidTime: finalTime,
                            currentPrice: result.currentPrice + Number(req.params.bidValue)
                        },
                        {
                            new: true // option to return an updated document
                        }, (err, data) => {
                            if (err) return next(err);
                            return res.json(data);                            
                        }
                    );
                } else {
                    return res.json({
                        success: false,
                        message: "auction session expired"
                    });
                }                
            }
        }
    )    
});

export default router;