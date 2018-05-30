import mongoose from 'mongoose';

const ParameterSchema = new mongoose.Schema({
    pID: {
        type: String,
        default: ''
    },
    pName: {
        type: String,
        default: ''
    },
    pValue: {
        type: Number,
        default: 0
    }
});

export default mongoose.model('Parameter', ParameterSchema);