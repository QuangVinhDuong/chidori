import mongoose from 'mongoose';

const AuctionTicketSchema = mongoose.Schema({
    ticketID: {
        type: String,
        default: ''
    },
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
    status: {
        type: Number,
        default: 0 // 0: đang đấu; 1: thắng; -1: thua
    }
});

export default mongoose.model('AuctionTicket', AuctionTicketSchema);