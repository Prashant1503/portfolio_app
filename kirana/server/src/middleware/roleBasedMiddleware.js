const User = require('../../models').User;

exports.isAdmin = async(req,res,next) => {

    const id = req.user.id;

    await User.findOne({
        where : {
            id
        },
        attributes : ['role']

    })
    .then((data) => {

        if(data.role == 'admin') {
            next();
        
        }
        else {
            return res.json({err : 'Unathorized admin access'});
        }
      
    })
    .catch((err) => {
        return res.status(500).json({err});
    })
    

}

exports.isUser = async (req,res,next) => {

    const id = req.user.id;

    await User.findOne({
        where : {
            id
        },
        attributes : ['role']

    })
    .then((data) => {

        if(data.role == 'user') {
            next();
        
        }
        else {
            return res.json({err : 'Unathorized user access'});
        }
      
    })
    .catch((err) => {
        return res.status(500).json({err});
    })
    

}