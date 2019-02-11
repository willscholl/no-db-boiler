import React, { Component } from "react";
// import axios from 'axios'
import './Workout.css'

class Workout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      id: props.workout.id,
      mg: props.workout.mg,
      workoutname: props.workout.workoutname,
      sets: props.workout.sets,
      reps: props.workout.reps,
      weight: props.workout.weight
    };
  }

  setEdit() {
    this.setState ({
      editing: !this.state.editing
    })
  }

  saveEdit() {
    const {workout, updateWorkout} = this.props
    this.setEdit()
    updateWorkout(this.state, workout.id)
  }  

  render() {
    const { workout, deleteWorkout, id } = this.props;
    return this.state.editing ? (
      <div className="WorkoutList">
        <h4>{workout.mg}</h4>
          <div className="CompletedInputs">
            <p>Muscle Group: <input onChange={e => this.setState({
              workoutname: e.target.value
            })} value={this.state.workoutname}/></p>
            <p>Sets: <input onChange={e => this.setState({
              sets: e.target.value
            })} value={this.state.sets}/></p>
            <p>Reps: <input onChange={e => this.setState({
              reps: e.target.value
            })} value={this.state.reps}/></p>
            <p>Weight: <input onChange={e => this.setState({
              weight: e.target.value
            })} value={this.state.weight}/></p>
            <button onClick={() => {this.saveEdit(workout.id)}}>Save</button>
            <button onClick={() => deleteWorkout(id)}>Delete</button>
          </div>
      </div>
    ) : (
      <div className="WorkoutList">
        <h1>{workout.mg}</h1>
        <div className="CompletedInputs">
          <p>{workout.workoutname}</p>
          <p>Sets: {workout.sets}</p>
          <p>Reps: {workout.reps}</p>
          <p>Weight: {workout.weight}</p>
          <button onClick={()=> {this.setEdit(workout.id)}}>Edit</button>
          <button onClick={() => deleteWorkout(id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Workout;
