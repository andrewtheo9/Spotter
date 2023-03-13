import { useState } from 'react';

export default function AddWorkoutForm({ onAddWorkout }) {
  const [date, setDate] = useState('');
  const [minutes, setMinutes] = useState('');
  const [muscleGroups, setMuscleGroups] = useState('');
  const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '' }]);

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', sets: '', reps: '' }]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newWorkout = { date, minutes, muscleGroups, exercises };
    fetch('/api/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWorkout)
    })
      .then(res => res.json())
      .then(data => onAddWorkout(data))
      .catch(err => console.error(err));
    setDate('');
    setMinutes('');
    setMuscleGroups('');
    setExercises([{ name: '', sets: '', reps: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>
      <div>
        <label>Minutes:</label>
        <input type="number" min="30" max="300" value={minutes} onChange={e => setMinutes(e.target.value)} />
      </div>
      <div>
        <label>Muscle Groups:</label>
        <input type="text" value={muscleGroups} onChange={e => setMuscleGroups(e.target.value)} />
      </div>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <label>Exercise Name:</label>
          <input type="text" value={exercise.name} onChange={e => {
            const newExercises = [...exercises];
            newExercises[index].name = e.target.value;
            setExercises(newExercises);
          }} />
          <label>Sets:</label>
          <input type="number" value={exercise.sets} onChange={e => {
            const newExercises = [...exercises];
            newExercises[index].sets = e.target.value;
            setExercises(newExercises);
          }} />
          <label>Reps:</label>
          <input type="number" value={exercise.reps} onChange={e => {
            const newExercises = [...exercises];
            newExercises[index].reps = e.target.value;
            setExercises(newExercises);
          }} />
        </div>
      ))}
      <button type="button" onClick={handleAddExercise}>Add Exercise</button>
      <button type="submit">Save Workout</button>
    </form>
  );
}
