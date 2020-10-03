const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema ({
  img: String,
  restaurantName: String,
  address: String,
  cuisines: String,
<<<<<<< HEAD
  ratings: {type: Number , max:5, min:0},
=======
  ratings: {type: Number , max:5, min:0}
>>>>>>> b3c6e19cd18cb7459a46238c5ade6bed52dbce62
})


const Food = mongoose.model('Food', foodSchema)

module.exports = Food;
