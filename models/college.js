const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// College Schema
const CollegeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    locale: {
        type: String,
        required: true
    }
});
CollegeSchema.plugin(pagination);
const College = module.exports = mongoose.model('College', CollegeSchema);

module.exports.getAllColleges = (page, callback) => {
    College.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}