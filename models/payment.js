const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;
// Payment Schema
const PaymentSchema = mongoose.Schema({
    transaction_id: {
        type: String,
        required: true
    },
    mode_of_payment: {
        type: String,
        required: true
    },
    file_name: {
        type: String
    },
    payment_status: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: String,
        required: true
    }

});
PaymentSchema.plugin(pagination);
const Payment = module.exports = mongoose.model('Payment', PaymentSchema);