const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken'); 
const db = require('./models/database');
app.use(bodyParser.urlencoded({extended:true})); // is a method inbuilt in express to recognize the incoming Request Object as strings or arrays
app.use(bodyParser.json());
require('dotenv').config();
app.use(express.json());//is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
// app.use(cors(corsOptions));

require('./routes/routes.js')(app)

const Users = require('./routes/registerUser'); // load your schema Users
app.use('/users', Users);

app.get('/post', authenticateToken )

app.post('/login', (req,res) => {
   //Authenticate user
   const username = req.body.username
   const user = {name:username}
   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET )
   res.json({ accessToken : accessToken  })

})
app.routes().use(authenticateToken);
function authenticateToken(req,res,next){ //get user
    const authHeader = req.headers['authorization'] 
    const  token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)  =>{
        if(err) return sendStatus(403)
        req.user = user
        next()
    } )

}
    
require('./routes/customer.routes.js')(app); //Khong can ghi o day, co the xoa

app.listen(3000,()=>{
    console.log('Running port 3000');
});

