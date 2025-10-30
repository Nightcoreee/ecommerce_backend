const app = require('./src/app.js');
// truy cập port bên file .env nếu không có thì lấy 3000
const port = process.env.port || 3000;
const name = require('./src/configs/config.mongodb').db.name;

const server = app.listen(port, () =>{
    console.log(`App is running on http://localhost:${port}/${name}`)
});

// process.on('SIGINT', () => {
//     server.close( () => console.log(`Exit Server`))
// });