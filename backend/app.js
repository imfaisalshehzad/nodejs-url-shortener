var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
require('dotenv').config();

/* app routes */
var indexRouter = require('./routes/index');
var port = process.env.PORT || 3000;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));

// Database config
const connection = require('./config/db')
connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error to Connect with DB'))

app.use(express.json({
    extended: false
}))

// app routes
app.use('/', indexRouter);
require('./loaders/routes')(app);

console.log('Backend running on port : '+ port)
module.exports = app;
