

class App extends React.Component {
  state = {
    foods: {}
  }
  componentDidMount = () => {
    axios.get('/foods').then(response => {
      this.setState({
        foods: response.data
      })
    })
  }
  findFood = (event) => {
     event.preventDefault()

     axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id=280&entity_type=city').then(
         (response) => {

           this.setState({
             foods: response.data,
             best: response.data.best_rated_restaurant
           })
           console.log(this.state.best);
         }
     )
 }
render = () => {
  return(
    <div className="container">
    <h1 onClick={this.findFood}>Hello guys</h1>
    <h3>Name: {this.state.foods.city}</h3>
    <h2>Cuisines</h2>

    </div>

  )
}
}
ReactDOM.render(<App></App>, document.querySelector('main'))
