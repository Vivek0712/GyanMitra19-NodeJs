const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// Role Schema
const RoleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

RoleSchema.plugin(pagination);
const Role = module.exports = mongoose.model('Role', RoleSchema);

module.exports.getAllRoles = (page, callback) => {
    Role.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}