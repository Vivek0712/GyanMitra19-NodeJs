const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;
// Registration Schema
const RegistrationSchema = mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    registration_id: {
        type: String,
        required: true
    },
    registration_type: {
        type: String,
        required: true
    }
});
RegistrationSchema.plugin(pagination);
const Registration = module.exports = mongoose.model('Registration', RegistrationSchema);