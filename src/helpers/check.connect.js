const mongoose = require('mongoose');
const _SECOND = 5000;
const os = require('os');
const process = require('process'); 

// Count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of mongoose connections: ${numConnection}`);    
}

//check over load
const check_overload = () => {
    setInterval( () => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss; //rss (Resident Set Size) là bộ nhớ vật lý đang được sử dụng bởi tiến trình
        const maxConnetion = numCores * 5;

        console.log(`Active connections: ${numConnection}`);
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

        if( numConnection > maxConnetion ){
            console.log(`Overload detected!`);
        }
    }, _SECOND);
}
module.exports = { 
    countConnect,
};  