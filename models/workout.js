const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = require('./exercise')

const workoutSchema = new Schema ({
    date: { type: Date, required: true },
    minutes: { type: Number, min: 30, max: 300, required: true},
    muscleGroups: { type: String, required: true},
    exercise: exerciseSchema
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema);