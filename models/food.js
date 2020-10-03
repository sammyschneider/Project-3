const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema ({
<<<<<<< HEAD
  img: String,
  restaurantName: String,
  address: String,
  cuisines: String,
  ratings: {type: Number , max:5, min:0}
})


const Food = mongoose.model('Food', foodSchema)
=======
  name: String,
  review_content: String,
  rating: {type: Number , max:5, min:0},
  restaurant_id: String //Added this key value so that we can associate the restuarant with it's review
})


const Food = mongoose.model('Review', foodSchema)
>>>>>>> b7da0f6a9057ac63b5641107c8d89eac84aa6a83

module.exports = Food;
