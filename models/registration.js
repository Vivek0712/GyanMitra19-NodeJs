const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;
// Registration Schema
const RegistrationSchema = mongoose.Schema({
    event_id: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    team_id: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    registration_type: {
        type: String,
        required: true
    }
});
RegistrationSchema.plugin(pagination);
const Registration = module.exports = mongoose.model('Registration', RegistrationSchema);