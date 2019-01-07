const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');
const Schema = mongoose.Schema;
// Event Schema
const EventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    department_id: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_name: {
        type: String,
        required: true
    },
    rules: {
        type: String,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    event_date: {
        type: String,
        required: true
    },
    prelims: {
        type: String
    },
    round_1: {
        type: String
    },
    round_2: {
        type: String
    },
    finals: {
        type: String
    },
    min_members: {
        type: Number
    },
    max_members: {
        type: Number
    },
    max_limit: {
        type: Number
    },
    contact_email: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    allow_gender_mixing: {
        type: Boolean,
        required: true
    },
    resource_person: { 
        type: String
    }
});
EventSchema.plugin(pagination);
const Event = module.exports = mongoose.model('Event', EventSchema);

//Created By Aravind Raj
//Added pagination for event
//Date : 20-10-2018
module.exports.getAllEvents = (page, callback) => {
    Event.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}

