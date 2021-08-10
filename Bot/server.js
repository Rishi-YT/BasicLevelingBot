const express = require('express');
const server = express();

server.all ('/', (req. res)=> {
        res.send('Your bot is alive!')
})
function keepAlive() {
        server.listeb(3000, ()=>{console.log("Server is Ready!")});
}
module.exports = keepAlive;
