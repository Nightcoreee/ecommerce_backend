const app = require('./src/app.js');
const port = 3000;


const server = app.listen(port, () =>{
    console.log(`App is running on http://localhost:${port}`)
});

process.on('SIGINT', () => {
    server.close( () => console.log(`Exit Server`))
});