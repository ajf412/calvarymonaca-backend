const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const SermonSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    series: {
        type: String,
        required: true,
    },
    furtherInfo: {
        type: String,
        required: true,
    },
    mp3File: {
        type: File,
        required: true,
    },
    sermonNotes: {
        type: File,
    },
    sermonSlides: {
        type: File,
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
});

module.exports = Sermon = mongoose.model(
    "comment",
    SermonSchema
);
