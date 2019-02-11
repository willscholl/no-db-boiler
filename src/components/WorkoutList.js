import React from 'react';
import Workout from './Workout.js'

export default function WorkoutList(props) {
  return (
    props.workouts.map((workout, index)=> {
      return (
        <Workout 
          id={workout.id}
          key={workout.id}
          workout={workout}
          updateWorkout={props.updateWorkout}
          deleteWorkout={props.deleteWorkout}
        />
      )
    })
  )
}
