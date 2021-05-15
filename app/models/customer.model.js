const  sql = require('./database.js');

const QrTableDatabase = function(qr_table_database){
    this.name = qr_table_database.name;
    this.picture = qr_table_database.picture;
    this.price = qr_table_database.price;
    this.country = qr_table_database.country;
    this.name_company = qr_table_database.name_company;
    this.phone = qr_table_database.phone;
    this.place = qr_table_database.place;
    this.code = qr_table_database.code;
    this.desciption = qr_table_database.desciption;
}
QrTableDatabase.getAll = result=>{
    sql.query("SELECT * FROM qr_database.qr_table_database",(err,res)=>{
        if(err) {
            console.log("error: ", err)
            result(null,err);
            return;
        }
        console.log("qr_table_database:", res);
        result(null,res);
    });
}
///----/////// constructor user table
const User_table = function(user_table){
    this.username = user_table.username;
    this.password = user_table.password;
    this.token = user_table.token;
    this.createAt = user_table.createAt;
}

module.exports = QrTableDatabase;
