import mongoose from 'mongoose';

const AuctionTicketStatusSchema = new mongoose.Schema({
    statusID: {
        type: Number,
        default: 0 // 0: đang đấu | 1: thắng | -1: thua | 2: nhận hàng | 3: hủy đơn hàng | 4: đã nhận hàng
    },
    statusName: {
        type: String,
        default: 'Đang đấu'
    }
}, {collection: 'auction_ticket_status'});

export default mongoose.model('AuctionTicketStatus', AuctionTicketStatusSchema);