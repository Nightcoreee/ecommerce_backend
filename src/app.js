require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();

// console.log(`Process::`, process.env);



//init db
require('./dbs/init.mongodb');
const { check_overload } = require('./helpers/check.connect');
// check_overload();




//init handle error

//INIT MIDDLEWARES
// 'dev' dùng để log chi tiết các request trong quá trình phát triển
app.use(morgan('dev'));
// Tăng cường bảo mật ứng dụng bằng cách thiết lập các header HTTP
app.use(helmet());
// compression middleware để nén các phản hồi HTTP, giúp giảm kích thước dữ liệu truyền tải và cải thiện hiệu suất
app.use(compression());

//init routes
app.use('/', require('./routes/index'));


module.exports = app;