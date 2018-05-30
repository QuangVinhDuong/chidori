import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    productID: {
        type: String,
        default: ''
    },
    productName: {
        type: String,
        default: ''
    },
    productType: {
        typeID: {
            type: String,
            default: ''
        },
        typeName: {
            type: String,
            default: ''
        }
    },
    description: {
        type: String,
        default: ''
    },
    productImage: {
        type: String,
        default: ''
    } 
}, { collection: 'product' });

export default mongoose.model('Product', ProductSchema);