class App extends React.Component {
  // Updated state to contain a review object
  state = {
    foods: {},
    restaurant: [],
<<<<<<< HEAD
=======
    img: '',
    restaurantName: '',
    address: '',
    cuisines: '',
    ratings: null,
    favorite:[],
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235
    reviews:[],
    review: {
      name: '',
      review_content: '',
      rating: null,
      restaurant_id: ''
    },
<<<<<<< HEAD
    show: false,
    showReview: false

=======
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235
  }



  //DON'T LOAD UNTIL EVERYTHING IS MOUNTED ON THE DOM
  componentDidMount = () => {
    axios.get('/foods').then(response => {
      this.setState({
<<<<<<< HEAD
=======
        favorite: response.data,
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235
        reviews: response.data
      })
    })
  }
<<<<<<< HEAD
  //DON'T LOAD UNTIL EVERYTHING IS MOUNTED ON THE DOM
  componentDidMount = () => {
    axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id=282&entity_type=city').then(response => {
      this.setState({
        foods: response.data,
        restaurant: response.data.best_rated_restaurant,
        cityName: response.data.city
      })
=======

  // delete

deleteRestaurant = (event) => {
  axios.delete('/foods/' + event.target.value)
  .then(response => this.setState(
    {favorite: response.data})
  )
}

updateRestaurant = (event) => {
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
updateReview = (event) => {
  event.preventDefault()
  const id = event.target.id
  axios.put('/foods/'+id, this.state).then(response => {
    this.setState({
      reviews: response.data,
      name: '',
      review_content: '',
      rating: null,
      restaurant_id: ''
    })
    console.log(event.target.restaurant_id);
  })
}

  // To get restaurants using id //
  changeId = (event) => {
    this.setState({
      id: event.target.value
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235
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
<<<<<<< HEAD
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
=======
//HOW TO SET THE CHANGES
reviewChange = (event) => {
  const review = this.state.review;
  const restaurantInput = event.target.parentElement.querySelector('#restaurant_id') // Have to find specific restaurant input element
  review.restaurant_id = restaurantInput.value;
  review[event.target.id] = event.target.value
  this.setState({
    review: review
  })
}
  //LOADS ZOMATO API DIRECTLY ON PAGE
  findById = (event) => {
     event.preventDefault()
     axios.get('https://developers.zomato.com/api/v2.1/location_details?apikey=a5408e7fd89832c5bc693f21db7f0abf&entity_id='+ this.state.id +'&entity_type=city').then(
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235
         (response) => {
           this.setState({
             foods: response.data,
             restaurant: response.data.best_rated_restaurant,
<<<<<<< HEAD
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
=======
           })
           // console.log(this.state.id);
         }
     )}
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235

//EDIT REVIEW
updateReview = (event) => {
  event.preventDefault()
<<<<<<< HEAD
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
=======
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

  // LOADS CRUD (Favorite restaurant SCHEMA)
  createFav = (event) => {
    event.preventDefault()
    axios.post('/foods', this.state).then(response => {
      this.setState({
        favorite: response.data
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235
      })
  }
  //TOGGLE REVIEW
    toggleReview = (event) => {
        this.setState({
          showReview: !this.state.showReview
        })
    }
render = () => {
  return(
<<<<<<< HEAD
    <div>
    <div className="find-button">
    <input placeholder='City ID' className='form-rj' type='text' onKeyUp={this.handleCityChange}/>
    <button className='btn-sm btn-primary find-btn' onClick={this.findFood}>Find Restaurants</button>
    </div>
    <div><h6 className='city'>City: {this.state.cityName}</h6></div>
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




                        <summary>
                        {this.state.showReview ? <form onSubmit={this.updateReview} id={review._id}>
                          <input type='text' id='name' className='rating' onChange={this.handle} />
                          <br/>
                          <textarea className='review' id='review_content' onChange={this.handleChange} />
                          <br/>
                          <input type='number' className='rating' id='rating' min='0' max='5'onChange={this.handleChange} />
                          <input className="btn-sm btn-outline-success" type="submit" value="Update" />
                          </form> : null}
                          </summary>





=======
    <div className="container">
    <div className="favRestaurants">
    <h2>Favorite Restaurants</h2>
    <details>
    <summary>Add your favorite restaurant </summary>
   <div className="addForm">
   <form onSubmit={this.createFav}>
        <label htmlFor="img">Image: </label><br/>
        <input onChange={this.handleChange} type="text" id="img" />
        <br />
        <label htmlFor="restaurantName">Restaurant name: </label><br/>
        <input onChange={this.handleChange} type="text" id="restaurantName" />
        <br />
        <label htmlFor="address">Address: </label><br/>
        <input onChange={this.handleChange} type="text" id="address" />
        <br />
        <label htmlFor="cuisines">Cuisines: </label><br/>
        <input onChange={this.handleChange} type="text" id="cuisines" />
        <br />
        <label htmlFor="ratings">Ratings</label><br/>
        <input onChange={this.handleChange} type="number" min="0" max="5"step="0.1"id="ratings" />
        <br />

        <input type="submit" value="Add Favorite Restaurant" />
      </form>
      </div>
   </details>
    <ul>
     {this.state.favorite.map((fav) => {
       return(
         <div className="favRest">
         <img className="favImg"src={fav.img}/>
         <h4>Name: {fav.restaurantName}</h4>
         <h4>Cuisines: {fav.cuisines}</h4>
         <h4>Address: {fav.address}</h4>
         <h4>Ratings: {fav.ratings}</h4>
         <div className="edit">
         <details>
          <summary> Edit Restaurant</summary>
          <form id={fav._id} onSubmit={this.updateRestaurant} >
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
          <input onChange={this.handleChange} type="number" min="0" max="5" step="0.1" id="ratings" />
          <br />

          <input type="submit" value="Edit Your Restaurant" />
          </form>
          <button value ={fav._id}
          onClick={this.deleteRestaurant}
          >DELETE
          </button>
          </details>
          </div>
         </div>
       )
     })}
     </ul>
</div>
      <div className="findRestaurant">
     <form className="idForm"onSubmit={this.findById}>
     <input type="text" onKeyUp={this.changeId} placeholder="use city id"/>
     <input type="submit" value="Find restaurant"/>

      </form>
        <div className="find-button">
        <button onClick={this.newYork}>Find Restaurants at New York</button>
        <button onClick={this.lasVegas}>Find Restaurants at Las Vegas</button>
        <button onClick={this.washingtonDc}>Find Restaurants at Washington DC</button>
        <button onClick={this.findAustin}>Find Restaurants at Austin</button>
        <button onClick={this.findChicago}>Find Restaurants at Chicago</button>
        <button onClick={this.findAtlanta}>Find Restaurants at Atlanta</button>
        </div>

        <div>
        <h3 className="city">City: {this.state.foods.city}</h3>
        </div>
        <div className="card-container">
        {this.state.restaurant.map (food => {
          return(
        <div className="food-card">
            <img className="apiImg"src={food.restaurant.thumb} alt="food-pic"/>
            <div className="food-info">
            <h3>Name: <a href={food.restaurant.url}>{food.restaurant.name}</a></h3>
            <h3>Cuisines: {food.restaurant.cuisines}</h3>
            <h3>location: {food.restaurant.location.address}</h3>
            <h3>Ratings: {food.restaurant.user_rating.aggregate_rating}</h3>
            <h3>Reviews: </h3>
              {
                this.state.reviews.filter(review => {
                  return food.restaurant.id == review.restaurant_id
                })
                .map((review, i) => {
                  return(
                    <div key={i}>
                      <p>Name:{review.name}</p>
                      <p>Rating:{review.rating}</p>
                      <p>{review.review_content}</p>
                      <button onClick={this.deleteReview} id={review._id}>delete</button>
                      <details>
                      <summary>Edit review</summary>
                      <form id={review._id} onSubmit={this.updateReview}>
                      <label htmlFor="name">Name</label>
                      <br />
                      <input
                        type="text"
                        id="name"
                        onChange={this.handleChange}
                        placeholder={review.name}
                      />
                      <br />
                      <label htmlFor="review_content">Review</label>
                      <br />
                      <input
                        type="text"
                        id="review_content"
                        onChange={this.handleChange}
                        placeholder={review.review_content}
                      />
                      <br />
                      <label htmlFor="rating">rating</label>
                      <br />
                      <input
                        type="number"
                        id="rating"
                        min="0" max="5" step="0.1"
                        onChange={this.handleChange}
                        placeholder={review.rating}
                      />
                      <br />
                      <input type="submit" value="Edit Review" />
                    </form>
                      </details>
                    </div>
                  )
                })
              }
              <details>
              <summary>Add Review</summary>
              <form onSubmit={this.createReview}>
                <input id='restaurant_id' type='hidden' value={food.restaurant.id} />
                <label htmlFor="name">Name: </label>
                <input id='name' type='text' onChange={this.reviewChange} />
                <br/>
                <label htmlFor="review">Review: </label>
                <input id='review_content' type='text' onChange={this.reviewChange} />
                <br/>
                <label htmlFor="rating">Rating: </label>
                <input id='rating' type='number' min='0' max='5' step="0.1" onChange={this.reviewChange} />
                <input type="submit" value="Add A Review" className="update-btn" />
              </form>
              </details>
            </div>
            </div>
)})}
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235

                     </div>
                  )
                })
              }
          </div>
          </div>
      )})}
      </div>
<<<<<<< HEAD
      <div className='footer-bottom'><footer className='footer'><h6 className='created'>Created by RJ, Sammy, Brandon, Ricky</h6></footer></div>
=======
</div>
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235
    </div>
  )
  }
}


ReactDOM.render(<App></App>, document.querySelector('main'))
