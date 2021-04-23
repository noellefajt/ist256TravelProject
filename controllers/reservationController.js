const Reservation = require("../models/reservationModel");
//const express = require("express");
exports.create = (req, res) => {
    console.log("create was called");

    //copied from class

    //validation
    //if(!req.body.fname)

//     var fname = $("#fname").val();
//    var lname = $("#lname").val();
//    var date = $("#date").val();
//    var time = $("#time").val();
//    var activity = $("#activityType").val();
    //make a reservation
const reservation = new Reservation({
    fname: req.body.fname,
    lname: req.body.lname,
    date: req.body.date,
    time: req.body.time,
    activity: req.body.activity,
    // fname: fname,
    // lname: lname,
    // date: date,
    // time: time,
    // activity: activity
});
console.log(req.body.fname);
console.log("new reservation" + reservation);

//add to data base
reservation.save()
.then(data => {
    res.send(data);
    console.log("response data: " + data);
    console.log("hi");
    //res.status(200).redirect('/reservation.html');

})
.catch((err) => {
    res.status(500).send({
        message: err.message || "some error occured while creating reservation"
    });
});
};