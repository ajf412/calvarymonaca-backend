// ________IMPORTS________
require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');

// ________SETUP________
mongoose.connect('mongodb://localhost/test');
const app = express();

// ________ROUTES________
const members = require('./routes/member');

var db = mongoose.connection;  //see 'mongoose.connect' in setup
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});

app.use("/api/members", members);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`\nServer is running on port ${port}`));