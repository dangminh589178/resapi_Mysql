const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//router
app.get('/', (req,res)=>{
    res.json({message:"Welcome to mysql"});
});

require("./app/routes/customer.routes.js")(app);

app.listen(3000,()=>{
    console.log('Running port 3000');
});

