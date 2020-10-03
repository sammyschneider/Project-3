const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema ({
  name: String,
  review_content: String,
  rating: {type: Number , max:5, min:0},
  restaurant_id: String //Added this key value so that we can associate the restuarant with it's review
})


const Food = mongoose.model('Review', foodSchema)

module.exports = Food;
