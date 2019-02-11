const workouts = [
  {
    id: 0,
    mg: "Chest",
    workoutname: "DB Bench",
    sets: 3,
    reps: 15,
    weight: 50
  }
];

module.exports = {
  getWorkouts: (req, res) => {
    res.status(200).send(workouts);
  },
  createWorkout: (req, res) => {
    let newWorkout = { ...req.body };
    newWorkout.id = workouts[workouts.length - 1].id + 1;
    workouts.push(newWorkout);
    res.status(200).send(workouts);
  },

  updateWorkout: (req, res) => {
    const {id} = req.params;
    const {mg, workoutname, sets, reps, weight } = req.body;
    const index = workouts.findIndex(workout => workout.id == id);

    let updateNewWorkout = workouts[index];

    updateNewWorkout = {
      mg: mg,
      id: id,
      workoutname: workoutname || updateNewWorkout.workoutname,
      sets: sets || updateNewWorkout.sets,
      reps: reps || updateNewWorkout.reps,
      weight: weight || updateNewWorkout.weight
    };
    workouts.splice(index, 1, updateNewWorkout);
    res.status(200).send(workouts)
  },

  deleteWorkout: (req, res) => {
    const { id } = req.params;

    const index = workouts.findIndex(workout => workout.id == id);

    workouts.splice(index, 1);

    res.status(200).send(workouts);
  },
};
