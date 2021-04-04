const jwt = require('jsonwebtoken');
const env = require('dotenv');

env.config();

module.exports = (req,res,next) => {

    let token = req.header('x-auth-token');

    if(!token) {
        return res.status(422).send('Token is required..');
    }

    //
    try {
        jwt.verify(token,process.env.jwt_secret_key,(err,user) => {

            if(err) {
                return res.status(500).json({err});
            }
    
            req.user = user;
            next();
        })
    } catch (err) {
        return res.json({err});
    }

}