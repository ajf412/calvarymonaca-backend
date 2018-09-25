const router = require("express").Router();

router.get('/test', (req, res) => {
    console.log("Bible GET Test");
    res.status(204).json('BIBLE GET TEST');
});

router.post("/add", (req, res) => {
    console.log("Bible POST Test");
    res.status(204).json('BIBLE POST TEST');
})

module.exports = router;