import express ,{ Router } from "express";
import { urlencoded, json } from "body-parser";

// Import Models
import Account from "../models/Account";
import UserSession from "../models/UserSession";


const router = Router();
const app = express();
const bcrypt = require('bcrypt');

// use this for Authenticate
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

// ObjectId type in mongoose
const ObjectId = require('mongoose').Types.ObjectId;

app.use(urlencoded({'extended': 'false'}));
app.use(json());


/* GET ALL ACCOUNT */
// router.get('/', (req, res, next) => {
//     Account.find((err, post) => {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

/* GET SINGLE ACCOUNT BY ID */
// router.get('/:id', (req, res, next) => {
//     Account.findById(req.params.id, (err, post) => {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

/* VERIFY */
router.get('/verify', (req, res, next) => {
    const { query } = req;
    const { token } = query;
    // Now the query should be something like this
    //?token=<user's token>

    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, session) => {
        if (err) {
            return next(err);
        }
        
        if (session.length != 1) {
            return res.json({
                success: false,
                message: 'Lỗi: Không hợp lệ'
            }).end();
        } 
        
        return res.json({
            success: true,
            message: 'OK'
        }).end();        
    });
});

/* SIGNIN */
router.post('/signin', (req, res, next) => {
    const { body } = req;
    const {
        username,
        password
    } = body;

    if (!username) {
        return res.json({
            success: false,
            message: 'Lỗi: Tên đăng nhập không được để trống'
        }).end();
    }
    if (!password) {
        return res.json({
            success: false,
            message: 'Lỗi: Mật khẩu không được để trống'
        }).end();
    }

    Account.find({
        username: username
    }, (err, users) => {
        if (err) {
            return next(err);
        }
        if (users.length != 1) {
            return res.json({
                success: false,
                message: 'Lỗi: Người dùng không tồn tại'
            }).end();
        }

        const user = users[0];
        if (!user.validPassword(password)) {
            return res.json({
                success: false,
                message: 'Lỗi: Mật khẩu không chính xác'
            }).end();
        }

        // Dòng sau đây sẽ chạy nếu user và pass hợp lệ
        const userSession = new UserSession();
        userSession.userID = user._id;
        userSession.save((err, data) => {
            if (err) {
                return next(err);
            }
            
            const accessToken = jwt.sign(
                {
                    user: username
                },
                'kaminosekai'                
            );

            return res.json({
                success: true,
                message: 'Đăng nhập thành công',
                token: data._id,
                access_token: accessToken,
                accountType: user.accountType._id
            });
        });
    });
});

/* SAVE ACCOUNT A.K.A SIGNUP */
router.post('/signup', (req, res, next) => {
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
        return res.json({
            success: false,
            message: 'Lỗi: Tên đăng nhập không được để trống'
        }).end();
    }
    if (!password) {
        return res.json({
            success: false,
            message: 'Lỗi: Mật khẩu không được để trống'
        }).end();
    }
    if (!fullname) {
        return res.json({
            success: false,
            message: 'Lỗi: Họ tên không được để trống'
        }).end();
    }
    if (!email) {
        return res.json({
            success: false,
            message: 'Lỗi: Email không được để trống'
        }).end();
    }
    if (!phone) {
        return res.json({
            success: false,
            message: 'Lỗi: Số điện thoại không được để trống'
        }).end();
    }
    if (!address) {
        return res.json({
            success: false,
            message: 'Lỗi: Địa chỉ không được để trống'
        }).end();
    }

    Account.find({
        email: email
    }, (err, acc) => {
        if (err) {
            return next(err);
        } else if (acc.length > 0) {
            return res.json({
                success: false,
                message: 'Lỗi: Email đã tồn tại!'
            });
        } else {
            Account.find({
                username: username
            }, (err, acc) => {
                if (err) {                    
                    return next(err);
                } else if (acc.length > 0) {
                    return res.json({
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
                        return res.json({
                            success: true,
                            message: 'Tạo tài khoản thành công'
                        }); 
                    });
                }
            });
        }
    });    
});

/* LOGOUT */
router.get('/logout', (req, res, nexr) => {
    const { query } = req;
    const { token } = query;
    //console.log(token);
    UserSession.findOneAndUpdate({
        _id: new ObjectId(token),
        isDeleted: false
    }, {
        $set: { isDeleted: true }
    }, null, (err, session) => {
        if (err) {
            return next(err);
        }
        
        return res.json({
            success: true,
            message: 'OK'
        }).end();        
    });
});

router.get('/getInfo/:username', checkAuth, (req, res, next) => {
    //console.log(req.params.id);
    const username = req.params.username
    Account.find({
        username: username
    }, (err, acc) => {
        if (err) {
            return next(err)
        }
        else {
            //console.log(acc);
            return res.json({
                success: true, detail: acc
            })
        }
    });
})
router.post('/update', checkAuth, (req, res, next) => {
    console.log(req.body);
    var set = {
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        fullname: req.body.fullname
    }

    // Chỉ khi client nhập pass thì mới thêm cái này.
    if (req.body.password != "") { 
        set.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
    }

    Account.updateOne({
        username: req.body.id}, 
        {
            $set: set
        }, (err, count) => {
            if (err) {
                return next(err)
            }
            else {
                res.json({
                    success: count.nModified == 1 ? true : false
                })
            }
        })
})

/* UPDATE ACCOUNT */
// router.put('/:id', (req, res, next) => {
//     Account.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

/* DELETE ACCOUNT */
// router.delete('/:id', (req, res, next) => {
//     Account.findByIdAndRemove(req.params.id, req.body, (err, post) => {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

//export default router;
export default router;