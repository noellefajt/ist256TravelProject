var axios = require('axios'.default);
var express = require('express');
var router = express.Router();

//get/retrieve the reservation information based on the reservation name the user searches
router.get('/', function (req, res, next) {
    let query = req.query;
});

//creates the reservation and will add to the database
router.post('/', function (req, res, next) {
    
});
//update any criteria of an already existing reservation in the database
router.put('/', function (req, res, next) {
    
});

//deletes any reservation that is in the database using the reservation name
router.delete('/', function (req, res, next) {
    
});


module.exports = router;