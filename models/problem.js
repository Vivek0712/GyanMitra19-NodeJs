const mongoose = require('mongoose');

const ProblemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Problem', ProblemSchema);