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
        type: Number,
        default: 0
    }
}, { collection: 'auction_session' });

export default mongoose.model('AuctionSession', AuctionSessionSchema);