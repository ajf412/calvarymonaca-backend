const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ObjectId = mongoose.Schema.Types.ObjectId;

var MemberSchema = new mongoose.Schema({
    userUsername: {
        type: String,
        required: true,
        unique: true,
    },
    userPassword: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
    },
    userFirstName: {
        type: String,
        required: true,
    },
    userLastName: {
        type: String,
        required: true,
    },
    userAddress1: {
        type: String,
        required: true,
    },
    userAddress2: {
        type: String,
    },
    userCity: {
        type: String,
        required: true,
    },
    userState: {
        type: String,
        required: true,
    },
    userZipCode: {
        type: String,
        required: true,
    },
    userMembership: {
        type: String,
        required: true,
    },
    userIsSeenByOnline: {
        type: Boolean,
        required: true,
    },
    userIsAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    userPosts: [
        {
            type: ObjectId,
            ref: "memberPost",
        }
    ],
    userComments: [
        {
            type: ObjectId,
            ref: "comment",
        }
    ],
    userBibleNotes: [
        {
            type: ObjectId,
            ref: "bibleNote"
        }
    ],
    userQuestions: [
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

MemberSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 11, (err, hash) => {
        if(err) {
            return next(err);
        }

        this.password = hash;

        return next();
    })
})

MemberSchema.methods.isPasswordValid = function(passwordGuess) {
    return bcrypt.compare(passwordGuess, this.password)
}


module.exports = mongoose.model('Member', MemberSchema);