const router = require("express").Router();

router.get('/test', (req, res) => {
    console.log("Bible GET Test");
});

router.post("/add", (req, res) => {
    console.log("Bible POST Test");
})

module.exports = router;