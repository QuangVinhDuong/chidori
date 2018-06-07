import mongoose from 'mongoose';

const AuctionTicketSchema = mongoose.Schema({
    sessionID: {
        type: String,
        default: ''
    },
    accountID: {
        type: String,
        default: ''
    },
    bidValue: {
        type: Number,
        default: 0        
    },
    bidTime: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Number,
        default: 0 // 0: đang đấu; 1: thắng; -1: thua
    }
}, {collection: 'auction_ticket'});

export default mongoose.model('AuctionTicket', AuctionTicketSchema);