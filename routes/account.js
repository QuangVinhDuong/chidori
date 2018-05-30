const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

//const mongoose = require('mongoose');
//import Account, { find, findById, findByIdAndUpdate, findByIdAndRemove } from "../models/Account";
const Account = require('../models/Account');

// app.use(bodyParser.urlencoded({'extended': 'false'}));
// app.use(bodyParser.json());

/* GET ALL ACCOUNT */
router.get('/', (req, res, next) => {
    Account.find((err, post) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET SINGLE ACCOUNT BY ID */
router.get('/:id', (req, res, next) => {
    Account.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE ACCOUNT A.K.A SIGNUP */
router.post('/', (req, res, next) => {
    const { body } = req;
    const {
        username,
        password,
        fullname,
        email,
        phone,
        address
    } = body;

    // const username = body.username;
    // const password = body.password;
    // const fullname = body.fullname;
    // const email = body.email;
    // const phone = body.phone;
    // const address = body.address;    

    if (!username) {
        res.json({
            success: false,
            message: 'Lỗi: Tên đăng nhập không được để trống'
        }).end();
    }
    if (!password) {
        res.json({
            success: false,
            message: 'Lỗi: Mật khẩu không được để trống'
        }).end();
    }
    if (!fullname) {
        res.json({
            success: false,
            message: 'Lỗi: Họ tên không được để trống'
        }).end();
    }
    if (!email) {
        res.json({
            success: false,
            message: 'Lỗi: Email không được để trống'
        }).end();
    }
    if (!phone) {
        res.json({
            success: false,
            message: 'Lỗi: Số điện thoại không được để trống'
        }).end();
    }
    if (!address) {
        res.json({
            success: false,
            message: 'Lỗi: Địa chỉ không được để trống'
        }).end();
    }

    Account.find({
        email: email
    }, (err, post) => {
        if (err) {
            return next(err);
        } else if (post.length > 0) {
            res.json({
                success: false,
                message: 'Lỗi: Email đã tồn tại!'
            });
        } else {
            Account.find({
                username: username
            }, (err, post) => {
                if (err) {                    
                    return next(err);
                } else if (post.length > 0) {
                    res.json({
                        success: false,
                        message: 'Lỗi: Tên tài khoản đã tồn tại!'
                    });
                } else {                    
                    // Save the new user
                    const newAcc = new Account();                    
                    newAcc.username = username;
                    newAcc.password = newAcc.generateHash(password);
                    newAcc.fullname = fullname;                    
                    newAcc.email = email;
                    newAcc.phone = phone;
                    newAcc.address = address;
                    newAcc.save((err, acc) => {
                        if (err) {return next(err)};
                        res.json({
                            success: true,
                            message: 'Tạo tài khoản thành công'
                        }); 
                    });
                }
            });
        }
    });    
});

/* UPDATE ACCOUNT */
router.put('/:id', (req, res, next) => {
    Account.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE ACCOUNT */
router.delete('/:id', (req, res, next) => {
    Account.findByIdAndRemove(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    });
});

//export default router;
module.exports = router;