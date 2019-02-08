const express = require('express')
const bodyParser = require('body-parser')
const nc = require('./Controllers/name_controller')
//RENAME YOUR CONTROLLER TO ANYTHING YOU WANT

const app = express()
app.use(bodyParser.json())

app.get('/api/name', nc.sendName)

// USE A DIFFERENT PORT IF YOU WANT
const PORT = 3333
// CHANGE THE CONSOLE LOG IF YOU WANT
app.listen(PORT, () => console.log(`The magic is happening on ${PORT}`))
