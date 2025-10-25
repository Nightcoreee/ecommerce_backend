const mongoose = require('mongoose');
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of mongoose connections: ${numConnection}`);    
}

