const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// TeamMember Schema
const TeamMemberSchema = mongoose.Schema({
    team_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
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