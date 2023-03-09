const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = newSchema({
    name: { type: string, required: true},
    sets: { type: Number, required: true},
    reps: { type: Number, required: true}
}, {
    timestamps: true
})

model.exports = mongoose.model('Exercise'. exerciseSchema);