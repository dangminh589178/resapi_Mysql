const express = require('express');
const users = express.Router();
const cors  = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/user.js');
const { UUIDV4 } = require('sequelize/types');
users.use(cors());

users.post('/register',async (req,res) => {
    const today = new Date().toDateString()
    [username,password,token,expiration]=req.body;
    // const userData = {
    // username : req.body.username,
    // password : req.body.password,
    // token : req.body.token,
    // expiration : req.body.expiration,
    // createdAt : today,
    // updatedAt : today,
    // }
  User.findOne({
        where :{
            username : req.body.username    
               }
    }).then(users => {
        if(!users){ //1, It means negation. In your case condition 1 will be executed in a parent process
                    // da uoc tao ra roi nguoc lai if(user) chua tap ra
                    //Tuong tu: if(user) send fail username already 
            bcrypt.hash(req.body.password.trim(), 10,(err,hash) => {   
                    userData.password = hash
                    User.create(userData)
                    .then(users =>{
                        res.json({status    : users.username + ' REGISTER' })
                    }).catch(err =>{
                        res.send('ERROR: ',err   )
                    })
            } )
        } else{
            res.send({error: "Already existed!" })
        }

    }).catch(err =>{
        res.send('ERROR: ' + err)
    })
    
})

module.exports = users;