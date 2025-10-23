const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();

//init db

//init handle error

//init middleware
// 'dev' dùng để log chi tiết các request trong quá trình phát triển
app.use(morgan('dev'));
// Tăng cường bảo mật ứng dụng bằng cách thiết lập các header HTTP
app.use(helmet());
app.use(compression());

//init routes
app.get('/', (req, res, next) => {
    res.status(200).json({ 
        message: 'Hello World' 
    });
})


module.exports = app;