//import modules
const express = require('express');
//import db model
const Users = require('./userModel');

//new router
const router = express.Router();

//ENDPOINTS: localhost:9000/api/users
//----------------------------------



//default endpoint------------------
router.get('/', (req, res, next)=>{
  res.status(200).json('Welcome to the user list api, please use an endpoint');
});


//export
module.exports = router;