const mongoose = require('mongoose');

var MemberSchema = new mongoose.Schema({
    name: String
})


module.exports = Member = mongoose.model('members', MemberSchema);