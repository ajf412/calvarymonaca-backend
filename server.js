// ________IMPORTS________
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const helmet = require('helmet');
const cors = require('cors');

// ________SETUP________
mongoose.connect('mongodb://localhost/test');
const app = express();

// ________ROUTES________
const members = require('./routes/member');
const bible = require('./routes/bible');
const prayers = require('./routes/prayers');
const memberPosts = require('./routes/memberPosts');
const comments = require('./routes/comments');
const questions = require('./routes/questions');


var db = mongoose.connection;  //see 'mongoose.connect' in setup
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

app.use('/api/members', members);
app.use('/api/bible', bible);
app.use('/api/prayers', prayers);
app.use('/api/memberPosts', memberPosts);
app.use('/api/comments', comments);
app.use('/api/questions', questions);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`\nServer is running on port ${port}`));