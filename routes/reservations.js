var axios = require('axios').default;
var express = require('express');
var router = express.Router();
const resCntl = require("../controllers/reservationController.js");
const reservation = require("../models/reservationModel.js");

//get/retrieve the reservation information based on the reservation name the user searches
router.get('/:_id', resCntl.getRes);        
   
//creates a new reservation
router.post('/createRes', resCntl.create);

//update any criteria of an already existing reservation in the database
router.put('/:_id', resCntl.update);

//deletes any reservation that is in the database using the reservation name
router.delete('/:_id', resCntl.delete);     //adapted from in class (April 20)
    
module.exports = router;