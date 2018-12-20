const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// Accommodation Schema
const AccommodationSchema = mongoose.Schema({
    acc__transaction_id: {
        type: String,
        required: true
    },
    acc_mode_of_payment: {
        type: String,
        required: true
    },
    acc_file_name: {
        type: String,
        required: true
    },
    acc_Accommodation_status: {
        type: String,
        required: true
    },
    acc_status: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    acc_amount: {
        type: String,
        required: true
    }
});

AccommodationSchema.plugin(pagination);
const Accommodation = module.exports = mongoose.model('Accommodation', AccommodationSchema);

module.exports.getAllAccommodations = (page, callback) => {
    Accommodation.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}