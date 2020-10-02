const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema ({
  comment: String,
  rating: Number
})


const Food = mongoose.model('Food', foodSchema)

module.exports = Food;
