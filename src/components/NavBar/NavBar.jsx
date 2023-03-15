import './NavBar.css'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav className="Navigation">
            <div className="title">SPOTTER</div>
            <Link className="all" to="/workouts">Recent Workouts</Link>
            &nbsp; | &nbsp;
            <Link className="new" to="/workouts/new">New Workout</Link>
            &nbsp;&nbsp; <div className="welcome">Welcome, {user.name}</div>
            &nbsp;&nbsp;<Link className="account" to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}