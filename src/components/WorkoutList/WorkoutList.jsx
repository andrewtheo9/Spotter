import "./WorkoutList.css"
import * as workoutsAPI from '../../utilities/workouts-api'
import {Link} from 'react-router-dom'

export default function WorkoutList({ workout, workouts, setWorkouts }){
    console.log('workouts:', workouts)
  
  async function handleDelete(workout_id) {
    const updatedWorkouts = await workoutsAPI.deleteWorkout(workout_id);
    setWorkouts(updatedWorkouts)
  }


  
  
return (
    <div className="workoutlist">
      {workouts.map(workout => (
        <>
        <div className='workoutDetails' key={workout._id}>
          <p>Date: {workout.date}</p>
          <p>Minutes: {workout.minutes}</p>
          <p>Muscle Groups: {workout.muscleGroups}</p>
          <p>Exercise Name: {workout.exerciseName}</p>
          <p>Sets: {workout.sets}</p>
          <p>Reps: {workout.reps}</p>
        </div>
      <button type="button" onClick={() => handleDelete(workout._id)}>Delete</button>
      <Link to={`/workouts/edit/${workout._id}`}><button type="button">Edit</button></Link>
        </>
      ))}
    </div>
  );
};

