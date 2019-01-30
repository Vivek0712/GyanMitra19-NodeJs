const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;

// QR Mapping Schema
const QRCode = mongoose.Schema({
    qr_code: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

QRCode.plugin(pagination);
module.exports = mongoose.model('QRCode', QRCode);
