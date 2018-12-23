const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// Organizing Schema
const OrganizingSchema = mongoose.Schema({
    user_id: {
     type: Schema.Types.ObjectId,
     ref: 'user',
     required: true
    },
    event_id: {
     type: Schema.Types.ObjectId,
     ref: 'Event',
     required: true
    }
});
OrganizingSchema.plugin(pagination);
const Organizing = module.exports = mongoose.model('Organizing', OrganizingSchema);

module.exports.getAllOrganizings = (page, callback) => {
    Organizing.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}