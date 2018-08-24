const express = require('express')
const bodyParser = require('body-parser')
//IMPORT YOUR CONTROLLER HERE

const app = express()
app.use(bodyParser.json())

app.get('/api/name', (req, res) => {
  res.status(200).send('Bryan')
})

// USE A DIFFERENT PORT IF YOU WANT
const PORT = 3333
// CHANGE THE CONSOLE LOG IF YOU WANT
app.listen(PORT, () => console.log(`The magic is happening on ${PORT}`))