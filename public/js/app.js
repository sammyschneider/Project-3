class App extends React.Component {
  state = {
    foods: {},
    restaurant: [],
    name: '',
    review: '',
    rating: null,
    reviews:{},
    show: false,
  }
  //DON'T LOAD UNTIL EVERYTHING IS MOUNTED ON THE DOM
  componentDidMount = () => {
    axios.get('/foods').then(response => {
      this.setState({
        foods: response.data,
        food: response.data.best_rated_restaurant
      })
    })
  }
  //HOW TO SET THE CHANGES
  handleChange = (event) => {
    this.setState({
        [event.target.id]: event.target.value
    })
}
  //LOADS ZOMATO API DIRECTLY ON PAGE
  newYork = (event) => {
     event.preventDefault()
     axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id=280&entity_type=city').then(
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
    axios.post('/foods', this.state).then(response => {
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
    <button onClick={this.newYork}>Find Restaurants at New York</button>
    <h3>City: {this.state.foods.city}</h3>
    </div>
    </div>
    <div className="card-container">
    {this.state.restaurant.map (food => {
      return(
        <div className="card">
            <img src={food.restaurant.featured_image} alt="food-pic"/>
            <div classNAme="food-info">
            <h3>Name: <a href={food.restaurant.url}>{food.restaurant.name}</a></h3>
            <h3>Cuisines: {food.restaurant.cuisines}</h3>
            <h3>location: {food.restaurant.location.address}</h3>
            <form onSubmit={this.createReview}>
              <label htmlFor="name">Name: </label>
              <input id='name' type='text' onChange={this.handleChange} />
              <br/>
              <label htmlFor="review">Review: </label>
              <input id='review' type='text' onChange={this.handleChange} />
              <br/>
              <label htmlFor="rating">Rating: </label>
              <input id='rating' type='number' min='0' max='5' onChange={this.handleChange} />
              <input type="submit" value="Add A Review" className="update-btn" />
            </form>
            </div>
            </div>

      )})}
      </div>
    </div>
  )
  }
}


ReactDOM.render(<App></App>, document.querySelector('main'))
