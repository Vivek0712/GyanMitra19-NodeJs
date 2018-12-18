const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// Department Schema
const DepartmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
DepartmentSchema.plugin(pagination);
const Department = module.exports = mongoose.model('Department', DepartmentSchema);