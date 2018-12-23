const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// Degree Schema
const DegreeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
DegreeSchema.plugin(pagination);
const Degree = module.exports = mongoose.model('Degree', DegreeSchema);

//Created By Aravind Raj
//Added pagination for degree
//Date : 20-10-2018
module.exports.getAllDegrees = (page, callback) => {
    Degree.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}
