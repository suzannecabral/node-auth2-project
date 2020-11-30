
const express = require('express');
const userRouter = require('./users/userRouter');

//new server
const server = express();


//my default logger function
const logger = (req,res,next) => {
  const ts = new Date();
  console.log(`-------------------`);
  console.log(`[${ts.toLocaleTimeString()}] ${req.method} ${req.url} `);
  next();
}


//use middleware
server.use(express.json());
server.use(logger);
//use routers
server.use('/api', userRouter);

//default endpoint
server.get('/', (req,res)=>{
  res.status(200).json({message:`The server is running, better go catch it`});
});


//exports
module.exports = server;