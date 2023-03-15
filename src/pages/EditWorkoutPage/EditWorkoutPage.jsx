import "./EditWorkoutPage.css"
import { useState } from 'react';
import * as workoutsApi from '../../utilities/workouts-api'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function EditWorkoutForm() {
  const {id} = useParams()
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()
  
  useEffect(function(){
    async function getWorkout() {
        const workout = await workoutsApi.getWorkout(id)
        setFormData(workout)
    }
    getWorkout()
  },[])


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }


  async function handleUpdate(e) {
    e.preventDefault();
    const editWorkout = await workoutsApi.updateWorkout(id, formData);
    navigate('/workouts')
  }


  return (
    <>
    <h1>Change a Workout</h1>
    <form className="workout" onSubmit={handleUpdate}>
      <div className="date">
        <label>Date:</label>
        <input type="date" name='date' value={formData.date} onChange={handleChange} />
      </div>
      <div className="minutes">
        <label>Minutes:</label>
        <input type="number" min="20" max="300" name='minutes' value={formData.minutes} onChange={handleChange} />
      </div>
      <div className="muscle">
        <label>Muscle Groups:</label>
        <input type="text" name="muscleGroups" value={formData.muscleGroups} onChange={handleChange} />
      </div>
      <div className="exercise">
          <label>Exercise Name:</label>
          <input type="text" name='exerciseName' value={formData.exerciseName} onChange={handleChange}/>
      </div>
      <div className="sets">
          <label>Sets:</label>
          <input type="number" name="sets" value={formData.sets} onChange={handleChange}/>
      </div>
     <div className="reps">
          <label>Reps:</label>
          <input type="number" name='reps' value={formData.reps} onChange={handleChange}/>
      </div>
      <button className="button" type="submit">Update Workout</button>
    </form>
    </>
  );
}
