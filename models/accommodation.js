const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;

// Accommodation Schema
const AccommodationSchema = mongoose.Schema({
    acc__transaction_id: {
        type: String
    },
    acc_mode_of_payment: {
        type: String
    },
    acc_days:{
        type: String,
        required: true
    },
    acc_file_name: {
        type: String
    },
    acc_payment_status: {
        type: String
    },
    acc_status: {
        type: String
    },
    //Refrence Should be given Like this
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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