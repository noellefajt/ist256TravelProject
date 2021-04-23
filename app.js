var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//copied from zybooks table 11.8.7
const reservation = require("./models/reservationModel");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var reservationsRouter = require('./routes/reservations');
var activityRouter = require('./routes/activity');




var locationRouter = require('./routes/location');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'),{extensions: 'html'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/activity', activityRouter)
app.use('/location', locationRouter);
app.use('/reservations',reservationsRouter);

app.post("/create", function(req, res) {

    //copied from zybooks table 11.8.7
    // Create a reservation from the submitted form data
    const reserv = new Reservation({
       fname: req.body.fname,
       lname: req.body.lname,
       date: new Date(req.body.date),
       time: new Time(req.body.time),
       activity: req.body.activity
    });
 
    reserv.save(function(err, reserv) {
       if (err) {
          res.status(400).send(err);
       } 
       else {
          res.send("reservation was saved.");
       }
    });
 });


module.exports = app;

