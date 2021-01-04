const path = require("path")
const router = require("express").Router()

// Load stats page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

// Load excersie page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

module.exports = router;