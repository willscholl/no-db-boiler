const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./Controllers/workoutController')

const app = express();
app.use(bodyParser.json())

app.get('/api/workouts', ctrl.getWorkouts);

app.post('/api/workout', ctrl.createWorkout)

app.put(`/api/workout/:id`, ctrl.updateWorkout)

app.delete(`/api/workout/:id`, ctrl.deleteWorkout)




const PORT = 3030
app.listen(PORT, () => console.log(`Banging on port ${PORT}`))
