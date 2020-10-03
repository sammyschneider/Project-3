class App extends React.Component {
  state = {
    foods: {},
    restaurant: [],
    img: '',
    name: '',
    address: '',
    cuisines: '',
    rating: null,
    favorite:{},
    show: false,
  }
  //DON'T LOAD UNTIL EVERYTHING IS MOUNTED ON THE DOM
  componentDidMount = () => {
    axios.get('/foods').then(response => {
      this.setState({
        // foods: response.data,
        // food: response.data.best_rated_restaurant
        favorite: response.data
      })
    })
  }
  changeId = (event) => {
    this.setState({
      id: event.target.value
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
     axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id='+ this.state.id +'&entity_type=city').then(
         (response) => {
           this.setState({
             foods: response.data,
             restaurant: response.data.best_rated_restaurant,
           })
           // console.log(this.state.id);
         }
     )}

     newYork= (event) => {
        event.preventDefault()
        axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id=280&entity_type=city').then(
            (response) => {
              this.setState({
                foods: response.data,
                restaurant: response.data.best_rated_restaurant,
              })
              // console.log(this.state.id);
            }
        )}

  lasVegas= (event) => {
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
  createFav = (event) => {
    event.preventDefault()
    axios.post('/foods', this.state).then(response => {
      this.setState({
        favorite: response.data,
        img: '',
        name: '',
        address: '',
        cuisines: '',
        rating: null,
      })
    })
  }
render = () => {
  return(
    <div className="container">
    <h2>Favorite Restaurants</h2>
    <div className="city">
    <h3>City: {this.state.foods.city}</h3>
    <div className="find-button">
    <button onClick={this.newYork}>Find Restaurants at New York</button>
    <button onClick={this.lasVegas}>Find Restaurants at Los Angeles</button>
    </div>
    </div>
    <div>
    <form onSubmit={this.newYork}>
    <input type="text" onKeyUp={this.changeId}/>
    <input type="submit" value="Find restaurant"/>
  </form>
    </div>
    <div className="card-container">

    {this.state.restaurant.map (food => {
      return(
        <div className="card">

            <img src={food.restaurant.thumb} alt="food-pic"/>
            <div className="food-info">
            <h3>Name: <a href={food.restaurant.url}>{food.restaurant.name}</a></h3>
            <h3>Cuisines: {food.restaurant.cuisines}</h3>
            <h3>location: {food.restaurant.location.address}</h3>
            <h3>Ratings: {food.restaurant.user_rating.aggregate_rating}</h3>
            </div>
            </div>
)})}
      </div>
    </div>
  )
  }
}


ReactDOM.render(<App></App>, document.querySelector('main'))
