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