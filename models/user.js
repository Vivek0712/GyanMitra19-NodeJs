const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const Schema = mongoose.Schema;
// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gmID: {
        type: String
    },
    college_id: {
        type: Schema.Types.ObjectId,
        ref: 'College',
    },
    department_id: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
    },
    degree_id: {
        type: Schema.Types.ObjectId,
        ref: 'Degree',
    },
    email_id: {
        type: String,
        required: true
    },
    year_id: {
        type: Schema.Types.ObjectId,
        ref: 'Year',
    },
    gender: {
        type: String,
    },
    mobile_number: {
        type: String,
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
    },
    registration_mode: {
        type: String
    },
    cart_confirmed: {
        type: Boolean
    },
    cart_dd_image: {
        type: String
    },
    cart_paid: {
        type: Boolean
    }

});
UserSchema.plugin(pagination);
const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getAllUsers = (page, callback) => {
    User.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}
module.exports.findUsers = (page, type, callback) => {
    User.paginate({type: type}, { limit: config.pagination.perPage, page: page }, callback);
}

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}
module.exports.getUserByEmailId = function(email_id, callback) {
    const query = { email_id: email_id }
    User.findOne(query, callback);
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
module.exports.activationCode = function (user, callback) {
    hashValue = user.email_id + user.name+user.mobile_number;
    const encryptedString = cryptr.encrypt(hashValue);
    user.activation_code = encryptedString;
    user.save(callback);
    /*bcrypt.genSalt(10, (err, salt) => {
        hashValue = user.email_id + user.name;
        bcrypt.hash(hashValue, salt, (err, hash) => {
            if (err) throw err;
            user.activation_code = hash;
            user.save(callback);
            
        })
    })*/
    
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) console.log(err);
        callback(null, isMatch);
    });
}

module.exports.compareActivationCode = function (id, hash, callback) {
    bcrypt.compare(id, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}