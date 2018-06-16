import express, {Router} from "express";
import {urlencoded,	json} from "body-parser";
import Product from '../models/Product';

const router = Router();
const app = express();
const checkAuth = require('../middleware/check-auth');

app.use(urlencoded({
	'extended': 'false'
}));
app.use(json());

router.get('/getProduct', checkAuth, (req, res, next) => {
	Product.aggregate([{
		$lookup: {
			from: 'auction_session',
			localField: '_id',
			foreignField: 'productID',
			as: 'as'
		}
	}], (err, r) => {
		if (err) console.log(err);
		else {
			return res.json({
				list: r
			});
		}
	});
})

router.delete('/deleteProduct', checkAuth, (req, res, next) => {
	//console.log(req.body.val);
	Product.updateOne({
		"_id": req.body.key
	}, {
		$set: {
			isDeleted: req.body.val
		}
	}, (err, count) => {
		if (err) return next(err);
		else {
			console.log(count);
			return res.json({ success: count.nModified == 1 ? true : false });
		}
	})
})

router.put('/updateProduct', checkAuth, (req, res, next) => {
	console.log(req.body);
	Product.updateOne({
		"_id": req.body.key
	}, {
		$set: {
			productName: req.body.val[0],
			productType: req.body.val[1],
			description: req.body.val[2],
			productImage: req.body.val[3]
		}
	}, (err, count) => {
		if (err) return next(err);
		else {
			console.log(count);
			return res.json({
				success: count != null ? true : false
			});
		}
	})
})

router.post('/addProduct', checkAuth, (req, res, next) => {
	//console.log(req.body);
	const p = new Product();
	p.productName = req.body.val[0];
	p.productType = req.body.val[1];
	p.description = req.body.val[2];
	p.productImage = req.body.val[3];
	p.save((err, data) => {
		if (err) return next(err);
		else {
			return res.json({
				success: data != null ? true : false
			});
		}
	})
})
export default router;