const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    college_id: {
        type: String
    },
    department_id: {
        type: String
    },
    degree_id: {
        type: String
    },
    email_id: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean
    },
    activated: {
        type: Boolean
    },
    activation_code: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});
UserSchema.plugin(pagination);
const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getAllUsers = (page, callback) => {
    User.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}
module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}