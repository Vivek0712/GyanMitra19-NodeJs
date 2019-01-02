const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;

// College Schema
const CartSchema = mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    event_id: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    }
});
CartSchema.plugin(pagination);
const Cart = module.exports = mongoose.model('Cart', CartSchema);

module.exports.getAllCart = (page, callback) => {
    Cart.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}