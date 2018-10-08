const router = require("express").Router();

const Member = require('../models/Member');

router.get('/test', (req, res) => {
    console.log("MemberPost GET Test");
});

router.post("/add", (req, res) => {
    console.log("MemberPost POST Test");
})

module.exports = router;