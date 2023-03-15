import sendRequest from './send-request'

const BASE_URL = '/api/workouts'


export function createWorkout(workout)  {
    console.log(workout)
   return sendRequest('/api/workouts', 'POST', {workout})
}

export function deleteWorkout(workout_id) {
    return sendRequest(`${BASE_URL}/${workout_id}`, 'DELETE')
}

export function updateWorkout(workout_id, workout) {
    return sendRequest(`${BASE_URL}/${workout_id}`, 'PUT', {workout})
}

export function getWorkout(workout_id) {
    return sendRequest(`${BASE_URL}/${workout_id}`)
}

