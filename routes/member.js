const router = require("express").Router();

const Member = require('../models/Member');

authenticate = (req, res, next) => {
    if(req.session && req.session.username) {
      next();
    } else {
      res.status(401).send('MENE MENE TEKEL UPHARSIN');
    }
  }

router.get('/test', (req, res) => {
    console.log("MemberPost GET Test");
});

router.get('/', (req, res) => {
    if(req.session && req.session.userUsername) {
        res.send(`Welcome back, ${req.session.userUsername}`);
    } else {
        res.send('Access Denied.  You must log in first.');
    }
})

router.get('/auth', authenticate, (req, res) => {
    Member.find().then(members => res.send(members));
});

router.post('/register', function (req, res) {
    const member = new Member(req.body);
    member
        .save()
        .then(user => res.status(201).send(user))
        .catch(err => res.status(500).send(err));
})

module.exports = router;