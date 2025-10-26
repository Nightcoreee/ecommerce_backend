'use strict';
const mongoose = require('mongoose');
const { errors } = require('web3');
const connectDB = `mongodb://localhost:27017/api_edu_dev`;
const { numConnection } = require('../helpers/check.connect');    


mongoose.connect(connectDB).then( _ => console.log('MongoDB connected successfully'))
.catch(err => console.log('Connection error: ', err));

//dev
if(1 === 0){
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true });
}

module.exports = mongoose;

