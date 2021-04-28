//Adapted from inclass demos (April 20 and April 15)

const mongoose = require("../db");

const resSchema = new mongoose.Schema(
    {
    name: String,
    date: String,
    time: String,
    activity: String
});

module.exports = mongoose.model("Reservation", resSchema);