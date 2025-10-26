'use strict';
const mongoose = require('mongoose');
const connectDB = `mongodb://localhost:27017/api_edu_dev`;
const { countConnect } = require('../helpers/check.connect');   
class Database {
    constructor() {
        this.connect();
    }

    connect(type = 'mongodb') {
        if(1 === 1){
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        mongoose.connect(connectDB, {
            maxPoolSize: 50
        }).then( _ => {
            console.log('MongoDB connected successfully hihi', countConnect());
        })
        .catch(err => console.log('Connection error: ', err));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;