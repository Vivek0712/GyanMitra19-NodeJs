const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// RoleUser Schema
const RoleUserSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    role_id: {
        type: String,
        required: true
    }
});
RoleUserSchema.plugin(pagination);
const RoleUser = module.exports = mongoose.model('RoleUser', RoleUserSchema);

module.exports.getAllRolesAssignments = (page, callback) => {
    RoleUser.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}