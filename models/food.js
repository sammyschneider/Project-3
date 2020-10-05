const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema ({
<<<<<<< HEAD
  name: String,
  review_content: String,
  rating: {type: Number , max:5, min:0},
  restaurant_id: String //Added this key value so that we can associate the restuarant with it's review
})


const Food = mongoose.model('Review', foodSchema)
=======
  img: String,
  restaurantName: String,
  address: String,
  cuisines: String,
  ratings: {type: Number , max:5, min:0},
  name: String,
  review_content:String,
  rating: {type: Number , max:5, min:0},
  restaurant_id: String
})


const Food = mongoose.model('Food', foodSchema)
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235

module.exports = Food;
