

class App extends React.Component {
  state = {
   name:'',
    reviews: '',
    foods: {},
    restaurant: []
  }
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
    <div>

    <div className="city">
    <div className="find-button">
    <button onClick={this.findFood}>Find Restaurants</button>
    </div>

    <h3>City: {this.state.foods.city}</h3>
    </div>
    <ul>
    {this.state.restaurant.map (food => {
      return(
<<<<<<< HEAD
        <div className="card-container">
          <div className="food-card">
            <img src={food.restaurant.featured_image} alt="food-pic"/>
          <div className="food-info">
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
=======

        <div >
        <li>
            <h2>Name: <a href={food.restaurant.url}>{food.restaurant.name}</a></h2>
          <h2>Cuisines: {food.restaurant.cuisines}</h2>
          <h2>location: {food.restaurant.location.address}</h2>
        <img src={food.restaurant.featured_image} width="680" height="420"alt="food"/>
        </li>
>>>>>>> fcd9600389b6ad86bcfeec3326c214a1bed5480f
        </div>


      )})}
</ul>

    </div>
  )}
}
ReactDOM.render(<App></App>, document.querySelector('main'))
