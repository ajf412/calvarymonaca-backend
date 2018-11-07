// ________IMPORTS________
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// ________MIDDLEWARE SETUP________
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(cors());

// ________CORS SETUP FOR PRODUCTION________
// const CORS_WHITELIST = require('./authorization/corsAuth');
// const corsOptions = {
//     origin:(origin, callback) =>
//     CORS_WHITELIST.indexOf(origin) !== -1
//         ? callback(null, true)
//         : callback(new Error("Not allowed by CORS"))
// };

// ________CORS SETUP FOR DEVELOPMENT
const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

// ________CORS INITIALIZATION________
const configureServer = app => {
    app.use(helmet());
    app.use(cors(corsOptions));
    app.use(express.json());
};

configureServer(app);

// ________ROUTES________
const members = require('./routes/member');
const bible = require('./routes/bible');
const prayers = require('./routes/prayers');
const memberPosts = require('./routes/memberPosts');
const comments = require('./routes/comments');
const questions = require('./routes/questions');
const sermons = require('./routes/sermons');

app.use(
    session({
        secret: process.env.SECRETKEY,
        cookie: {
            maxAge: 1 * 24 * 60 * 60 * 1000,
        },
        httpOnly: true,
        secure: false,
        resave: true,
        saveUninitialized: false,
        name: "GodIsWatchingYou",
        store: new MongoStore({
            url: 'mongodb://localhost/sessions',
            ttl: 60 * 10,
        })
    })
)

app.use('/members',
    cors(corsOptions),
    members);

app.use('/bible',
    cors(),
    bible);

app.use('/prayers',
    cors(corsOptions),
    prayers);

app.use('/memberPosts',
    cors(corsOptions),
    memberPosts);

app.use('/comments',
    cors(corsOptions),
    comments);

app.use('/questions',
    cors(corsOptions),
    questions);

app.use('/sermons',
    cors(corsOptions),
    sermons);

// ________MONGO DB CONNECTION________
var db = mongoose.connection;  //see 'mongoose.connect' in setup
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

// ________START THE SERVER________
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`\nServer is running on port ${port}`));