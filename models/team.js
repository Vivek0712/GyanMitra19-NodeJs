const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// Team Schema
const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }

});
TeamSchema.plugin(pagination);
const Team = module.exports = mongoose.model('Team', TeamSchema);