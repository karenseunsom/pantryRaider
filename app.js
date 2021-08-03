var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const flash = require('connect-flash');
const session = require('express-session')
const checkAuth = require('./checkAuth');
const db = require('./models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const favoritesRouter = require('./routes/favorites')
const dishesRouter = require('./routes/dishes')


var app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const SequelizeStore =
    require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({ db: db.sequelize })

app.use(
    session({
        secret: 'secret', // used to sign the cookie
        resave: false, // update session even w/ no changes
        saveUninitialized: true, // always create a session
        cookie: {
            secure: false, // true: only accept https req's
            maxAge: 2592000, // time in seconds
        },
        store: store,
    })
);

store.sync();

app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/favorites', favoritesRouter)
app.use('/dishes', dishesRouter)


module.exports = app;
