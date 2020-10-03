class App extends React.Component {
  state = {
    foods: {},
    restaurant: [],
    img: '',
    restaurantName: '',
    address: '',
    cuisines: '',
    ratings: null,
    favorite:[],
    show: false
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

  // delete

deleteReview = (event) => {
  axios.delete('/foods/' + event.target.value)
  .then(response => this.setState(
    {favorite: response.data})
  )
}



updateReview = (event) => {
      event.preventDefault()
      const id = event.target.id
      axios
      .put('/foods/' + id, this.state)
      .then(response => {
        this.setState({
          favorite: response.data,
          img: '',
          restaurantName: '',
          address: '',
          cuisines: '',
          ratings: null,
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
  findById = (event) => {
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
  washingtonDc= (event) => {
    event.preventDefault()
        axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id=283&entity_type=city').then(
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
        restaurantName: '',
        address: '',
        cuisines: '',
        ratings: null,
      })
    })
  }
render = () => {
  return(
    <div className="container">
    <h2>Favorite Restaurants</h2>
    <ul>
     {this.state.favorite.map((fav) => {
       return(
         <div>
         <img src={fav.img}/>
         <h4>Name: {fav.restaurantName}</h4>
         <h4>Address: {fav.address}</h4>
         <h4>Cuisines: {fav.cuisines}</h4>
         <h4>Ratings: {fav.ratings}</h4>
         <div className="edit">
         <details>
          <summary> Edit Restaurant</summary>
          <form id={fav._id} onSubmit={this.updateReview} >
          <label htmlFor="img">Image: </label>
          <input onChange={this.handleChange} type="text" id="img" />
          <br />
          <label htmlFor="restaurantName">Restaurant name: </label>
          <input onChange={this.handleChange} type="text" id="restaurantName" />
          <br />
          <label htmlFor="address">Address: </label>
          <input onChange={this.handleChange} type="text" id="address" />
          <br />
          <label htmlFor="cuisines">Cuisines: </label>
          <input onChange={this.handleChange} type="text" id="cuisines" />
          <br />
          <label htmlFor="ratings">Ratings: </label>
          <input onChange={this.handleChange} type="number" min="0" max="5" id="ratings" />
          <br />

          <input type="submit" value="Edit Your Restaurant" />
          </form>
          <button value ={fav._id}
          onClick={this.deleteReview}
          >DELETE
          </button>
          </details>
          </div>
         </div>
       )
     })}
     </ul>
      <details>
      <summary>Add your favorite restaurant </summary>
     <div className="addForm">
     <form onSubmit={this.createFav}>
          <label htmlFor="img">Image</label>
          <input onChange={this.handleChange} type="text" id="img" />
          <br />
          <label htmlFor="restaurantName">Restaurant name</label>
          <input onChange={this.handleChange} type="text" id="restaurantName" />
          <br />
          <label htmlFor="address">Address</label>
          <input onChange={this.handleChange} type="text" id="address" />
          <br />
          <label htmlFor="cuisines">Cuisines</label>
          <input onChange={this.handleChange} type="text" id="cuisines" />
          <br />
          <label htmlFor="ratings"></label>
          <input onChange={this.handleChange} type="number" min="0" max="5" id="ratings" />
          <br />

          <input type="submit" value="Add Favorite Restaurant" />
        </form>
     </div>
     </details>
     <div className="city">
        <div className="find-button">
        <button onClick={this.newYork}>Find Restaurants at New York</button>
        <button onClick={this.lasVegas}>Find Restaurants at Las Vegas</button>
        <button onClick={this.washingtonDc}>Find Restaurants at Washington DC</button>
        </div>
        </div>
        <div>
        <form onSubmit={this.findById}>
        <input type="text" onKeyUp={this.changeId}/>
        <input type="submit" value="Find restaurant"/>
        <h3>City: {this.state.foods.city}</h3>
      </form>
        </div>
        <div className="card-container">

        {this.state.restaurant.map (food => {
          return(
        <div className="card">

            <img className="apiImg"src={food.restaurant.thumb} alt="food-pic"/>
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
