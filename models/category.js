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