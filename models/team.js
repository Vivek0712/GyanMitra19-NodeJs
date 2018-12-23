const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;
// Team Schema
const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

});
TeamSchema.plugin(pagination);
const Team = module.exports = mongoose.model('Team', TeamSchema);

//Modified By : Aravind Raj
//Added Pagination for team
module.exports.getAllTeams = (page, callback) => {
    Team.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}