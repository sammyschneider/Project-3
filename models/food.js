const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema ({
  name: {type: String, required:true},
  cuisines: String,
  city: String,
  rating: String,
  link: String
})


const Food = mongoose.model('Food', foodSchema)

module.exports = Food;
