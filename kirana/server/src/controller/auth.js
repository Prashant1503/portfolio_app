const { signInUser, register } = require("../services/auth");

/** @function : register user */
exports.signUp = async (req, res) => {

  let userObj = { firstName, lastName, userName, email, password } = req.body;


  await register(userObj)
    .then((user) => {
      return res.status(200).json({ user });
    })
    .catch(err => {
      return res.status(500).json({ err });
    });



};

/** @function : sign-in user */
exports.signIn = async (req, res) => {

  let { userName, password } = req.body;

  await signInUser(userName, password)
    .then((user) => {
      return res.status(200).json({ user });
    })
    .catch((err) => {
      return res.status(200).json({ err });
    });




};
