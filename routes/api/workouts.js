const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

router.get('/', workoutsCtrl.getWorkouts);
router.get('/:id', workoutsCtrl.getWorkoutById);
router.post('/', workoutsCtrl.createWorkout);
router.put('/:id', workoutsCtrl.updateWorkout);
router.delete('/:id', workoutsCtrl.deleteWorkout);

module.exports = router;
