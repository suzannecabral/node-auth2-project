const express = require('express');
const Users = require('./userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//new router
const router = express.Router();

//ENDPOINTS: localhost:9000/api/
//----------------------------------

//POST: /api/login -----------------
router.post('/login', (req, res)=>{
  
  const pendingUser = req.body;
  Users.getByName(pendingUser.username)
    .then(dbUser =>{
      if(dbUser && bcrypt.compareSync(pendingUser.password, dbUser.password)){
        //create jwt here:

        res.status(200).json({ message: `Welcome, ${dbUser.username}!` });
      }else{
        res.status(401).json({message:`Invalid credentials`});
      }
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({message:'Server error logging in'});
    })

});

//POST: /api/register --------------
router.post('/register', (req, res)=>{
  const newUser = req.body;  
  const hash = bcrypt.hashSync(newUser.password, 12);
  newUser.password = hash;

  Users.addNew(newUser)
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


//jwt create

function makeJwt(user){

  const payload = {

  }
  const options = {
    expiresIn:'1h'
  };
  return jwt.sign(payload, jwtSecret, options);
  //jwtSecret is not yet defined
  //this should be triggering the linter
  
}


//export
module.exports = router;