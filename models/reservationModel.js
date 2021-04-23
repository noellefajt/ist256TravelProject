//copied from class video
const { model } = require("mongoose");
//const mongoose = require("../db");

// const ResSchema = new mongoose.Schema(
//     {
//         fname: {
//             desc: "first name",
//             type: String,
//             required: true,
//         },
//         lname: {
//             desc: "last name",
//             type: String,
//             required: true,
//         },
//     }
// )


//copied from zybooks table 11.8.7
// models/student.js
const db = require("../db");

const Reservation = db.model("Reservation", {
    fname:      String,
    lname:      String,
    date:       { type: Date, default: Date.now },
    time: String,
    activity: String
});

module.exports = Reservation;
//model.exports = mongoose.model('Res', ResSchema);