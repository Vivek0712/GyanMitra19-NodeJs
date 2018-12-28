const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// Year Schema
const YearSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
YearSchema.plugin(pagination);
const Year = module.exports = mongoose.model('Year', YearSchema);


module.exports.getAllYears = (page, callback) => {
    Year.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}