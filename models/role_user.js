const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;
// RoleUser Schema
const RoleUserSchema = mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    role_id: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    department_id: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    }
});
RoleUserSchema.plugin(pagination);
const RoleUser = module.exports = mongoose.model('RoleUser', RoleUserSchema);

module.exports.getAllRolesAssignments = (page, callback) => {
    RoleUser.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}