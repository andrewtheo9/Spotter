import "./AddWorkoutForm.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as workoutsApi from '../../utilities/workouts-api'

export default function AddWorkoutForm() {
  const [date, setDate] = useState('');
  const [minutes, setMinutes] = useState('');
  const [muscleGroups, setMuscleGroups] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  // const [formData, setFormData] = useState({})
  const navigate = useNavigate()


  // const handleChange = (e) => {
  //   setFormData({...formData, [e.target.name]:e.target.value})
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWorkout = { date, minutes, muscleGroups, exerciseName, sets, reps };
    const workoutData = workoutsApi.createWorkout(newWorkout)
    try {
      setDate('');
      setMinutes('');
      setMuscleGroups('');
      setExerciseName('');
      setSets('');
      setReps('')
    } catch (err) {
      console.log(err);
    }
    navigate('/workouts')
  };


  return (
    <form className="workout" onSubmit={handleSubmit}>
      <div className="date">
        <label>Date:</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>
      <div className="minutes">
        <label>Minutes:</label>
        <input type="number" min="20" max="300" value={minutes} onChange={e => setMinutes(e.target.value)} />
      </div>
      <div className="sets">
          <label>Sets:</label>
          <input type="number" name="sets" value={sets} onChange={e => setSets(e.target.value)}/>
      </div>
      <div className="exercise">
          <label>Exercise Name:</label>
          <input type="text" name='name' value={exerciseName} onChange={e => setExerciseName(e.target.value)}/>
      </div>
     <div className="reps">
          <label>Reps:</label>
          <input type="number" name='reps' value={reps} onChange={e => setReps(e.target.value)}/>
      </div>
      <div className="muscle">
        <label>Muscle Groups:</label>
        <input type="text" value={muscleGroups} onChange={e => setMuscleGroups(e.target.value)} />
      </div>
      <button className="button" type="submit">Save Workout</button>
    </form>
  );
}
