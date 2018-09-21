const router = require("express").Router();

const Member = require('../models/Member');

router.get('/test', (req, res) => {
    Member.find().then(all => res.json(all));
});

router.post("/add", (req, res) => {
    const memberName = req.name;

    Member.findOne({ memberName }).then(foundMemberName => {
        if(foundMemberName) {
            errors.memberName = "That member already exists.";
        }
    })

    if(errors.memberName) {
        return res.status(400).json(errors);
    };

    const newMember = new Member({ memberName });
    newMember
        .save()
        .then(created => res.status(201).json(created))
        .catch(err => console.log(err));
})

module.exports = router;