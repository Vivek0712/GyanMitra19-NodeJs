const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;

// TeamMember Schema
const TeamMemberSchema = mongoose.Schema({
    team_id: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
TeamMemberSchema.plugin(pagination);
const TeamMember = module.exports = mongoose.model('TeamMember', TeamMemberSchema);

//Modified By : Aravind Raj
//Added Pagination for team_members
module.exports.getAllTeamMembers = (page, callback) => {
    TeamMember.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}