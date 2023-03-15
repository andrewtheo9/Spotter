const Workout = require('../../models/workout');

module.exports = {
    createWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout, 
    getWorkout
}

async function createWorkout(req, res) {
    console.log(req.body)
    console.log('hitting')
    try {
      const newWorkout = await Workout.create(req.body.workout);
  
      res.status(201).json(newWorkout);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
}  

async function getWorkouts(req, res) {
    const workouts = await Workout.find();
    res.json(workouts);
}

async function updateWorkout(req, res) {
    console.log(req.body)
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body.workout, {new:true});
    console.log(workout)
    res.json(workout)
}

async function deleteWorkout(req, res) {
    console.log("delete")
    const workout = await Workout.deleteOne({_id:req.params.id});
    const workouts = await Workout.find({})
    res.json(workouts)
}

async function getWorkout(req, res) {
    const workout = await Workout.findById(req.params.id)
    console.log(workout)
    res.json(workout)
}