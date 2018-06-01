import express, { Router } from "express";
import bodyParser from "body-parser";
const router = Router();
const app = express();

import Product from '../models/Product';

router.get('/getAllFigures', (req, res, next) => {
    Product.find({
        productType: 'Figures'
    }, (err, products) => {
        if (err) return next(err);

        return res.json(products);
    });
});

export default router;