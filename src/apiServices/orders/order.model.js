import { model, Schema } from 'mongoose';
import { stringify, v4 as uuid } from 'uuid';

const orderSchema = new Schema({
    clientName: {
        type: String,
        required: true,
        lowercase: true
    },

    clientPhoneNumber: {
        type: Number,
        required: true,
        minlength: 8,
        maxlength: 10
    },

    clientEmail: {
        type: String,
        required: false,
        lowercase: true
    },

    clientAddress: {
        type: String,
        required: true,
        lowercase: true
    },

    clientCountry: {
        type: String,
        required: true,
        lowercase: true
    },

    clientNote: {
        type: String,
        required: false,
        lowercase: true,
        maxlength: 200
    },

    productId: {
        type: String,
        required: true
    },

    uniqueId: {
        type: String,
        required: true,
        default: uuid()
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('orders', orderSchema);