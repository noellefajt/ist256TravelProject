var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var reservationsRouter = require('.routes/reservations');

var weatherRouter = require('./routes/weather');

var activityRouter = require('./routes/activity');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public'),{extensions:['html']}));


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/reservations', reservationsRouter);

app.use('/weather', weatherRouter);

app.use('/activity', activityRouter);

module.exports = app;
