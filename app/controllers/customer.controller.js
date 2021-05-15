    
    const QrTableDatabase = require('../models/customer.model');
    
    exports.findAll = (req,res)=>{
    QrTableDatabase.getAll((err,data)=>{
        if(err)
        res.status(500).send({
            message:
                err.message || "Some error retrieve."
        });
        else res.send(data);
    });
};


