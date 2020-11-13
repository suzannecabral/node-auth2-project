//import modules
const express = require('express');
//import db model
const Users = require('./userModel');

//new router
const router = express.Router();

//ENDPOINTS: localhost:9000/api/
//----------------------------------

//POST: /api/login -----------------
router.post('/login', (req, res)=>{
  
  const {username, password} = req.body;

  Users.getByName(username)
    .then(user =>{
      //match user auth

      //if good, then set auth status

      //then welcome user with status message
      res.status(200).json({ message: `Welcome, ${username}!` });
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({message:'Server error logging in'});
    })

});

//POST: /api/register --------------
router.post('/register', (req, res)=>{

  Users.addNew(req.body)
    .then(user=>{
      res.status(201).json(user);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Error getting registering new user'})
    })

});


//GET: /api/userlist --------------
router.get('/userlist', (req, res)=>{
  
  Users.getAll()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Error getting user list'})
    })

});


//default endpoint------------------
router.get('/', (req, res, next)=>{
  res.status(200).json('Welcome to the user list api, please use an endpoint');
});


//export
module.exports = router;