const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;
// Department Schema
const DepartmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
DepartmentSchema.plugin(pagination);
const Department = module.exports = mongoose.model('Department', DepartmentSchema);

//Created By Aravind Raj
//Added pagination for department
//Date : 20-10-2018
module.exports.getAllDepartments = (page, callback) => {
    Department.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}