const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

var MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    posts: [
        {
            type: ObjectId,
            ref: "memberPost",
        }
    ],
    comments: [
        {
            type: ObjectId,
            ref: "comment",
        }
    ],
    questions: [
        {
            type: ObjectId,
            ref: "question",
        }
    ],
    createdOn: {
        type: Date,
        default: Date.now(),
    },
})


module.exports = Member = mongoose.model('member', MemberSchema);