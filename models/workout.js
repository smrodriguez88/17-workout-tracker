const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter type of excercise"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter name of excercise"
        },
        duration: {
          type: Number,
          required: "Enter exercise duration (minutes)"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
