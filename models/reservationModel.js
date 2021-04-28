//adaoted from class videos

const mongoose = require("../db");

const resSchema = new mongoose.Schema(
    {
    name: String,
    date: String,
    time: String,
    activity: String
});

module.exports = mongoose.model("Reservation", resSchema);