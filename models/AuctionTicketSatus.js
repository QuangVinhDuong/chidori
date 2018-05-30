import mongoose from 'mongoose';

const AuctionTicketStatusSchema = new mongoose.Schema({
    statusID: {
        type: Number,
        default: 0 //0: Đang đấu | 1: Thắng | -1: Thua
    },
    statusName: {
        type: String,
        default: 'Đang đấu'
    }
});

export default mongoose.model('AuctionTicketStatus', AuctionTicketStatusSchema);