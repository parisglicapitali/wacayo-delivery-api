import { model, Schema } from 'mongoose';

const productSchema = new Schema({
    price: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true,
        lowercase: true
    },

    name: {
        type: String,
        required: true,
        lowercase:  true
    },

    description: {
        type: String,
        required: false,
        lowercase: false,
        max: 400
    },

    shippingTime: {
        type: String,
        required: true,
        lowercase: true
    },

    shippingPrice: {
        type: Number,
        required: true
    },

    productPhoto: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('products', productSchema);