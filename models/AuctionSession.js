import mongoose from 'mongoose';

const AuctionSessionSchema = new mongoose.Schema({
    sessionID: {
        type: String,
        default: ''
    },
    productID: {
        type: String,
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
        type: Number, // 0: initial | 1: in process | 2: end/unconfirmed | 3: delivering | 4: canceled/declined | 5: done
        default: 0
    },
    winner: {
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { collection: 'auction_session' });

export default mongoose.model('AuctionSession', AuctionSessionSchema);