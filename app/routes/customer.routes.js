module.exports = app=>{
    const qr_table_database = require('../controllers/customer.controller.js');
    
     //create
    app.get('/qr_table_database', qr_table_database.findAll);

}   

