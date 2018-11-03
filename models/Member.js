const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

var MemberSchema = new mongoose.Schema({
    username: {
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
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    memberType: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
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
    adminAccepted: {
        type: Boolean,
        required: true,
        default: false,
    }
})


module.exports = Member = mongoose.model('member', MemberSchema);