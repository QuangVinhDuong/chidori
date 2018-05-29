import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
    _id: String,
    username: String,
    password: String,
    fullname: String,
    email: String,
    phone: String,
    address: String,
    type: {
        _id: String,
        typename: String
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model('Account', AccountSchema);