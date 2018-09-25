const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const CommentSchema = new mongoose.Schema({
  member: [
    {
      type: ObjectId,
      ref: "member"
    }
    ],
  content: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now()
  },
});

module.exports = Comment = mongoose.model(
  "comment",
  CommentSchema
);
