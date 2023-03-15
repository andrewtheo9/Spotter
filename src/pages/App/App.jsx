import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NewWorkoutPage from '../NewWorkoutPage/NewWorkoutPage';
import WorkoutListPage from '../WorkoutListPage/WorkoutListPage';
import NavBar from '../../components/NavBar/NavBar'
import EditWorkoutPage from "../EditWorkoutPage/EditWorkoutPage"

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/workouts/new" element={<NewWorkoutPage />} />
            <Route path="/workouts" element={<WorkoutListPage />} />
            <Route path="/workouts/edit/:id" element={<EditWorkoutPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


