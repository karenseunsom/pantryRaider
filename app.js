var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login')
const apiIngredientsRouter = require('./routes/api/ingredient')

var app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter)
// app.use('/api/v1/ingredients', apiIngredientsRouter)

module.exports = app;
