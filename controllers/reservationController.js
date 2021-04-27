const Reservation = require("../models/reservationModel");
//const express = require("express");
exports.create = (req, res) => {
    console.log("create was called");

    //copied from class

    //validation
    // if(!req.body.fullName || !req.body.date || !req.body.time || !req.body.activity){
    //     console.log("hi");
    //     return res.status(400).send({
    //         message: "Required field must be filled out",
    //     });
    

    // if(!req.body.fname || !req.body.lname || !req.body.date || !req.body.time || !req.body.activity){
    //     return res.status(400).send({
    //         message: "Required field must be filled out",
    //     });
    // }

//     var fname = $("#fname").val();
//    var lname = $("#lname").val();
//    var date = $("#date").val();
//    var time = $("#time").val();
//    var activity = $("#activityType").val();
    //make a reservation
const reservation = new Reservation({
    // fname: req.body.fname,
    // lname: req.body.lname,
    name: req.body.fullName,
    date: req.body.date,
    time: req.body.time,
    activity: req.body.activity,
    // fname: fname,
    // lname: lname,
    // date: date,
    // time: time,
    // activity: activity
});
console.log(req.body.fullName);
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
//read, get all reservations

exports.getRes = (req,res) => {
    //mydb.Reservation.find({"_id":id})
    Reservation.find()
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

// exports.update = (req,res) =>{

//     var fullName= req.body.fullName;
//     var date = req.body.date;
//     var time = req.body.time;
//     var activity = req.body.activity;
//     Reservation.findByIdAndUpdate({_id: req.params.id}, { $set: { "fullName": fullName, "date": date,  "time": time,"activity": activity}}, function (err, result) {
//         if (err) {
//             res.send("Error" + err);
//         } else {
//             // res.redirect("/profile/" + req.params.id);
//             res.send("From router Put: Worked!");
//         }
// });
// }
// exports.delete = (req,res) => {
//     const fullName = req.params.fullName;
   
//     console.log("Name to delete: " + fullName);

//     Reservation.findByIDAndRemove(fullName)
//     .then(data => {
//         if(!data){
//             res.status(404).send({
//                 message: `Cannot delete Reservation with name=${fullName}. Name not found`
//             });
//         }else{
//             res.send({
//                 message: "program was deleted successfully!"
//             });
//         }
//     })
//     .catch(err => {
//         res.status(500).send({
//             message: "could not delete Reservation with name" + lname
//         });
//     });
// };