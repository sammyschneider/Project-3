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
    showReview: false

  }
  //DON'T LOAD UNTIL EVERYTHING IS MOUNTED ON THE DOM
  componentDidMount = () => {
    axios.get('/foods').then(response => {
      this.setState({
        reviews: response.data
      })
    })
  }
  //DON'T LOAD UNTIL EVERYTHING IS MOUNTED ON THE DOM
  componentDidMount = () => {
    axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id=282&entity_type=city').then(response => {
      this.setState({
        foods: response.data,
        restaurant: response.data.best_rated_restaurant,
        cityName: response.data.city
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
//HOW TO SET THE CITY
handleCityChange = (event) => {
  this.setState({
    city: event.target.value
  })
}


  //LOADS ZOMATO API DIRECTLY ON PAGE
  findFood = (event) => {
     event.preventDefault()
     axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id='+ this.state.city + '&entity_type=city').then(
         (response) => {
           this.setState({
             foods: response.data,
             restaurant: response.data.best_rated_restaurant,
             cityName: response.data.city
           })
         }
     )}
  // LOADS CRUD (REVIEW SCHEMA)
  createReview = (event) => {
    event.preventDefault()
    event.target.reset()
    axios.post('/foods', this.state.review).then(response => {
      this.setState({
        reviews: response.data
      })
    })
  }
// DELETE REVIEW
deleteReview = (event) => {
  axios.delete('/foods/' + event.target.id).then(response => {
    this.setState({
      reviews: response.data
    })
  })
}

//EDIT REVIEW
updateReview = (event) => {
  event.preventDefault()
  event.target.reset()
  axios.put('/foods/'+ event.target.id, this.state.review).then(response => {
    this.setState({
      reviews: response.data
    }), console.log(response.data)
  })
}
//TOGGLE FORM
  toggleForm = (event) => {
      this.setState({
        show: !this.state.show
      })
  }
  //TOGGLE REVIEW
    toggleReview = (event) => {
        this.setState({
          showReview: !this.state.showReview
        })
    }




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

  findAustin= (event) => {
    event.preventDefault()
      axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id=278&entity_type=city').then(
          (response) => {
          this.setState({
          foods: response.data,
          restaurant: response.data.best_rated_restaurant
              })
            }
          )}
findChicago= (event) => {
  event.preventDefault()
    axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id=292&entity_type=city').then(
        (response) => {
        this.setState({
        foods: response.data,
        restaurant: response.data.best_rated_restaurant
            })
          }
        )}
findAtlanta= (event) => {
  event.preventDefault()
    axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id=288&entity_type=city').then(
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
    <div className="find-button">
    <input placeholder='City ID' className='form-rj' type='text' onKeyUp={this.handleCityChange}/>
    <button className='btn-sm btn-primary find-btn' onClick={this.findFood}>Find Restaurants</button>
    </div>
    <div className="find-button">
        <button onClick={this.newYork}>Find New York Restaurants</button>
        <button onClick={this.lasVegas}>Find Las Vegas Restaurants</button>
        <button onClick={this.washingtonDc}>Find Washington DC Restaurants</button>
        <button onClick={this.findAustin}>Find Austin Restaurants</button>
        <button onClick={this.findChicago}>Find Chicago Restaurants</button>
        <button onClick={this.findAtlanta}>Find Atlanta Restaurants</button>
        </div>

    <div><h6 className='city'>City: {this.state.foods.city}</h6></div>
    <div className="card-container">
    {this.state.restaurant.map (food => {
      return(
          <div className="food-card">
            <img className='card-image' src={food.restaurant.featured_image} alt="food-pic"/>
          <div className="food-info">
            <h3><a className='anchors' href={food.restaurant.url}>{food.restaurant.name}</a></h3>
            <h5 className="weight">{food.restaurant.cuisines}</h5>
            <h6 className="weight">{food.restaurant.location.address}</h6>
            <hr className="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s"/>
            <button onClick={this.toggleForm} className="btn btn-light add-review"><i className="fas fa-plus"></i></button>
            <h6 className="weight review-padding">Reviews: </h6>
            {this.state.show ? <form onSubmit={this.createReview}>
              <input id='restaurant_id' type='hidden' value={food.restaurant.id} />
              <input className='rating' id='name' type='text' placeholder="Name" onChange={this.handleChange} />
              <br/>
              <textarea className='rating' id='review_content' placeholder="Review" onChange={this.handleChange} />
              <br/>
              <input className='rating' id='rating' type='number' min='0' max='5' placeholder="Rating" onChange={this.handleChange} />
              <br/>
              <input type="submit" value="Add Review" className="btn-sm btn-secondary" />
            </form> : null}
              {
                this.state.reviews.filter((review) => {
                  return food.restaurant.id == review.restaurant_id
                })
                .map((review, i) => {
                  return(
                    <div key={i} className='review-box'>
                      <p>Name: {review.name}</p>
                      <p>Rating: {review.rating}</p>
                      <p>{review.review_content}</p>
                      <button className='btn-sm btn-outline-danger' onClick={this.deleteReview} id={review._id}>Remove</button>
                        <summary>
                          <i onClick={this.toggleReview} className="fas fa-pencil-alt"></i>
                        </summary>
                        {this.state.showReview ? <form onSubmit={this.updateReview} id={review._id}>
                          <input type='text' id='name' className='rating' onChange={this.handleChange}/>
                          <br/>
                          <textarea className='rating' id='review_content' onChange={this.hangleChange}/>
                          <br/>
                          <input type='number' className='rating' id='rating' min='0' max='5'onChange={this.handleChange}/>
                          <input className="btn-sm btn-outline-success" type="submit" value="Update" />
                          </form> : null}
                     </div>
                  )
                })
              }
          </div>
          </div>
      )})}
      </div>
      <div className='footer-bottom'><footer className='footer'><h6 className='created'>Created by RJ, Sammy, Brandon, Ricky</h6></footer></div>
    </div>
  )
  }
}


ReactDOM.render(<App></App>, document.querySelector('main'))
