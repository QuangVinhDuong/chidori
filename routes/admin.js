import express, {Router} from "express";
import {urlencoded,	json} from "body-parser";
import Product from '../models/Product';
import AuctionSession from '../models/AuctionSession';
import AuctionSessionStatus from '../models/AuctionSessionStatus';
import AuctionTicket from '../models/AuctionTicket';
import AuctionTicketStatus from '../models/AuctionTicketStatus';
import Account from '../models/Account';
import Parameter from '../models/Parameter';
import mongoose from 'mongoose';
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
});

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
			//console.log(count);
			return res.json({ success: count.nModified == 1 ? true : false });
		}
	})
});

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
});

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
	});
});

router.get('/productListAU', checkAuth, (req, res, next) => {
	Product.aggregate([{
		$project: {
			_id: 1,
			productName: 1
		}
	}], (err, out) => {
		if (err) return next(err);
		else {
			return res.json({
				plist: out
			});
		} 

	})
});

router.get('/auction', checkAuth, (req, res, next) => {	
	AuctionSession.aggregate([
		{
			$lookup: {
				from: "product",
				localField: "productID",
				foreignField: '_id',
				as: 'p'
			}
		},
		{
			$unwind: "$p"
		},
		{
			$lookup: {
				from: "auction_session_status",
				localField: "status",
				foreignField: "statusID",
				as: "aus"
			}
		},
		{
			$unwind: "$aus"
		},
		{
			$project: {
				_id: 1,
				sessionID: 1,
				startTime: 1,
				status: 1,
				initPrice: 1,
				currentPrice: 1,
				bidTime: 1,
				isDeleted: 1,
				"p.productName": 1,
				"p._id": 1,
				"aus.statusName": 1
			}
		}], (err, out) => {
			
			if (err) return next(err);
			else {
				return res.json({list: out});
			}
		}
	)
});
router.post('/auction', checkAuth, (req, res, next) => {
	const MongoClient = require('mongodb').MongoClient;
	const url = "mongodb://localhost:27017/";
	var ObjectId = mongoose.Types.ObjectId;
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("chidori");
		dbo.collection("auction_session").count((err, c) => {
			if (err) return next(err);
			else {
				dbo.collection("auction_session").insert({
					"sessionID": c++, // mã phiên tăng tự động
					"productID": new ObjectId(req.body.val[4]),
					"startTime": req.body.val[0],
					"bidTime": req.body.val[1],
					"initPrice": req.body.val[3],
					"currentPrice": req.body.val[3],
					"status": req.body.val[2],
					"isDeleted": false
				}, (err, n) => {
					if (err) console.log(err);
					else {
						db.close();
						return res.json({
							success: n.result.ok == 1 ? true : false
						});
					}
				});
				db.close();
			}
		})
	})
});
router.post('/beginAuction', checkAuth, (req, res, next) => {
	//console.log(req.body);
	AuctionSession.updateOne({
		"_id": req.body.key
	}, {
		$set: {
			status: 1
		}
	}, (err, count) => {
		if (err) return next(err);
		else {
			//console.log(count);
			return res.json({
				success: count.nModified == 1 ? true : false
			});
		}
	})
});
router.put('/auction', checkAuth, (req, res, next) => {
	//console.log(req.body);
	const MongoClient = require('mongodb').MongoClient;
	const url = "mongodb://localhost:27017/";
	var ObjectId = mongoose.Types.ObjectId;
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("chidori")
		var newData = {
			"productID": new ObjectId(req.body.val[4]),
			"startTime": req.body.val[0],
			"bidTime": req.body.val[1],
			"initPrice": req.body.val[3],
			"status": req.body.val[2]
		}
		
		var query = {
			_id: new ObjectId(req.body.key)
		};
		dbo.collection("auction_session").findOneAndUpdate(
			query, {$set: newData}, (err, out) => {
				if (err) console.log(err);
				else {
					//console.log(out.ok);
					db.close();
					return res.json({
						success: out.ok == 1 ? true : false
					});
				}
			}
		)
	});
});
router.delete('/auction', checkAuth, (req, res, next) => {
	AuctionSession.updateOne({
		"_id": req.body.key
	}, {
		$set: {
			isDeleted: req.body.val
		}
	}, (err, count) => {
		if (err) return next(err);
		else {
			//console.log(count);
			return res.json({
				success: count.nModified == 1 ? true : false
			});
		}
	});
});
router.get('/ticket', checkAuth, (req, res, next) => {
	AuctionTicket.aggregate([
		{
			$match: {
				status: {$in: [1, 2, 3, 4, 5, 6]}
			}
		},
		{
			$lookup: {
				from: "auction_ticket_status",
				localField: "status",
				foreignField: "statusID",
				as: 'ats'
			}
		},
		{
			$unwind: "$ats"
		},
		{
			$project: {
				_id: 1,
				accountID: 1,
				bidValue: 1,
				sessionID: 1,
				status: 1,
				"ats.statusName": 1,
				isDeleted: 1
			}
		}], (err, out) => {
		if (err) return next(err);
		else {
			return res.json({
				success: true,
				tlist: out
			});
		}
	});
});
export default router;