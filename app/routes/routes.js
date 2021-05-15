

module.exports = function(app){
    const controller = require('../controllers/controller.js')

    app.post('/user/signin', controller.signin );

}