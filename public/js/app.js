class App extends React.Component {
  state = {
    foods: {},
    restaurant: []
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
  findFood = (event) => {
     event.preventDefault()
     axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id=280&entity_type=city').then(
         (response) => {
           this.setState({
             foods: response.data,
             restaurant: response.data.best_rated_restaurant
           })

         }
     )}
render = () => {


  return(
<<<<<<< HEAD
    <div className="container">
=======
    <div>
>>>>>>> 5f1ddb991e773d070638b69446410aacf9a0d88c

    <div className="city">
    <div className="find-button">
    <button onClick={this.findFood}>Find Restaurants</button>
    <h3>City: {this.state.foods.city}</h3>
    </div>
    </div>
    {this.state.restaurant.map (food => {
      return(
<<<<<<< HEAD
        <div >

        <div className="card">
            <h2>Name: <a href={food.restaurant.url}>{food.restaurant.name}</a></h2>
          <h2>Cuisines: {food.restaurant.cuisines}</h2>
          <h2>location: {food.restaurant.location.address}</h2>
        <img src={food.restaurant.featured_image} width="680" height="420"/>
        </div>

=======
        <div className="card-container">
          <div className="food-card">
            <img src={food.restaurant.featured_image} alt="food-pic"/>
          <div className="food-info">
            <h3>Name: <a href={food.restaurant.url}>{food.restaurant.name}</a></h3>
            <h3>Cuisines: {food.restaurant.cuisines}</h3>
            <h3>location: {food.restaurant.location.address}</h3>
          </div>
          </div>
>>>>>>> 5f1ddb991e773d070638b69446410aacf9a0d88c
        </div>
      )})}
    </div>
  )
  }
}
ReactDOM.render(<App></App>, document.querySelector('main'))


//
//
// // we should give app a name, make look like a real website or app.-rj i fucked with the button to and some animation, def need to work on it some more ill see yall in da morning!
// -RJ
