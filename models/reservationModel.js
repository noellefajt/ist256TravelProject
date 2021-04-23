//copied from class video
const { model } = require("mongoose");
// const mongoose = require("../db");

//all the commented out stuff is how he had in his video put gives me a 500 error
// const ResSchema = new mongoose.Schema(
//     {
//         fname: {
//             desc: "first name",
//             trim: true,
//             type: String,
//             index: true,
//             unique: false,
//             required: true,
//         },
//         lname: {
//             desc: "last name",
//             trim: true,
//             type: String,
//             index: true,
//             unique: false,
//             required: true,
//         },
//         date: {
//             desc: "date",
//             trim: true,
//             type: Date,
//             index: true,
//             unique: false,
//             required: true,
//         },
//         time: {
//             desc: "time",
//             trim: true,
//             type: String,
//             index: true,
//             unique: false,
//             required: true,
//         },
//         activity: {
//             desc: "activity",
//             trim: true,
//             type: String,
//             index: true,
//             unique: false,
//             required: true,
//         }
//     }
// );


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
//module.exports = mongoose.model("Res", ResSchema);

// const mongoose = require('mongoose');

// const resSchema = mongoose.Schema({
//     fname: String,
//     lname: String,
//     date: { type: Date, default: Date.now },
//     time: String,
//     activity: String


// });

// module.exports = mongoose.model('res', resSchema);