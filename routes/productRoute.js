import express, { Router } from "express";
const mongodb = require("mongodb");
const BSONRegExp = mongodb.BSONRegExp;
import bodyParser from "body-parser";
const router = Router();
const app = express();

import Product from '../models/Product';


router.get('/getProductDetail/:type/:id', (req, res, next) => {    
    Product.find({
        productID: req.params.id,
        productType: req.params.type
    }, (err, product) => {
        if (err) return next(err);

        return res.json(product);
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

router.get('/search/:keyword', (req, res, next) => {
    console.log(req.params);
    var query = 
    [
        {
            "productName": {
                $regex: `.*${req.params.keyword}.`,
                $options: "i"
            }
        },
        {
            "description": {
                $regex: `.*${req.params.keyword}.`,
                $options: "i"
            }
        }
    ]
    Product.find({"$or": query}, (err, p) => {
        if (err) console.log(err);
        else return res.json({
            success: true,
            data: p
        });
    })
})
export default router;