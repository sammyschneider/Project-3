const express = require('express')
const foods = express.Router()
const Food = require('../models/food.js')
<<<<<<< HEAD

=======
const foodSeed = require('../models/seed.js')
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235
// =======================================
//              ROUTES
// =======================================
/* ===========
GET ROUTE
============= */
//INDEX
foods.get('/', (req,res) => {
  Food.find({}, (err, foundFood) => {
    res.json(foundFood)
  })
})
/* ===========
POST ROUTE
============= */
//CREATE
foods.post('/', (req,res) => {
  Food.create(req.body, (err, createdFood) => {
    Food.find({}, (err, foundFood) => {
      res.json(foundFood)
    })
  })
})
/* ===========
PUT ROUTE
============= */
//EDIT
foods.put('/:id', (req,res) => {
  Food.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedNode) => {
    Food.find({}, (err,foundFood) => {
      res.json(foundFood)
    })
  })
})
/* ===========
DELETE ROUTE
============= */
//DELETE
foods.delete('/:id', (req, res) => {
  Food.findByIdAndRemove(req.params.id, (err, deletedFood) => {
    Food.find({}, (err, foundFood) => {
      res.json(foundFood)
    })
  })
})
<<<<<<< HEAD

=======
//Seed
foods.get('/seed', (req, res) => {
  Food.insertMany(foodSeed, (err, manyFood) => {
    res.redirect('/')
  })
})
>>>>>>> 0ba33e0c6d81aedec77a27af0e10e5ce33b09235
//DROP COLLECTION

module.exports = foods;
