class App extends React.Component {
  // Updated state to contain a review object
  state = {
    foods: {},
    restaurant: [],
    reviews:[],
    review: {
      name: '',
      review_content: '',
      rating: null,
      restaurant_id: ''
    },
    show: false,

  }
  //DON'T LOAD UNTIL EVERYTHING IS MOUNTED ON THE DOM
  componentDidMount = () => {
    axios.get('/foods').then(response => {
      this.setState({
        reviews: response.data
      })
    })
  }
  //HOW TO SET THE CHANGES
  handleChange = (event) => {
    const review = this.state.review;
    const restaurantInput = event.target.parentElement.querySelector('#restaurant_id') // Have to find specific restaurant input element
    review.restaurant_id = restaurantInput.value;
    review[event.target.id] = event.target.value
    this.setState({
      review: review
    })
}


  //LOADS ZOMATO API DIRECTLY ON PAGE
  findFood = (event) => {
     event.preventDefault()
     axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id=282&entity_type=city').then(
         (response) => {
           this.setState({
             foods: response.data,
             restaurant: response.data.best_rated_restaurant
           })
         }
     )}
  // LOADS CRUD (REVIEW SCHEMA)
  createReview = (event) => {
    event.preventDefault()
    axios.post('/foods', this.state.review).then(response => {
      this.setState({
        reviews: response.data
      })
    })
  }
// Deletes Review
deleteReview = (event) => {
  axios.delete('/foods/' + event.target.id).then(response => {
    this.setState({
      reviews: response.data
    })
  })
}
render = () => {
  return(
    <div>
    <div className="city">
    <div className="find-button">
    <button onClick={this.findFood}>Find Restaurants</button>
    <h3>City: {this.state.foods.city}</h3>
    </div>
    </div>
    {this.state.restaurant.map (food => {
      return(
        <div className="card-container">
          <div className="food-card">
            <img src={food.restaurant.featured_image} alt="food-pic"/>
          <div className="food-info">
            <h3>Name: <a href={food.restaurant.url}>{food.restaurant.name}</a></h3>
            <h3>Cuisines: {food.restaurant.cuisines}</h3>
            <h3>location: {food.restaurant.location.address}</h3>
            <h3>Reviews: </h3>
            {
              this.state.reviews.filter((review) => {
                return food.restaurant.id == review.restaurant_id
              })
              .map((review, i) => {
                return(
                  <div key={i}>
                    <h3>Name:{review.name}</h3>
                    <p>Rating:{review.rating}</p>
                    <p>{review.review_content}</p>
                    <button onClick={this.deleteReview} id={review._id}>delete</button>
                  </div>
                )
              })
            }
            <form onSubmit={this.createReview}>
              <input id='restaurant_id' type='hidden' value={food.restaurant.id} />
              <label htmlFor="name">Name: </label>
              <input id='name' type='text' onChange={this.handleChange} />
              <br/>
              <label htmlFor="review">Review: </label>
              <input id='review_content' type='text' onChange={this.handleChange} />
              <br/>
              <label htmlFor="rating">Rating: </label>
              <input id='rating' type='number' min='0' max='5' onChange={this.handleChange} />
              <input type="submit" value="Add A Review" className="update-btn" />
            </form>
          </div>
          </div>
        </div>
      )})}
    </div>
  )
  }
}


ReactDOM.render(<App></App>, document.querySelector('main'))
