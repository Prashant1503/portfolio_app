const User = require('../../../models').User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { constants } = require('../../../constants/constant');

exports.signUp = (usrObj) => {

    let { username, email, password } = usrObj;

    return new Promise(async (resolve, reject) => {

        let user = await User.findOne({ where: { email } });

        if (user) {
            return reject("User already exists");
        }

        // creating new user
        await User.findOrCreate({
            where: {
                username,
                email,
                password
            }
        })
            .then((user) => {
                resolve(user);
            })
            .catch((err) => {
                reject(err);
            })


    })
}

exports.signIn = (signInObj) => {

    let { email, password } = signInObj;

    return new Promise(async (resolve, reject) => {


        let user = await User.findOne({ where: { email } });

        if (!user) {
            reject("User doesn\t exists");
        }

        //comparing password
        try {
            let isValid = await bcrypt.compareSync(password, user.password);

            if (!isValid) {
                reject("Password is invalid");
            }

            // generating token
            await jwt.sign(
                { id: user.id },
                constants.jwt.secretKey,
                { expiresIn: constants.jwt.expirationTime }, ((err, token) => {

                    if (err) reject(err);
                    resolve(token);
                }));


        } catch (e) {
            reject(e);
        }

    });


}