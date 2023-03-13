// import { checkToken } from '../../utilities/users-service'
import { useState, useEffect } from 'react';
import WorkoutList from '../../components/WorkoutList/WorkoutList';

export default function WorkoutListPage() {

    // async function handleCheckToken() {
    //     const expDate = await checkToken()
    //     console.log(expDate)
    // }
      const [workouts, setWorkouts] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('/api/workouts');
          const data = await res.json();
          setWorkouts(data);
        };
    
        fetchData();
      }, []);
    
      return (
        <div>
          <h1>My Workouts</h1>
          <WorkoutList workouts={workouts} />
        </div>
      );
    };
    