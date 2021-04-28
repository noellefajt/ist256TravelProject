const Reservation = require("../models/reservationModel");
//const express = require("express");
exports.create = (req, res) => {
    console.log("create was called");

    //There is code copied and adapted from Ryan's class demos (April 20)

    //validation
    if(!req.body.fullName || !req.body.date || !req.body.time || !req.body.activity){
        console.log("hi");
        return res.status(400).send({
            message: "Required field must be filled out",
        });
    }
    
 
const reservation = new Reservation({
    name: req.body.fullName,
    date: req.body.date,
    time: req.body.time,
    activity: req.body.activity,
});
console.log(req.body.fullName);
console.log("new reservation" + reservation);

//add to data base
reservation.save()
.then(data => {
    res.send(data);
    console.log("response data: " + data);
    console.log("hi");

})
.catch((err) => {
    res.status(500).send({
        message: err.message || "some error occured while creating reservation"
    });
});
};


exports.getRes = (req,res) => {
    const id = req.params._id;
    console.log(req);
    Reservation.findById(id)
   
    .then((reservations) => {
        console.log("getRes called");
        res.status(200).send(reservations);
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || "error occured",
        });
    });
};


exports.update = (req,res) =>{
    var id = req.params._id;
    var fullNameU= req.body.name;
    var dateU = req.body.date;
    var timeU = req.body.time;
    var activityU = req.body.activity;
    console.log(id);
    console.log(fullNameU);
    console.log(dateU);
    console.log(timeU);
    console.log(activityU);
    Reservation.findById(id);
    console.log(Reservation);

   //https://www.codota.com/code/javascript/functions/mongoose/Model/findByIdAndUpdate
   //code adapted from here for finding and updating the customer information
    Reservation.findByIdAndUpdate(req.params._id, req.body)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `Cannot update Reservation with id=${id}. ID not found`
            });
        }else{
            res.send({
                message: "Reservation was updated!"
            });
            
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "could not update Reservation with id" + id
        });
    });
};
exports.delete = (req,res) => {
    //const id = req.body.id;
    console.log("hey");
    const id = req.params._id;
    console.log("Id to delete: " + id);
    Reservation.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `Cannot delete Reservation with id=${id}. ID not found`
            });
        }else{
            res.send({
                message: "Reservation was deleted successfully!"
            });
            
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "could not delete Reservation with id" + id
        });
    });
};