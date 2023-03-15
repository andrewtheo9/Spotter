const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    date: { type: Date, required: true },
    minutes: { type: Number, min: 20, max: 300, required: true},
    muscleGroups: { type: String, required: true},
    exerciseName: { type: String, required: true},
    sets: { type: Number, required: true},
    reps: { type: Number, required: true},
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema);