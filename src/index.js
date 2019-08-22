const clip = require('./clip')
const express = require('express')
const query = require('./query')

const PORT = 3000
const app = express()

// middlewares
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/query', query)
app.post('/clip', clip)

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
