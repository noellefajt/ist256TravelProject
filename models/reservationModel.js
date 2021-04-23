// const mongoose = require("../db");

// const schema = new mongoose.Schema(
//     {
        
//     }
// )
//copied from zybooks table 11.8.7
// models/student.js
const db = require("../db");

const Reservation = db.model("Reservation", {
    fname:      String,
    lname:      String,
    date:       { type: Date, default: Date.now },
    time: { type: time },
    activity: String
});

module.exports = Reservation;