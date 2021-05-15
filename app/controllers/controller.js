const User = require('../models/user.js');
const bcrypt  = require('bcrypt')
const jwt = require('jsonwebtoken');
//const { noExtendLeft } = require('sequelize/types/lib/operators');
require('dotenv').config();
exports.signin = (req,res) =>{
    console.log('Sign in');
    var pass=req.body.password.trim();
   User.findOne({
        where:{
            username: req.body.username
        }
    }).then(user =>{
        
        if(!user)
            res.send('Not found') // khong hien vi tim duoc user tu request
      //  console.log(user);
      bcrypt.hash(req.body.password.trim(),"10", (err,hash)=>{
        res.send(hash);
      })
         
        // var validpass = bcrypt.compareSync(hash,user.password)
        //      if(validpass){
        //         res.send('Login success');
        //     } else{
        //         res.send('Login failed');//this
        //     }
        // bcrypt.hash(req.body.password,10, (err,hash)=>{
        //     //res.send(hash)
        //     var inputpass = hash
            
        //     var passisvalid = bcrypt.compareSync(inputpass,user.password);
        //     if(passisvalid){
        //         res.send('Login success');
        //     } else{
        //         res.send('Login failed');//this
        //     }
           
        // })
        // var inputpassword;
        //  bcrypt.hash(req.body.password, 10 , (err,hash) =>{
        //      inputpassword = hash   
        // })
        // var passivalid = bcrypt.compareSync(inputpassword, user.password);
        // if(!passivalid){
        //     return res.status(401).send({auth: false, accessToken: null, reason: "Invalid passs"});
        // }
        // var token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{
        //         expiresIn : 86400 // expires in 24 hours    

        // });

        // res.status(200).send({ auth: true, accessToken: token });

    }).catch(err =>{
        res.status(500).send('Error ->' + err);
    });

}
