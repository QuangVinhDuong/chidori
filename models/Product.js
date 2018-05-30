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
        type: String,
        default: ''        
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