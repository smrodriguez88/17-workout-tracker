const router = require("express").Router();
const Workout = require("../models/workout");

// Corresponding GET request to /api/workouts for api.js file
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(result => {
        console.log(`Result: ${result}`)
        res.json(result);
    })
    .catch(err => {
        console.log(`ERROR: ${err}`)
        res.status(500).json(err)
    });
});

// Corresponding POST request to /api/workouts for api.js file
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(result => {
        console.log(`Result: ${result}`)
        res.json(result)
    })
    .catch(err => {
        console.log(`ERROR: ${err}`)
        res.status(500).json(err);
    });
});

// Corresponding GET request to /api/workouts/range for api.js file
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
    .then(result => {
        console.log(`Result: ${result}`)
        res.json(result);
    })
    .catch(err => {
        console.log(`ERROR: ${err}`)
        res.status(500).json(err)
    });
});

// Corresponding PUT request to /api/workouts/:id for api.js file
router.put("/api/workouts/:id", ({params, body}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises : body}})
        .then((result) => {
        console.log(`Result: ${result}`)
        res.json(result);
    }).catch((err) => {
    console.log(`ERROR: ${err}`)
    res.json(err)
    })
})

module.exports = router;