import mongoose from 'mongoose';
var ObjectId = require('mongodb').ObjectID;
const AuctionSessionSchema = new mongoose.Schema({
    sessionID: {
        type: String,
        default: ''
    },
    productID: {
        type: mongoose.Schema.ObjectId,
        default: ''
    },
    startTime: {
        type: Date,
        default: Date.now()
    },
    bidTime: {
        type: String,
        default: ''     
    },
    initPrice: {
        type: Number,
        default: 0
    },
    currentPrice: {
        type: Number,
        default: 0
    },
    status: {
        type: Number, // 0: initial | 1: in process | 2: end
        default: 0
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { collection: 'auction_session' });

export default mongoose.model('AuctionSession', AuctionSessionSchema);