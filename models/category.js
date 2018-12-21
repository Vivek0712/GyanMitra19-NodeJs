const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// Category Schema
const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
CategorySchema.plugin(pagination);
const Category = module.exports = mongoose.model('Category', CategorySchema);

//Created By Aravind Raj
//Added pagination for category
//Date : 20-10-2018
module.exports.getAllCategories = (page, callback) => {
    Category.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}
