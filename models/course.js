const mongoose = require('mongoose');
const config = require('../config/env');
const pagination = require('mongoose-paginate');

// Course Schema
const CourseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
CourseSchema.plugin(pagination);
const Course = module.exports = mongoose.model('Course', CourseSchema);

//Modified By : Aravind S
//Added Pagination to get all Courses
module.exports.getAllCourses = (page, callback) => {
    Course.paginate({}, { limit: config.pagination.perPage, page: page }, callback);
}