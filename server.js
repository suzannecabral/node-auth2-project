//imports
const express = require('express');
//import routers


//new server
const server = express();

//use middleware
server.use(express.json());
//use routers


//default endpoint
server.get('/', (req,res,next)=>{
  res.status(200).json({message:`The server is running, better go catch it`});
});


//exports
module.exports = server;