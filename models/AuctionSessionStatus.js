import mongoose from 'mongoose';

const AuctionSesstionStatusSchema = new mongoose.Schema({
    statusID: {
        type: Number,
        default: 0 //0: chưa bắt đầu | 1: bắt đầu | -1: kết thúc
    },
    statusName: {
        type: String,
        default: 'Chưa bắt đầu'
    }
});

export default mongoose.model('AuctionSesstionStatus', AuctionSesstionStatusSchema);