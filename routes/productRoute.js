import express, { Router } from "express";
import bodyParser from "body-parser";
const router = Router();
const app = express();

import Product from '../models/Product';


router.get('/getProductDetail/:type/:id', (req, res, next) => {    
    // Product.find({
    //     productID: req.params.id,
    //     productType: req.params.type
    // }, (err, product) => {
    //     if (err) return next(err);

    //     return res.json(product);
    // });
    const { id, type } = req.params;
    Product.aggregate([
        {
            $match: {
                productType: type,
                productID: id,
            }
        },
        {
            $lookup: {
                from: 'auction_session',
                localField: '_id',
                foreignField: 'productID',
                as: 'p'
            }
        },
        {
            $project: {                    
                productID: 1,
                productName: 1,
                productType: 1,
                productImage: 1,
                "p.sessionID": 1,
                "p.bidTime": 1,
                "p.initPrice": 1
            }
        }
    ], (err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    });
});

router.get('/getAllFigures', (req, res, next) => {
    Product.find({
        productType: 'Figures'
    }, (err, products) => {
        if (err) return next(err);

        return res.json(products);
    });
});

router.get('/getAllElectronics', (req, res, next) => {
    Product.find({
        productType: 'Electronics'
    }, (err, products) => {
        if (err) return next(err);

        return res.json(products);
    });
});

router.get('/getAllComputers', (req, res, next) => {
    Product.find({
        productType: 'Computers'
    }, (err, products) => {
        if (err) return next(err);

        return res.json(products);
    });
});

router.get('/getAllAppliances', (req, res, next) => {
    Product.find({
        productType: 'Appliances'
    }, (err, products) => {
        if (err) return next(err);

        return res.json(products);
    });
});

router.get('/getAllLuggageAndTravelGear', (req, res, next) => {
    Product.find({
        productType: 'Luggage & Travel Gear'
    }, (err, products) => {
        if (err) return next(err);

        return res.json(products);
    });
});

router.get('/getAllSportsAndOutdoors', (req, res, next) => {
    Product.find({
        productType: 'Sports & Outdoors'
    }, (err, products) => {
        if (err) return next(err);

        return res.json(products);
    });
});

export default router;