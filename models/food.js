const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema ({
  img: String,
  restaurantName: String,
  address: String,
  cuisines: String,
  ratings: {type: Number , max:5, min:0}
})


const Food = mongoose.model('Food', foodSchema)

module.exports = Food;
