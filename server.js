// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
console.log(process.env);
// MIDDLEWARE
app.use(express.json())
app.use(express.static('public'))

// ROUTES
const foodController = require('./controllers/food_controller.js')
app.use('/foods', foodController)

// DATABASE
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// ERROR / SUCCESS
mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
)
mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


<<<<<<< HEAD
// ROUTES
const foodController = require('./controllers/food_controller.js')
app.use('/foods', foodController)
=======
>>>>>>> b7da0f6a9057ac63b5641107c8d89eac84aa6a83

app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
