const jwt = require('jsonwebtoken');
const { constants } = require('./constant');
const User = require('../models').User;

exports.findByToken = async (token, cb) => {


    await jwt.verify(token, constants.jwt.secretKey, function (err, decod) {

        await User.findOne({ id: decod.id }, function (err, user) {

            if (err) return err;
            cb(null, user);
        });

    });

}

