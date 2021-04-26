var axios = require('axios').default;
var express = require('express');
var router = express.Router();
const resCntl = require("../controllers/reservationController.js");
const reservation = require("../models/reservationModel.js");

//get/retrieve the reservation information based on the reservation name the user searches
// router.get('/', function (req, res, next) {
//     let query = req.query;
// });
router.get('/findRes', resCntl.getRes);
   

//creates the reservation and will add to the database
// router.post('/createRes', function (req, res, next) {
//     let data = req.body;
//      console.log(data);
//      res.redirect('/reservation.html');
// });

router.post('/createRes', resCntl.create);
//update any criteria of an already existing reservation in the database
router.put('/', function (req, res, next) {
    
});

//deletes any reservation that is in the database using the reservation name
router.delete('/deleteRes/:fullName', resCntl.delete);
    


module.exports = router;