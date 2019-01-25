const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;


// ParticipationStatus Schema
const passwordTokenSchema = mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    token:{
        type: String,
        required: true
    }
});
const PasswordToken = module.exports = mongoose.model('PasswordToken', passwordTokenSchema);
