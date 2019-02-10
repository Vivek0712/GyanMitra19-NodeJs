const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// Category Schema
const CertificateSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        ref: 'User'
    },
    event_id: {
        type: String,
        required: true,
        ref: 'Event'
    },
    issued: {
        type: Boolean,
        required: true
    },
    written:{
        type: Boolean,
        required: true
    }
});
const Certificate = module.exports = mongoose.model('Certificate', CertificateSchema);
