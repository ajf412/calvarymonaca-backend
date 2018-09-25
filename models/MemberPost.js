const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const MemberPostSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    }
  ],
  comments: [
    {
      type: ObjectId,
      ref: "comment",
    }
  ],
  member: [
    {
      type: ObjectId,
      ref: "member"
    }
  ],
  createdOn: {
    type: Date,
    default: Date.now()
  },
});

module.exports = MemberPost = mongoose.model(
  "memberPost",
  MemberPostSchema
);
