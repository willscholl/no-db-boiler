import React, { Component } from "react";
import axios from "axios";
import WorkoutList from "./WorkoutList";
import "./Tracker.css";
import Header from './Header.js'

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      id: 0,
      mg: "",
      workoutname: "",
      sets: "",
      reps: "",
      weight: "",
      seconds: 0,
      miliseconds: 0
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleWorkoutName(val) {
    this.setState({
      workoutname: val
    });
  }

  handleSets(val) {
    this.setState({
      sets: val
    });
  }

  handleReps(val) {
    this.setState({
      reps: val
    });
  }

  handleWeight(val) {
    this.setState({
      weight: val
    });
  }

  handleMg(val) {
    this.setState({
      mg: val
    });
  }


  startTimer = () => {
    if(!this.myInterval){
      this.myInterval = setInterval(this.handleTimer, 10)
    }
  }

  handleTimer = () => {
    let {seconds, miliseconds} = this.state
    miliseconds++
    if (miliseconds >= 100) {
      miliseconds = 0
      seconds += 1
    }
    this.setState({miliseconds, seconds})
  }

  stopTimer() {
    clearInterval(this.myInterval)
    this.myInterval = null
  }

  componentDidMount() {
    axios.get("/api/workouts").then(res => {
      this.setState({
        workouts: res.data
      });

    });
  }

  handleCreateWorkout() {
    const { seconds, miliseconds, mg, workoutname, sets, reps, weight } = this.state;
    axios
      .post("/api/workout", { seconds, miliseconds, mg, workoutname, sets, reps, weight })
      .then(res => {
        // console.log(res.data)
        this.setState({
          workouts: res.data,
          id: 0,
          mg: "",
          workoutname: "",
          sets: "",
          reps: "",
          weight: "",
          seconds: 0,
          miliseconds: 0
        });
      })
      .catch(err => {
        console.log("Failed to create");
      });
  }

  handleUpdate(obj, id) {
    // console.log(obj, id)
    axios.put(`/api/workout/${id}`, obj).then(res => {
      this.setState({
        workouts: res.data
      });
    });
  }

  handleDelete(id) {
    axios.delete(`/api/workout/${id}`).then(res => {
      this.setState({
        workouts: res.data
      });
    });
  }


  render() {
    return (
      <div className="Body">
      <Header />
        <div className="List" style={{flex: 1}}>
          <div className="Addbar">
            <select onChange={e => this.handleMg(e.target.value)}>
              <option>Muscle Group</option>
              <option value="Chest">Chest</option>
              <option value="Arms">Arms</option>
              <option value="Legs">Legs</option>
              <option value="Back">Back</option>
            </select>
            <input
              type="text"
              placeholder="Workout"
              onChange={e => this.handleWorkoutName(e.target.value)}
              value={this.state.workoutname}
            />
            <input
              type="text"
              placeholder="How many sets?"
              onChange={e => this.handleSets(e.target.value)}
              value={this.state.sets}
            />
            <input
              type="text"
              placeholder="How many reps?"
              onChange={e => this.handleReps(e.target.value)}
              value={this.state.reps}
            />
            <input
              type="text"
              placeholder="How much weight?"
              onChange={e => this.handleWeight(e.target.value)}
              value={this.state.weight}
            />
          <div className="buttonlayout">
            <button onClick={() => this.startTimer()}>Start</button>
            <button onClick={() => this.stopTimer()}>Stop</button>
            <div>
              <button onClick={() => this.handleCreateWorkout()}>Add</button>
            </div>
            <p className="timer">Time: {this.state.seconds}:{this.state.miliseconds}</p>
          </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <WorkoutList
            className="CompletedList"
            id={this.state.id}
            workouts={this.state.workouts}
            updateWorkout={this.handleUpdate}
            deleteWorkout={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default Tracker;
