export default function WorkoutList({ workouts }){
    console.log('workouts:', workouts)
  return (
    <ul>
      {workouts.map(workout => (
        <li key={workout._id}>
          <p>Date: {workout.date}</p>
          <p>Minutes: {workout.minutes}</p>
          <p>Muscle Groups: {workout.muscleGroups}</p>
          <ul>
            {workout.exercises.map(exercise => (
              <li key={exercise._id}>
                <p>Name: {exercise.name}</p>
                <p>Sets: {exercise.sets}</p>
                <p>Reps: {exercise.reps}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

