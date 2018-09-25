const router = require("express").Router();

const Member = require('../models/Member');

router.get('/test', (req, res) => {
    Member.find().then(all => res.json(all));
});

router.post("/add", (req, res) => {
    console.log(req.body);
    const newMember = new Member();
    newMember
        .save()
        .then(created => res.status(201).json(created))
        .catch(err => console.log(err));
})

module.exports = router;