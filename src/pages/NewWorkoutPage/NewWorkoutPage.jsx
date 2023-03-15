import './NewWorkoutPage.css'
import AddWorkoutForm from '../../components/AddWorkoutForm/AddWorkoutForm';

export default function NewWorkoutPage() {
  return (
    <div className="header">
      <h1>Add a New Workout</h1>
      <AddWorkoutForm />
    </div>
  );
};

