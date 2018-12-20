const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// Config Schema
const ConfigSchema = mongoose.Schema({
    config: {
        type: String,
        required: true
    },
    value: {
        type: Boolean,
        required: true
    }
});
ConfigSchema.plugin(pagination);
const Config = module.exports = mongoose.model('Config', ConfigSchema);