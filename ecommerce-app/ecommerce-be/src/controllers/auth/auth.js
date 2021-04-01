const authService = require('../../services/auth/auth');
const errCode = require('../../../constants/constant');
const user = require('../../../models/user');

/** sign up user */
exports.signUp = async (req, res) => {

    let usrObj = {};

    usrObj.username = req.body.username;
    usrObj.email = req.body.email;
    usrObj.password = req.body.password;

    // auth service
    try {
        await authService.signUp(usrObj)
            .then((user) => {

                return res.status(errCode.OK).json({ user });
            })
            .catch(err => {
                return res.status(errCode.ALREADY_EXISTS).json({ err });
            })
    } catch (e) {
        return res.status(errCode.BAD_REQUEST).json({ e });
    }




}


/** sign-in user */
exports.signIn = async (req, res) => {

    let signInObj = {};

    signInObj.email = req.body.email;
    signInObj.password = req.body.password;


    try {

        await authService.signIn(signInObj)
            .then((token) => {
                return res.status(errCode.OK).json({ msg: "Signed in success", token });
            })
            .catch(err => {
                return res.status(errCode.BAD_REQUEST).json({ err });
            })
    } catch (e) {
        return res.status(errCode.SERVER_ERR).json({ e });
    }


}


/** is user logged in  */
// exports.isUserSignedIn = async (req,res) => {

//     let token = req.cookie.auth;

//     user.findByToken(token,(err,user) => {

//     })

// }