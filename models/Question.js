const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const QuestionSchema = new mongoose.Schema({
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
  tags: [
    {
      type: String,
    }
  ],
  answer: [
    {
      type: ObjectId,
      ref: "comment",
    }
  ],
  createdOn: {
    type: Date,
    default: Date.now()
  },
});

module.exports = Question = mongoose.model(
  "question",
  QuestionSchema
);
