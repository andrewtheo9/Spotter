const Workout = require('../../models/workout');

module.exports = {
    createWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout, 
}

async function createWorkout(req, res) {
    const newWorkout = new Workout(req.body);
    const workout = await newWorkout.save();
    res.json(workout)
}

async function getWorkouts(req, res) {
    const workouts = await Workout.find();
    res.json(workouts);
}

async function updateWorkout(req, res) {
    const workout = await Workout.findById(req.params.id);
    const updatedWorkout = await workout.save();
    res.json(workout)
}

async function deleteWorkout(req, res) {
    const workout = await Workout.findById(req.params.id);
    await workout.delete();
    res.json(workout)
}