const Reservation = require("../models/reservationModel");

exports.create = (req, res) => {
    console.log("create was called");

    //copied from class
    //make a reservation
const reserv = new Reservation({
    fname: req.body.fname,
    lname: req.body.lname,
    date: req.body.date,
    time: req.body.time,
    activity: req.body.activity,
});

console.log("new reservation" + reserv);

//add to data base
reserv
.save()
.then((data) => {
    console.log("response data: " + data);
    res.status(200).redirect('/reservation');

})
.catch((err) => {
    res.status(500).send({
        message: err.message || "some error occured while creating reservation"
    });
});
}