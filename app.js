
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config({ path: '.env' });
const mysql = require('mysql2'); // add library mysql
const db = require('./utils/dal'); // database
const passport = require('./utils/passport');


db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const apiRouter = require('./routes/api')



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);



module.exports = app;


