const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema ({
  img: String,
  name: String,
  city: String,
  cuisines: String,
  rating: {type: Number , max:5, min:0}
})


const Food = mongoose.model('Review', foodSchema)

module.exports = Food;
