const express = require('express');
const morgan = require('morgan');
const app = express();

//init db

//init handle error

//init middleware
app.use(morgan('dev'));
// app.use(morgan('compile'));
// app.use(morgan('common'));
// app.use(morgan('short'));
// app.use(morgan('tiny'));

//init routes
app.get('/', (req, res, next) => {
    res.status(200).json({ 
        message: 'Hello World' 
    });
})


module.exports = app;